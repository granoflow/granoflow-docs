---
title: "How CLI connects to the app"
description: "Understand the boundary between native CLI and the running app command channel, plus loopback bridge and port rules."
translationSource: zh-CN
translationReview:
  - ux-writing
  - plan-eng-review
---

## Think in boundaries

- **Native CLI commands**: `help`, `version`, `lang`, `bridge`, `clean`, `backup-package`
- **Commands that require the running app command channel**: `display`, `status`, `sync`, `open <route>`, business objects, `backup`, and real-data `ai-agent` commands

The CLI does not bypass the app to access production data directly.

## Think in the running app

Business object and backup commands are user-data operations. CLI handles parsing and forwarding; the app performs the actual read/write.

If the app is not running or unreachable, commands return `app_not_reachable`.

## Think in the local port

CLI and app communicate through loopback: `127.0.0.1:<port>`.

- host is fixed to `127.0.0.1`
- port is configurable in `1024..65535`
- bridge config is local port config, not a remote API service

Show config:

```bash
granoflow bridge config show --json
```

Set port:

```bash
granoflow bridge port set 52001 --json
```

Repair config:

```bash
granoflow bridge config repair --reset --json
```

## Important after changing port

After `bridge port set`, **restart the app** for changes to take effect.

`bridge-config.json` stores non-sensitive fields (schema/protocol/host/port). It does not store token, nonce, app lock state, account, or cross-device credentials.