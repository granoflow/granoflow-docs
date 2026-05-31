---
title: "用 CLI 和 HTTP 思考工作流"
description: "用 Think in workflows 方式，把 CLI 命令和 HTTP 调用组合成可执行的日常流程。"
---

## Think in capture：先抓现状

```bash
# CLI 方式
granoflow status --json
granoflow task list --json

# 直接 HTTP 调用
curl -s http://127.0.0.1:42667/v1/status
curl -s http://127.0.0.1:42667/v1/task
```

先确认 App 可达、同步状态和任务总览，再进入写操作。

## Think in structure：结构化写入

```bash
granoflow task create --input task.json --json
granoflow task set t_123 --input patch.json --json
```

用 `--input <file|->` 让变更可复用、可审查。

## Think in review：回顾与校验

```bash
granoflow review day show --date 2026-05-24 --json
granoflow review week list --json
```

在脚本里记录关键输出，便于后续追踪。

## Think in backup：高风险操作前先备份

```bash
granoflow backup create --out before-change.granobackup --accept-sync-risk --json
```

恢复前先预览：

```bash
granoflow backup restore --file before-change.granobackup --preview --json
```

## Think in automation：给 AI 助手或脚本

- 全程优先 `--json`
- 先判断是否需要运行中的 App（通过 `/v1/status` 检查）
- 对长流程加入错误分支（如 `app_not_reachable`、`cli_disabled`）
- 也可直接通过 curl 调用本机 HTTP API，不依赖 `granoflow` CLI 是否安装
