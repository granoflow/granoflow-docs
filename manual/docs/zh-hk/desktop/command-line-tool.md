---
title: "本機 HTTP API"
description: "GranoFlow 喺桌面提供本機 HTTP API，支援命令行工具、JSON 輸入同 curl 直接呼叫。"
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

`granoflow` 桌面版提供本機 HTTP API，監聽喺 `http://127.0.0.1:<port>`。

你可以透過**命令行工具**（`granoflow` CLI）、**curl** 或**腳本**直接同 API 交互。

本機 HTTP API 只綁定到 `127.0.0.1`，唔會暴露到區域網絡或公網。

如果需要從 `granoflow.com` 文件頁調試本機接口，必須先喺 App 入面臨時開啟官方文件調試並使用 1 小時訪問碼；文件頁唔再預設可以訪問業務接口。允許任何設備來源亦必須先開啟訪問碼保護。

## 先睇呢個導覽

- 想先理解工作原理：睇 [本機 HTTP API 工作原理](/manual/zh-hk/desktop/cli-how-it-works/)
- 想確認訪問碼、本機訪問、App Lock、密鑰分別：睇 [安全設定與密鑰邊界](/manual/zh-hk/desktop/cli-security-and-settings/)
- 想查完整 CLI 命令同 HTTP 端點：睇 [命令參考與 HTTP 對應](/manual/zh-hk/desktop/cli-command-reference/)
- 想按真實場景行流程：睇 [工作流](/manual/zh-hk/desktop/cli-workflows/)
- 想俾腳本或 AI 助手用：睇 [JSON、環境變數與直接呼叫](/manual/zh-hk/desktop/cli-json-and-scripting/)
- 遇到報錯：睇 [排障](/manual/zh-hk/desktop/cli-troubleshooting/)

## 安裝與首次檢查

喺 macOS 上，先將 GranoFlow 拖入「應用程式」，再喺 App 嘅「命令行工具」設定頁撳「安裝命令行工具」或「修復命令行工具」。首次安裝嗰陣，macOS 可能會要求你喺「系統設定 → 一般 → 登入項目」入面允許「Granoflow 背景項目」；批准之後再撳一次安裝，App 就會建立 `/usr/local/bin/granoflow` 符號連結，之後嘅修復或重裝通常唔使再額外操作。需要 macOS 13 或更新版本。

安裝後先確認 API 可達：

```bash
curl -s http://127.0.0.1:42667/v1/health
granoflow version --json
granoflow bridge config show --json
```

## 讀者常見誤解

- `granoflow lang` 只影響 CLI 輸出語言，唔會修改 App 語言。
- `granoflow backup-package` 係 native CLI 本機工具，唔依賴運行中嘅 App。
- 業務對象、備份、真實數據 AI 命令都依賴運行中嘅本機 HTTP API。

## 下一步

建議先睇 [本機 HTTP API 工作原理](/manual/zh-hk/desktop/cli-how-it-works/)，再睇命令參考。
