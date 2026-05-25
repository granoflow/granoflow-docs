---
title: "命令行工具"
description: "用 7 頁結構理解 GranoFlow CLI：工作原理、安全邊界、命令參考、工作流、JSON 自動化與排障。"
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

`granoflow` 係面向最終用戶嘅桌面 CLI。請將佢理解成**本機命令列入口**，唔係開發構建工具，亦唔係雲端運維入口。

## 先睇呢個導覽

- 想先理解邊界：睇 [CLI 如何連接到 App](/manual/zh-hk/desktop/cli-how-it-works/)
- 想確認 token、本機訪問、App Lock、密鑰分工：睇 [CLI 安全設定與密鑰邊界](/manual/zh-hk/desktop/cli-security-and-settings/)
- 想查完整命令同參數：睇 [CLI 命令參考](/manual/zh-hk/desktop/cli-command-reference/)
- 想按真實場景執行：睇 [CLI 工作流](/manual/zh-hk/desktop/cli-workflows/)
- 想俾腳本或 AI 助手用：睇 [JSON 與腳本調用](/manual/zh-hk/desktop/cli-json-and-scripting/)
- 遇到報錯：睇 [CLI 排障](/manual/zh-hk/desktop/cli-troubleshooting/)

## 安裝與首次檢查

喺 macOS 上，先將 GranoFlow 拖入「應用程式」，再喺 App「命令行工具」設定頁撳「安裝命令行工具」或「修復命令行工具」。首次安裝嗰陣，macOS 可能會要求你喺「系統設定 → 一般 → 登入項目」入面允許「Granoflow 背景項目」；批准之後再撳一次安裝，App 就會建立 `/usr/local/bin/granoflow` 符號連結，之後嘅修復或重裝通常唔使再批准。需要 macOS 13 或之後嘅版本。其他平台喺同一設定頁完成安裝或修復後，執行：

```bash
granoflow help
granoflow version --json
granoflow bridge config show --json
```

## 讀者常見誤解

- `granoflow lang` 只影響 CLI 輸出語言，唔會修改 App 語言。
- `granoflow backup-package` 係 native CLI 本機工具，唔依賴運行中 App。
- 業務對象、備份、真實數據 AI 命令都依賴運行中 App command channel。

## 下一步

建議先睇 [CLI 如何連接到 App](/manual/zh-hk/desktop/cli-how-it-works/)，再睇命令參考。
