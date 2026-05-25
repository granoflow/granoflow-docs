---
title: "CLI troubleshooting"
description: "Resolve command not found, app_not_reachable, port conflicts, token failures, and JSON input errors."
translationSource: zh-CN
translationReview:
  - ux-writing
  - plan-eng-review
---

<!-- markdownlint-disable MD013 -->

## `command not found: granoflow`

Go to the app Command Line Tool settings page and install or repair CLI, then reopen terminal.

## `app_not_reachable`

This means the command needs the running app command channel, but the app is unreachable.

Check in order:

1. app is running
2. local CLI access is enabled
3. bridge port is consistent

```bash
granoflow bridge config show --json
```

## Port conflict or invalid port

If the port is occupied by another process, set a new port and restart app:

```bash
granoflow bridge port set 52001 --json
```

Port changes require app restart.

## Token verification failure

Confirm:

- Token Verification is enabled
- `--token` or `GRANOFLOW_CLI_TOKEN` is correct
- token is applied to protected commands

## Local access disabled (`cli_disabled`)

Enable local CLI access in app settings, then retry.

## App lock / nonce rejected

Unlock in app first, then retry command.

## Backup secret error

For `backup restore` or `backup-package`, make sure secret file exists, is readable, and not empty.

## JSON input error

If `--input` fails, verify:

- file exists
- JSON is valid
- top-level value is a JSON object
