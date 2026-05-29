---
title: "設定總覽"
description: "了解 GranoFlow 設定頁的分組方式，以及哪些入口只影響目前裝置，哪些會進入帳號、同步、數據、訂閱或 AI 相關頁面。"
translationSource: zh-CN
translationReview:
  - ux-writing
  - product-frontend-design
---

<!-- markdownlint-disable MD013 -->

如果你不確定某個設定會影響哪裡，先看它屬於哪個分組：外觀和目前裝置通常只影響這部裝置的顯示和提醒；帳號、同步、數據、訂閱和 AI 入口會帶你進入相應頁面，處理更具體的設定或說明。

設定相關頁面：

- [設定總覽](/manual/zh-hk/interface/settings-overview/)
- [語言、主題與字體](/manual/zh-hk/interface/settings-language-appearance/)
- [目前裝置偏好](/manual/zh-hk/interface/device-preferences/)
- [帳號、同步與數據入口](/manual/zh-hk/interface/settings-account-data-entrypoints/)
- [命令行工具](/manual/zh-hk/desktop/command-line-tool/)

設定頁是 GranoFlow 的統一入口。它把顯示體驗、目前裝置偏好、帳號、同步、數據、訂閱、AI 和關於資訊放在同一個地方，但每個入口影響的範圍不一樣。

## 外觀

外觀通常包含主題、字體大小和語言。

<!-- manual-screenshot:id=interface-settings-overview-main -->
![設定總覽 界面截圖](../../../screenshots/zh-hk/interface-settings-overview-main.png)

這些設定主要影響你在目前裝置上看到的介面。切換語言、改用深色模式或調大字體，不會改寫任務、項目、標籤、回顧記錄，也不會改變 [多端同步](/manual/zh-hk/data-security-and-recovery/sync/) 中的數據含義。

如果你只是想調整閱讀和顯示體驗，繼續閱讀 [語言、主題與字體](/manual/zh-hk/interface/settings-language-appearance/)。

## 目前裝置

目前裝置偏好控制這部裝置上的操作習慣，例如計時器聲音、App 鎖、訊息與提醒，以及滑動操作通知。

你可以把這些選項理解為：這部裝置怎樣提醒我、怎樣保護我、怎樣顯示反饋。它們不應被理解為帳號級業務數據，也不應被當作跨裝置同步承諾。

「訊息與提醒」集中管理任務提醒、通知中心訊息和靜默同步。任務提醒可以控制是否顯示系統橫幅以及是否播放聲音；通知中心訊息預設只進入 App 內通知列表，只有你開啟系統橫幅後才會彈出系統提示；靜默同步用於背景補齊其他裝置的資料，不彈橫幅也不播放聲音。

## 帳號與同步

帳號入口用於登入、登出、查看帳號狀態或進入相關帳號功能。同步入口用於理解目前裝置與雲端數據之間的關係。

如果你要處理登入、裝置或同步問題，先閱讀 [帳號總覽](/manual/zh-hk/account/overview/) 和 [裝置管理](/manual/zh-hk/account/device-management/)。如果你要理解數據如何在多部裝置之間流動，閱讀 [多端同步](/manual/zh-hk/data-security-and-recovery/sync/)。

## 創作與回顧

設定頁可能提供 AI 助手、標籤管理、提示詞或回顧相關入口。

這些入口是為了進入具體配置或說明頁面，不代表 AI 會自動修改你的記錄。涉及外部 AI 的流程，應先理解 [AI 輔助](/manual/zh-hk/ai-assistance/overview/) 和 [AI 助手與剪貼簿](/manual/zh-hk/ai-assistance/clipboard-assistant/) 的邊界。

## 命令行工具

設定頁提供「命令行工具」入口，用於安裝或修復 `granoflow` 命令，並確認目前平台是否可以在終端機入面調用 CLI。

這裡的 CLI 只面向用戶本機和正在運行的桌面 App，不包含開發、構建、雲端管理員、內部調試或發佈類命令。

如果你只是手動使用 `granoflow help`、`granoflow version`、`granoflow status --json`、`granoflow display get --json` 或 `granoflow open <route> --json`，通常不需要額外設定。需要讓腳本或 AI 助手讀取結構化結果時，優先使用 `--json`。

需要從終端機調整 App 顯示偏好時，使用 `granoflow display language/theme/font-size/reset`。這些命令只影響顯示體驗，不會清空帳號或業務數據。

業務對象命令包括 `task`、`project`、`milestone`、`tag`、`domain-value` 和 `review`。這些命令需要運行中的桌面 App 承接；App 不可達時會返回 `app_not_reachable`，不會繞過 App 直接讀取或寫入本機數據庫。

CLI 的 `backup create` 和 `backup restore` 也需要運行中的桌面 App 承接。備份恢復前應先使用 `--preview` 查看摘要，只有明確 `--confirm` 後才會匯入。

完整導覽見 [命令行工具](/manual/zh-hk/desktop/command-line-tool/)。如果你要完整命令矩陣，直接閱讀 [CLI 命令與參數參考](/manual/zh-hk/desktop/cli-command-reference/)；如果你要確認 token 或本機訪問邊界，閱讀 [CLI 安全設定與密鑰邊界](/manual/zh-hk/desktop/cli-security-and-settings/)。

## 數據與恢復

數據與恢復入口用於匯入、匯出、備份、恢復、附件或清理相關操作。

這些操作的影響通常比外觀設定更大。繼續前先閱讀對應頁面，尤其是 [備份與恢復](/manual/zh-hk/data-security-and-recovery/backup-and-restore/) 和 [數據與安全總覽](/manual/zh-hk/data-security-and-recovery/overview/)。

## 關於、訂閱與調研

關於區域通常包含版本資訊、帳號入口和必要的輔助入口。隱藏診斷或測試數據入口不會作為普通用戶預設入口展示。

訂閱入口用於查看權益、購買狀態或恢復購買說明。具體權益和平台規則以 [訂閱總覽](/manual/zh-hk/subscription/overview/) 及實際平台展示為準。

調研計劃屬於低頻入口，用於用戶主動參與反饋或研究，不影響日常任務和數據結構。

## 下一步

- 想調整顯示效果，閱讀 [語言、主題與字體](/manual/zh-hk/interface/settings-language-appearance/)。
- 想理解本機開關，閱讀 [目前裝置偏好](/manual/zh-hk/interface/device-preferences/)。
- 想處理帳號、同步或數據入口，閱讀 [帳號、同步與數據入口](/manual/zh-hk/interface/settings-account-data-entrypoints/)。
- 想讓終端機、腳本或 AI 助手調用 GranoFlow，閱讀 [命令行工具](/manual/zh-hk/desktop/command-line-tool/)。
