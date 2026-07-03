---
title: "JSON 输出、环境变量与直接 HTTP 调用"
description: "理解 --json、--input <file|->、stdin、HTTP 端点与环境变量，便于脚本和 AI 自动化调用。"
---

## `--json` 输出约定

CLI 的 `--json` 模式只输出结构化结果，适合脚本解析。

建议：

- 自动化流程统一加 `--json`
- 不依赖人类可读文本做逻辑判断
- 根据 envelope 里的状态和错误码分支处理

## `--input <file|->`

写入类命令通过 JSON 输入传递结构化数据：

- `--input task.json`：从文件读取 JSON
- `--input -`：从 stdin 读取 JSON

示例：

```bash
cat payload.json | granoflow task create --input - --dry-run --json
```

先 dry-run，确认请求预览后再执行真实写入。

## 直接 HTTP 调用

如果不依赖 CLI，可以直接调用本机 HTTP API：

```bash
# 检查 API 是否可用
curl -s http://127.0.0.1:56789/v1/health

# 读取版本
curl -s http://127.0.0.1:56789/v1/version

# 写入操作（通常需要 API token）
curl -s -X POST http://127.0.0.1:56789/v1/tasks \
  -H "Authorization: Bearer <token>" \
  -d '{"title": "示例任务"}'
```

本机 HTTP API 默认监听 `http://127.0.0.1:56789`。如果 App 设置页显示了不同端口，请以
设置页为准。

## 环境变量

| 变量 | 用途 |
| --- | --- |
| `GRANOFLOW_API_BASE_URL` | 本机 HTTP API 基地址 |
| `GRANOFLOW_API_TOKEN` | API 访问码 |
| `GRANOFLOW_CONFIG` | CLI 配置文件路径 |

## 稳定错误处理

常见错误类别包括：

- 配置错误：API 地址或配置文件无效
- 认证错误：访问码缺失、错误或过期
- 网络或可达性错误：App 未运行、本机接口未开启、端口不一致
- API 业务错误：App 返回的业务规则错误
- API gap：CLI 请求的能力尚未由当前 API 提供

自动化脚本应按错误码分支处理，而不是只判断一段文字。

## 脚本实践建议

- 开始阶段先执行 `granoflow health --json` 或 `curl -s http://127.0.0.1:56789/v1/health`
- 写操作前先加 `--dry-run`
- token 只从环境变量、配置文件或安全凭据存储读取，不写进仓库
- 不调用 `scripts/anz` 做用户数据自动化；它是工程脚本入口
- 不把离线 `backup encrypt/decrypt` 当作 App 备份创建或恢复流程
