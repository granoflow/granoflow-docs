---
title: "Granoflow MCP Server"
description: "通过 @granoflow/mcp-server 把 Granoflow 的本机接口服务交给支持 MCP 的 AI 客户端。"
---

<!-- markdownlint-disable MD013 -->

很多 agent 会话结束时，真正有价值的东西还散在对话里：临时决定、失败原因、绕过办法、任务进展、下一步计划，还有那些一周后很可能忘掉的经验。我们在 Codex、Cursor、Claude Code 或其他 agent 里忙了一整天，却很少把这些材料认真收回来。时间一久，只记得“那天很忙”，却说不清到底解决了什么。

Granoflow MCP Server 要把这件事变成 agent 工作流的一部分。连接好以后，agent 不只是和你聊天，还能在你确认后读取当前任务、预览准备写入的改动、完成任务、补充任务回顾，并把值得长期记住的经验整理成复习卡片草稿。你可以直接要求 agent 分析今天的任务：哪些应该写入 Granoflow，哪些需要补充背景、过程和结果，哪些问题值得在任务回顾里留下来，又有哪些知识点、判断原则或失败经验适合做成复习卡片草稿。

真正写回前，仍然应该由你确认。MCP Server 不是一个新的 Granoflow App，也不是新的云服务；它只是在你的电脑上运行，把 Granoflow 当前设备的连接能力交给本机 agent 使用。

## 先理解它连接的是哪一层

Granoflow MCP Server 本身不保存任务、项目、里程碑、回顾或复习卡片，也不直接访问 Granoflow 数据库。真正的数据仍然在你正在运行的 Granoflow App 里。

它只做三件事：

1. 在本机启动一个给 agent 使用的连接层。
2. 读取你配置的 Granoflow 地址，例如 `http://127.0.0.1:56789`。
3. 把 agent 的请求转发给当前运行的 Granoflow。

这意味着，MCP Server 能不能工作，首先取决于 Granoflow App 是否已经打开，本机连接是否已经开启，以及地址和访问码是否配置正确。它不是“自动同步服务”，也不会在 Granoflow 没有运行时凭空读到你的任务。

## 什么时候优先使用 MCP Server

当你希望本地 agent 直接帮你读任务、整理项目进展、起草日回顾、准备复习卡片草稿，或者在你确认后写回 Granoflow 时，优先使用 MCP Server。

它尤其适合这些场景：

- 你在同一台电脑上同时打开 Granoflow 和 Codex、Cursor 等 agent。
- 你希望 agent 能直接读取和准备写入 Granoflow，而不是只阅读一段技术说明。
- 你需要先预览写入，再确认是否真的创建、更新或完成任务。
- 你想让 agent 在每次会话开始时先检查连接，确认它看到的是当前设备。
- 你希望 agent 在完成任务时，把真正有复用价值的经验写成任务回顾或复习卡片草稿。

如果你要连接的是 ChatGPT、Gemini 或其他浏览器聊天页面和 App，它们通常不能直接访问你的 `127.0.0.1`。这时应改读 [Granoflow ChatGPT Connector](/manual/app-api/chatgpt-connector/)，先给 Granoflow 准备一个外网可访问的安全地址。

## 安装前检查

开始前，先确认这几件事：

1. 在电脑上安装 Node.js 20 或更新版本。
2. 打开 Granoflow 桌面端。
3. 进入“本机接口服务”或“App 接口”页面。
4. 开启本机连接服务。
5. 确认页面显示的本机地址，桌面端默认通常是 `http://127.0.0.1:56789`。
6. 如果你开启了访问码或 token，把它放在 agent 客户端的环境变量里，不要写进公开文档、截图或聊天记录。

你可以先在终端检查 Granoflow 的本机连接是否可达：

```bash
curl -s http://127.0.0.1:56789/v1/health
```

健康响应会包含当前连接状态和版本信息。这个检查很重要：如果 Granoflow 本机连接本身不可达，MCP Server 启动成功也没有用。

## 安装和验证 MCP 包

最常用的方式是在 agent 客户端配置里直接通过 `npx` 启动：

```bash
npx -y @granoflow/mcp-server --version
```

如果这个命令能输出版本号，说明 npm 包可以在当前电脑运行。你也可以全局安装：

```bash
npm install -g @granoflow/mcp-server
```

普通使用不需要手动启动一个长期运行的后台服务。支持 MCP 的客户端会按配置拉起这个命令，并和它通信。

## 配置 Codex

在 `~/.codex/config.toml` 中加入：

```toml
[mcp_servers.granoflow]
type = "stdio"
command = "npx"
args = ["-y", "@granoflow/mcp-server"]

[mcp_servers.granoflow.env]
GRANOFLOW_API_BASE_URL = "http://127.0.0.1:56789"
```

保存后重启 Codex，或按 Codex 当前版本支持的方式重新加载 MCP servers。

如果你启用了访问码或 token，把它放到同一段环境变量里：

```toml
GRANOFLOW_API_TOKEN = "..."
```

不要把真实 token 发给不可信工具，也不要放进公开 issue、截图或共享文档。

## 配置 Cursor

在项目的 `.cursor/mcp.json` 或全局 `~/.cursor/mcp.json` 中加入：

```json
{
  "mcpServers": {
    "granoflow": {
      "command": "npx",
      "args": ["-y", "@granoflow/mcp-server"],
      "env": {
        "GRANOFLOW_API_BASE_URL": "http://127.0.0.1:56789"
      }
    }
  }
}
```

保存后重启 Cursor，或重新加载 MCP servers。

## 第一次连接后先做什么

连接成功后，先让 agent 做三件只读检查：

- 检查 Granoflow 是否在线。
- 查看当前 App 和接口版本。
- 读取当前任务列表。

如果连接检查不通过，先回到 Granoflow 的本机连接页面确认服务是否开启。不要在连接失败时让 agent 假装已经读取或更新了 Granoflow。

如果要测试写入，先使用预览模式。例如创建任务时，把 `dryRun` 设为 `true`。预览模式只返回将要写入的内容，不应创建真实任务。确认预览符合你的意图后，再让 agent 发起真正写入。

## 让 agent 写回时该怎么要求

MCP Server 提供的是连接能力，不是自动判断边界的替身。你可以让 agent 做这些事：

- 先读取当前任务列表，再判断哪些任务和本轮会话有关。
- 把新任务做成结构化草稿，而不是只写一句标题。
- 完成任务时，把有意义的决定、教训、失败模式或可复用流程写入任务回顾。
- 只为值得长期记住的知识点创建复习卡片草稿，不要把普通活动流水账做成卡片。
- 在一天工作结束后，结合当天任务、项目进展和已有回顾，起草日回顾；主观评分和最终文字仍由你确认。

一个好的请求可以这样说：

> 请读取今天相关的 Granoflow 任务，结合我们这次会话，先预览：哪些任务应该更新，哪些任务可以完成，哪些经验值得做成复习卡片。不要直接写入，先让我确认。

这样 agent 会先把建议摊开，而不是悄悄改变你的数据。

## 安全边界

Granoflow MCP Server 连接的是你当前设备上的本机连接服务。它不会自动把数据上传到 Granoflow 服务器，也不会把访问码写入 `~/.config/granoflow-mcp/config.json`。访问码应通过 agent 客户端环境变量传入。

写入类操作默认应先预览。创建、更新、完成、删除、导入、导出或写回回顾内容前，都应该让 agent 明确说明它准备改什么，并由你确认。

如果你不确定当前 agent 客户端是否可信，先关闭 Granoflow 的本机连接服务。需要排查时，再打开本机连接页面里的连接日志，查看是否真的收到请求、来源 IP 是什么、访问位置是什么、状态是否成功。

## 常见问题

### MCP 客户端看不到 Granoflow 能力

先确认 `npx -y @granoflow/mcp-server --version` 能运行，再重启 agent 客户端。还要检查配置文件位置是否正确，以及 JSON、TOML 是否有格式错误。

### 能力能显示，但连接检查失败

这通常表示 MCP Server 已启动，但 Granoflow 本机连接不可达。确认 Granoflow 已打开、本机连接服务已开启，并且 `GRANOFLOW_API_BASE_URL` 和 App 页面显示的地址一致。

### 同一台电脑之外的设备能不能用

桌面端默认的 `127.0.0.1` 地址只适合同一台电脑。如果 agent 客户端在另一台电脑上运行，而 Granoflow 在手机或另一台电脑上，需要使用局域网地址或 HTTPS 映射，并先阅读 [手机端局域网连接](/manual/app-api/mobile-lan-connection/) 和 [安全设置与访问码](/manual/app-api/security-access-code/)。

### 它和 ChatGPT Connector 有什么区别

MCP Server 面向 Codex、Cursor、Claude Code 这类支持 MCP 的本地 agent，通常通过 `npx -y @granoflow/mcp-server` 启动。它适合同一台电脑上的 agent 直接连接 Granoflow。

如果你要用的是 ChatGPT、Gemini 或其他浏览器聊天页面和 App，它们通常不能直接访问你电脑上的 `127.0.0.1`。这种场景不要强行套 MCP Server，改读 [Granoflow ChatGPT Connector](/manual/app-api/chatgpt-connector/)：它会把 Granoflow 放到受保护的 HTTPS 域名后面，让浏览器和 App 也能在你确认后帮你分析任务、写回回顾和准备复习卡片草稿。
