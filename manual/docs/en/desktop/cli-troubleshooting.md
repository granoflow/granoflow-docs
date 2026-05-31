---
title: "Troubleshooting"
description: "Resolve command not found, app_not_reachable, port conflicts, token failures, and JSON input errors."
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

<!-- markdownlint-disable MD013 -->

## `command not found: granoflow`

Go to the app's Command Line Tool settings page and reinstall or repair the CLI, then reopen the terminal and retry.

## `app_not_reachable`

This means the command needs the running app's local HTTP API, but it is currently unreachable.

Check in order:

1. Is the app running?
2. Is the local HTTP API enabled (Settings → Command Line Tool → toggle)?
3. Is the local HTTP port consistent?

```bash
# Primary diagnostic: directly check if the API is reachable
curl -s http://127.0.0.1:42667/v1/health

# View current port configuration
granoflow bridge config show --json
```

## Port conflict or invalid port

If the port is occupied by another process, change the port first, then restart the app:

```bash
granoflow bridge port set 52001 --json
```

Port changes require an app restart.

## Token verification failure

Confirm the following:

- Is Token Verification enabled?
- Is `--token`, `GRANOFLOW_CLI_TOKEN`, or the `Authorization` header correct?
- Is the token passed to a protected endpoint?

## Local HTTP API disabled (`cli_disabled`)

Enable the local HTTP interface in the app settings page, then retry.

## App Lock / nonce rejected

Unlock in the app first, then retry the command.

## Backup secret error

When `backup restore` or `backup-package` uses a secret file, ensure the file exists, is readable, has correct content, and is not empty.

## JSON input error

When `--input` fails, check:

- Does the file exist?
- Is the JSON valid?
- Is the top-level value a JSON object?
