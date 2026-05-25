---
title: "CLI 安全设置与密钥边界"
description: "理解本地访问开关、Token Verification、App Lock、脱敏与多种密钥的边界。"
---

## Think in permissions：先看命令是否被允许

受保护的 App command channel 命令有固定 gate 顺序：

1. 本地访问总开关（CLI enabled）
2. App lock
3. nonce
4. Token Verification（仅在开启时）

`help`、`version`、`open` 属于发现与唤起入口，不要求 token。

## Token Verification

开启后，读取或修改 App 数据的受保护命令需要 token。

- 可通过 `--token <value>` 传入
- 或使用环境变量 `GRANOFLOW_CLI_TOKEN`

## 本地访问开关

本地访问关闭时，受保护命令会被拒绝（如 `cli_disabled`），不是静默失败。

## App Lock 与 nonce

即使 Token Verification 关闭，前置 gate 仍生效。App lock 或 nonce 校验失败时，命令会先被拒绝。

## Think in redaction as assistance

脱敏用于减少外部 AI 输入中的敏感信息暴露风险。它是辅助处理，不等于加密、token 校验或权限系统。

## Think in secrets separately：三类密钥不要混用

- **CLI token**：本机命令授权令牌
- **备份密钥**：备份包加密/恢复 secret（通常通过文件提供）
- **云端同步密钥**：用于端到端加密云同步数据恢复

这三者用途不同，不能互相替代。

## CLI 临时资产清理

`granoflow clean --json` 是 native CLI 本地清理命令，用于清理 CLI 临时资产目录：

```bash
granoflow clean --json
granoflow clean --older-than 30m --json
granoflow clean --all --json
```

`--all` 不能和 `--older-than` 同时使用。
