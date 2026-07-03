---
title: "How the Local HTTP API Works"
description: "Understand the Local HTTP API address, port configuration, access-code protection, and why the CLI is only an optional client."
---

<!-- markdownlint-disable MD013 -->

## Think in Layers: Start with Two Layers

GranoFlow desktop automation has two layers:

- **Local HTTP API**: provided by the running app. It owns public endpoints, permission checks, and app data reads and writes.
- **`granoflow` CLI**: a separately downloaded command-line client. It turns command arguments into HTTP requests, or handles a small set of local file tasks that do not need the app.

This means the CLI does not own a separate database and does not bypass the app to write data. If the app is not running, the interface is off, or permission checks fail, the related CLI commands fail too.

## Think in the Local Address: What It Means

The Local HTTP API listens on the loopback address:

```text
http://127.0.0.1:<port>
```

- The host is fixed to `127.0.0.1`
- The current default port is `56789`
- The port can be changed in app settings, within `1024..65535`
- The API configuration is a local listener setting, not a cloud API service
- The settings page shows the current local address and offers helper actions such as copying the root address or opening `/v1/health`

If the interface is off, copy and open actions are disabled. Enable the interface first, then check again.

## How the CLI Finds the API

The CLI resolves the API address in this order:

1. `--api-base-url`
2. `GRANOFLOW_API_BASE_URL`
3. `api_base_url` in the CLI config file
4. Default value `http://127.0.0.1:56789`

Use this command to see the current source:

```bash
granoflow config --json
```

## API Endpoint Examples

```bash
# Health check
curl http://127.0.0.1:56789/v1/health

# Version information
curl http://127.0.0.1:56789/v1/version

# Equivalent CLI calls
granoflow health --json
granoflow api version --json
```

## Think in Permissions: API Gate Order

Protected Local HTTP endpoints pass through fixed gates:

1. Local HTTP API master switch
2. Origin check
3. App Lock
4. nonce
5. access-code protection
6. endpoint-level permission

Discovery endpoints such as `/v1/health` and `/v1/version` are good reachability checks. Endpoints that read or modify app data usually require more gates.

## Official Documentation Debugging and External Origins

`granoflow.com` documentation pages are no longer trusted for business API access by default. To debug the local API from a documentation page, manually enable official documentation debugging in app settings and use the generated one-hour access code.

"Allow any device origin" is an advanced origin setting. Before enabling it, access-code protection must be on and at least one access code must remain enabled.

## Reference: Rules and Boundaries

- The Local HTTP API is not automatically exposed to the LAN or public internet.
- If mobile platforms expose a temporary local interface, it is a foreground session capability, not an always-on background service.
- CLI `backup encrypt/decrypt` is offline file conversion and does not need the Local HTTP API.
- `scripts/anz` is the repository engineering CLI and is not a user automation API.
