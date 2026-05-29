---
title: "诊断与热力图"
description: "诊断和热力图帮你直观看到投入时间的分布规律，但它们是参考工具，不是对你努力程度的评判。"
---

如果你想知道自己的投入时间有没有规律，先看诊断和热力图：它们会把你的记录整理成状态文案、颜色分层和异常提示，方便你回顾，但不会替你下结论。

## 投入时间阶段

GranoFlow 会根据当天记录的专注时间，显示不同的阶段文案，比如“刚刚开始”“保持节奏”“深度投入”。这些文案的作用是帮你快速看懂当天大概处在哪个投入阶段。

<!-- manual-screenshot:id=review-diagnostic-state-settings -->
![诊断与热力图 界面截图](../../screenshots/zh-cn/review-diagnostic-state-settings.png)

你可以在设置里调整每个阶段的时间节点和提示语。比如你觉得 2 小时才算进入稳定状态，就把对应阶段的时间改到 2 小时。这样改的是回顾展示规则，不会改动你的历史记录，也不会判断你“够不够努力”。

## 热力图阈值

热力图用颜色深浅表示每天的投入时间。颜色越深，通常表示那天记录的投入时间越多；颜色越浅，表示投入时间较少或没有记录。

<!-- manual-screenshot:id=review-heatmap-threshold-settings -->
![诊断与热力图 界面截图](../../screenshots/zh-cn/review-heatmap-threshold-settings.png)

你可以调整热力图的颜色阈值。比如你认为每天 2 小时是“正常活跃”，就可以把这个节点设成中间色。阈值只会改变颜色如何分层，不会修改已经记录的时间数据。

## 异常检测

GranoFlow 可以在回顾数据里提示一些异常信号，比如某类任务连续多天没有出现，或者投入时间突然明显偏离平时。

<!-- manual-screenshot:id=review-diagnostic-anomaly-settings -->
![诊断与热力图 界面截图](../../screenshots/zh-cn/review-diagnostic-anomaly-settings.png)

异常提示不是结论，也不代表“你出问题了”。它只是提醒你回头看一眼：是不是工作节奏变了？是不是某类事情暂时停下来了？还是有别的原因需要你自己解释？

:::note[这些都是参考，不是结论]
诊断和热力图只根据你的记录生成提示，最终的解释和判断永远是你自己的。它们不是医疗、心理、绩效或财务评估。
:::
