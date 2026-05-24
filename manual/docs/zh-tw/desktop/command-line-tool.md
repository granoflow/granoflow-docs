---
title: "命令列工具"
description: "用 7 頁結構理解 GranoFlow CLI：工作原理、安全邊界、命令參考、工作流、JSON 自動化與排障。"
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

`granoflow` 是面向最終使用者的桌面 CLI。請把它理解成**本機命令列入口**，不是開發建置工具，也不是雲端維運入口。

## 先看這個導覽

- 想先理解邊界：看 [CLI 如何連接到 App](/manual/zh-tw/desktop/cli-how-it-works/)
- 想確認 token、本機存取、App Lock、密鑰分工：看 [CLI 安全設定與密鑰邊界](/manual/zh-tw/desktop/cli-security-and-settings/)
- 想查完整命令和參數：看 [CLI 命令參考](/manual/zh-tw/desktop/cli-command-reference/)
- 想按真實場景執行：看 [CLI 工作流](/manual/zh-tw/desktop/cli-workflows/)
- 想給腳本或 AI 助手用：看 [JSON 與腳本呼叫](/manual/zh-tw/desktop/cli-json-and-scripting/)
- 遇到報錯：看 [CLI 排障](/manual/zh-tw/desktop/cli-troubleshooting/)

## 安裝與首次檢查

在 macOS 上，先在 App「命令列工具」設定頁點「安裝命令列工具」或「修復命令列工具」；系統會跳出管理員授權框（Helper 顯示名為「Granoflow 命令行工具」），輸入登入密碼後才會建立 `/usr/local/bin/granoflow` 符號連結。其他平台在同一設定頁完成安裝或修復後，執行：

```bash
granoflow help
granoflow version --json
granoflow bridge config show --json
```

## 讀者常見誤解

- `granoflow lang` 只影響 CLI 輸出語言，不會修改 App 語言。
- `granoflow backup-package` 是 native CLI 本機工具，不依賴執行中 App。
- 業務物件、備份、真實資料 AI 命令都依賴執行中 App command channel。

## 下一步

建議先看 [CLI 如何連接到 App](/manual/zh-tw/desktop/cli-how-it-works/)，再看命令參考。
