---
title: "CLI 命令与 HTTP 映射"
description: "查看 granoflow CLI 当前公开命令、参数、HTTP 端点映射与 App 依赖分类。"
---

<!-- markdownlint-disable MD013 -->

`granoflow` CLI 是本机 HTTP API 的客户端。读写 App 数据的命令会调用
`http://127.0.0.1:<port>` 下的公开端点；离线备份包转换命令则只处理你提供的备份包
文件，不连接 App。

如果你不想安装 CLI，也可以直接用 curl 调用相同的 HTTP API。

## 直接 HTTP 调用示例

```bash
# 健康检查
curl -s http://127.0.0.1:56789/v1/health

# 版本信息
curl -s http://127.0.0.1:56789/v1/version

# 任务列表
curl -s http://127.0.0.1:56789/v1/tasks

# 创建任务；受保护端点通常需要访问码
curl -s -X POST http://127.0.0.1:56789/v1/tasks \
  -H "Authorization: Bearer <token>" \
  -d '{"title":"示例任务"}'
```

## 快速分类

### 只需要 CLI 本身

- `help`
- `config`
- `backup decrypt`
- `backup encrypt`

### 需要本机 HTTP API 可达

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

## 基础命令

```bash
granoflow help
granoflow help task
granoflow help --json
granoflow config --json
```

`config` 会显示 CLI 当前使用的 API 地址、token 来源和配置文件路径。token 会被脱敏。

## API 与状态命令

```bash
granoflow health --json
granoflow api version --json
granoflow api capabilities --json
```

这些命令适合作为脚本开头的可达性检查。

## 任务与项目命令

```bash
granoflow task list --json
granoflow task create --input task.json --dry-run --json
granoflow task create --input task.json --json
granoflow task complete --id task_123 --json
granoflow project list --json
granoflow project create --input project.json --dry-run --json
```

`--input <file|->` 表示从文件或 stdin 读取 JSON。`--dry-run` 只生成本地请求预览，不会
调用写入端点。

## 回顾命令

```bash
granoflow review day show --date 2026-05-24 --json
granoflow review day update --date 2026-05-24 --input day.json --dry-run --json
granoflow review week show --week-start 2026-05-18 --json
granoflow review week update --week-start 2026-05-18 --input week.json --json
granoflow review week value --week-start 2026-05-18 --value-id value_123 --input value.json --json
```

## 卡片与卡组命令

```bash
granoflow deck list --json
granoflow deck show deck_123 --json
granoflow deck create --name "考试复习" --json
granoflow deck cards deck_123 --include-children --active --json
granoflow deck import anki notes.apkg --dry-run --json
granoflow deck import anki notes.apkg --confirm dry_run_123 --skip-cards-with-missing-media --json

granoflow card archive card_123 --json
granoflow card unarchive card_123 --json
granoflow card trash card_123 --json
granoflow card unlink --task-id task_123 --card-id card_123 --json
granoflow card unlink-note --task-id task_123 --note-id note_123 --json
```

## 离线备份包转换

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

这两个命令只转换备份包文件，不创建 App 备份，也不把数据恢复到 App。

## AI agent 命令

```bash
granoflow ai-agent tools --json
granoflow ai-agent task export --id task_123 --json
granoflow ai-agent task validate --input draft.json --json
granoflow ai-agent task import --input draft.json --dry-run --json
```

AI agent 命令仍然通过本机 HTTP API 与 App 授权边界执行，不会直接读取本地数据库。

## JSON 自动化约定

公开命令支持 `--json`。JSON 模式只输出结构化 envelope，不混入人类文本。脚本应根据
错误码分支，而不是根据一段自然语言提示做判断。
