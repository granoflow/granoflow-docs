---
title: "JSON 輸出與腳本調用"
description: "理解 --json、--input <file|->、stdin 與穩定錯誤處理，方便腳本同 AI 自動化調用。"
translationSource: zh-CN
translationReview:
  - ux-writing
  - plan-eng-review
---

## `--json` 輸出約定

CLI `--json` 模式只輸出結構化結果，方便腳本解析。

建議：

- 自動化流程統一加 `--json`
- 唔好依賴人類可讀文本做邏輯判斷

## `--input <file|->`

業務對象命令支持結構化輸入：

- `--input task.json`：由文件讀取 JSON
- `--input -`：由 stdin 讀取 JSON

示例：

```bash
cat payload.json | granoflow task create --input - --json
```

## 穩定錯誤處理

常見穩定錯誤：

- `app_not_reachable`
- `cli_disabled`
- `invalid_argument`
- `unknown_command`

自動化腳本應按錯誤碼分支處理，唔好只判斷一句文字。

## 環境變數

- `GRANOFLOW_CLI_LANG`：CLI 輸出語言
- `GRANOFLOW_CLI_TOKEN`：受保護命令 token
- `bridge-config.json` / `granoflow bridge`：本機 RESTful API 端口相關，預設 `127.0.0.1:56789`

## 腳本實務建議

- 開始先執行 `granoflow version --json` 同 `granoflow bridge config show --json`
- 需要 App 嘅命令先做可達性檢查
- 寫操作前先 `backup create`
