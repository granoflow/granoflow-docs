---
title: "本機 HTTP API 工作原理"
description: "理解本機 HTTP API 嘅監聽地址、端口配置、訪問碼保護同 App 保護門禁。"
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

<!-- markdownlint-disable MD013 -->

## Think in boundaries：先分清兩層

- **本機 HTTP API 可直接處理**：`/v1/health`、`/v1/status`、命令參數校驗、JSON 格式檢查
- **需要 App 執行業務邏輯**：`/v1/task`、`/v1/project`、`/v1/backup`、`/v1/ai-agent` 等數據操作命令

本機 HTTP API 唔會繞過 App 直接操作生產數據。所有數據操作最終由 App 執行。

如果 App 未運行，API 會返回 `app_not_reachable`。

## Think in the local address：本機 HTTP API 係乜嘢

本機 HTTP API 透過本機回環地址監聽：`http://127.0.0.1:<port>`。

- host 固定為 `127.0.0.1`
- 默認端口為 `42667`
- 端口可以喺設定頁修改，範圍 `1024..65535`
- API 配置係本機監聽配置，唔係遠程 API 服務
- App 嘅「命令行工具」設定頁會顯示目前本機地址。你可以複製根地址，亦可以用默認瀏覽器打開 `/v1/health` 檢查本機 HTTP 介面是否可連線；本機 HTTP 介面關閉嗰陣，呢兩個動作會停用，要先開啟介面之後先用得。
- `granoflow.com` 文件頁唔再預設視為業務接口可信來源；需要調試時，必須喺設定頁臨時開啟官方文件調試並使用 1 小時訪問碼。
- 「允許任何設備來源」屬於進階來源設定，必須先開啟訪問碼保護並保留至少一個已啟用訪問碼。

## API 端點示例

```bash
# 健康檢查
curl http://127.0.0.1:42667/v1/health

# 系統狀態
curl http://127.0.0.1:42667/v1/status

# 查看 API 配置
granoflow bridge config show --json
```

## 端口變更後嘅關鍵動作

`bridge port set` 寫入後，**必須重啟 App** 先會生效。若果你係喺 App 設定頁而且本機 HTTP 介面已經關閉嗰陣修改端口，新端口會喺下次開啟本機 HTTP 介面後生效。

本機 HTTP 配置只保存 schema、protocol、host、port 等非敏感字段，唔保存訪問碼、nonce、App lock 狀態、帳號或跨裝置憑據。

## Think in permissions：API 門禁順序

受保護嘅本機 HTTP 端點有固定門禁順序：

1. 本機 HTTP API 總開關（關閉時所有端點返回 403）
2. 來源檢查（本機頁面預設允許，官方文件調試需要臨時開啟）
3. App lock（要先解鎖 App）
4. nonce
5. 訪問碼保護（只喺開啟時需要訪問碼）

`/v1/health`、`/v1/status` 等唯讀端點通常唔受門禁限制。
