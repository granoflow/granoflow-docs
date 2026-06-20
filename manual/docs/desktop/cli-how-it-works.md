---
title: "本机 HTTP API 工作原理"
description: "理解本机 HTTP API 的监听地址、端口配置、访问码保护，以及 CLI 为什么只是一个可选客户端。"
---

<!-- markdownlint-disable MD013 -->

## Think in layers：先分清两层

GranoFlow 的桌面自动化有两层：

- **本机 HTTP API**：由运行中的 App 提供，负责公开端点、权限检查和业务数据读写。
- **`granoflow` CLI**：独立下载的命令行客户端，负责把命令参数转换成 HTTP 请求，或处理少量
  不依赖 App 的本地文件任务。

这意味着 CLI 不拥有一份独立数据库，也不会绕过 App 写数据。App 未运行、接口未开启或权限
检查失败时，相关 CLI 命令也会失败。

## Think in the local address：本机地址是什么

本机 HTTP API 通过回环地址监听：

```text
http://127.0.0.1:<port>
```

- host 固定为 `127.0.0.1`
- 当前默认端口为 `56789`
- 端口可以在 App 设置页修改，范围为 `1024..65535`
- API 配置是本机监听配置，不是云端 API 服务
- 设置页会显示当前本机地址，并提供复制根地址、打开 `/v1/health` 等辅助动作

如果接口关闭，复制和打开动作会被禁用；先开启接口后再检查。

## CLI 如何找到 API

CLI 按以下顺序决定 API 地址：

1. `--api-base-url`
2. `GRANOFLOW_API_BASE_URL`
3. CLI 配置文件中的 `api_base_url`
4. 默认值 `http://127.0.0.1:56789`

你可以用下面的命令查看当前配置来源：

```bash
granoflow config --json
```

## API 端点示例

```bash
# 健康检查
curl http://127.0.0.1:56789/v1/health

# 版本信息
curl http://127.0.0.1:56789/v1/version

# CLI 等效调用
granoflow health --json
granoflow api version --json
```

## Think in permissions：API 门禁顺序

受保护的本机 HTTP 端点会经过固定门禁：

1. 本机 HTTP API 总开关
2. 来源检查
3. App Lock
4. nonce
5. 访问码保护
6. 端点级别权限

`/v1/health`、`/v1/version` 等发现类端点适合作为连通性检查。读取或修改 App 数据的端点
通常需要更多门禁。

## 官方文档调试与外部来源

`granoflow.com` 文档页不再默认被视为业务接口可信来源。需要在文档页调试本机接口时，
请在 App 设置页临时开启官方文档调试，并使用生成的 1 小时访问码。

“允许任何设备来源”属于高级来源设置。开启它之前，必须先启用访问码保护，并至少保留一个
已启用访问码。

## 参考：规则与边界

- 本机 HTTP API 不会自动暴露到局域网或公网。
- 移动端如提供临时本机接口，也属于前台会话能力，不是常驻后台服务。
- CLI 的 `backup encrypt/decrypt` 是离线文件转换，不需要本机 HTTP API。
- `scripts/anz` 是仓库工程 CLI，不属于用户自动化接口。
