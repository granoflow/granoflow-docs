---
title: "设置总览"
description: "了解 GranoFlow 设置页的当前分组方式，以及哪些入口只影响当前设备，哪些会进入账号、同步、数据、订阅或 AI 相关页面。"
---

<!-- markdownlint-disable MD013 -->

如果你不知道某个设置会影响哪里，先看它属于哪个分组：外观、偏好设置和安全通常只影响这台设备；数据管理、关于、调研与活动和 Pro 设置会带你进入对应页面，处理更具体的账号、同步、订阅、AI 或数据规则。

设置相关页面：

- [设置总览](/manual/interface/settings-overview/)
- [语言、主题与字体](/manual/interface/settings-language-appearance/)
- [当前设备偏好](/manual/interface/device-preferences/)
- [富文本内容](/manual/interface/markdown-content/)
- [账号、同步与数据入口](/manual/interface/settings-account-data-entrypoints/)
- [命令行工具](/manual/desktop/command-line-tool/)

设置页是 GranoFlow 的统一入口。它把显示体验、偏好设置、安全、数据管理、隐私与诊断、关于、调研与活动和 Pro 设置放在一个地方，但每个入口影响的范围不一样。

## 外观

外观通常包含主题、字体大小和语言。

<!-- manual-screenshot:id=interface-settings-overview-main -->
![设置总览 界面截图](../../screenshots/zh-cn/interface-settings-overview-main.png)

这些设置主要影响你在当前设备上看到的界面。切换语言、改深色模式或调大字体，不会改写任务、项目、标签、回顾记录，也不会改变 [多端同步](/manual/data-security-and-recovery/sync/) 中的数据含义。

如果你只是想调整阅读和显示体验，继续阅读 [语言、主题与字体](/manual/interface/settings-language-appearance/)。

## 偏好设置与安全

偏好设置控制这台设备上的操作习惯，例如计时器背景音、AI 助手入口、命令行工具、标签管理、消息与提醒，以及减少部分底部提示。应用锁属于单独的「安全」分组。

可以把这些选项理解为：这台设备怎么提醒我、怎么保护我、怎么显示反馈。它们不应被理解为账号级业务数据，也不应被当作跨设备同步承诺。

“消息与提醒”集中管理任务提醒和通知中心消息。任务提醒可以控制是否显示系统横幅以及是否播放声音；通知中心消息默认只进入 App 内通知列表，只有你开启系统横幅后才会弹出系统提示。静默同步属于云同步的默认补偿能力，不需要在这里开启或关闭。

远程富文本资源提醒位于「Pro 设置」。它控制远程图片、音频、视频和第三方链接加载前是否弹出确认，不会改写富文本内容本身，也不会同步到其他设备。需要了解写法和限制时，阅读 [富文本内容](/manual/interface/markdown-content/)。

## 数据管理与账号同步

「数据管理」入口用于本地备份、卡片盒导入导出、媒体缓存和危险操作；账号入口位于「关于」区域，用于登录、退出、查看账号状态或进入相关账号能力。登录后的同步状态和设备关系仍由账号与同步页面承接。

如果你要处理登录、设备或同步问题，先阅读 [账号总览](/manual/account/overview/) 和 [设备管理](/manual/account/device-management/)。如果你要理解数据如何在多台设备之间流动，阅读 [多端同步](/manual/data-security-and-recovery/sync/)。

## AI、标签与回顾配置

偏好设置里提供 AI 助手、标签管理等入口；Pro 设置里提供 AI 研究偏好、AI 脱敏、回顾和卡片相关高级配置。

这些入口是为了进入具体配置或说明页面，不代表 AI 会自动修改你的记录。涉及外部 AI 的流程，应先理解 [AI 辅助](/manual/ai-assistance/overview/) 和 [AI 助手与剪贴板](/manual/ai-assistance/clipboard-assistant/) 的边界。

## 命令行工具

设置页在「偏好设置」中提供“命令行工具”入口，用于安装或修复 `granoflow` 命令，并确认当前平台是否可以在终端里调用 CLI。

这里的 CLI 只面向用户本机和运行中的桌面 App，不包含开发、构建、云端管理员、内部调试或发布类命令。

如果你只是手动使用 `granoflow help`、`granoflow version`、`granoflow status --json`、`granoflow display get --json` 或 `granoflow open <route> --json`，通常不需要额外设置。需要让脚本或 AI 助手读取结构化结果时，优先使用 `--json`。

需要从终端调整 App 显示偏好时，使用 `granoflow display language/theme/font-size/reset`。这些命令只影响显示体验，不会清空账号或业务数据。

业务对象命令包括 `task`、`project`、`milestone`、`tag`、`domain-value` 和 `review`。这些命令需要运行中的桌面 App 承接；App 不可达时会返回 `app_not_reachable`，不会绕过 App 直接读取或写入本地数据库。

CLI 的 `backup create` 和 `backup restore` 也需要运行中的桌面 App 承接。备份恢复前应先使用 `--preview` 查看摘要，只有明确 `--confirm` 后才会恢复。

完整导航见 [命令行工具](/manual/desktop/command-line-tool/)。如果你需要完整命令矩阵，直接阅读 [CLI 命令与参数参考](/manual/desktop/cli-command-reference/)；如果你在确认 token 或本地访问边界，阅读 [CLI 安全设置与密钥边界](/manual/desktop/cli-security-and-settings/)。

## 隐私与诊断、关于、调研与活动和 Pro

「隐私与诊断」用于控制是否发送崩溃报告和匿名使用统计，不上传任务、项目、回顾正文、图片或附件内容。高风险或敏感环境中，可以在这里关闭帮助改进开关。

「关于」区域通常包含版本信息、账号入口和必要的辅助入口。隐藏诊断或测试数据入口不会作为普通用户默认入口展示。

「调研与活动」用于用户主动参与反馈、研究或公开社区活动，不影响日常任务和数据结构。

「Pro 设置」用于查看订阅入口、全量附件同步、清空本地附件、远程富文本资源提醒、卡片媒体缓存、卡片练习组大小、领域数量上限、AI 研究偏好和 AI 脱敏等高级入口。具体权益和平台规则以 [订阅总览](/manual/subscription/overview/) 及实际平台展示为准。

## 下一步

- 想调整显示效果，阅读 [语言、主题与字体](/manual/interface/settings-language-appearance/)。
- 想理解本机开关，阅读 [当前设备偏好](/manual/interface/device-preferences/)。
- 想在描述或卡片字段里添加表格、公式、图片或远程媒体，阅读 [富文本内容](/manual/interface/markdown-content/)。
- 想处理账号、同步或数据入口，阅读 [账号、同步与数据入口](/manual/interface/settings-account-data-entrypoints/)。
- 想让终端、脚本或 AI 助手调用 GranoFlow，阅读 [命令行工具](/manual/desktop/command-line-tool/)。
