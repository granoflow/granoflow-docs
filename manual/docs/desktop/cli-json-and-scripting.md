---
title: "JSON 输出、环境变量与直接 HTTP 调用"
description: "理解 --json、--input <file|->、stdin、HTTP 端点与环境变量，便于脚本和 AI 自动化调用。"
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

## 直接 HTTP 调用

如果不依赖 CLI，可以直接调用本机 HTTP API：

```bash
# 检查 API 是否可用
curl -s http://127.0.0.1:42667/v1/health

# 读取系统状态
curl -s http://127.0.0.1:42667/v1/status

# 写入操作（需要 API token）
curl -s -X POST http://127.0.0.1:42667/v1/task \
  -H "Authorization: Bearer <token>" \
  -d '{"title": "示例任务"}'
```

本机 HTTP API 默认监听 `http://127.0.0.1:42667`。

## 环境变量

| 变量 | 用途 |
| --- | --- |
| `GRANOFLOW_CLI_LANG` | CLI 输出语言 |
| `GRANOFLOW_CLI_TOKEN` | API token（等价于 CLI `--token`） |
| `GRANOFLOW_CLI_IPC_PORT` | 本机 HTTP API 端口 |
| `GRANOFLOW_API_URL` | 本机 HTTP API 基地址（如 `http://127.0.0.1:52001`） |

## 稳定错误处理

常见稳定错误：

- `app_not_reachable`
- `cli_disabled`
- `invalid_argument`
- `unknown_command`

自动化脚本应按错误码分支处理，而不是只判断一段文字。

## 脚本实践建议

- 开始阶段先执行 `granoflow version --json` 或 `curl -s http://127.0.0.1:42667/v1/status`
- 需要 App 的命令先做可达性检查
- 写操作前先 `backup create`
