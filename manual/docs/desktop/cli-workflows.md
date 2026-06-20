---
title: "用 CLI 和 HTTP 思考工作流"
description: "用 Think in workflows 的方式，把 CLI 命令和 HTTP 调用组合成可审查、可回滚的日常自动化流程。"
---

自动化脚本最容易出错的地方，不是少写一个命令，而是没有先判断“这一段需要 App 吗”“这次
会不会写入数据”“失败时怎么停下来”。GranoFlow 的本机 HTTP API 和 CLI 适合按工作流
组织：先抓现状，再预览写入，最后执行并记录结果。

## Think in capture：先抓现状

先确认 App、本机接口和目标数据是否可达：

```bash
# CLI 方式
granoflow health --json
granoflow api version --json
granoflow task list --json

# 直接 HTTP 调用
curl -s http://127.0.0.1:56789/v1/health
curl -s http://127.0.0.1:56789/v1/tasks
```

如果这一步失败，不要继续写入。先去排查 App 是否运行、本机 HTTP API 是否开启、端口是否
一致、访问码是否正确。

## Think in preview：写入前先看请求

创建任务、更新回顾这类写操作，优先用 JSON 文件保存输入，再用 `--dry-run` 预览：

```bash
granoflow task create --input task.json --dry-run --json
granoflow review day update --date 2026-05-24 --input day.json --dry-run --json
```

`--dry-run` 返回的是本地请求预览，不会调用真实写入端点。它适合放在脚本的审查阶段，让
你确认路径、方法和 JSON 结构都符合预期。

## Think in commit：确认后再执行

确认输入无误后，再去掉 `--dry-run`：

```bash
granoflow task create --input task.json --json
granoflow task complete --id task_123 --json
granoflow review week value --week-start 2026-05-18 --value-id value_123 --input value.json --json
```

写入命令依赖运行中的 App 服务层。CLI 不会在 App 不可达时绕过 App 直接写数据库。

## Think in cards：把卡片操作当作独立流程

复习卡片和任务的关系容易被脚本写乱。建议把卡组导入、卡片归档、任务解绑分成独立步骤：

```bash
granoflow deck import anki notes.apkg --dry-run --json
granoflow deck import anki notes.apkg --confirm dry_run_123 --json
granoflow card unlink --task-id task_123 --card-id card_123 --json
```

导入 Anki 包时，先 dry-run，确认 dry-run id 后再 confirm。任务解绑只解除关系，不应被当作
删除卡片。

## Think in backup packages：备份包转换是离线工具

CLI 当前公开的备份能力是离线包转换：

```bash
granoflow backup decrypt --input encrypted.flow.grano --output plaintext.flow.grano --secret-file secret.txt --json
granoflow backup encrypt --input plaintext.flow.grano --output encrypted.flow.grano --secret-file secret.txt --json
```

这适合在你已经拿到备份包时做加密状态转换。它不创建新的 App 备份，也不把备份恢复进 App。
涉及真实备份创建、恢复和云同步风险时，请回到 App 内的数据安全与恢复流程。

## Think in automation：给 AI 助手或脚本

- 全程优先 `--json`
- 开始阶段先调用 `/v1/health` 或 `granoflow health --json`
- 写入前先用 `--dry-run` 保存请求预览
- 对错误码建立分支，例如 `config_error`、`auth_error`、`network_error`、`api_error`
- 不把 CLI 输出的人类可读文本当作稳定协议
- 不把 `scripts/anz` 当作用户自动化接口；它只服务仓库工程流程

## 下一步

理解工作流之后，再看 JSON、环境变量和直接 HTTP 调用，会更容易把脚本写成可复用的小工具，
而不是一次性的终端命令串。
