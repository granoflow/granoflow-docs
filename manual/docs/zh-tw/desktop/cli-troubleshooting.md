---
title: "CLI 排障"
description: "處理 command not found、app_not_reachable、連接埠衝突、token 失敗與 JSON 輸入錯誤。"
translationSource: zh-CN
translationReview:
  - ux-writing
  - plan-eng-review
---

## `command not found: granoflow`

先回到 App「命令列工具」設定頁重新安裝或修復 CLI，然後重開終端機再試。

## `app_not_reachable`

表示命令需要執行中 App command channel，但目前不可達。

檢查順序：

1. App 是否正在執行
2. 本機存取是否開啟
3. bridge 連接埠是否一致

```bash
granoflow bridge config show --json
```

## 連接埠衝突或連接埠錯誤

如果連接埠被其他程序佔用，先改連接埠，再重啟 App：

```bash
granoflow bridge port set 52001 --json
```

連接埠變更後必須重啟 App。

## token 驗證失敗

確認以下項目：

- Token Verification 是否開啟
- `--token` 或 `GRANOFLOW_CLI_TOKEN` 是否正確
- token 是否傳給受保護命令

## 本機存取關閉（`cli_disabled`）

到 App 設定頁開啟本機命令列存取後重試。

## App Lock / nonce 拒絕

先在 App 內完成解鎖，再重試命令。

## 備份密鑰錯誤

`backup restore` 或 `backup-package` 使用密鑰檔案時，確認檔案存在、可讀、內容正確且非空。

## JSON 輸入錯誤

`--input` 報錯時檢查：

- 檔案是否存在
- JSON 是否合法
- 最上層是否為 JSON object