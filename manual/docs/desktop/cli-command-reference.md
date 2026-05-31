---
title: "CLI 命令与参数参考"
description: "查看 granoflow CLI 的公开稳定命令、参数、HTTP 端点映射与 App 依赖分类。"
---

<!-- markdownlint-disable MD013 -->

## HTTP API 等效

`granoflow` CLI 提供的所有功能也对应本机 HTTP API 端点。CLI 是可选的交互式客户端，你可以直接用 curl 调用：

```bash
# 等价于 granoflow status --json
curl -s http://127.0.0.1:42667/v1/status

# 等价于 granoflow task list --json
curl -s http://127.0.0.1:42667/v1/task

# 等价于 granoflow backup create --out backup.granobackup
curl -s -X POST http://127.0.0.1:42667/v1/backup -d '{"out":"backup.granobackup"}'
```

本机 HTTP API 默认监听 `http://127.0.0.1:42667`，端口可在设置页修改。

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

### 需要运行中 App（通过 HTTP API）

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

## bridge 命令（本机 HTTP 端口配置）

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
