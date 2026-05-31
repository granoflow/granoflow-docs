---
title: "排障"
description: "處理 command not found、app_not_reachable、端口衝突、token 失敗同 JSON 輸入錯誤。"
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

## `command not found: granoflow`

先返去 App 設定頁嘅「命令行工具」重新安裝或修復 CLI，然後開過個終端再試。

## `app_not_reachable`

即係話命令需要運行中嘅 App 本機 HTTP API，但目前唔可達。

檢查順序：

1. App 係咪正在運行
2. 本機 HTTP API 係咪開啟咗（設定頁 → 命令行工具 → 開關）
3. 本機 HTTP 端口係咪一致

```bash
# 首要診斷：直接檢查 API 是否可達
curl -s http://127.0.0.1:42667/v1/health

# 查看目前端口配置
granoflow bridge config show --json
```

## 端口衝突或端口錯誤

如果端口被其他程序佔用，先改端口，再重啟 App：

```bash
granoflow bridge port set 52001 --json
```

端口變更後必須重啟 App。

## token 校驗失敗

確認以下項目：

- Token Verification 係咪開啟咗
- `--token`、`GRANOFLOW_CLI_TOKEN` 或 `Authorization` 請求頭係咪正確
- token 係咪傳咗去受保護端點

## 本機 HTTP API 關閉（`cli_disabled`）

去 App 設定頁開啟本機 HTTP 介面之後再試過。

## App Lock / nonce 拒絕

先喺 App 入面完成解鎖，再重試命令。

## 備份密鑰錯誤

`backup restore` 或 `backup-package` 使用密鑰檔案嗰陣，確保檔案存在、可讀、內容正確而且唔係空嘅。

## JSON 輸入錯誤

`--input` 報錯嗰陣檢查：

- 檔案係咪存在
- JSON 係咪合法
- 頂層係咪 JSON 物件
