---
title: "目前裝置偏好"
description: "了解 GranoFlow 設定中只影響目前裝置體驗的偏好，包括計時器、應用程式鎖、提醒橫幅、收集箱移動提示和投入時間段保護。"
translationSource: zh-CN
translationReview:
  - ux-writing
  - product-frontend-design
---

設定相關頁面：

- [設定總覽](/manual/zh-tw/interface/settings-overview/)
- [語言、主題與字型](/manual/zh-tw/interface/settings-language-appearance/)
- [目前裝置偏好](/manual/zh-tw/interface/device-preferences/)
- [賬號、同步與資料入口](/manual/zh-tw/interface/settings-account-data-entrypoints/)

目前裝置偏好用於調整這台裝置上的操作回饋、安全感和提醒方式。它們通常不會改變你的任務、專案、標籤或回顧記錄，也不應被理解為會自動同步到所有裝置。

如果你換了一台手機或電腦，某些顯示和提醒習慣可能需要在新裝置上重新確認。

## 計時器

計時器相關設定用於控制投入時間記錄時的本機回饋，例如是否播放提示音或如何提示狀態變化。

<!-- manual-screenshot:id=interface-device-preferences-main -->
![目前裝置偏好 介面截圖](../../../screenshots/zh-tw/interface-device-preferences-main.png)

這些設定只影響你在目前裝置上使用計時器的體驗。已經記錄下來的投入時間屬於業務記錄，和計時器聲音這類本機偏好不同。

## 應用程式鎖

應用程式鎖用於增加目前裝置上的存取保護。

它適合在共享裝置、暫時離開或行動裝置使用時減少誤看風險。應用程式鎖不是 [賬號](/manual/zh-tw/account/overview/) 密碼，也不替代恢復金鑰或系統級安全設定。

## 任務提醒橫幅

任務提醒橫幅控制目前裝置上是否展示任務提醒相關的輕量提示。

關閉橫幅不等於刪除任務，也不等於清除任務裡的提醒時間。如果你遇到跨裝置提醒問題，應結合目前裝置通知權限和 [多端同步](/manual/zh-tw/data-security-and-recovery/sync/) 狀態一起判斷。

## 收集箱移動提示

收集箱移動提示用於在任務從收集箱移到今天、專案、里程碑或其他目前頁面看不到的位置時給出成功回饋。

完成、延後、拖曳等頁面內已有即時回饋的任務操作不會顯示成功提示。關閉提示不會取消操作本身，也不會隱藏錯誤提示。

## 防止投入時間段重疊

防止投入時間段重疊用於減少同一時間段被重複記錄的情況。

這項設定幫助目前裝置在記錄時間時更謹慎。它不是資料恢復功能，也不能替代 [備份與恢復](/manual/zh-tw/data-security-and-recovery/backup-and-restore/)。

## 下一步

- 想調整語言、主題和字型，閱讀 [語言、主題與字型](/manual/zh-tw/interface/settings-language-appearance/)。
- 想理解哪些入口會進入賬號、同步或資料頁面，閱讀 [賬號、同步與資料入口](/manual/zh-tw/interface/settings-account-data-entrypoints/)。
