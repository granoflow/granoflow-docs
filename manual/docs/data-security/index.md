---
title: "数据、安全与恢复：先知道真相源在哪里"
description: "理解本地优先、账号、同步、备份、恢复和数据清理边界。"
docType: "Explanation"
readerGoal: "读完后能知道本页入口、主要状态、下一步和边界。"
sources:
  - "granoflow-docs/manual/final-manual-screenshot-plan.json"
  - "docs-temp/plans/73-granoflow-manual-rewrite-screenshot-i18n-publish-v02.md"
---

数据相关操作的第一条原则很简单：先知道当前真相源在哪里。你看到的数据首先来自当前设备；同步、备份和恢复是为了延续使用，而不是让你忽略本地状态。

遇到同步或恢复问题时，不要把“清空本地数据”当成第一步。先保留现场，再看账号、备份、同步和恢复入口。

## 从哪里开始

先从侧边栏、设置页或当前工作流入口进入，不要直接依赖记忆中的旧路径。

## 怎么做

1. 确认当前页面是不是你要处理的工作流入口。
2. 先完成最小动作，再观察页面状态变化。
3. 把需要长期保存的判断写回任务、项目、回顾或卡片。

## 截图证据

下面的截图用于确认这个页面的入口和主要状态。

这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-account-main`，对应入口 `/account`。

![这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-account-main`，对应入口 `/account`。](../../screenshots/zh-cn/route-account-main.png)

这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-account-recovery-main`，对应入口 `/account-recovery`。

![这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-account-recovery-main`，对应入口 `/account-recovery`。](../../screenshots/zh-cn/route-account-recovery-main.png)

这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-data-management-settings-data-management-main`，对应入口 `/settings/data-management`。

![这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-data-management-settings-data-management-main`，对应入口 `/settings/data-management`。](../../screenshots/zh-cn/route-data-management-settings-data-management-main.png)

这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-local-backup-progress-settings-data-management-progress-main`，对应入口 `/settings/data-management/progress`。

![这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-local-backup-progress-settings-data-management-progress-main`，对应入口 `/settings/data-management/progress`。](../../screenshots/zh-cn/route-local-backup-progress-settings-data-management-progress-main.png)

这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-clear-attachments-settings-clear-attachments-main`，对应入口 `/settings/clear-attachments`。

![这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-clear-attachments-settings-clear-attachments-main`，对应入口 `/settings/clear-attachments`。](../../screenshots/zh-cn/route-clear-attachments-settings-clear-attachments-main.png)

这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-sync-progress-sync-main`，对应入口 `/sync`。

![这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-sync-progress-sync-main`，对应入口 `/sync`。](../../screenshots/zh-cn/route-sync-progress-sync-main.png)

这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-sync-device-join-settings-sync-device-join-main`，对应入口 `/settings/sync-device-join`。

![这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-sync-device-join-settings-sync-device-join-main`，对应入口 `/settings/sync-device-join`。](../../screenshots/zh-cn/route-sync-device-join-settings-sync-device-join-main.png)

这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-sync-vip-upsell-main`，对应入口 `/sync-vip-upsell`。

![这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-sync-vip-upsell-main`，对应入口 `/sync-vip-upsell`。](../../screenshots/zh-cn/route-sync-vip-upsell-main.png)

这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-cloud-key-takeover-settings-cloud-key-takeover-main`，对应入口 `/settings/cloud-key-takeover`。

![这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-cloud-key-takeover-settings-cloud-key-takeover-main`，对应入口 `/settings/cloud-key-takeover`。](../../screenshots/zh-cn/route-cloud-key-takeover-settings-cloud-key-takeover-main.png)

这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-server-key-recovery-settings-server-key-recovery-main`，对应入口 `/settings/server-key-recovery`。

![这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-server-key-recovery-settings-server-key-recovery-main`，对应入口 `/settings/server-key-recovery`。](../../screenshots/zh-cn/route-server-key-recovery-settings-server-key-recovery-main.png)

这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-ai-redaction-settings-settings-ai-redaction-main`，对应入口 `/settings/ai-redaction`。

![这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-ai-redaction-settings-settings-ai-redaction-main`，对应入口 `/settings/ai-redaction`。](../../screenshots/zh-cn/route-ai-redaction-settings-settings-ai-redaction-main.png)

这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-ai-redaction-terms-settings-vip-ai-redaction-terms-main`，对应入口 `/settings/vip-ai-redaction-terms`。

![这张图已通过 macOS 深色横屏截图评审。 截图 ID `route-ai-redaction-terms-settings-vip-ai-redaction-terms-main`，对应入口 `/settings/vip-ai-redaction-terms`。](../../screenshots/zh-cn/route-ai-redaction-terms-settings-vip-ai-redaction-terms-main.png)

## 做完后会怎样

读完这一页后，你应该能判断自己在看哪一个页面、当前状态是否正常，以及下一步应该进入哪个相邻工作流。

## 边界

不要把截图当成功能承诺。截图只证明当前 macOS、深色、横屏、测试 seed 下的可见状态。账号、订阅、同步、AI 或外部工具相关页面还要结合你自己的权限和本机状态判断。

## 下一步

如果你已经理解本页的角色，下一步继续读： [桌面端与本地接口](../desktop-local-api/)
