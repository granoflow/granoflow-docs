---
title: "安全設定與金鑰邊界"
description: "理解本機 HTTP API 的本機存取開關、存取碼保護、官方文件偵錯、App Lock、脫敏與多種金鑰的邊界。"
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

## Think in permissions：先看 API 門禁

受保護的本機 HTTP 端點有固定門禁順序：

1. 本機 HTTP API 總開關（關閉時所有端點回傳 403）
2. 來源檢查（預設只接受本機頁面；官方文件偵錯需要另外開啟）
3. App lock
4. nonce
5. 存取碼保護（開啟時需要存取碼）
6. 端點層級權限（部分命令需要更高權限）

`/v1/health` 和 `/v1/status` 等唯讀端點通常不受門禁限制。
`granoflow help`、`granoflow version`、`granoflow open` 屬於探索與喚起入口，不要求存取碼。

## 存取碼保護

開啟後，讀取或修改 App 資料的受保護端點需要存取碼。

可透過以下方式傳遞：
- **HTTP 請求**：`Authorization: Bearer ***` 請求頭
- **CLI 命令**：`--token <value>` 參數
- **環境變數**：`GRANOFLOW_CLI_TOKEN`

「允許任何裝置來源」必須先開啟存取碼保護，並至少保留一個已啟用存取碼。否則這個開關無法開啟；如果關閉存取碼保護或刪除最後一個可用存取碼，它也會自動關閉。

## 官方文件偵錯

`granoflow.com` 文件頁不再預設擁有業務介面存取權。需要在文件頁偵錯本機介面時，請在 App 設定頁手動開啟「官方文件偵錯」。

每次開啟都會產生一個臨時存取碼，有效期 1 小時。關閉偵錯、到期、重啟 App，或再次開啟偵錯後，舊存取碼都會失效。偵錯請求同樣應透過 `Authorization: Bearer <temporary-code>` 請求頭傳遞存取碼，不要放進 URL 或長期保存。

## 本機 HTTP API 開關

本機 HTTP API 關閉時，所有受保護端點會被拒絕（回傳 `cli_disabled`），不是靜默失敗。

關閉狀態下，CLI 仍可執行不依賴 API 的本機命令（`help`、`version`、`backup-package`、`clean`）。

## App Lock 與 nonce

即使存取碼保護關閉，前置門禁仍生效。來源檢查、App lock 或 nonce 驗證失敗時，請求會先被拒絕。

## Think in redaction as assistance

脫敏用於減少外部 AI 輸入中的敏感資訊暴露風險。它是輔助處理，不等於加密、存取碼驗證或權限系統。

## Think in secrets separately：三類金鑰不要混用

- **存取碼**：本機 HTTP API 授權憑據（透過 Authorization header 或 CLI `--token` 傳遞）
- **備份金鑰**：備份包加密/還原 secret（通常透過檔案提供）
- **雲端同步金鑰**：用於端到端加密雲同步資料還原

這三者用途不同，不能互相替代。

## CLI 暫存資產清理

`granoflow clean --json` 是 native CLI 本機清理命令，用於清理 CLI 暫存資產目錄：

```bash
granoflow clean --json
granoflow clean --older-than 30m --json
granoflow clean --all --json
```

`--all` 不能和 `--older-than` 同時使用。

## 環境變數速查

| 變數 | 用途 |
| --- | --- |
| `GRANOFLOW_CLI_LANG` | CLI 輸出語言 |
| `GRANOFLOW_CLI_TOKEN` | 存取碼（等價於 Authorization header） |
| `GRANOFLOW_CLI_IPC_PORT` | 本機 HTTP API 連接埠（等價於 bridge 連接埠） |
