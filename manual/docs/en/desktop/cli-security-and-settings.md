---
title: "CLI security and key boundaries"
description: "Understand the local HTTP API access switch, access code protection, official docs debugging, App Lock, redaction, and the boundaries between different keys."
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

<!-- markdownlint-disable MD013 -->

## Think in permissions: API gates first

Protected local HTTP endpoints follow a fixed gate order:

1. Local HTTP API master switch (when off, all endpoints return 403)
2. Origin checks (local pages are allowed by default; official docs debugging must be opened explicitly)
3. App lock
4. nonce
5. Access code protection (only required when enabled)
6. Endpoint-level permissions (some commands require higher privileges)

Read-only endpoints such as `/v1/health` and `/v1/status` are typically not subject to gate restrictions.
`granoflow help`, `granoflow version`, and `granoflow open` are discovery and wake-up entries and do not require an access code.

## Access code protection

When enabled, protected endpoints that read or modify app data require an access code.

Pass the access code via:

- **HTTP request**: `Authorization: Bearer <value>` header
- **CLI command**: `--token <value>` parameter
- **Environment variable**: `GRANOFLOW_CLI_TOKEN`

“Allow any device origin” requires access code protection and at least one enabled access code. Without that protection, the switch cannot be enabled; if access code protection is turned off or the last enabled access code is removed, it is turned off automatically.

## Official docs debugging

`granoflow.com` documentation pages do not have business API access by default. To debug the local API from a docs page, open “Official docs debugging” manually in the app settings page.

Each start creates a temporary access code that expires after 1 hour. Closing debugging, expiration, restarting the app, or starting a new session invalidates the old code. Send the temporary code through the `Authorization: Bearer <temporary-code>` header, not in a URL or long-term storage.

## Local HTTP API switch

When the local HTTP API is off, all protected endpoints are rejected (returns `cli_disabled`), not silently ignored.

When the switch is off, the CLI can still execute local commands that do not depend on the API (`help`, `version`, `backup-package`, `clean`).

## App Lock and nonce

Even if access code protection is off, the preceding gates still apply. If origin checks, App Lock, or nonce validation fail, the request is rejected first.

## Think in redaction as assistance

Redaction helps reduce the risk of exposing sensitive information in external AI input. It is an aid, not a substitute for encryption, token verification, or a permissions system.

## Think in secrets separately: three types of keys, do not mix

- **Access code**: authorization credential for the local HTTP API (passed via Authorization header or CLI `--token`)
- **Backup secret**: secret for backup package encryption/restore (typically provided via a file)
- **Cloud sync key**: recovery key for end-to-end encrypted cloud sync data

These three have different purposes and cannot replace each other.

## CLI temporary asset cleanup

`granoflow clean --json` is a native CLI local cleanup command for cleaning the CLI temporary asset directory:

```bash
granoflow clean --json
granoflow clean --older-than 30m --json
granoflow clean --all --json
```

`--all` cannot be used with `--older-than`.

## Environment variable reference

| Variable | Purpose |
| --- | --- |
| `GRANOFLOW_CLI_LANG` | CLI output language |
| `GRANOFLOW_CLI_TOKEN` | Access code (equivalent to Authorization header) |
| `GRANOFLOW_CLI_IPC_PORT` | Local HTTP API port (equivalent to bridge port) |
