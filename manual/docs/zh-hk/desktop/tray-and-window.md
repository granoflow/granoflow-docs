---
title: "系統托盤與視窗"
description: "關閉視窗唔等於退出應用——了解桌面端的托盤行為，避免誤以為 GranoFlow 已經關閉。"
---

<!-- markdownlint-disable MD013 -->

如果你關咗 GranoFlow 桌面視窗，但應用好似仲運行緊，通常係正常情況：**關閉視窗只係隱藏視窗，唔等於退出應用**。如果要完全關閉 GranoFlow，需要喺 Dock、選單列或者系統托盤選擇退出。

<!-- manual-screenshot:id=desktop-tray-window-behavior -->
![系統托盤與視窗 界面截圖](../../../screenshots/zh-hk/desktop-tray-window-behavior.png)

## 關閉視窗後會發生咩

在 macOS 同 Windows 上，點擊視窗關閉按鈕（×）時，GranoFlow 通常只會將視窗隱藏。

呢個時候應用仍然喺後台運行。即係話，你見唔到主視窗，但 GranoFlow 未退出，同步亦會繼續。

呢個設計係為咗之後可以更快重新打開視窗，同時避免後台同步中斷。

## 點樣再次打開視窗

如果視窗被隱藏咗，可以咁樣打開返：

- **macOS**：點擊選單列入面嘅 GranoFlow 圖示
- **Windows**：點擊工作列托盤區入面嘅 GranoFlow 圖示
- **任何平台**：如果你設定咗全域快捷鍵，可以直接按快捷鍵呼出

## 點樣真正退出應用

如果你想 GranoFlow 停止喺後台運行，需要手動退出應用：

- **macOS**：右鍵點擊 Dock 或選單列入面嘅 GranoFlow 圖示，然後選擇「退出」
- **Windows**：右鍵點擊托盤入面嘅 GranoFlow 圖示，然後選擇「退出」

真正退出後，GranoFlow 就唔會再喺後台運行，同步亦會暫停，直到你下次重新打開應用。

:::tip[想每次關視窗就退出？]
你可以喺 GranoFlow 偏好設定入面修改關閉視窗嘅預設行為。
:::
