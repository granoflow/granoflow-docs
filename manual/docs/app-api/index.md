---
title: "App 接口"
description: "了解怎样开启本机接口服务，并让 AI 工具、浏览器或官方文档页面连接当前设备。"
---

<!-- markdownlint-disable MD013 -->

App 接口是 Granoflow 在当前设备上提供的 HTTP 服务。桌面端通常让同一台电脑上的 Codex、OpenClaw、Hermes、浏览器页面或脚本连接 Granoflow；手机端更常见的场景，是让同一 Wi-Fi 下的电脑、浏览器或 AI 工具连接这台手机。

## 先看这个导航

- [连接 Codex、OpenClaw、Hermes](/manual/app-api/connect-ai-tools/)
- [本机地址与浏览器调试](/manual/app-api/local-address-browser-debug/)
- [手机端局域网连接](/manual/app-api/mobile-lan-connection/)
- [官方文档调试](/manual/app-api/official-docs-debug/)
- [安全设置与访问码](/manual/app-api/security-access-code/)

## 接口合同

OpenAPI 合同来源是 `granoflow-docs/manual/docs/app-api/granoflow-local-http-api.openapi.yaml`。公开 Swagger 页面是 [https://granoflow.com/api/](https://granoflow.com/api/)，它用于查看合同和调试当前设备，不是 Granoflow Core API，也不是当前设备的本机地址。

## 开启接口服务

在 App 中进入“本机接口服务”，打开“开启接口服务”。开启后，页面会显示当前设备可用的连接地址，并提供复制地址、在浏览器打开、官方文档调试和进阶安全设置。

这个开关只影响当前设备。它不会把数据上传到 Granoflow 服务器，也不会让其他设备自动获得访问权限。第三方工具能否连接，还取决于它们使用的地址、访问码和来源设置。

## 什么时候使用

如果你只是想让 AI 工具帮你理解连接步骤，点击“查看连接方式”。它会复用顶部的 AI 助手，并要求 AI 先阅读这一组 App 接口手册。

如果你要在浏览器或脚本里检查接口是否可用，使用页面显示的地址。桌面端默认地址通常是 `http://127.0.0.1:<端口>`，只适合同一台电脑访问。手机端应使用手机的局域网地址，例如 `http://192.168.1.23:<端口>`。详细规则见 [手机端局域网连接](/manual/app-api/mobile-lan-connection/)。

如果你要从 `granoflow.com` 的官方文档页面调试当前设备，使用“官方文档调试”。调试开启后只在限定时间内有效，并需要临时访问码。

## 不要把 API 地址当成主要操作

`https://granoflow.com/api/` 是公开文档和 Swagger 页面，不是当前设备的本机地址。通常不需要手动修改它，也不需要优先复制它给 AI 工具。

AI 工具连接当前设备时，应先根据本页面关联的手册理解连接方式，再使用 App 显示的地址、官方调试入口或访问码。桌面端通常复制 `127.0.0.1` 地址；手机端通常复制局域网地址给同一 Wi-Fi 下的电脑端工具。

## 平台差异

| 平台 | 应复制的地址 | 适合场景 | 需要注意 |
| --- | --- | --- | --- |
| 桌面端 | `http://127.0.0.1:<端口>` | 同一台电脑上的 AI 工具、浏览器或脚本连接 Granoflow | 这个地址发给另一台设备没有意义 |
| Android | 手机的局域网地址，例如 `http://192.168.1.23:<端口>` | 同一 Wi-Fi 下的电脑或浏览器连接这台 Android 设备 | 见 [手机端局域网连接](/manual/app-api/mobile-lan-connection/) |
| iPhone / iPad | 手机或平板的局域网地址，例如 `http://192.168.1.23:<端口>` | 同一 Wi-Fi 下的电脑或浏览器临时连接这台 iPhone / iPad | 见 [手机端局域网连接](/manual/app-api/mobile-lan-connection/) |

## 下一步

- 要连接 AI 工具，阅读 [连接 Codex、OpenClaw、Hermes](/manual/app-api/connect-ai-tools/)。
- 要复制本机地址或打开浏览器调试，阅读 [本机地址与浏览器调试](/manual/app-api/local-address-browser-debug/)。
- 要从电脑连接手机，阅读 [手机端局域网连接](/manual/app-api/mobile-lan-connection/)。
- 要从官方文档页面调试，阅读 [官方文档调试](/manual/app-api/official-docs-debug/)。
- 要理解访问码和设备来源，阅读 [安全设置与访问码](/manual/app-api/security-access-code/)。
