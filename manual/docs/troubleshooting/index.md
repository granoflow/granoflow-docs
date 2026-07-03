---
title: "常见问题与排查顺序"
description: "遇到卡片、同步、数据、截图或页面异常时的排查入口。"
docType: "Troubleshooting"
readerGoal: "知道先检查什么，什么时候停止操作并保留现场。"
---

排查问题时，最重要的是不要一开始就清数据、重装或覆盖备份。先确认问题属于哪一类，再决定下一步。

## 页面只显示一行错误

如果页面大面积空白，只显示 `Bad state`、`Exception`、`database closed` 或类似一行错误，这不是可接受的手册截图，也不是正常页面状态。先关闭当前流程，记录截图来源、route、语言、seed 和操作路径，再重新启动 App 或重建截图环境。

## 卡片不是预期那一张

卡片学习截图必须使用固定 seed 卡片 `card_domain_garden_manual_screenshot`。如果出现其他卡片，说明队列、seed 或语言环境不对，不能把截图发布到手册。

## 同步或登录异常

先确认当前账号、设备和网络状态。不要为了“看起来干净”而删除本地数据。能导出或备份时，先保留当前状态，再处理同步。

## 图片或手册页面 404

检查图片是否位于 `manual/screenshots/<locale>/<id>.png`，正文是否引用 canonical screenshot plan 中的稳定 id。不要引用 run folder、候选图或带时间戳的临时文件。
