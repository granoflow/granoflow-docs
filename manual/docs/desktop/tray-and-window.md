---
title: "系统托盘与窗口"
description: "关闭窗口不等于退出应用——了解桌面端的托盘行为，避免误以为 GranoFlow 已经关闭。"
---

<!-- markdownlint-disable MD013 -->

如果你关掉了 GranoFlow 的桌面窗口，但它好像还在运行，这通常是正常的：**关闭窗口只是隐藏窗口，不等于退出应用**。要完全关闭 GranoFlow，需要从 Dock、菜单栏或系统托盘里选择退出。

<!-- manual-screenshot:id=desktop-tray-window-behavior -->
![系统托盘与窗口 界面截图](../../screenshots/zh-cn/desktop-tray-window-behavior.png)

## 关闭窗口后发生了什么

在 macOS 和 Windows 上，点击窗口右上角或左上角的关闭按钮（×）时，GranoFlow 通常只是把窗口藏起来。

这时应用还在后台运行。也就是说，你看不到主窗口，但 GranoFlow 还没有退出，同步也会继续进行。

这样设计是为了让你之后能更快重新打开窗口，也让后台同步不中断。

## 如何再次打开窗口

如果窗口被隐藏了，可以这样打开回来：

- **macOS**：点击菜单栏里的 GranoFlow 图标
- **Windows**：点击任务栏托盘区里的 GranoFlow 图标
- **任意平台**：如果你设置了全局快捷键，也可以直接按快捷键呼出

## 如何真正退出应用

如果你想让 GranoFlow 停止在后台运行，需要手动退出应用：

- **macOS**：右键点击 Dock 或菜单栏里的 GranoFlow 图标，然后选择“退出”
- **Windows**：右键点击托盘里的 GranoFlow 图标，然后选择“退出”

真正退出后，GranoFlow 不再在后台运行，同步也会暂停，直到你下次重新打开应用。

:::tip[想每次关窗口就退出？]
你可以在 GranoFlow 偏好设置里修改关闭窗口的默认行为。
:::
