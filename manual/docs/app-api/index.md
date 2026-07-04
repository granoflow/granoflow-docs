---
title: App 接口总览
description: "理解本地 HTTP API、MCP Server 和 ChatGPT Connector 的关系。"
---

App 接口不是给所有人都要打开的功能。它适合想让 AI 工具或脚本在明确授权下访问 Granoflow 的用户。

## 一个真实场景

本机 AI 工具通常走本地 HTTP API 或 MCP；浏览器里的 ChatGPT 需要 Connector；手机局域网连接还要考虑地址和访问码。

## 本地接口的两个检查点

![命令行工具设置](../../screenshots/zh-cn/route-command-line-tool-settings-command-line-tool-main.png)

命令行工具设置页是本地接口的起点。这里能看到本机地址、访问码和接口状态；连接 AI 工具前，先确认这些信息。

![访问日志](../../screenshots/zh-cn/route-local-http-api-access-log-settings-command-line-tool-access-log-main.png)

访问日志适合排查连接问题。请求能不能到达、是否被拒绝、是否来自预期工具，都可以先从这里判断。

## 怎么判断下一步

| 你遇到的情况 | 先看什么 | 下一步 |
| --- | --- | --- |
| 不知道该从哪里开始 | 当前页面标题和主要入口 | 只选择和当前目标有关的一项 |
| 操作后结果不对 | 状态、空提示、访问记录或同步进度 | 回到上一层，按顺序排查 |
| 担心影响数据 | 备份、同步、账号或权限说明 | 先停下，确认范围后再继续 |

## 边界

先分清 AI 运行在哪里，再选择连接方式。

## 下一步

读完这一节后，回到你正在处理的任务，只选一个最小动作继续：记录一条输入、检查一个状态、或打开相关设置完成一次确认。
