---
title: "CLI 如何連接到 App"
description: "理解 native CLI 與運行中 App command channel 嘅邊界，以及 loopback bridge 同端口規則。"
translationSource: zh-CN
translationReview:
  - ux-writing
  - plan-eng-review
---

## Think in boundaries：先分清兩層

- **Native CLI 可直接執行**：`help`、`version`、`lang`、`bridge`、`clean`、`backup-package`
- **需要運行中 App command channel**：`display`、`status`、`sync`、`open <route>`、業務對象、`backup`、`ai-agent` 真實數據命令

CLI 唔會繞過 App 直接操作生產數據。

## Think in the running App

業務對象同備份屬於用戶數據命令。CLI 只做參數校驗、JSON 輸入讀取同轉發，實際讀寫由 App 執行。

如果 App 未運行或不可達，命令會返回 `app_not_reachable`。

## Think in the local port

CLI 同 App 透過本機 loopback 通道通訊：`127.0.0.1:<port>`。

- host 固定 `127.0.0.1`
- port 可配置，範圍 `1024..65535`
- bridge 配置係本機端口配置，唔係遠程 API 服務

查看配置：

```bash
granoflow bridge config show --json
```

修改端口：

```bash
granoflow bridge port set 52001 --json
```

修復配置：

```bash
granoflow bridge config repair --reset --json
```

## 端口變更後嘅關鍵動作

`bridge port set` 寫入後，**必須重啟 App** 先會生效。

`bridge-config.json` 只保存 schema、protocol、host、port 等非敏感欄位，唔會保存 token、nonce、App lock 狀態、帳號或跨裝置憑據。