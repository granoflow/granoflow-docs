---
title: "本机 HTTP API 工作原理"
description: "理解本机 HTTP API 的监听地址、端口配置、访问码保护与 App 保护门禁。"
---

<!-- markdownlint-disable MD013 -->

## Think in boundaries：先分清两层

- **本机 HTTP API 可直接处理**：`/v1/health`、`/v1/status`、命令参数校验、JSON 格式检查
- **需要 App 执行业务逻辑**：`/v1/task`、`/v1/project`、`/v1/backup`、`/v1/ai-agent` 等数据操作命令

本机 HTTP API 不会绕过 App 直接操作生产数据。所有数据操作最终由 App 执行。

如果 App 未运行，API 会返回 `app_not_reachable`。

## Think in the local address：本机 HTTP API 是什么

本机 HTTP API 通过本机回环地址监听：`http://127.0.0.1:<port>`。

- host 固定为 `127.0.0.1`
- 默认端口为 `42667`
- 端口可在设置页修改，范围 `1024..65535`
- API 配置是本机监听配置，不是远程 API 服务
- App 的"命令行工具"设置页会显示当前本机地址。你可以复制根地址，也可以用默认浏览器打开 `/v1/health` 检查本机 HTTP 接口是否可达；本机 HTTP 接口关闭时，这两个动作会禁用，先开启接口后再使用。
- `granoflow.com` 文档页不再默认被视为业务接口可信来源；需要调试时，必须在设置页临时开启官方文档调试并使用 1 小时访问码。
- “允许任何设备来源”属于高级来源设置，必须先开启访问码保护并保留至少一个已启用访问码。

## API 端点示例

```bash
# 健康检查
curl http://127.0.0.1:42667/v1/health

# 系统状态
curl http://127.0.0.1:42667/v1/status

# 查看 API 配置
granoflow bridge config show --json
```

## 端口变更后的关键动作

`bridge port set` 写入后，**必须重启 App** 才会生效。若你是在 App 设置页且本机 HTTP 接口已经关闭时修改端口，新端口会在下次开启本机 HTTP 接口后生效。

本机 HTTP 配置只保存 schema、protocol、host、port 等非敏感字段，不保存访问码、nonce、App lock 状态、账号或跨设备凭据。

## Think in permissions：API 门禁顺序

受保护的本机 HTTP 端点有固定门禁顺序：

1. 本机 HTTP API 总开关（关闭时所有端点返回 403）
2. 来源检查（本机页面默认允许，官方文档调试需要临时开启）
3. App lock（需要先解锁 App）
4. nonce
5. 访问码保护（仅在开启时需要访问码）

`/v1/health`、`/v1/status` 等只读端点通常不受门禁限制。
