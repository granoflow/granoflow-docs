---
title: "安全设置与密钥边界"
description: "理解本机 HTTP API 的本地访问开关、Token 认证、App Lock、脱敏与多种密钥的边界。"
---

## Think in permissions：先看 API 门禁

受保护的本机 HTTP 端点有固定门禁顺序：

1. 本机 HTTP API 总开关（关闭时所有端点返回 403）
2. App lock
3. nonce
4. Token Verification（仅在开启时需要）
5. 端点级别权限（部分命令需要更高权限）

`/v1/health` 和 `/v1/status` 等只读端点通常不受门禁限制。
`granoflow help`、`granoflow version`、`granoflow open` 属于发现与唤起入口，不要求 token。

## Token Verification

开启后，读取或修改 App 数据的受保护端点需要 API token。

可通过以下方式传递：
- **HTTP 请求**：`Authorization: Bearer <token>` 请求头
- **CLI 命令**：`--token <value>` 参数
- **环境变量**：`GRANOFLOW_CLI_TOKEN`

## 本机 HTTP API 开关

本机 HTTP API 关闭时，所有受保护端点会被拒绝（返回 `cli_disabled`），不是静默失败。

关闭状态下，CLI 仍可执行不依赖 API 的本地命令（`help`、`version`、`backup-package`、`clean`）。

## App Lock 与 nonce

即使 Token Verification 关闭，前置门禁仍生效。App lock 或 nonce 校验失败时，请求会先被拒绝。

## Think in redaction as assistance

脱敏用于减少外部 AI 输入中的敏感信息暴露风险。它是辅助处理，不等于加密、token 校验或权限系统。

## Think in secrets separately：三类密钥不要混用

- **API token**：本机 HTTP API 授权令牌（通过 Authorization header 或 CLI `--token` 传递）
- **备份密钥**：备份包加密/恢复 secret（通常通过文件提供）
- **云端同步密钥**：用于端到端加密云同步数据恢复

这三者用途不同，不能互相替代。

## CLI 临时资产清理

`granoflow clean --json` 是 native CLI 本机清理命令，用于清理 CLI 临时资产目录：

```bash
granoflow clean --json
granoflow clean --older-than 30m --json
granoflow clean --all --json
```

`--all` 不能和 `--older-than` 同时使用。

## 环境变量速查

| 变量 | 用途 |
| --- | --- |
| `GRANOFLOW_CLI_LANG` | CLI 输出语言 |
| `GRANOFLOW_CLI_TOKEN` | API token（等价于 Authorization header） |
| `GRANOFLOW_CLI_IPC_PORT` | 本机 HTTP API 端口（等价于 bridge 端口） |
