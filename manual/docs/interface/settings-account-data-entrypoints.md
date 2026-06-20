---
title: "账号、同步与数据入口"
description: "了解设置页中的账号、同步、数据、订阅、AI 助手、标签管理和 Pro 设置入口分别应该如何理解。"
---

如果你在设置页看到账号、同步、数据、订阅、AI 助手、标签管理或 Pro 设置入口，可以把它们当成通往专门页面的按钮：账号管登录和设备，同步管多设备记录一致，数据管理管本地备份、卡片盒和危险操作，订阅管 Pro 权益，AI 助手和标签管理分别管外部 AI 工具配合方式和任务标签。

设置相关页面：

- [设置总览](/manual/interface/settings-overview/)
- [语言、主题与字体](/manual/interface/settings-language-appearance/)
- [当前设备偏好](/manual/interface/device-preferences/)
- [账号、同步与数据入口](/manual/interface/settings-account-data-entrypoints/)

这些入口不会只停留在当前设置页里。点进去后，通常会进入更具体的页面，并且有自己的规则和限制。

如果某个操作涉及恢复、删除、同步重置、密钥、订阅权益或账号退出，先读对应页面再继续。截图只帮助你确认入口位置；就算截图没有加载，也可以按下面的文字判断每个入口的用途。

## 账号入口

账号入口位于设置页的「关于」区域。它用来注册、登录、退出、查看账号状态，并把当前设备接入同一个账号体系。

<!-- manual-screenshot:id=interface-device-preferences-main -->
![账号、同步与数据入口 界面截图](../../screenshots/zh-cn/interface-device-preferences-main.png)

登录后，你才能购买或恢复 GranoFlow Pro 权益，启用需要账号的云同步能力，并进入与账号有关的个性化配置。

如果你想知道账号到底能做什么，阅读 [账号总览](/manual/account/overview/)。如果你想理解当前设备和其他设备之间的关系，阅读 [设备管理](/manual/account/device-management/)。

## 同步入口

同步状态通常通过账号、顶部同步状态或数据相关页面进入。它用来让任务、项目、回顾等核心记录在多台设备之间保持一致。

同步不等于“把本机所有设置都复制到另一台设备”。它主要处理业务记录的数据流动。语言、主题、字体、应用锁等当前设备偏好属于另一个范围。

如果你想确认哪些内容会同步，或者同步异常时应该先检查什么，阅读 [多端同步](/manual/data-security-and-recovery/sync/)。

## 数据与恢复入口

「数据管理」入口用来导入、导出、备份、恢复、查看卡片媒体缓存，或执行危险清理操作。

这些操作通常比外观设置和当前设备偏好更敏感。备份是为了在换机、重装或出现异常时保留重要数据；恢复会把备份或云端数据带回当前设备。

数据管理页以功能卡片呈现日常操作：「本地备份」卡片里的「创建本地备份包」生成加密的 `.flow.grano`，适合整机迁移或恢复；「卡片盒」卡片提供 grano 卡片盒导入、Anki 导入说明弹窗、跳转到卡片盒列表的「导出卡片盒」、当前卡片缓存占用与清空缓存入口。`.deck.grano` 只处理选定卡片盒、卡片和可打包的本地图片媒体，不创建任务本体，也不能替代完整本地备份。破坏性清理入口单独放在页面底部的「危险操作」分组。卡片盒与备份的区别阅读 [卡片盒、导入与导出](/manual/review-cards/decks-import-export/)。

恢复前，先确认备份来源、账号状态、密钥和版本条件。详情阅读 [备份与恢复](/manual/data-security-and-recovery/backup-and-restore/)。

## 订阅入口

订阅入口位于「Pro 设置」中，用来查看 GranoFlow Pro 权益、购买状态、恢复购买说明，以及不同平台购买可能带来的限制。

Pro 权益可能影响云同步、附件能力、存储配额或高级配置的可用范围。实际价格和是否可购买，以平台展示为准。

如果你想理解为什么会有订阅，阅读 [订阅总览](/manual/subscription/overview/)。如果你想看权益边界，阅读 [订阅权益](/manual/subscription/entitlements/)。

## AI 助手与标签管理

AI 助手入口通常位于「偏好设置」，用来选择或配置你要配合 GranoFlow 使用的外部 AI 工具，例如把整理好的内容交给 ChatGPT、Codex、Claude、Gemini、DeepSeek 或自定义助手处理。

这个入口不表示 AI 会自动读取所有本地数据，也不表示 AI 会静默修改你的记录。整体边界阅读 [AI 辅助](/manual/ai-assistance/overview/)；剪贴板流程阅读 [AI 助手与剪贴板](/manual/ai-assistance/clipboard-assistant/)。

标签管理通常位于「偏好设置」，用来创建、重命名、整理或停用任务标签。标签可以帮助你按场景、地点、精力或主题横向整理任务。

标签会影响任务组织方式，所以不要把它当成单纯的外观设置。阅读 [标签](/manual/tasks/tags/) 查看标签如何帮助整理任务。

## Pro 设置入口

「Pro 设置」集中放置订阅和高级能力入口，例如全量附件同步、清空本地附件、远程富文本资源提醒、卡片媒体缓存上限、卡片练习组大小、领域数量上限、AI 研究偏好和 AI 脱敏。

这些入口不是同一种风险等级：订阅影响权益，全量附件同步和清空附件影响本机存储，AI 脱敏影响发送给外部 AI 前的文本处理，远程富文本资源提醒只控制当前设备是否在加载外部资源前再次询问。进入 Pro 设置后，先按具体卡片判断影响范围，再继续操作。

## 下一步

- 遇到同步问题，阅读 [多端同步](/manual/data-security-and-recovery/sync/)。
- 准备备份或恢复，阅读 [备份与恢复](/manual/data-security-and-recovery/backup-and-restore/)。
- 不确定某个操作是否影响账号，阅读 [账号总览](/manual/account/overview/)。
