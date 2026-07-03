---
title: "Granoflow ChatGPT Connector"
description: "把 Granoflow 放到受保护的 HTTPS 域名后，让 ChatGPT 帮你管理任务、回顾和复习卡片。"
---

<!-- markdownlint-disable MD013 -->

很多工作不是没有发生，而是没有留下来。你在 ChatGPT 里讨论方案、拆任务、复盘问题、请它帮忙整理材料，一天下来好像做了很多事；可是一周后、一个月后，再问自己“那天到底推进了什么”，细节往往已经散掉了。剩下的只是忙碌感，而不是可以回顾、分析和复用的经验。

Granoflow ChatGPT Connector 要解决的就是这个断点。连接好以后，你可以让 ChatGPT 回看当天的任务和对话，分析哪些工作应该写入 Granoflow，哪些任务需要补充背景、过程和结果，哪些问题曾经卡住你，最后是怎样处理的，又有哪些判断原则、知识点或失败经验值得整理成复习卡片。真正写回 Granoflow 前，仍然应该由你确认。

我们已经在 ChatGPT 里完成了有效验证。Gemini 和其他能连接外部服务的浏览器聊天页面或 App，还没有纳入同等测试范围；但只要它们允许你配置访问地址、身份验证和操作说明，机制上也应该可以使用同一套连接思路。

## 先判断 AI 在哪里运行

连接方式只取决于一件事：AI 是在你的电脑上运行，还是在浏览器或手机 App 里运行。

如果你使用的是 Codex、Cursor、Claude Code、OpenClaw、Hermes 这类本地 agent，它们通常和 Granoflow 在同一台电脑上。这样的工具可以直接连接 App 页面显示的 `127.0.0.1` 地址，不需要公网域名。具体做法见 [Granoflow MCP Server](/manual/app-api/granoflow-mcp-server/) 或 [连接 Codex、OpenClaw、Hermes](/manual/app-api/connect-ai-tools/)。

如果你使用的是 ChatGPT、Gemini 或其他浏览器聊天页面和手机 App，情况就不同。它们通常运行在云端或另一台设备上，不能直接访问你电脑上的 `127.0.0.1`。这时才需要 ChatGPT Connector：你先给 Granoflow 准备一个受保护的外部入口，再让 ChatGPT 通过这个入口连接。

无论走哪条连接，复盘目标都一样：把一天里发生过的工作整理成任务、回顾、问题记录和可复习的经验。差别只是 AI 从哪里连接到 Granoflow。

## 连接后可以做什么

连接成功以后，你可以要求 ChatGPT 做这些事：

- 回看当天讨论和任务，判断哪些工作应该写入 Granoflow。
- 给任务补充背景、过程、结果和下一步。
- 总结当天遇到的问题，以及最后怎样处理。
- 把真正有复用价值的判断原则、知识点或失败经验整理成复习卡片草稿。

它不适合把所有聊天记录自动倒进 Granoflow。真正有价值的是经过筛选的任务事实、完成回顾、问题处理过程和可复习经验；普通流水账、情绪化总结和没有复用价值的活动记录，不应该变成复习卡片。

## Connector 做了什么

Granoflow ChatGPT Connector 不是一个新的 App，也不是新的云同步服务。它只是给 ChatGPT 一条安全的路，让它在你允许的范围内连接当前设备上的 Granoflow。

这条路可以理解成四步：

1. Granoflow 仍然运行在你的设备上。
2. 你在 Granoflow 里开启本机连接服务。
3. 你把这个本机地址变成一个 ChatGPT 能访问的安全网页地址。
4. 你把这个地址、访问码和操作规则交给 ChatGPT。

最容易误解的是第三步。ChatGPT Web 运行在云端，它不能直接访问你电脑上的 `127.0.0.1`，也通常不能访问家里 Wi-Fi 里的 `192.168.x.x` 地址。要让 ChatGPT 连接 Granoflow，必须给它一个它能从云端访问的 HTTPS 地址，并且这个地址要有访问码或 token 保护。

## 写回前的原则

把本机连接服务放到外网，意味着外部服务有机会访问你当前设备上的 Granoflow 数据。请先确认你真的需要这样做。

建议：

- 必须开启访问码或 token 保护。
- 不要把访问码写进公开文档、公开聊天、截图或网页。
- 优先只开放你需要的能力；不需要写入时，先只读。
- 使用完可以关闭本机连接服务，或关闭外网映射。
- 定期查看 Granoflow 的连接日志，确认没有陌生请求。
- 不要为了“更容易连上”而关闭安全设置。

写入前也要保留人的确认。ChatGPT 可以分析、整理、草拟和提出建议，但创建任务、完成任务、写入回顾、导入导出或生成复习卡片草稿前，都应该先让它展示准备写入的内容。

## 配置路径

开始配置前，先确认这几件事：

1. 打开 Granoflow。
2. 进入“本机接口服务”或“App 接口”页面。
3. 开启本机连接服务。
4. 复制当前设备的连接地址。
5. 开启访问码或 token 保护。
6. 用 Cloudflare、花生壳、ngrok、Tailscale Funnel、路由器或 NAS 把这个地址映射成 HTTPS 域名。
7. 在浏览器中打开你的 HTTPS 域名，确认能看到 Granoflow 的响应。
8. 把 HTTPS 域名填到 ChatGPT Actions 或其他支持外部请求的 AI 工具里。
9. 把访问码放在 Actions 或对应工具的安全配置里，不要放进知识源正文。

如果其中任何一步不确定，先不要把访问码交给聊天工具。你可以先只验证健康检查，确认请求确实到了 Granoflow，再继续配置写入能力。

## 选择外部入口服务

如果你已经有自己的域名，优先考虑 Cloudflare Tunnel。它不要求你在路由器上直接开放公网端口，适合把本机或家中设备上的服务安全地发布到自己的域名下。

- Cloudflare Tunnel: [https://developers.cloudflare.com/tunnel/](https://developers.cloudflare.com/tunnel/)
- Cloudflare Tunnel 设置指南: [https://developers.cloudflare.com/tunnel/setup/](https://developers.cloudflare.com/tunnel/setup/)

如果你只是想快速验证，也可以考虑这些常见服务：

- ngrok: [https://ngrok.com/](https://ngrok.com/)
- Tailscale Funnel: [https://tailscale.com/docs/features/tailscale-funnel](https://tailscale.com/docs/features/tailscale-funnel)
- No-IP: [https://www.noip.com/](https://www.noip.com/)
- Duck DNS: [https://www.duckdns.org/](https://www.duckdns.org/)
- Dynu: [https://www.dynu.com/](https://www.dynu.com/)

如果你在中国大陆，花生壳是常见选择：

- 贝锐花生壳: [https://hsk.oray.com/](https://hsk.oray.com/)
- 贝锐官网: [https://www.oray.com/](https://www.oray.com/)

这些服务的目标都相似：把你设备上的 Granoflow 连接地址，变成 ChatGPT 能访问的安全网页地址。它们的注册、域名、证书、套餐、可用地区和限制不同，请以官网说明为准。

有些路由器或 NAS 自带 DDNS、端口转发、反向代理或远程访问功能。如果你熟悉这些设置，也可以直接使用它们。

常见官方说明：

- ASUS 路由器 DDNS: [https://www.asus.com/support/faq/1011725/](https://www.asus.com/support/faq/1011725/)
- ASUS 路由器端口转发: [https://www.asus.com/support/faq/1037906/](https://www.asus.com/support/faq/1037906/)
- TP-Link DDNS: [https://www.tp-link.com/us/support/faq/1367/](https://www.tp-link.com/us/support/faq/1367/)
- TP-Link 端口转发: [https://www.tp-link.com/us/support/faq/1379/](https://www.tp-link.com/us/support/faq/1379/)
- FRITZ!Box Dynamic DNS: [https://fritz.com/en/apps/knowledge-base/FRITZ-Box-7590/30_setting-up-dynamic-dns-in-the-fritz-box](https://fritz.com/en/apps/knowledge-base/FRITZ-Box-7590/30_setting-up-dynamic-dns-in-the-fritz-box)
- Synology DDNS: [https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/connection_ddns](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/connection_ddns)

路由器直连通常更依赖你的宽带是否有公网 IP、运营商是否限制入站端口、家里网络是否稳定，以及你是否会配置 HTTPS 证书。看起来步骤多，但本质上只是“给家里的服务起一个外网名字”。如果不确定，建议优先用 Cloudflare Tunnel、ngrok、Tailscale Funnel 或花生壳这类服务。

## 手机连接时要注意

手机上的 Granoflow 可以开启临时本机连接服务，但手机系统可能会在锁屏、切换 App、进入省电状态或网络变化时暂停连接。

更稳定的方式通常是：

1. 在一台长期在线的电脑上运行 Granoflow。
2. 在这台电脑上开启本机连接服务。
3. 把这台电脑的连接地址映射到 HTTPS 域名。
4. 让 ChatGPT 调用这个 HTTPS 域名。

如果你要让 ChatGPT 调用手机上的 Granoflow，也可以尝试，但需要让手机保持前台连接，并理解它可能随时中断。手机端局域网规则见 [手机端局域网连接](/manual/app-api/mobile-lan-connection/)。

## 给 ChatGPT 复制的 Connector 指令

下面这段不是 Codex skill，也不是 MCP skill。它是给 ChatGPT 或其他 Web AI 工具阅读的 Connector 说明。你可以把它复制到 Custom GPT Instructions、项目说明或你使用的 AI 工具配置里。

复制前，把 `https://your-domain.example.com` 和 `<YOUR_GRANOFLOW_ACCESS_TOKEN>` 改成你自己的 HTTPS 域名和访问码。如果你的工具支持单独的认证配置，请把访问码放到认证配置里，而不是放在说明正文里。

```markdown
# Granoflow ChatGPT Connector

Use this connector when helping me manage Granoflow tasks, projects, reviews, and review cards.

## What Granoflow Is

Granoflow is my task, project, review, and review-card app. It stores my work items and personal review material on my own device first. The Connector lets you call my Granoflow App API through a HTTPS address that I configured.

## API Endpoint

Base URL:

> **IMPORTANT:** replace the example below with my own Granoflow HTTPS domain before using this connector.

https://your-domain.example.com

OpenAPI schema:

Use the Granoflow public API contract as the schema source:

https://granoflow.com/api/

When configuring Custom GPT Actions or another tool that imports OpenAPI, replace the schema server URL with my own Granoflow HTTPS domain above.

Authentication:

- Use the Granoflow access token I configured in this tool's authentication or request header settings.
- Do not ask me to paste the token into normal chat unless troubleshooting absolutely requires it.
- Do not expose the token in summaries, logs, generated documents, or shared output.

## When To Use

Use Granoflow when I ask you to:

- inspect, create, update, finish, or review tasks;
- understand project or milestone progress;
- draft a daily, weekly, or monthly review;
- turn completed work into review-card drafts;
- help me remember lessons, decisions, mistakes, reusable processes, or knowledge points;
- prepare a plan and then write confirmed changes back to Granoflow.

## Connection First

Before doing real work, check whether the Granoflow API is reachable.

If the API is unreachable:

1. Tell me briefly that the Granoflow App must be open.
2. Ask me to enable the App API in Granoflow.
3. Ask me to check whether the HTTPS domain or tunnel is still running.
4. Do not pretend that you have read or updated Granoflow.

## Safety Rules

- Treat Granoflow data as private user data.
- Prefer reading before writing.
- Ask for confirmation before creating, updating, deleting, finishing, importing, exporting, or otherwise changing data.
- Do not create review cards from plain activity logs. Only create cards for lessons, decisions, failure modes, reusable process details, or knowledge worth remembering.
- Keep generated review cards simple: one durable knowledge point per card.
- If you are unsure whether an action is safe, explain the risk and ask me before calling the API.

## Task Work

When working with tasks:

1. Read the relevant task or task list first.
2. Preserve my wording unless I ask you to rewrite it.
3. When finishing a task, help write a useful completion review only if there is something worth remembering.
4. Suggest review cards only when the completed work produced reusable knowledge.

## Review Cards

A good review card should have:

- Front: a concrete question or prompt.
- Back: the answer, rule, analysis, or solution worth remembering.
- Source summary: the task, incident, or context that produced this lesson.

Avoid making cards for vague motivation, generic advice, or facts that are not useful to review later.

## Daily and Weekly Reviews

When drafting reviews:

- separate recorded facts from inference;
- do not pretend to know my mood or intent with certainty;
- ask me to confirm subjective scores, feelings, and final wording before saving;
- use completed tasks, project progress, task reviews, and review cards as evidence.

## Success Criteria

A good Granoflow Connector session ends with:

- the relevant Granoflow state read back or summarized;
- any proposed changes clearly shown before writing;
- confirmed changes written only after I approve them;
- useful lessons turned into review-card drafts when appropriate;
- no access token or private endpoint leaked into public output.
```

## 如果 ChatGPT 要求 OpenAPI

如果你使用 Custom GPT Actions，ChatGPT 可能会要求 OpenAPI schema。Granoflow 的公开接口合同可在这里查看：

- [https://granoflow.com/api/](https://granoflow.com/api/)

配置时，把 schema 里的 server 地址改成你自己的 HTTPS 域名，例如：

```yaml
servers:
  - url: https://your-domain.example.com
```

不同 AI 工具的界面经常变化。Granoflow 手册只说明 Granoflow 侧需要什么：一个可访问的 HTTPS 域名、访问码保护、OpenAPI 合同和清晰的操作确认规则。具体怎么点，请查看对应工具官网，或让 AI 按当前界面一步步带你完成。

## 什么时候不适合使用

以下情况不建议使用 Granoflow ChatGPT Connector：

- 你不理解“把本机连接放到外网”的含义。
- 你无法确认访问码是否安全保存。
- 你正在使用公共电脑、公共 Wi-Fi 或不可信网络。
- 你只需要同一台电脑上的本地 AI 工具连接 Granoflow。
- 你不希望 ChatGPT 或任何云端 AI 工具接触你的任务、回顾或卡片内容。

如果只是本机使用，读 [连接 Codex、OpenClaw、Hermes](/manual/app-api/connect-ai-tools/) 就够了。如果要从电脑连接手机，先读 [手机端局域网连接](/manual/app-api/mobile-lan-connection/)。
