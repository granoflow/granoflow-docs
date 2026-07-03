---
title: "Troubleshooting"
description: "Handle command not found, unreachable API, wrong ports, token failures, and JSON input errors."
---

## `command not found: granoflow`

This usually means you installed only the desktop app, have not installed the CLI separately, or the CLI directory is not in PATH.

Check in this order:

1. Download the CLI package for your platform from the website or release page.
2. Extract it and place the executable in your own command directory.
3. Confirm that directory is in PATH.
4. Open a new terminal and run `granoflow help`.

The desktop app does not install, repair, or uninstall the CLI, and it does not create a `/usr/local/bin/granoflow` symlink.

## API Unreachable

If `granoflow health --json` or a business command cannot connect to the API, check:

1. Whether the GranoFlow desktop app is running
2. Whether the Local HTTP API is enabled in settings
3. Whether the API address used by the CLI matches the settings page
4. Whether another process is using the port

```bash
curl -s http://127.0.0.1:56789/v1/health
granoflow config --json
```

If you changed the port, replace `56789` with the current port.

## Wrong Port

The CLI no longer changes the app port through `bridge port set`. Change the Local HTTP API port in app settings, then point the CLI to the same base URL:

```bash
granoflow --api-base-url http://127.0.0.1:52001 health --json
```

You can also set this through `GRANOFLOW_API_BASE_URL` or the CLI config file.

## Token Validation Failed

Confirm:

- Whether access-code protection is enabled
- Whether `--token`, `GRANOFLOW_API_TOKEN`, or the `Authorization` header is correct
- Whether the token was sent to a protected endpoint
- Whether an official-documentation temporary access code has expired

## Local HTTP API Off

Enable the Local HTTP API in app settings and try again. Discovery or offline file commands may still run while the interface is off, but commands that read or modify app data will not bypass the app and write the database directly.

## App Lock / nonce Rejected

Unlock the app, then retry. Scripts should stop the current write flow on these errors instead of retrying indefinitely.

## Backup Secret Error

When `backup decrypt/encrypt` uses a secret file or secret environment variable, confirm:

- The file exists and is readable
- The file content is not empty
- `--secret-file` and `--secret-env` are not used together
- The input package is actually the matching encrypted or plaintext backup package

## JSON Input Error

When `--input` fails, check:

- Whether the file exists
- Whether the JSON is valid
- Whether the top level is a JSON object
- Whether stdin mode uses `--input -`

## Public Capability Mismatch

If old documentation, scripts, or tutorials mention in-app CLI install, `bridge port set`, `backup create`, or `backup restore`, prefer the current manual, OpenAPI, and `granoflow help --json`. Those old entries should no longer be treated as current public commitments.
