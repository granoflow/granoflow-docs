---
title: "排障"
description: "处理 command not found、API 不可达、端口错误、token 失败和 JSON 输入错误。"
---

## `command not found: granoflow`

这通常表示你只安装了桌面 App，还没有单独安装 CLI，或 CLI 所在目录没有加入 PATH。

处理顺序：

1. 到官网或 release 页面下载与你的平台匹配的 CLI 包。
2. 解压后把可执行文件放到你自己的命令目录。
3. 确认该目录已经加入 PATH。
4. 在新终端里运行 `granoflow help`。

桌面 App 不会替你安装、修复或卸载 CLI，也不会创建 `/usr/local/bin/granoflow` symlink。

## API 不可达

如果 `granoflow health --json` 或业务命令无法连接 API，先检查：

1. GranoFlow 桌面 App 是否正在运行
2. 本机 HTTP API 是否已在设置页开启
3. CLI 使用的 API 地址是否与 App 设置页一致
4. 端口是否被其他进程占用

```bash
curl -s http://127.0.0.1:56789/v1/health
granoflow config --json
```

如果你修改过端口，请把示例里的 `56789` 换成当前端口。

## 端口错误

CLI 不再通过 `bridge port set` 修改 App 端口。请在 App 设置页修改本机 HTTP API 端口，
然后让 CLI 使用同一个基地址：

```bash
granoflow --api-base-url http://127.0.0.1:52001 health --json
```

也可以通过 `GRANOFLOW_API_BASE_URL` 或 CLI 配置文件固定这个地址。

## token 校验失败

确认以下项：

- 访问码保护是否开启
- `--token`、`GRANOFLOW_API_TOKEN` 或 `Authorization` 请求头是否正确
- token 是否传给了受保护端点
- 官方文档调试的临时访问码是否已经过期

## 本机 HTTP API 关闭

到 App 设置页开启本机 HTTP API 后重试。接口关闭时，发现类或离线文件命令可能仍可运行，
但读取或修改 App 数据的命令不会绕过 App 写数据库。

## App Lock / nonce 拒绝

先在 App 内完成解锁，再重试命令。脚本中遇到这类错误时，应停止当前写入流程，而不是自动
反复重试。

## 备份密钥错误

`backup decrypt/encrypt` 使用密钥文件或密钥环境变量时，确认：

- 文件存在且可读
- 文件内容不是空值
- `--secret-file` 与 `--secret-env` 没有同时使用
- 输入包确实是对应的 encrypted 或 plaintext 备份包

## JSON 输入错误

`--input` 报错时检查：

- 文件是否存在
- JSON 是否合法
- 顶层是否为 JSON 对象
- stdin 模式是否使用了 `--input -`

## 公开能力不匹配

如果你看到旧文档、旧脚本或旧教程提到 App 内安装 CLI、`bridge port set`、`backup create`
或 `backup restore`，请优先以当前手册、OpenAPI 和 `granoflow help --json` 为准。这些旧
入口不应再作为当前公开承诺使用。
