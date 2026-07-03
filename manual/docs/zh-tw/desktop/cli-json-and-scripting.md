---
title: "JSON 輸出、環境變數與直接 HTTP 呼叫"
description: "理解 --json、--input <file|->、stdin、HTTP 端點與環境變數，便于腳本和 AI 自動化呼叫。"
---

## `--json` 輸出约定

CLI 的 `--json` 模式只輸出結構化结果，适合腳本解析。

建議：

- 自動化流程统一加 `--json`
- 不依賴人類可讀文本做邏輯判断
- 根據 envelope 裡的狀態和錯誤碼分支處理

## `--input <file|->`

寫入類命令通過 JSON 輸入传递結構化資料：

- `--input task.json`：從檔案讀取 JSON
- `--input -`：從 stdin 讀取 JSON

示例：

```bash
cat payload.json | granoflow task create --input - --dry-run --json
```

先 dry-run，確認請求預覽後再執行真實寫入。

## 直接 HTTP 呼叫

如果不依賴 CLI，可以直接呼叫本機 HTTP API：

```bash
# 檢查 API 是否可用
curl -s http://127.0.0.1:56789/v1/health

# 讀取版本
curl -s http://127.0.0.1:56789/v1/version

# 寫入操作（通常需要 API token）
curl -s -X POST http://127.0.0.1:56789/v1/tasks \
  -H "Authorization: Bearer <token>" \
  -d '{"title": "示例任務"}'
```

本機 HTTP API 預設监听 `http://127.0.0.1:56789`。如果 App 設定頁顯示了不同連接埠，请以
設定頁為准。

## 環境變數

| 變數 | 用途 |
| --- | --- |
| `GRANOFLOW_API_BASE_URL` | 本機 HTTP API 基位址 |
| `GRANOFLOW_API_TOKEN` | API 存取碼 |
| `GRANOFLOW_CONFIG` | CLI 設定檔案路徑 |

## 穩定錯誤處理

常见錯誤類別包括：

- 設定錯誤：API 位址或設定檔案無效
- 認證錯誤：存取碼缺失、錯誤或過期
- 網络或可達性錯誤：App 未執行、本機介面未開啟、連接埠不一致
- API 業務錯誤：App 返回的業務規則錯誤
- API gap：CLI 請求的能力尚未由目前 API 提供

自動化腳本應按錯誤碼分支處理，而不是只判断一段文字。

## 腳本實践建議

- 開始阶段先執行 `granoflow health --json` 或 `curl -s http://127.0.0.1:56789/v1/health`
- 寫操作前先加 `--dry-run`
- token 只從環境變數、設定檔案或安全凭據存储讀取，不寫進倉庫
- 不呼叫 `scripts/anz` 做用戶資料自動化；它是工程腳本入口
- 不把離線 `backup encrypt/decrypt` 当作 App 備份建立或恢復流程
