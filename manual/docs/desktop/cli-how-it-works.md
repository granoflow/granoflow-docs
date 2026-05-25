---
title: "CLI 如何连接到 App"
description: "理解 native CLI 与运行中 App command channel 的边界，以及 loopback bridge 与端口规则。"
---

<!-- markdownlint-disable MD013 -->

## Think in boundaries：先分清两层

- **Native CLI 可直接执行**：`help`、`version`、`lang`、`bridge`、`clean`、`backup-package`
- **需要运行中 App command channel**：`display`、`status`、`sync`、`open <route>`、业务对象、`backup`、`ai-agent` 真实数据命令

CLI 不会绕过 App 直接操作生产数据。

## Think in the running App：为什么很多命令依赖 App

业务对象与备份属于用户数据命令。CLI 只做参数校验、JSON 输入读取和转发，实际读写由 App 执行。

如果 App 未运行或不可达，命令会返回 `app_not_reachable`。

## Think in the local port：loopback bridge 是什么

CLI 与 App 通过本机 loopback 通道通信：`127.0.0.1:<port>`。

- host 固定为 `127.0.0.1`
- port 可配置，范围 `1024..65535`
- bridge 配置是本机端口配置，不是远程 API 服务

查看配置：

```bash
granoflow bridge config show --json
```

修改端口：

```bash
granoflow bridge port set 52001 --json
```

修复配置：

```bash
granoflow bridge config repair --reset --json
```

## 端口变更后的关键动作

`bridge port set` 写入后，**必须重启 App** 才会生效。

`bridge-config.json` 只保存 schema、protocol、host、port 等非敏感字段，不保存 token、nonce、App lock 状态、账号或跨设备凭据。
