---
title: "JSON 输出与脚本调用"
description: "理解 --json、--input <file|->、stdin 与稳定错误处理，便于脚本和 AI 自动化调用。"
---

## `--json` 输出约定

CLI 的 `--json` 模式只输出结构化结果，适合脚本解析。

建议：

- 自动化流程统一加 `--json`
- 不依赖人类可读文本做逻辑判断

## `--input <file|->`

业务对象命令支持结构化输入：

- `--input task.json`：从文件读取 JSON
- `--input -`：从 stdin 读取 JSON

示例：

```bash
cat payload.json | granoflow task create --input - --json
```

## 稳定错误处理

常见稳定错误：

- `app_not_reachable`
- `cli_disabled`
- `invalid_argument`
- `unknown_command`

自动化脚本应按错误码分支处理，而不是只判断一段文字。

## 环境变量

- `GRANOFLOW_CLI_LANG`：CLI 输出语言
- `GRANOFLOW_CLI_TOKEN`：受保护命令 token
- `GRANOFLOW_CLI_IPC_PORT` / bridge 配置：本机通道端口相关

## 脚本实践建议

- 开始阶段先执行 `granoflow version --json` 与 `granoflow bridge config show --json`
- 需要 App 的命令先做可达性检查
- 写操作前先 `backup create`