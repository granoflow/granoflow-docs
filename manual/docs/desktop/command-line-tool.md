---
title: "命令行工具"
description: "在桌面端使用 GranoFlow CLI 管理显示偏好、任务、项目、里程碑、标签、领域价值观、回顾和本地备份。"
---

如果你想用终端或脚本操作 GranoFlow，先在桌面端设置里安装 `granoflow` 命令，并保持 GranoFlow App 正在运行。之后可以用它查看状态、调整显示偏好、批量处理任务和项目，也可以创建或预览恢复本地备份。

本页里的 CLI 只指安装到用户电脑上的 `granoflow` 命令。它不是开发、构建或云端运维入口，不提供云端管理员、购买平台管理员、内部调试重置、云端清空或发布类命令。

## 安装与确认

先安装 GranoFlow 桌面端。然后打开 App 设置里的“命令行工具”页面，安装或修复 `granoflow` 命令。

使用任务、项目、备份等业务命令时，GranoFlow App 需要正在运行。CLI 会把请求交给 App 处理，不会直接打开你的本地数据库。

常用检查：

```bash
granoflow
granoflow help
granoflow version --json
granoflow status --json
granoflow display get --json
```

只运行 `granoflow` 会打开 GranoFlow 桌面端。查看命令说明请使用 `granoflow help`、`granoflow --help` 或 `granoflow -h`。

所有命令都支持 `--json`，适合脚本或 AI 助手读取。JSON 模式只输出结构化结果。如果 App 不可达，会返回稳定的 `app_not_reachable` 错误。

## 显示偏好

显示偏好命令用来调整 App 界面语言、外观和字体大小：

```bash
granoflow display get --json
granoflow display language zh-CN --json
granoflow display theme dark --json
granoflow display font-size large --json
granoflow display reset --json
```

`granoflow display language` 修改 App 界面语言。`granoflow lang` 只修改当前终端窗口里的 CLI 输出语言。

`display reset` 只重置显示偏好，不会清空账号、任务、项目或本地数据。

## 业务对象

公开资源名使用单数：`task`、`project`、`milestone`、`tag`、`domain-value`、`review`。

常见用法：

```bash
granoflow task list --json
granoflow task create --input task.json --json
granoflow task complete <task-id> --json
granoflow project list --json
granoflow milestone review <milestone-id> --json
granoflow tag list --json
granoflow domain-value limit show --json
granoflow review day show --date 2026-05-12 --json
```

结构化输入统一使用 `--input <file|->`。

传文件路径时，CLI 会读取这个 JSON 文件。传 `-` 时，CLI 会从 stdin 读取。JSON 里的字段缺失表示不修改；字段出现表示更新；显式写 `null` 或空数组表示清空。

## 状态和图片

任务、项目、里程碑都有状态动作。优先使用清楚的动作命令：

```bash
granoflow task start <task-id> --json
granoflow task complete <task-id> --json
granoflow task reopen <task-id> --json
granoflow project archive <project-id> --json
granoflow milestone complete <milestone-id> --json
```

`task delete` 会把任务移入回收状态，不是物理删除。

任务完成时，如果之前没有开始时间，GranoFlow 会按 App 内相同规则补齐开始时间。

任务描述可以写 Markdown。远端图片 URL 只会作为文本保存，不会被下载、加密或变成独立图片。

独立图片区用 `image` 子命令或 JSON 里的 `images` 字段管理。`images` 表示最终目标集合：可以保留已有图片、添加本地文件，或用空数组清空。

## 标签、价值观和回顾

固定标签是只读的。自定义标签可以创建、更新和删除。删除自定义标签时，GranoFlow 会同时把它从相关对象上解绑。

领域价值观用 `domain-value` 管理。达到数量上限后，继续添加会返回错误，不会静默覆盖旧内容。

`review day` 和 `review week` 支持查看和更新。`review month` 首版只支持 `list` 和 `show`。

## 备份

CLI 的备份命令复用 App 内的本地备份流程：

```bash
granoflow backup create --out backup.granobackup --accept-sync-risk --json
granoflow backup restore --file backup.granobackup --preview --json
granoflow backup restore --file backup.granobackup --confirm --backup-secret-file secret.txt --json
```

`--preview` 只检查备份文件和摘要，不写入数据。`--confirm` 才会执行恢复。两者不能同时使用。

备份密钥只能通过文件传入，这样可以避免把密钥直接留在命令历史里。

旧的 `quick-add`、`logout`、`export`、`import` 仍保留兼容，但不会作为主帮助里的核心入口。日常数据保护优先使用 `backup create` 和 `backup restore`。

## 下一步

- 想确认命令是否可用，先运行 `granoflow` 打开桌面端，再使用 `granoflow help` 和 `granoflow status --json`。
- 想批量写入任务、项目或回顾，先准备 JSON 文件，再使用 `--input`。
- 想处理备份恢复，先运行 `backup restore --preview` 看摘要，再决定是否使用 `--confirm`。
