---
title: "CLI 排障"
description: "處理 command not found、app_not_reachable、端口衝突、token 失敗與 JSON 輸入錯誤。"
translationSource: zh-CN
translationReview:
  - ux-writing
  - plan-eng-review
---

## `command not found: granoflow`

返去 App「命令行工具」設定頁重新安裝或修復 CLI，之後重開終端機再試。

## `app_not_reachable`

表示命令需要運行中 App command channel，但目前不可達。

檢查順序：

1. App 係咪正在運行
2. 本機訪問係咪已開啟
3. bridge 端口係咪一致

```bash
granoflow bridge config show --json
```

## 端口衝突或端口錯誤

如果端口被其他進程佔用，先改端口，再重啟 App：

```bash
granoflow bridge port set 52001 --json
```

端口變更後必須重啟 App。

## token 校驗失敗

確認以下項：

- Token Verification 係咪開啟
- `--token` 或 `GRANOFLOW_CLI_TOKEN` 係咪正確
- token 係咪傳俾受保護命令

## 本機訪問關閉（`cli_disabled`）

去 App 設定頁開啟本機命令行訪問，再重試。

## App Lock / nonce 拒絕

先喺 App 內完成解鎖，再重試命令。

## 備份密鑰錯誤

`backup restore` 或 `backup-package` 使用密鑰文件時，確認文件存在、可讀、內容正確而且非空。

## JSON 輸入錯誤

`--input` 報錯時檢查：

- 文件係咪存在
- JSON 係咪合法
- 最上層係咪 JSON object
