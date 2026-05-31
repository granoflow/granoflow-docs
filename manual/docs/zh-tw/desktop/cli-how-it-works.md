---
title: "本機 HTTP API 工作原理"
description: "理解本機 HTTP API 的監聽地址、連接埠設定、Token 認證與 App 保護門禁。"
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

<!-- markdownlint-disable MD013 -->

## Think in boundaries：先分清兩層

- **本機 HTTP API 可直接處理**：`/v1/health`、`/v1/status`、命令參數驗證、JSON 格式檢查
- **需要 App 執行業務邏輯**：`/v1/task`、`/v1/project`、`/v1/backup`、`/v1/ai-agent` 等資料操作命令

本機 HTTP API 不會繞過 App 直接操作生產資料。所有資料操作最終由 App 執行。

如果 App 未執行，API 會回傳 `app_not_reachable`。

## Think in the local address：本機 HTTP API 是什麼

本機 HTTP API 透過本機回環位址監聽：`http://127.0.0.1:<port>`。

- host 固定為 `127.0.0.1`
- 預設連接埠為 `42667`
- 連接埠可在設定頁修改，範圍 `1024..65535`
- API 設定是本機監聽設定，不是遠端 API 服務
- App 的「命令列工具」設定頁會顯示目前本機位址。你可以複製根位址，也可以用預設瀏覽器開啟 `/v1/health` 檢查本機 HTTP 介面是否可連線；本機 HTTP 介面關閉時，這兩個動作會停用，請先開啟介面後再使用。

## API 端點範例

```bash
# 健康檢查
curl http://127.0.0.1:42667/v1/health

# 系統狀態
curl http://127.0.0.1:42667/v1/status

# 查看 API 設定
granoflow bridge config show --json
```

## 連接埠變更後的關鍵動作

`bridge port set` 寫入後，**必須重新啟動 App** 才會生效。若你是在 App 設定頁且本機 HTTP 介面已經關閉時修改連接埠，新連接埠會在下次開啟本機 HTTP 介面後生效。

本機 HTTP 設定只保存 schema、protocol、host、port 等非敏感欄位，不保存 token、nonce、App lock 狀態、帳號或跨裝置憑證。

## Think in permissions：API 門禁順序

受保護的本機 HTTP 端點有固定門禁順序：

1. 本機 HTTP API 總開關（關閉時所有端點回傳 403）
2. App lock（需要先解鎖 App）
3. nonce
4. Token Verification（僅在開啟時需要 API token）

`/v1/health`、`/v1/status` 等唯讀端點通常不受門禁限制。
