---
title: "JSON output, environment variables, and direct HTTP calls"
description: "Understand --json, --input <file|->, stdin, HTTP endpoints, and environment variables for script and AI automation."
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

<!-- markdownlint-disable MD013 -->

## `--json` output contract

The CLI `--json` mode returns structured results only, suitable for script parsing.

Recommendations:

- Always add `--json` in automation flows
- Do not rely on human-readable text for logic decisions

## `--input <file|->`

Business object commands support structured input:

- `--input task.json`: read JSON from a file
- `--input -`: read JSON from stdin

Example:

```bash
cat payload.json | granoflow task create --input - --json
```

## Direct HTTP calls

If you do not want to depend on the CLI, you can call the local HTTP API directly:

```bash
# Check if the API is available
curl -s http://127.0.0.1:42667/v1/health

# Read system status
curl -s http://127.0.0.1:42667/v1/status

# Write operation (requires API token)
curl -s -X POST http://127.0.0.1:42667/v1/task \
  -H "Authorization: Bearer <token>" \
  -d '{"title": "Example task"}'
```

The local HTTP API listens on `http://127.0.0.1:42667` by default.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `GRANOFLOW_CLI_LANG` | CLI output language |
| `GRANOFLOW_CLI_TOKEN` | API token (equivalent to CLI `--token`) |
| `GRANOFLOW_CLI_IPC_PORT` | Local HTTP API port |
| `GRANOFLOW_API_URL` | Local HTTP API base URL (e.g. `http://127.0.0.1:52001`) |

## Stable error handling

Common stable errors:

- `app_not_reachable`
- `cli_disabled`
- `invalid_argument`
- `unknown_command`

Automation scripts should branch on error codes, not on text strings.

## Scripting best practices

- Start with `granoflow version --json` or `curl -s http://127.0.0.1:42667/v1/status`
- For commands that require the app, check reachability first
- Run `backup create` before write operations
