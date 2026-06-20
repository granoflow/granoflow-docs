---
title: "App 介面"
description: "了解怎樣開啟本機介面服務，並讓 AI 工具、瀏覽器或官方文件頁面連接當前裝置。"
translationSource: zh-CN
translationReview:
  - deepseek-flash
  - deepseek-pro
  - manual-multilingual-translation
---

<!-- markdownlint-disable MD013 -->

App 介面是 GranoFlow 在當前裝置上提供的 HTTP 服務。桌面端通常讓同一台電腦上的 Codex、OpenClaw、Hermes、瀏覽器頁面或腳本連接 GranoFlow；手機端更常見的場景，是讓同一 Wi-Fi 下的電腦、瀏覽器或 AI 工具連接這台手機。

## 先看這個導航

- [連接 Codex、OpenClaw、Hermes](/manual/zh-tw/app-api/connect-ai-tools/)
- [本機位址與瀏覽器除錯](/manual/zh-tw/app-api/local-address-browser-debug/)
- [手機端區域網路連接](/manual/zh-tw/app-api/mobile-lan-connection/)
- [官方文件除錯](/manual/zh-tw/app-api/official-docs-debug/)
- [安全設定與存取碼](/manual/zh-tw/app-api/security-access-code/)

## 介面合約

OpenAPI 合約來源是 `granoflow-docs/manual/docs/app-api/granoflow-local-http-api.openapi.yaml`。公開 Swagger 頁面是 [https://granoflow.com/api/](https://granoflow.com/api/)，它用於查看合約和除錯當前裝置，不是 GranoFlow Core API，也不是當前裝置的本機位址。

## 開啟介面服務

在 App 中進入「本機介面服務」，打開「開啟介面服務」。開啟後，頁面會顯示當前裝置可用的連接位址，並提供複製位址、在瀏覽器打開、官方文件除錯和進階安全設定。

<!-- manual-screenshot:id=app-api-local-interface-service -->
![App 介面 介面截圖](../../../screenshots/zh-tw/app-api-local-interface-service.png)

這個開關只影響當前裝置。它不會把資料上傳到 GranoFlow 伺服器，也不會讓其他裝置自動獲得存取權限。第三方工具能否連接，還取決於它們使用的位址、存取碼和來源設定。

桌面端頁面會顯示最近連接摘要，並可進入「連接日誌」查看存取 IP、端點、讀寫類型、狀態碼和失敗記錄。連接日誌只保存在當前裝置，不會同步到其他裝置。

連接日誌面向排障，而不是日常使用。你可以按存取 IP、讀寫類型、端點或「僅失敗」篩選；單條記錄會顯示方法、端點、時間、來源 IP、讀寫類型、耗時和狀態碼。需要排查 CLI 或瀏覽器除錯時，先看這裡是否真的收到了請求。

## 什麼時候使用

如果你只是想讓 AI 工具幫你理解連接步驟，點擊「查看連接方式」。它會複用頂部的 AI 助手，並要求 AI 先閱讀這一組 App 介面手冊。

如果你要在瀏覽器或腳本裡檢查介面是否可用，使用頁面顯示的位址。桌面端預設位址通常是 `http://127.0.0.1:<埠>`，只適合同一台電腦存取。手機端應使用手機的區域網路位址，例如 `http://192.168.1.23:<埠>`。詳細規則見 [手機端區域網路連接](/manual/zh-tw/app-api/mobile-lan-connection/)。

如果你要從 `granoflow.com` 的官方文件頁面除錯當前裝置，使用「官方文件除錯」。除錯開啟後只在限定時間內有效，並需要臨時存取碼。

## 不要把 API 位址當成主要操作

`https://granoflow.com/api/` 是公開文件和 Swagger 頁面，不是當前裝置的本機位址。通常不需要手動修改它，也不需要優先複製它給 AI 工具。

AI 工具連接當前裝置時，應先根據本頁面關聯的手冊理解連接方式，再使用 App 顯示的位址、官方除錯入口或存取碼。桌面端通常複製 `127.0.0.1` 位址；手機端通常複製區域網路位址給同一 Wi-Fi 下的電腦端工具。

## 平台差異

| 平台 | 應複製的位址 | 適合場景 | 需要注意 |
| --- | --- | --- | --- |
| 桌面端 | `http://127.0.0.1:<埠>` | 同一台電腦上的 AI 工具、瀏覽器或腳本連接 GranoFlow | 這個位址發給另一台裝置沒有意義 |
| Android | 手機的區域網路位址，例如 `http://192.168.1.23:<埠>` | 同一 Wi-Fi 下的電腦或瀏覽器連接這台 Android 裝置 | 見 [手機端區域網路連接](/manual/zh-tw/app-api/mobile-lan-connection/) |
| iPhone / iPad | 手機或平板的區域網路位址，例如 `http://192.168.1.23:<埠>` | 同一 Wi-Fi 下的電腦或瀏覽器臨時連接這台 iPhone / iPad | 見 [手機端區域網路連接](/manual/zh-tw/app-api/mobile-lan-connection/) |

## 下一步

- 要連接 AI 工具，閱讀 [連接 Codex、OpenClaw、Hermes](/manual/zh-tw/app-api/connect-ai-tools/)。
- 要複製本機位址或打開瀏覽器除錯，閱讀 [本機位址與瀏覽器除錯](/manual/zh-tw/app-api/local-address-browser-debug/)。
- 要從電腦連接手機，閱讀 [手機端區域網路連接](/manual/zh-tw/app-api/mobile-lan-connection/)。
- 要從官方文件頁面除錯，閱讀 [官方文件除錯](/manual/zh-tw/app-api/official-docs-debug/)。
- 要理解存取碼和裝置來源，閱讀 [安全設定與存取碼](/manual/zh-tw/app-api/security-access-code/)。
