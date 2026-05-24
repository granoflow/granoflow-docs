---
title: "JSON 輸出與腳本呼叫"
description: "理解 --json、--input <file|->、stdin 與穩定錯誤處理，方便腳本與 AI 自動化呼叫。"
translationSource: zh-CN
translationReview:
  - ux-writing
  - plan-eng-review
---

## `--json` 輸出約定

CLI `--json` 模式只輸出結構化結果，方便腳本解析。

建議：

- 自動化流程統一加 `--json`
- 不要依賴人類可讀文字做邏輯判斷

## `--input <file|->`

業務物件命令支援結構化輸入：

- `--input task.json`：由檔案讀取 JSON
- `--input -`：由 stdin 讀取 JSON

範例：

```bash
cat payload.json | granoflow task create --input - --json
```

## 穩定錯誤處理

常見穩定錯誤：

- `app_not_reachable`
- `cli_disabled`
- `invalid_argument`
- `unknown_command`

自動化腳本應依錯誤碼分支處理，不要只判斷一句文字。

## 環境變數

- `GRANOFLOW_CLI_LANG`：CLI 輸出語言
- `GRANOFLOW_CLI_TOKEN`：受保護命令 token
- `GRANOFLOW_CLI_IPC_PORT` / bridge 設定：本機通道連接埠相關

## 腳本實務建議

- 開始先執行 `granoflow version --json` 與 `granoflow bridge config show --json`
- 需要 App 的命令先做可達性檢查
- 寫操作前先 `backup create`