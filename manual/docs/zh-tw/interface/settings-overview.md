---
title: "設定總覽"
description: "了解 GranoFlow 設定頁的當前分組方式，以及哪些入口只影響目前裝置，哪些會進入帳號、同步、資料、訂閱或 AI 相關頁面。"
---

<!-- markdownlint-disable MD013 -->

如果你不知道某個設定會影響哪裡，先看它屬於哪個分組：外觀、偏好設定和安全通常只影響這台裝置；資料管理、關於、調研與活動和 Pro 設定會帶你進入對應頁面，處理更具體的帳號、同步、訂閱、AI 或資料規則。

設定相關頁面：

- [設定總覽](/manual/interface/settings-overview/)
- [語言、主題與字型](/manual/interface/settings-language-appearance/)
- [目前裝置偏好](/manual/interface/device-preferences/)
- [富文字內容](/manual/interface/markdown-content/)
- [帳號、同步與資料入口](/manual/interface/settings-account-data-entrypoints/)
- [命令列工具](/manual/desktop/command-line-tool/)

設定頁是 GranoFlow 的統一入口。它把顯示體驗、偏好設定、安全、資料管理、隱私與診斷、關於、調研與活動和 Pro 設定放在一個地方，但每個入口影響的範圍不一樣。

## 外觀

外觀通常包含主題、字型大小和語言。

<!-- manual-screenshot:id=interface-settings-overview-main -->
![設定總覽 介面截圖](../../screenshots/zh-tw/interface-settings-overview-main.png)

這些設定主要影響你在目前裝置上看到的介面。切換語言、改深色模式或調大字型，不會改寫任務、專案、標籤、回顧記錄，也不會改變[多端同步](/manual/data-security-and-recovery/sync/)中的資料含義。

如果你只是想調整閱讀和顯示體驗，繼續閱讀[語言、主題與字型](/manual/interface/settings-language-appearance/)。

## 偏好設定與安全

偏好設定控制這台裝置上的操作習慣，例如計時器背景音、AI 助手入口、命令列工具、標籤管理、訊息與提醒，以及減少部分底部提示。應用鎖屬於單獨的「安全」分組。

可以把這些選項理解為：這台裝置怎麼提醒我、怎麼保護我、怎麼顯示回饋。它們不應被理解為帳號級業務資料，也不應被當作跨裝置同步承諾。

「訊息與提醒」集中管理任務提醒和通知中心訊息。任務提醒可以控制是否顯示系統橫幅以及是否播放聲音；通知中心訊息預設只進入 App 內通知列表，只有你開啟系統橫幅後才會彈出系統提示。靜默同步屬於雲同步的預設補償能力，不需要在這裡開啟或關閉。

遠端富文字資源提醒位於「Pro 設定」。它控制遠端圖片、音訊、影片和第三方連結載入前是否彈出確認，不會改寫富文字內容本身，也不會同步到其他裝置。需要了解寫法和限制時，閱讀[富文字內容](/manual/interface/markdown-content/)。

## 資料管理與帳號同步

「資料管理」入口用於本地備份、卡片盒匯入匯出、媒體快取和危險操作；帳號入口位於「關於」區域，用於登入、登出、檢視帳號狀態或進入相關帳號能力。登入後的同步狀態和裝置關係仍由帳號與同步頁面承接。

如果你要處理登入、裝置或同步問題，先閱讀[帳號總覽](/manual/account/overview/)和[裝置管理](/manual/account/device-management/)。如果你要理解資料如何在多台裝置之間流動，閱讀[多端同步](/manual/data-security-and-recovery/sync/)。

## AI、標籤與回顧配置

偏好設定裡提供 AI 助手、標籤管理等入口；Pro 設定裡提供 AI 研究偏好、AI 脫敏、回顧和卡片相關進階配置。

這些入口是為了進入具體配置或說明頁面，不代表 AI 會自動修改你的記錄。涉及外部 AI 的流程，應先理解[AI 輔助](/manual/ai-assistance/overview/)和[AI 助手與剪貼簿](/manual/ai-assistance/clipboard-assistant/)的邊界。

## 命令列工具

設定頁在「偏好設定」中提供「命令列工具」入口，用於安裝或修復 `granoflow` 命令，並確認目前平台是否可以在終端裡呼叫 CLI。

這裡的 CLI 只面向使用者本機和執行中的桌面 App，不包含開發、建置、雲端管理員、內部除錯或發佈類命令。

如果你只是手動使用 `granoflow help`、`granoflow version`、`granoflow status --json`、`granoflow display get --json` 或 `granoflow open <route> --json`，通常不需要額外設定。需要讓指令稿或 AI 助手讀取結構化結果時，優先使用 `--json`。

需要從終端調整 App 顯示偏好時，使用 `granoflow display language/theme/font-size/reset`。這些命令只影響顯示體驗，不會清空帳號或業務資料。

業務物件命令包括 `task`、`project`、`milestone`、`tag`、`domain-value` 和 `review`。這些命令需要執行中的桌面 App 承接；App 不可達時會回傳 `app_not_reachable`，不會繞過 App 直接讀取或寫入本地資料庫。

CLI 的 `backup create` 和 `backup restore` 也需要執行中的桌面 App 承接。備份還原前應先使用 `--preview` 檢視摘要，只有明確 `--confirm` 後才會匯入。

完整導覽見[命令列工具](/manual/desktop/command-line-tool/)。如果你需要完整命令矩陣，直接閱讀[CLI 命令與參數參考](/manual/desktop/cli-command-reference/)；如果你在確認 token 或本地存取邊界，閱讀[CLI 安全設定與金鑰邊界](/manual/desktop/cli-security-and-settings/)。

## 隱私與診斷、關於、調研與活動和 Pro

「隱私與診斷」用於控制是否傳送當機報告和匿名使用統計，不上傳任務、專案、回顧正文、圖片或附件內容。高風險或敏感環境中，可以在這裡關閉幫助改善開關。

「關於」區域通常包含版本資訊、帳號入口和必要的輔助入口。隱藏診斷或測試資料入口不會作為一般使用者預設入口展示。

「調研與活動」用於使用者主動參與回饋、研究或公開社群活動，不影響日常任務和資料結構。

「Pro 設定」用於檢視訂閱入口、全量附件同步、清空本地附件、遠端富文字資源提醒、卡片媒體快取、卡片練習組大小、領域數量上限、AI 研究偏好和 AI 脫敏等進階入口。具體權益和平台規則以[訂閱總覽](/manual/subscription/overview/)及實際平台展示為準。

## 下一步

- 想調整顯示效果，閱讀[語言、主題與字型](/manual/interface/settings-language-appearance/)。
- 想理解本機開關，閱讀[目前裝置偏好](/manual/interface/device-preferences/)。
- 想在描述或卡片欄位裡新增表格、公式、圖片或遠端媒體，閱讀[富文字內容](/manual/interface/markdown-content/)。
- 想處理帳號、同步或資料入口，閱讀[帳號、同步與資料入口](/manual/interface/settings-account-data-entrypoints/)。
- 想讓終端、指令稿或 AI 助手呼叫 GranoFlow，閱讀[命令列工具](/manual/desktop/command-line-tool/)。
