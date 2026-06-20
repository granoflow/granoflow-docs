---
title: "CLI 命令與 HTTP 映射"
description: "查看 granoflow CLI 目前公開命令、參數、HTTP 端點映射與 App 依賴分類。"
---

<!-- markdownlint-disable MD013 -->

`granoflow` CLI 是本機 HTTP API 的客戶端。讀寫 App 資料的命令會調用
`http://127.0.0.1:<port>` 下的公開端點；離線備份包轉換命令則只處理你提供的備份包
文件，不連接 App。

如果你不想安裝 CLI，也可以直接用 curl 調用相同的 HTTP API。

## 直接 HTTP 調用例子

```bash
# 健康檢查
curl -s http://127.0.0.1:56789/v1/health

# 版本資訊
curl -s http://127.0.0.1:56789/v1/version

# 任務列表
curl -s http://127.0.0.1:56789/v1/tasks

# 建立任務；受保護端點通常需要存取碼
curl -s -X POST http://127.0.0.1:56789/v1/tasks \
  -H "Authorization: Bearer <token>" \
  -d '{"title":"例子任務"}'
```

## 快速分類

### 只需要 CLI 本身

- `help`
- `config`
- `backup decrypt`
- `backup encrypt`

### 需要本機 HTTP API 可達

- `health`
- `api version`
- `api capabilities`
- `task list`
- `task create`
- `task complete`
- `project list`
- `project create`
- `review day show/update`
- `review week show/update/value`
- `deck list/show/create/delete/cards/import anki`
- `card archive/unarchive/trash/unlink/unlink-note`
- `ai-agent tools`
- `ai-agent task export/validate/import`

## 基礎命令

```bash
granoflow help
granoflow help task
granoflow help --json
granoflow config --json
```

`config` 會顯示 CLI 目前使用的 API 地址、token 來源和配置文件路徑。token 會被脫敏。

## API 與狀態命令

```bash
granoflow health --json
granoflow api version --json
granoflow api capabilities --json
```

這些命令適合作為腳本開头的可達性檢查。

## 任務與專案命令

```bash
granoflow task list --json
granoflow task create --input task.json --dry-run --json
granoflow task create --input task.json --json
granoflow task complete --id task_123 --json
granoflow project list --json
granoflow project create --input project.json --dry-run --json
```

`--input <file|->` 表示從文件或 stdin 讀取 JSON。`--dry-run` 只生成本機請求預覽，不會
調用寫入端點。

## 回顧命令

```bash
granoflow review day show --date 2026-05-24 --json
granoflow review day update --date 2026-05-24 --input day.json --dry-run --json
granoflow review week show --week-start 2026-05-18 --json
granoflow review week update --week-start 2026-05-18 --input week.json --json
granoflow review week value --week-start 2026-05-18 --value-id value_123 --input value.json --json
```

## 卡片與卡組命令

```bash
granoflow deck list --json
granoflow deck show deck_123 --json
granoflow deck create --name "考試複習" --json
granoflow deck cards deck_123 --include-children --active --json
granoflow deck import anki notes.apkg --dry-run --json
granoflow deck import anki notes.apkg --confirm dry_run_123 --skip-cards-with-missing-media --json

granoflow card archive card_123 --json
granoflow card unarchive card_123 --json
granoflow card trash card_123 --json
granoflow card unlink --task-id task_123 --card-id card_123 --json
granoflow card unlink-note --task-id task_123 --note-id note_123 --json
```

## 離線備份包轉換

```bash
granoflow backup decrypt \
  --input encrypted.flow.grano \
  --output plaintext.flow.grano \
  --secret-file secret.txt \
  --json

granoflow backup encrypt \
  --input plaintext.flow.grano \
  --output encrypted.flow.grano \
  --secret-env GRANOFLOW_BACKUP_SECRET \
  --json
```

這兩個命令只轉換備份包文件，不建立 App 備份，也不把資料恢復到 App。

## AI agent 命令

```bash
granoflow ai-agent tools --json
granoflow ai-agent task export --id task_123 --json
granoflow ai-agent task validate --input draft.json --json
granoflow ai-agent task import --input draft.json --dry-run --json
```

AI agent 命令仍然通過本機 HTTP API 與 App 授權邊界執行，不會直接讀取本機資料庫。

## JSON 自動化約定

公開命令支援 `--json`。JSON 模式只輸出結構化 envelope，不混入人類文字。腳本應根據
錯誤碼分支，而不是根據一段自然語言提示做判斷。
