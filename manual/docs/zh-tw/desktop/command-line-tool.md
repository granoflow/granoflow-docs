---
title: "本機 HTTP API 與獨立 CLI"
description: "理解 GranoFlow 桌面端的本機 HTTP API，以及獨立下載的 granoflow CLI 如何作為可選用戶端使用。"
---

GranoFlow 桌面端面向自動化的主入口是本機 HTTP API。它監聽本機回環位址 `http://127.0.0.1:<port>`，讓腳本、AI 助手或命令列用戶端使用 App 已公開的自動化能力。

`granoflow` CLI 是這個 API 的可選用戶端。它已用 Rust 重寫，作為獨立套件下載，不會隨 macOS、Windows 或 Linux 桌面安裝包一起安裝。也就是說，安裝桌面 App 之後，你已經可以在 App 裡開啟本機 HTTP API；如果還想在終端機使用 `granoflow` 命令，需要另外安裝 CLI。

本機 HTTP API 預設只綁定 `127.0.0.1`，不會自動暴露到區域網路或公網。如果需要在 `granoflow.com` 文件頁調試本機介面，必須在 App 中臨時開啟官方文件調試，並使用 1 小時存取碼；文件頁不再預設可以存取業務介面。允許任何裝置來源也必須先開啟存取碼保護。

## 先看這個導覽

- 想先理解工作原理：讀 [本機 HTTP API 工作原理](/manual/zh-tw/desktop/cli-how-it-works/)
- 想確認存取碼、本地存取、App Lock、密鑰差異：讀 [安全設定與密鑰邊界](/manual/zh-tw/desktop/cli-security-and-settings/)
- 想查 CLI 命令和 HTTP 端點：讀 [命令參考與 HTTP 映射](/manual/zh-tw/desktop/cli-command-reference/)
- 想按真實場景組合呼叫：讀 [工作流](/manual/zh-tw/desktop/cli-workflows/)
- 想給腳本或 AI 助手使用：讀 [JSON、環境變數與直接呼叫](/manual/zh-tw/desktop/cli-json-and-scripting/)
- 遇到報錯：讀 [疑難排解](/manual/zh-tw/desktop/cli-troubleshooting/)

## 安裝與首次檢查

先安裝並開啟 GranoFlow 桌面版，然後在設定裡的本機介面服務頁開啟本機 HTTP API。這一步只會開啟 App 裡的本機介面，不會安裝 `granoflow` 終端命令，也不會寫入 PATH、MSIX App Execution Alias 或 `/usr/local/bin/granoflow` symlink。

<!-- manual-screenshot:id=desktop-command-line-tool-settings-main -->
![本機 HTTP API 介面截圖](../../../screenshots/zh-tw/desktop-command-line-tool-settings-main.png)

如果你只想確認介面是否可達，可以直接用 curl：

```bash
curl -s http://127.0.0.1:56789/v1/health
curl -s http://127.0.0.1:56789/v1/version
```

如果你已經單獨安裝 CLI，可以再檢查 CLI 讀到的連線設定：

```bash
granoflow config --json
granoflow health --json
```

預設 API 位址是 `http://127.0.0.1:56789`。如果你在 App 裡修改了連接埠，CLI 也需要使用同一個位址；可以透過設定檔、`--api-base-url` 或 `GRANOFLOW_API_BASE_URL` 指定。

## 讀者常見誤解

- 桌面 App 不負責安裝、修復或解除安裝 CLI。CLI 的下載、升級、簽名和 PATH 設定由官網或 release 說明承接。
- CLI 不會直接讀寫 GranoFlow 資料庫。任務、專案、回顧和卡片等寫入操作都會轉發給執行中的本機 HTTP API，由 App 服務層處理。
- `granoflow backup decrypt/encrypt` 是離線備份包轉換工具，不依賴執行中的 App；它不等於「建立 App 備份」或「恢復到 App」。
- 公開能力以 OpenAPI 和 CLI help 為準。舊 Dart CLI、App 內建 CLI 安裝器和 `bin/granoflow.dart` 入口已經退役。

## 目前狀態

目前公開 CLI 包按平台獨立發行：

- macOS Apple Silicon：signed/notarized zip
- Linux x64：tar.gz
- Windows x64：先發布 unsigned zip，再由 Windows 簽名裝置補 signed zip

不提供 macOS Intel CLI 包。桌面 App 安裝包也不會附帶這些 CLI 資產。

## 參考：規則與邊界

這一節用於查邊界，不影響你完成前面的首次檢查。

- 本機 HTTP API 的公開端點以 OpenAPI 文件為準。
- CLI 的公開命令以 `granoflow help --json` 和本手冊命令參考為準。
- 桌面三平台安裝包不得寫 PATH、不得注入 MSIX App Execution Alias、不得嵌入 macOS CLI helper，也不得提供 App 內安裝 CLI 的按鈕。
- 存取受保護端點時，仍會經過本機介面總開關、來源檢查、App Lock、nonce 與存取碼保護。

## 下一步

現在你已經分清「本機 HTTP API」和「獨立 CLI」的關係。下一頁可以繼續看它們如何一起工作，以及為什麼很多自動化問題要先從本機位址和權限邊界判斷。
