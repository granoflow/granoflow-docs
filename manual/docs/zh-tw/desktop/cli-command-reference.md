---
title: "CLI 命令與參數參考"
description: "查看 granoflow CLI 的公開穩定命令、參數、HTTP 端點對應與 App 依賴分類。"
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

<!-- markdownlint-disable MD013 -->

## HTTP API 等效

`granoflow` CLI 提供的所有功能也對應本機 HTTP API 端點。CLI 是可選的互動式客戶端，你可以直接用 curl 呼叫：

```bash
# 等價於 granoflow status --json
curl -s http://127.0.0.1:42667/v1/status

# 等價於 granoflow task list --json
curl -s http://127.0.0.1:42667/v1/task

# 等價於 granoflow backup create --out backup.granobackup
curl -s -X POST http://127.0.0.1:42667/v1/backup -d '{"out":"backup.granobackup"}'
```

本機 HTTP API 預設監聽 `http://127.0.0.1:42667`，連接埠可在設定頁修改。

## 快速分類

### 不需要執行中 App

- `help`
- `version`
- `lang`
- `bridge config show`
- `bridge port set <port>`
- `bridge config repair --reset`
- `clean`
- `backup-package inspect|encrypt|decrypt|merge`

### 需要執行中 App（透過 HTTP API）

- `display *`
- `open <route>`（不帶 route 的 `open` 用於喚起 App）
- `status`
- `sync run`
- `task|project|milestone|tag|domain-value|review`
- `quick-add`、`logout`、`export`、`import`
- `backup create|restore`
- `ai-agent` 真實資料命令

## 基礎命令

```bash
granoflow help
granoflow help task
granoflow version --json
granoflow lang get
granoflow lang zh-HK
granoflow lang reset
```

## bridge 命令（本機 HTTP 連接埠設定）

```bash
granoflow bridge config show --json
granoflow bridge port set 52001 --json
granoflow bridge config repair --reset --json
```

## display 命令（需要 App）

```bash
granoflow display get --json
granoflow display language zh-CN --json
granoflow display theme dark --json
granoflow display font-size large --json
granoflow display window-layout landscape --json
granoflow display reset --json
```

## 業務物件命令（需要 App）

資源：`task`、`project`、`milestone`、`tag`、`domain-value`、`review`

結構化輸入：`--input <file|->`

```bash
granoflow task list --json
granoflow task create --input task.json --json
granoflow task tag add t_123 custom_bug --json
granoflow tag template show custom_bug --json
granoflow project update p_123 --input patch.json --json
granoflow review day show --date 2026-05-24 --json
```

## 備份命令（需要 App）

```bash
granoflow backup create --out backup.granobackup --accept-sync-risk --json
granoflow backup restore --file backup.granobackup --preview --json
granoflow backup restore --file backup.granobackup --confirm --backup-secret-file secret.txt --json
```

`--preview` 與 `--confirm` 互斥。

## backup-package 命令（native CLI）

```bash
granoflow backup-package inspect --file backup.granobackup --json
granoflow backup-package encrypt --file plain.granobackup --out encrypted.granobackup --secret-file secret.txt --json
granoflow backup-package decrypt --file encrypted.granobackup --out plain.granobackup --secret-file secret.txt --json
granoflow backup-package merge --left a.granobackup --right b.granobackup --out merged.granobackup --json
```

## JSON 自動化約定

公開命令支援 `--json`。JSON 模式只輸出結構化 envelope，不混入人類文字。
