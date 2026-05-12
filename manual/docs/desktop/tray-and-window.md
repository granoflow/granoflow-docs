---
title: "系统托盘与窗口"
description: "关闭窗口不等于退出应用——了解桌面端的托盘行为，避免误以为 GranoFlow 已经关闭。"
---

桌面端有一个容易让人困惑的地方：**关闭窗口 ≠ 退出应用**。

![系统托盘与窗口](../../screenshots/zh-cn/desktop-tray-window-behavior.png)

## 关闭窗口后发生了什么

在 macOS 和 Windows 上，点击窗口的关闭按钮（×）通常只是**隐藏窗口**，GranoFlow 继续在后台运行。

这样设计的目的是：让 GranoFlow 能在后台持续同步，你随时可以快速呼出。

## 如何再次打开窗口

- **macOS**：点击菜单栏的 GranoFlow 图标
- **Windows**：点击任务栏托盘区的 GranoFlow 图标
- **任意平台**：如果你设置了全局快捷键，直接用快捷键呼出

## 如何真正退出应用

- **macOS**：右键点击 Dock 或菜单栏图标 → 选择"退出"
- **Windows**：右键点击托盘图标 → 选择"退出"

真正退出后，GranoFlow 不再在后台运行，同步也会暂停直到下次打开。

:::tip[想每次关窗口就退出？]
你可以在 GranoFlow 偏好设置里修改关闭窗口的默认行为。
:::
