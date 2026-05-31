---
title: "Local HTTP API"
description: "GranoFlow provides a local HTTP API on desktop, supporting the command line tool, JSON input, and direct curl calls."
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

<!-- markdownlint-disable MD013 -->

`granoflow` for desktop provides a local HTTP API, listening on `http://127.0.0.1:<port>`.

You can interact with the API through the **command line tool** (`granoflow` CLI), **curl**, or **scripts**.

The local HTTP API binds only to `127.0.0.1` — it is not exposed to the LAN or internet.

## Start with this map

- To understand how it works first: read [How the local HTTP API works](/manual/en/desktop/cli-how-it-works/)
- To check token, local access, App Lock, and key boundaries: read [Security settings and key boundaries](/manual/en/desktop/cli-security-and-settings/)
- For the complete CLI command and HTTP endpoint reference: read [Command reference and HTTP mapping](/manual/en/desktop/cli-command-reference/)
- For real-world workflows: read [Workflows](/manual/en/desktop/cli-workflows/)
- For scripts and AI assistants: read [JSON, environment variables, and direct HTTP calls](/manual/en/desktop/cli-json-and-scripting/)
- If you hit an error: read [Troubleshooting](/manual/en/desktop/cli-troubleshooting/)

## Install and first checks

On macOS, move GranoFlow to **Applications** first, then open the app's Command Line Tool settings page and tap **Install Command Line Tool** or **Repair Command Line Tool**. On first install, macOS may ask you to allow the **Granoflow background item** under **System Settings → General → Login Items**; after approval, tap install again and the app will create the `/usr/local/bin/granoflow` symlink. Subsequent repairs or reinstalls typically need no extra approval. macOS 13 or later is required.

After installation, confirm the API is reachable:

```bash
curl -s http://127.0.0.1:42667/v1/health
granoflow version --json
granoflow bridge config show --json
```

## Common misconceptions

- `granoflow lang` only changes CLI output language, not the app language.
- `granoflow backup-package` is a native CLI local tool and does not require a running app.
- Business object, backup, and real-data AI commands all depend on the running local HTTP API.

## Next

It is recommended to read [How the local HTTP API works](/manual/en/desktop/cli-how-it-works/) first, then the command reference.
