---
title: "CLI 排障"
description: "处理 command not found、app_not_reachable、端口冲突、token 失败和 JSON 输入错误。"
---

## `command not found: granoflow`

先回到 App 设置页的“命令行工具”重新安装或修复 CLI，然后重开终端再试。

## `app_not_reachable`

说明命令需要运行中的 App command channel，但当前不可达。

检查顺序：

1. App 是否正在运行
2. 本地访问是否开启
3. bridge 端口是否一致

```bash
granoflow bridge config show --json
```

## 端口冲突或端口错误

如果端口被其他进程占用，先改端口，再重启 App：

```bash
granoflow bridge port set 52001 --json
```

端口变更后必须重启 App。

## token 校验失败

确认以下项：

- Token Verification 是否开启
- `--token` 或 `GRANOFLOW_CLI_TOKEN` 是否正确
- token 是否传给了受保护命令

## 本地访问关闭（`cli_disabled`）

到 App 设置页开启本地命令行访问后重试。

## App Lock / nonce 拒绝

先在 App 内完成解锁，再重试命令。

## 备份密钥错误

`backup restore` 或 `backup-package` 使用密钥文件时，确保文件存在、可读、内容正确且非空。

## JSON 输入错误

`--input` 报错时检查：

- 文件是否存在
- JSON 是否合法
- 顶层是否为 JSON 对象