---
title: "安全设置与密钥边界"
description: "理解本机 HTTP API 的本地访问开关、访问码保护、官方文档调试、App Lock、脱敏与多种密钥的边界。"
---

## Think in permissions：先看 API 门禁

受保护的本机 HTTP 端点有固定门禁顺序：

1. 本机 HTTP API 总开关
2. 来源检查
3. App Lock
4. nonce
5. 访问码保护
6. 端点级别权限

`/v1/health` 和 `/v1/version` 等发现类端点适合做连通性检查。读取或修改 App 数据的端点
需要通过更多门禁。

## 访问码保护

开启访问码保护后，受保护端点需要访问码。访问码可以通过两种方式传递：

- **HTTP 请求**：`Authorization: Bearer <token>` 请求头
- **CLI 命令**：`--token <value>` 参数或 `GRANOFLOW_API_TOKEN` 环境变量

不要把访问码放进 URL，也不要把它长期写进脚本仓库。

## 官方文档调试

`granoflow.com` 文档页不再默认拥有业务接口访问权。需要在文档页调试本机接口时，请在
App 设置页手动开启官方文档调试。

每次开启都会生成一个临时访问码，有效期 1 小时。关闭调试、到期、重启 App，或再次开启
调试后，旧访问码都会失效。

## 本机 HTTP API 开关

本机 HTTP API 关闭时，受保护端点会被拒绝，不会静默写入。此时 CLI 仍可执行不依赖 API
的本地命令，例如：

```bash
granoflow help
granoflow config --json
granoflow backup decrypt --input encrypted.flow.grano --output plaintext.flow.grano --secret-file secret.txt --json
```

## App Lock、nonce 与来源检查

即使访问码保护关闭，前置门禁仍生效。来源检查、App Lock 或 nonce 校验失败时，请求会先
被拒绝。遇到这类错误时，先回到 App 内确认接口开启、App 已解锁、当前请求来源被允许。

## Think in redaction as assistance

脱敏用于减少外部 AI 输入中的敏感信息暴露风险。它是辅助处理，不等于加密、访问码校验或
权限系统。

## Think in secrets separately：三类密钥不要混用

- **API 访问码**：本机 HTTP API 授权凭据，通过 Authorization header、CLI `--token`
  或 `GRANOFLOW_API_TOKEN` 传递。
- **备份密钥**：备份包加密或解密 secret，通常通过 `--secret-file` 或 `--secret-env`
  提供给离线备份转换命令。
- **云端同步密钥**：用于端到端加密云同步数据恢复。

这三者用途不同，不能互相替代。

## CLI 临时资产清理

如果 CLI 后续命令生成短期明文资产，应按命令帮助或设置页说明清理。当前公开的稳定手工入口
仍以 CLI help 为准；不要把 App 设置项当作 CLI 安装器或系统权限管理器。

## 环境变量速查

| 变量 | 用途 |
| --- | --- |
| `GRANOFLOW_API_BASE_URL` | 本机 HTTP API 基地址，如 `http://127.0.0.1:56789` |
| `GRANOFLOW_API_TOKEN` | API 访问码 |
| `GRANOFLOW_CONFIG` | CLI 配置文件路径 |

## 参考：规则与边界

- 桌面 App 不安装 CLI，也不写 PATH、MSIX alias 或 symlink。
- CLI 配置只保存 API 地址和 token 等连接信息；不要把备份密钥、云同步密钥和 API 访问码混用。
- 允许任何设备来源必须建立在访问码保护之上，不能把 CORS 或来源放行误当成授权。
