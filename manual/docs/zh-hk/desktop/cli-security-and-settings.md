---
title: "安全設定與密鑰邊界"
description: "理解本機 HTTP API 嘅本機訪問開關、Token 認證、App Lock、脫敏同多種密鑰嘅邊界。"
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

## Think in permissions：先睇 API 門禁

受保護嘅本機 HTTP 端點有固定門禁順序：

1. 本機 HTTP API 總開關（關閉時所有端點返回 403）
2. App lock
3. nonce
4. Token Verification（只喺開啟時需要）
5. 端點級別權限（部分命令需要更高權限）

`/v1/health` 同 `/v1/status` 等唯讀端點通常唔受門禁限制。
`granoflow help`、`granoflow version`、`granoflow open` 屬於發現與喚起入口，唔要求 token。

## Token Verification

開啟後，讀取或修改 App 數據嘅受保護端點需要 API token。

可透過以下方式傳遞：
- **HTTP 請求**：`Authorization: Bearer ***` 請求頭
- **CLI 命令**：`--token <value>` 參數
- **環境變數**：`GRANOFLOW_CLI_TOKEN`

## 本機 HTTP API 開關

本機 HTTP API 關閉嗰陣，所有受保護端點會被拒絕（返回 `cli_disabled`），唔係靜默失敗。

關閉狀態下，CLI 仍然可以執行唔依賴 API 嘅本機命令（`help`、`version`、`backup-package`、`clean`）。

## App Lock 與 nonce

就算 Token Verification 關閉，前置門禁仍然生效。App lock 或 nonce 校驗失敗嗰陣，請求會先被拒絕。

## Think in redaction as assistance

脫敏用於減少外部 AI 輸入入面嘅敏感資訊暴露風險。佢係輔助處理，唔等於加密、token 校驗或權限系統。

## Think in secrets separately：三類密鑰唔好撈亂用

- **API token**：本機 HTTP API 授權令牌（透過 Authorization header 或 CLI `--token` 傳遞）
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
| `GRANOFLOW_CLI_TOKEN` | API token（等同於 Authorization header） |
| `GRANOFLOW_CLI_IPC_PORT` | 本機 HTTP API 端口（等同於 bridge 端口） |
