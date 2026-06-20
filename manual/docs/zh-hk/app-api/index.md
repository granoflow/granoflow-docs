---
title: "App 接口"
description: "了解怎樣開啟本機接口服務，並讓 AI 工具、瀏覽器或官方文檔頁面連接當前設備。"
translationSource: zh-CN
translationReview:
  - deepseek-flash
  - deepseek-pro
  - manual-multilingual-translation
---

<!-- markdownlint-disable MD013 -->

App 接口是 GranoFlow 在當前設備上提供的 HTTP 服務。桌面端通常讓同一台電腦上的 Codex、OpenClaw、Hermes、瀏覽器頁面或腳本連接 GranoFlow；手機端更常見的場景，是讓同一 Wi-Fi 下的電腦、瀏覽器或 AI 工具連接這台手機。

## 先看這個導航

- [連接 Codex、OpenClaw、Hermes](/manual/zh-hk/app-api/connect-ai-tools/)
- [本機地址與瀏覽器調試](/manual/zh-hk/app-api/local-address-browser-debug/)
- [手機端局域網連接](/manual/zh-hk/app-api/mobile-lan-connection/)
- [官方文檔調試](/manual/zh-hk/app-api/official-docs-debug/)
- [安全設置與訪問碼](/manual/zh-hk/app-api/security-access-code/)

## 接口合同

OpenAPI 合同來源是 `granoflow-docs/manual/docs/app-api/granoflow-local-http-api.openapi.yaml`。公開 Swagger 頁面是 [https://granoflow.com/api/](https://granoflow.com/api/)，它用於查看合同和調試當前設備，不是 GranoFlow Core API，也不是當前設備的本機地址。

## 開啟接口服務

在 App 中進入「本機接口服務」，打開「開啟接口服務」。開啟後，頁面會顯示當前設備可用的連接地址，並提供複製地址、在瀏覽器打開、官方文檔調試和進階安全設置。

<!-- manual-screenshot:id=app-api-local-interface-service -->
![App 接口 界面截圖](../../../screenshots/zh-hk/app-api-local-interface-service.png)

這個開關只影響當前設備。它不會把數據上傳到 GranoFlow 服務器，也不會讓其他設備自動獲得訪問權限。第三方工具能否連接，還取決於它們使用的地址、訪問碼和來源設置。

桌面端頁面會顯示最近連接摘要，並可進入「連接日誌」查看訪問 IP、端點、讀寫類型、狀態碼和失敗記錄。連接日誌只保存在當前設備，不會同步到其他設備。

連接日誌面向排障，而不是日常使用。你可以按訪問 IP、讀寫類型、端點或「僅失敗」過濾；單條記錄會顯示方法、端點、時間、來源 IP、讀寫類型、耗時和狀態碼。需要排查 CLI 或瀏覽器調試時，先看這裏是否真的收到了請求。

## 什麼時候使用

如果你只是想讓 AI 工具幫你理解連接步驟，點擊「查看連接方式」。它會複用頂部的 AI 助手，並要求 AI 先閱讀這一組 App 接口手冊。

如果你要在瀏覽器或腳本裏檢查接口是否可用，使用頁面顯示的地址。桌面端默認地址通常是 `http://127.0.0.1:<端口>`，只適合同一台電腦訪問。手機端應使用手機的局域網地址，例如 `http://192.168.1.23:<端口>`。詳細規則見[手機端局域網連接](/manual/zh-hk/app-api/mobile-lan-connection/)。

如果你要從 `granoflow.com` 的官方文檔頁面調試當前設備，使用「官方文檔調試」。調試開啟後只在限定時間內有效，並需要臨時訪問碼。

## 不要把 API 地址當成主要操作

`https://granoflow.com/api/` 是公開文檔和 Swagger 頁面，不是當前設備的本機地址。通常不需要手動修改它，也不需要優先複製它給 AI 工具。

AI 工具連接當前設備時，應先根據本頁面關聯的手冊理解連接方式，再使用 App 顯示的地址、官方調試入口或訪問碼。桌面端通常複製 `127.0.0.1` 地址；手機端通常複製局域網地址給同一 Wi-Fi 下的電腦端工具。

## 平台差異

| 平台 | 應複製的地址 | 適合場景 | 需要注意 |
| --- | --- | --- | --- |
| 桌面端 | `http://127.0.0.1:<端口>` | 同一台電腦上的 AI 工具、瀏覽器或腳本連接 GranoFlow | 這個地址發給另一台設備沒有意義 |
| Android | 手機的局域網地址，例如 `http://192.168.1.23:<端口>` | 同一 Wi-Fi 下的電腦或瀏覽器連接這台 Android 設備 | 見[手機端局域網連接](/manual/zh-hk/app-api/mobile-lan-connection/) |
| iPhone / iPad | 手機或平板的局域網地址，例如 `http://192.168.1.23:<端口>` | 同一 Wi-Fi 下的電腦或瀏覽器臨時連接這台 iPhone / iPad | 見[手機端局域網連接](/manual/zh-hk/app-api/mobile-lan-connection/) |

## 下一步

- 要連接 AI 工具，閱讀[連接 Codex、OpenClaw、Hermes](/manual/zh-hk/app-api/connect-ai-tools/)。
- 要複製本機地址或打開瀏覽器調試，閱讀[本機地址與瀏覽器調試](/manual/zh-hk/app-api/local-address-browser-debug/)。
- 要從電腦連接手機，閱讀[手機端局域網連接](/manual/zh-hk/app-api/mobile-lan-connection/)。
- 要從官方文檔頁面調試，閱讀[官方文檔調試](/manual/zh-hk/app-api/official-docs-debug/)。
- 要理解訪問碼和設備來源，閱讀[安全設置與訪問碼](/manual/zh-hk/app-api/security-access-code/)。
