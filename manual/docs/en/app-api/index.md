---
title: "App API"
description: "Learn how to enable the local interface service and let AI tools, browsers, or official documentation pages connect to the current device."
translationSource: zh-CN
translationReview:
  - deepseek-flash
  - deepseek-pro
  - manual-multilingual-translation
---

<!-- markdownlint-disable MD013 -->

The App API is the HTTP service provided by GranoFlow on the current device. On desktop, it's typically used by Codex, OpenClaw, Hermes, browser pages, or scripts running on the same computer to connect to GranoFlow. On mobile, a more common scenario is connecting from a computer, browser, or AI tool on the same Wi-Fi to the phone.

## Start with This Navigation

- [Connecting Codex, OpenClaw, Hermes](/manual/en/app-api/connect-ai-tools/)
- [Local Address and Browser Debugging](/manual/en/app-api/local-address-browser-debug/)
- [Mobile LAN Connection](/manual/en/app-api/mobile-lan-connection/)
- [Official Documentation Debugging](/manual/en/app-api/official-docs-debug/)
- [Security Settings and Access Code](/manual/en/app-api/security-access-code/)

## API Contract

The OpenAPI contract source is `granoflow-docs/manual/docs/app-api/granoflow-local-http-api.openapi.yaml`. The public Swagger page is at [https://granoflow.com/api/](https://granoflow.com/api/). It is for viewing the contract and debugging the current device, not the GranoFlow Core API, nor the local address of the current device.

## Enabling the Interface Service

In the App, go to "Local Interface Service" and turn on "Enable Interface Service." Once enabled, the page shows the available connection addresses for the current device, with options to copy the address, open in a browser, perform official documentation debugging, and access advanced security settings.

<!-- manual-screenshot:id=app-api-local-interface-service -->
![App API interface screenshot](../../../screenshots/en/app-api-local-interface-service.png)

This switch only affects the current device. It does not upload data to the GranoFlow server, nor does it automatically grant other devices access. Whether third-party tools can connect also depends on the address they use, the access code, and the source settings.

The desktop page shows a recent connection summary and allows entering the "Connection Logs" to view access IP, endpoint, read/write type, status code, and failure records. Connection logs are only saved on the current device and not synced to other devices.

Connection logs are for troubleshooting, not daily use. You can filter by access IP, read/write type, endpoint, or "only failures." Each record shows method, endpoint, time, source IP, read/write type, duration, and status code. When troubleshooting CLI or browser debugging, check here first to see if the request actually arrived.

## When to Use

If you just want an AI tool to help you understand the connection steps, click "View Connection Method." It reuses the top AI assistant and asks the AI to read this set of App API manuals first.

If you want to check if the interface is available in a browser or script, use the address displayed on the page. The desktop default address is usually `http://127.0.0.1:<port>`, which is only suitable for access from the same computer. For mobile, use the phone's LAN address, e.g., `http://192.168.1.23:<port>`. Detailed rules are in [Mobile LAN Connection](/manual/en/app-api/mobile-lan-connection/).

If you want to debug the current device from the official documentation page on `granoflow.com`, use "Official Documentation Debugging." Debugging is only valid for a limited time and requires a temporary access code.

## Don't Treat the API Address as the Primary Operation

`https://granoflow.com/api/` is a public documentation and Swagger page, not the local address of the current device. You usually don't need to modify it manually or prioritize copying it for AI tools.

When AI tools connect to the current device, first understand the connection method from the manuals linked on this page, then use the address shown in the App, the official debugging entry, or the access code. Desktop users typically copy the `127.0.0.1` address; mobile users typically copy the LAN address for tools on the same Wi-Fi.

## Platform Differences

| Platform | Address to Copy | Suitable Scenario | Note |
| --- | --- | --- | --- |
| Desktop | `http://127.0.0.1:<port>` | AI tools, browsers, or scripts on the same computer connecting to GranoFlow | This address is meaningless if sent to another device |
| Android | Phone's LAN address, e.g., `http://192.168.1.23:<port>` | Computer or browser on the same Wi-Fi connecting to this Android device | See [Mobile LAN Connection](/manual/en/app-api/mobile-lan-connection/) |
| iPhone / iPad | Phone or tablet's LAN address, e.g., `http://192.168.1.23:<port>` | Computer or browser on the same Wi-Fi temporarily connecting to this iPhone/iPad | See [Mobile LAN Connection](/manual/en/app-api/mobile-lan-connection/) |

## Next Steps

- To connect AI tools, read [Connecting Codex, OpenClaw, Hermes](/manual/en/app-api/connect-ai-tools/).
- To copy the local address or open browser debugging, read [Local Address and Browser Debugging](/manual/en/app-api/local-address-browser-debug/).
- To connect from a computer to a phone, read [Mobile LAN Connection](/manual/en/app-api/mobile-lan-connection/).
- To debug from an official documentation page, read [Official Documentation Debugging](/manual/en/app-api/official-docs-debug/).
- To understand access codes and device sources, read [Security Settings and Access Code](/manual/en/app-api/security-access-code/).
