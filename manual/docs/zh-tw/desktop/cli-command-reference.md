---
title: "CLI 命令與參數參考"
description: "查看 granoflow CLI 公開穩定命令、參數與 App 依賴分類。"
translationSource: zh-CN
translationReview:
  - ux-writing
  - plan-eng-review
---

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

### 需要執行中 App command channel

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
granoflow lang zh-TW
granoflow lang reset
```

## bridge 命令

```bash
granoflow bridge config show --json
granoflow bridge port set 52001 --json
granoflow bridge config repair --reset --json
```

## display 命令（需要 App）

```bash
granoflow display get --json
granoflow display language zh-TW --json
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