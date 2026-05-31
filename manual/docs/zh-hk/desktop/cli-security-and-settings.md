---
title: "安全設定與密鑰邊界"
description: "理解本機 HTTP API 嘅本機訪問開關、訪問碼保護、官方文件調試、App Lock、脫敏同多種密鑰嘅邊界。"
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

## Think in permissions：先睇 API 門禁

受保護嘅本機 HTTP 端點有固定門禁順序：

1. 本機 HTTP API 總開關（關閉時所有端點返回 403）
2. 來源檢查（預設只接受本機頁面；官方文件調試需要另外開啟）
3. App lock
4. nonce
5. 訪問碼保護（開啟時需要訪問碼）
6. 端點級別權限（部分命令需要更高權限）

`/v1/health` 同 `/v1/status` 等唯讀端點通常唔受門禁限制。
`granoflow help`、`granoflow version`、`granoflow open` 屬於發現與喚起入口，唔要求訪問碼。

## 訪問碼保護

開啟後，讀取或修改 App 數據嘅受保護端點需要訪問碼。

可透過以下方式傳遞：
- **HTTP 請求**：`Authorization: Bearer ***` 請求頭
- **CLI 命令**：`--token <value>` 參數
- **環境變數**：`GRANOFLOW_CLI_TOKEN`

「允許任何設備來源」必須先開啟訪問碼保護，並至少保留一個已啟用訪問碼。否則呢個開關無法開啟；如果關閉訪問碼保護或刪除最後一個可用訪問碼，佢亦會自動關閉。

## 官方文件調試

`granoflow.com` 文件頁唔再預設擁有業務接口訪問權。需要喺文件頁調試本機接口時，請喺 App 設定頁手動開啟「官方文件調試」。

每次開啟都會生成一個臨時訪問碼，有效期 1 小時。關閉調試、到期、重啟 App，或者再次開啟調試後，舊訪問碼都會失效。調試請求同樣應該透過 `Authorization: Bearer <temporary-code>` 請求頭傳遞訪問碼，唔好放入 URL 或長期保存。

## 本機 HTTP API 開關

本機 HTTP API 關閉嗰陣，所有受保護端點會被拒絕（返回 `cli_disabled`），唔係靜默失敗。

關閉狀態下，CLI 仍然可以執行唔依賴 API 嘅本機命令（`help`、`version`、`backup-package`、`clean`）。

## App Lock 與 nonce

就算訪問碼保護關閉，前置門禁仍然生效。來源檢查、App lock 或 nonce 校驗失敗嗰陣，請求會先被拒絕。

## Think in redaction as assistance

脫敏用於減少外部 AI 輸入入面嘅敏感資訊暴露風險。佢係輔助處理，唔等於加密、訪問碼校驗或權限系統。

## Think in secrets separately：三類密鑰唔好撈亂用

- **訪問碼**：本機 HTTP API 授權憑據（透過 Authorization header 或 CLI `--token` 傳遞）
- **備份密鑰**：備份包加密/恢復 secret（通常透過檔案提供）
- **雲端同步密鑰**：用於端到端加密雲同步數據恢復

呢三樣用途唔同，唔可以互相替代。

## CLI 臨時資產清理

`granoflow clean --json` 係 native CLI 本機清理命令，用嚟清理 CLI 臨時資產目錄：

```bash
granoflow clean --json
granoflow clean --older-than 30m --json
granoflow clean --all --json
```

`--all` 唔可以同 `--older-than` 同時使用。

## 環境變數速查

| 變數 | 用途 |
| --- | --- |
| `GRANOFLOW_CLI_LANG` | CLI 輸出語言 |
| `GRANOFLOW_CLI_TOKEN` | 訪問碼（等同於 Authorization header） |
| `GRANOFLOW_CLI_IPC_PORT` | 本機 HTTP API 端口（等同於 bridge 端口） |
