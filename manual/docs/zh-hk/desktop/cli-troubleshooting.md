---
title: "排障"
description: "處理 command not found、API 不可達、端口錯誤、token 失敗和 JSON 輸入錯誤。"
---

## `command not found: granoflow`

這通常表示你只安裝了桌面 App，還沒有單獨安裝 CLI，或 CLI 所在目錄沒有加入 PATH。

處理順序：

1. 到官網或 release 頁面下載與你的平台匹配的 CLI 包。
2. 解壓後把可執行文件放到你自己的命令目錄。
3. 確認該目錄已經加入 PATH。
4. 在新終端裡執行 `granoflow help`。

桌面 App 不會替你安裝、修復或卸載 CLI，也不會建立 `/usr/local/bin/granoflow` symlink。

## API 不可達

如果 `granoflow health --json` 或業務命令無法連接 API，先檢查：

1. GranoFlow 桌面 App 是否正在執行
2. 本機 HTTP API 是否已在設定頁開啟
3. CLI 使用的 API 地址是否與 App 設定頁一致
4. 端口是否被其他進程占用

```bash
curl -s http://127.0.0.1:56789/v1/health
granoflow config --json
```

如果你修改過端口，請把例子裡的 `56789` 換成目前端口。

## 端口錯誤

CLI 不再通過 `bridge port set` 修改 App 端口。請在 App 設定頁修改本機 HTTP API 端口，
然後讓 CLI 使用同一個基地址：

```bash
granoflow --api-base-url http://127.0.0.1:52001 health --json
```

也可以通過 `GRANOFLOW_API_BASE_URL` 或 CLI 配置文件固定這個地址。

## token 校验失敗

確認以下項：

- 存取碼保護是否開啟
- `--token`、`GRANOFLOW_API_TOKEN` 或 `Authorization` 請求头是否正確
- token 是否傳給了受保護端點
- 官方文件調試的臨時存取碼是否已經過期

## 本機 HTTP API 關閉

到 App 設定頁開啟本機 HTTP API 後重試。介面關閉時，發现類或離線文件命令可能仍可執行，
但讀取或修改 App 資料的命令不會绕過 App 寫資料庫。

## App Lock / nonce 拒绝

先在 App 內完成解鎖，再重試命令。腳本中遇到這類錯誤時，應停止目前寫入流程，而不是自動
反復重試。

## 備份密鑰錯誤

`backup decrypt/encrypt` 使用密鑰文件或密鑰環境變數時，確認：

- 文件存在且可讀
- 文件內容不是空值
- `--secret-file` 與 `--secret-env` 沒有同時使用
- 輸入包確實是對應的 encrypted 或 plaintext 備份包

## JSON 輸入錯誤

`--input` 報錯時檢查：

- 文件是否存在
- JSON 是否合法
- 頂層是否為 JSON 物件
- stdin 模式是否使用了 `--input -`

## 公開能力不匹配

如果你看到舊文件、舊腳本或舊教程提到 App 內安裝 CLI、`bridge port set`、`backup create`
或 `backup restore`，請優先以目前手冊、OpenAPI 和 `granoflow help --json` 為準。這些舊
入口不應再作為目前公開承諾使用。
