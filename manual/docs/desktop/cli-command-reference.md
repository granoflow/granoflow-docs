---
title: "CLI 命令与参数参考"
description: "查看 granoflow CLI 的公开稳定命令、参数与 App 依赖分类。"
---

<!-- markdownlint-disable MD013 -->

## 快速分类

### 不需要运行中 App

- `help`
- `version`
- `lang`
- `bridge config show`
- `bridge port set <port>`
- `bridge config repair --reset`
- `clean`
- `backup-package inspect|encrypt|decrypt|merge`

### 需要运行中 App command channel

- `display *`
- `open <route>`（不带 route 的 `open` 用于唤起 App）
- `status`
- `sync run`
- `task|project|milestone|tag|domain-value|review`
- `quick-add`、`logout`、`export`、`import`
- `backup create|restore`
- `ai-agent` 真实数据命令

## 基础命令

```bash
granoflow help
granoflow help task
granoflow version --json
granoflow lang get
granoflow lang zh-HK
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
granoflow display language zh-CN --json
granoflow display theme dark --json
granoflow display font-size large --json
granoflow display window-layout landscape --json
granoflow display reset --json
```

## 业务对象命令（需要 App）

资源：`task`、`project`、`milestone`、`tag`、`domain-value`、`review`

结构化输入：`--input <file|->`

```bash
granoflow task list --json
granoflow task create --input task.json --json
granoflow task tag add t_123 custom_bug --json
granoflow tag template show custom_bug --json
granoflow project update p_123 --input patch.json --json
granoflow review day show --date 2026-05-24 --json
```

## 备份命令（需要 App）

```bash
granoflow backup create --out backup.granobackup --accept-sync-risk --json
granoflow backup restore --file backup.granobackup --preview --json
granoflow backup restore --file backup.granobackup --confirm --backup-secret-file secret.txt --json
```

`--preview` 与 `--confirm` 互斥。

## backup-package 命令（native CLI）

```bash
granoflow backup-package inspect --file backup.granobackup --json
granoflow backup-package encrypt --file plain.granobackup --out encrypted.granobackup --secret-file secret.txt --json
granoflow backup-package decrypt --file encrypted.granobackup --out plain.granobackup --secret-file secret.txt --json
granoflow backup-package merge --left a.granobackup --right b.granobackup --out merged.granobackup --json
```

## JSON 自动化约定

公开命令支持 `--json`。JSON 模式只输出结构化 envelope，不混入人类文本。
