---
title: "本機 HTTP API 工作原理"
description: "理解本機 HTTP API 的监听位址、連接埠設定、存取碼保護，以及 CLI 為什么只是一個可選客戶端。"
---

<!-- markdownlint-disable MD013 -->

## Think in layers：先分清两層

GranoFlow 的桌面自動化有两層：

- **本機 HTTP API**：由執行中的 App 提供，负责公開端點、權限檢查和業務資料讀寫。
- **`granoflow` CLI**：獨立下載的命令列客戶端，负责把命令参數轉換成 HTTP 請求，或處理少量
  不依賴 App 的本機文件任務。

這意味着 CLI 不拥有一份獨立資料庫，也不會绕過 App 寫資料。App 未執行、介面未開啟或權限
檢查失敗時，相關 CLI 命令也會失敗。

## Think in the local address：本機位址是什么

本機 HTTP API 通過回环位址监听：

```text
http://127.0.0.1:<port>
```

- host 固定為 `127.0.0.1`
- 目前預設連接埠為 `56789`
- 連接埠可以在 App 設定頁修改，範圍為 `1024..65535`
- API 設定是本機监听設定，不是雲端 API 服務
- 設定頁會顯示目前本機位址，并提供復制根位址、打開 `/v1/health` 等辅助动作

如果介面關閉，復制和打開动作會被禁用；先開啟介面後再檢查。

## CLI 如何找到 API

CLI 按以下顺序决定 API 位址：

1. `--api-base-url`
2. `GRANOFLOW_API_BASE_URL`
3. CLI 配置文件案中的 `api_base_url`
4. 預設值 `http://127.0.0.1:56789`

你可以用下面的命令查看目前設定來源：

```bash
granoflow config --json
```

## API 端點示例

```bash
# 健康檢查
curl http://127.0.0.1:56789/v1/health

# 版本信息
curl http://127.0.0.1:56789/v1/version

# CLI 等效調用
granoflow health --json
granoflow api version --json
```

## Think in permissions：API 门禁顺序

受保護的本機 HTTP 端點會经過固定门禁：

1. 本機 HTTP API 总開關
2. 來源檢查
3. App Lock
4. nonce
5. 存取碼保護
6. 端點級別權限

`/v1/health`、`/v1/version` 等發现類端點适合作為連通性檢查。讀取或修改 App 資料的端點
通常需要更多门禁。

## 官方文件調試與外部來源

`granoflow.com` 文件頁不再預設被视為業務介面可信來源。需要在文件頁調試本機介面時，
请在 App 設定頁臨時開啟官方文件調試，并使用生成的 1 小時存取碼。

“允許任何裝置來源”屬于高級來源設定。開啟它之前，必須先啟用存取碼保護，并至少保留一個
已啟用存取碼。

## 参考：規則與邊界

- 本機 HTTP API 不會自动暴露到局域網或公網。
- 移动端如提供臨時本機介面，也屬于前台會话能力，不是常驻後台服務。
- CLI 的 `backup encrypt/decrypt` 是離線文件轉換，不需要本機 HTTP API。
- `scripts/anz` 是倉庫工程 CLI，不屬于用戶自動化介面。
