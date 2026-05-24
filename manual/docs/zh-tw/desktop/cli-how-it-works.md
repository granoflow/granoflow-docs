---
title: "CLI 如何連接到 App"
description: "理解 native CLI 與執行中 App command channel 的邊界，以及 loopback bridge 與連接埠規則。"
translationSource: zh-CN
translationReview:
  - ux-writing
  - plan-eng-review
---

## Think in boundaries：先分清兩層

- **Native CLI 可直接執行**：`help`、`version`、`lang`、`bridge`、`clean`、`backup-package`
- **需要執行中 App command channel**：`display`、`status`、`sync`、`open <route>`、業務物件、`backup`、`ai-agent` 真實資料命令

CLI 不會繞過 App 直接操作生產資料。

## Think in the running App

業務物件與備份屬於使用者資料命令。CLI 只做參數驗證、JSON 輸入讀取與轉發，實際讀寫由 App 執行。

如果 App 未執行或不可達，命令會返回 `app_not_reachable`。

## Think in the local port

CLI 與 App 透過本機 loopback 通道通訊：`127.0.0.1:<port>`。

- host 固定 `127.0.0.1`
- port 可設定，範圍 `1024..65535`
- bridge 設定是本機連接埠設定，不是遠端 API 服務

查看設定：

```bash
granoflow bridge config show --json
```

修改連接埠：

```bash
granoflow bridge port set 52001 --json
```

修復設定：

```bash
granoflow bridge config repair --reset --json
```

## 連接埠變更後的關鍵動作

`bridge port set` 寫入後，**必須重啟 App** 才會生效。

`bridge-config.json` 只保存 schema、protocol、host、port 等非敏感欄位，不會保存 token、nonce、App lock 狀態、帳號或跨裝置憑證。