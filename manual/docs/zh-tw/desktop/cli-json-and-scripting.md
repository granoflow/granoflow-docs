---
title: "JSON 輸出、環境變數與直接 HTTP 呼叫"
description: "理解 --json、--input <file|->、stdin、HTTP 端點與環境變數，便於腳本和 AI 自動化呼叫。"
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

## `--json` 輸出約定

CLI 的 `--json` 模式只輸出結構化結果，適合腳本解析。

建議：

- 自動化流程統一加 `--json`
- 不依賴人類可讀文字做邏輯判斷

## `--input <file|->`

業務物件命令支援結構化輸入：

- `--input task.json`：從檔案讀取 JSON
- `--input -`：從 stdin 讀取 JSON

範例：

```bash
cat payload.json | granoflow task create --input - --json
```

## 直接 HTTP 呼叫

如果不依賴 CLI，可以直接呼叫本機 HTTP API：

```bash
# 檢查 API 是否可用
curl -s http://127.0.0.1:42667/v1/health

# 讀取系統狀態
curl -s http://127.0.0.1:42667/v1/status

# 寫入操作（需要 API token）
curl -s -X POST http://127.0.0.1:42667/v1/task \
  -H "Authorization: Bearer ***" \
  -d '{"title": "範例任務"}'
```

本機 HTTP API 預設監聽 `http://127.0.0.1:42667`。

## 環境變數

| 變數 | 用途 |
| --- | --- |
| `GRANOFLOW_CLI_LANG` | CLI 輸出語言 |
| `GRANOFLOW_CLI_TOKEN` | API token（等價於 CLI `--token`） |
| `GRANOFLOW_CLI_IPC_PORT` | 本機 HTTP API 連接埠 |
| `GRANOFLOW_API_URL` | 本機 HTTP API 基底位址（如 `http://127.0.0.1:52001`） |

## 穩定錯誤處理

常見穩定錯誤：

- `app_not_reachable`
- `cli_disabled`
- `invalid_argument`
- `unknown_command`

自動化腳本應依錯誤碼分支處理，而不是只判斷一段文字。

## 腳本實務建議

- 開始階段先執行 `granoflow version --json` 或 `curl -s http://127.0.0.1:42667/v1/status`
- 需要 App 的命令先做可達性檢查
- 寫操作前先 `backup create`
