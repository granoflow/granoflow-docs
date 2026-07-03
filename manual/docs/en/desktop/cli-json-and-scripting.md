---
title: "JSON Output, Environment Variables, and Direct HTTP Calls"
description: "Understand --json, --input <file|->, stdin, HTTP endpoints, and environment variables for scripts and AI automation."
---

## `--json` Output Contract

CLI `--json` mode outputs structured results only, which makes it suitable for scripts.

Recommendations:

- Add `--json` throughout automation flows
- Do not use human-readable text for logic
- Branch on envelope status and error codes

## `--input <file|->`

Write commands pass structured data through JSON input:

- `--input task.json`: read JSON from a file
- `--input -`: read JSON from stdin

Example:

```bash
cat payload.json | granoflow task create --input - --dry-run --json
```

Dry-run first, check the request preview, then run the real write.

## Direct HTTP Calls

If you do not depend on the CLI, call the Local HTTP API directly:

```bash
# Check API availability
curl -s http://127.0.0.1:56789/v1/health

# Read version
curl -s http://127.0.0.1:56789/v1/version

# Write operation, usually with an API token
curl -s -X POST http://127.0.0.1:56789/v1/tasks   -H "Authorization: Bearer <token>"   -d '{"title": "Example task"}'
```

The Local HTTP API listens on `http://127.0.0.1:56789` by default. If the app settings page shows a different port, use that port.

## Environment Variables

| Variable | Purpose |
| --- | --- |
| `GRANOFLOW_API_BASE_URL` | Local HTTP API base URL |
| `GRANOFLOW_API_TOKEN` | API access code |
| `GRANOFLOW_CONFIG` | CLI config-file path |

## Stable Error Handling

Common error categories include:

- Config error: invalid API address or config file
- Auth error: missing, wrong, or expired access code
- Network or reachability error: app not running, local interface off, or port mismatch
- API business error: business-rule error returned by the app
- API gap: the requested capability is not provided by the current API

Automation scripts should branch on error codes rather than a piece of text.

## Script Practices

- Start with `granoflow health --json` or `curl -s http://127.0.0.1:56789/v1/health`
- Add `--dry-run` before write operations
- Read tokens only from environment variables, config files, or secure credential storage; do not commit them to the repository
- Do not call `scripts/anz` for user-data automation; it is an engineering script entrypoint
- Do not treat offline `backup encrypt/decrypt` as app backup creation or restore
