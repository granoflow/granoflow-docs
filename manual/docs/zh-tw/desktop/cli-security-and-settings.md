---
title: "安全設定與密鑰邊界"
description: "理解本機 HTTP API 的本機存取開關、存取碼保護、官方檔案調試、App Lock、脫敏與多种密鑰的邊界。"
---

## Think in permissions：先看 API 门禁

受保護的本機 HTTP 端點有固定门禁順序：

1. 本機 HTTP API 总開關
2. 來源檢查
3. App Lock
4. nonce
5. 存取碼保護
6. 端點級別權限

`/v1/health` 和 `/v1/version` 等發现類端點適合做連通性檢查。讀取或修改 App 資料的端點
需要通過更多门禁。

## 存取碼保護

開啟存取碼保護後，受保護端點需要存取碼。存取碼可以通過两种方式传递：

- **HTTP 請求**：`Authorization: Bearer <token>` 請求头
- **CLI 命令**：`--token <value>` 參數或 `GRANOFLOW_API_TOKEN` 環境變數

不要把存取碼放進 URL，也不要把它長期寫進腳本倉庫。

## 官方檔案調試

`granoflow.com` 檔案頁不再預設拥有業務介面存取權。需要在檔案頁調試本機介面時，請在
App 設定頁手动開啟官方檔案調試。

每次開啟都會生成一個臨時存取碼，有效期 1 小時。關閉調試、到期、重啟 App，或再次開啟
調試後，舊存取碼都會失效。

## 本機 HTTP API 開關

本機 HTTP API 關閉時，受保護端點會被拒绝，不會静默寫入。此時 CLI 仍可執行不依賴 API
的本機命令，例如：

```bash
granoflow help
granoflow config --json
granoflow backup decrypt --input encrypted.flow.grano --output plaintext.flow.grano --secret-file secret.txt --json
```

## App Lock、nonce 與來源檢查

即使存取碼保護關閉，前置门禁仍生效。來源檢查、App Lock 或 nonce 校验失敗時，請求會先
被拒绝。遇到這類錯誤時，先回到 App 內確認介面開啟、App 已解鎖、目前請求來源被允許。

## Think in redaction as assistance

脫敏用于减少外部 AI 輸入中的敏感資訊暴露风险。它是辅助處理，不等于加密、存取碼校验或
權限系統。

## Think in secrets separately：三類密鑰不要混用

- **API 存取碼**：本機 HTTP API 授權凭據，通過 Authorization header、CLI `--token`
  或 `GRANOFLOW_API_TOKEN` 传递。
- **備份密鑰**：備份包加密或解密 secret，通常通過 `--secret-file` 或 `--secret-env`
  提供给離線備份轉換命令。
- **雲端同步密鑰**：用于端到端加密云同步資料恢復。

這三者用途不同，不能互相替代。

## CLI 臨時資產清理

如果 CLI 後续命令生成短期明文資產，應按命令帮助或設定頁說明清理。目前公開的穩定手工入口
仍以 CLI help 為準；不要把 App 設定項當作 CLI 安裝器或系統權限管理器。

## 環境變數速查

| 變數 | 用途 |
| --- | --- |
| `GRANOFLOW_API_BASE_URL` | 本機 HTTP API 基位址，如 `http://127.0.0.1:56789` |
| `GRANOFLOW_API_TOKEN` | API 存取碼 |
| `GRANOFLOW_CONFIG` | CLI 設定檔案路徑 |

## 参考：規則與邊界

- 桌面 App 不安裝 CLI，也不寫 PATH、MSIX alias 或 symlink。
- CLI 設定只保存 API 位址和 token 等連接資訊；不要把備份密鑰、云同步密鑰和 API 存取碼混用。
- 允許任何裝置來源必須建立在存取碼保護之上，不能把 CORS 或來源放行誤当成授權。
