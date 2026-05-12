---
title: "系統托盤與視窗"
description: "關閉視窗唔等於退出應用——了解桌面端的托盤行為，避免誤以為 GranoFlow 已經關閉。"
---

桌面端有一個容易令人混淆的地方：**關閉視窗 ≠ 退出應用**。

![系統托盤與視窗](../../../screenshots/zh-hk/desktop-tray-window-behavior.png)

## 關閉視窗後發生咗咩

在 macOS 和 Windows 上，點擊視窗的關閉按鈕（×）通常只係**隱藏視窗**，GranoFlow 繼續在後台運行。

呢個設計的目的係：讓 GranoFlow 能在後台持續同步，你隨時可以快速呼出。

## 點樣再次打開視窗

- **macOS**：點擊功能表列的 GranoFlow 圖標
- **Windows**：點擊工作列托盤區的 GranoFlow 圖標
- **任意平台**：如果你設置了全域快捷鍵，直接用快捷鍵呼出

## 點樣真正退出應用

- **macOS**：右鍵點擊 Dock 或功能表列圖標 → 選擇「退出」
- **Windows**：右鍵點擊托盤圖標 → 選擇「退出」

真正退出後，GranoFlow 唔再在後台運行，同步也會暫停直到下次打開。

:::tip[想每次關視窗就退出？]
你可以在 GranoFlow 偏好設定裡修改關閉視窗的默認行為。
:::
