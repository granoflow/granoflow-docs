---
title: "How the local HTTP API works"
description: "Understand the local HTTP API listen address, port configuration, access code protection, and app protection gates."
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

<!-- markdownlint-disable MD013 -->

## Think in boundaries: two layers first

- **Handled directly by the local HTTP API**: `/v1/health`, `/v1/status`, command parameter validation, JSON format checking
- **Requires the app to execute business logic**: `/v1/task`, `/v1/project`, `/v1/backup`, `/v1/ai-agent` and other data operations

The local HTTP API does not bypass the app to access production data directly. All data operations are ultimately executed by the app.

If the app is not running, the API returns `app_not_reachable`.

## Think in the local address: what the local HTTP API is

The local HTTP API listens on the loopback address: `http://127.0.0.1:<port>`.

- host is fixed to `127.0.0.1`
- default port is `42667`
- the port can be changed on the settings page, range `1024..65535`
- the API configuration is a local listen configuration, not a remote API service
- The app's Command Line Tool settings page shows the current local address. You can copy the root address, or open `/v1/health` in the default browser to check whether the local HTTP interface is reachable. When the local HTTP interface is off, both actions are disabled until you enable it.
- `granoflow.com` documentation pages are no longer trusted business API origins by default; for debugging, open official docs debugging in settings and use the 1-hour access code.
- “Allow any device origin” is an advanced origin setting and requires access code protection with at least one enabled access code.

## API endpoint examples

```bash
# Health check
curl http://127.0.0.1:42667/v1/health

# System status
curl http://127.0.0.1:42667/v1/status

# View API configuration
granoflow bridge config show --json
```

## Important after changing port

After `bridge port set`, **restart the app** for changes to take effect. If you change the port from app settings while the local HTTP interface is off, the new port applies next time you enable the local HTTP interface.

The local HTTP configuration stores only non-sensitive fields (schema, protocol, host, port). It does not store access codes, nonce, app lock state, account, or cross-device credentials.

## Think in permissions: API gate order

Protected local HTTP endpoints follow a fixed gate order:

1. Local HTTP API master switch (when off, all endpoints return 403)
2. Origin checks (local pages are allowed by default; official docs debugging must be opened temporarily)
3. App lock (app must be unlocked first)
4. nonce
5. Access code protection (requires an access code when enabled)

Read-only endpoints such as `/v1/health` and `/v1/status` are typically not subject to gate restrictions.
