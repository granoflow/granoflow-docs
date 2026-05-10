---
title: "賬號、同步與資料入口"
description: "了解設定頁中的賬號、同步、資料、訂閱、AI 助手和標籤管理入口分別應該如何理解。"
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

設定頁裡的賬號、同步、資料、訂閱和 AI 相關入口通常會帶你進入更具體的頁面。這個頁面先用一句話說明每個入口具體做什麼，再把更完整的規則交給對應章節。

如果某個操作涉及恢復、刪除、同步重置、金鑰、訂閱權益或賬號退出，繼續前先讀對應頁面。

## 賬號入口

賬號入口用於註冊、登入、退出、查看賬號狀態，以及把目前裝置接入同一個賬號體系。

<!-- manual-screenshot:id=interface-settings-account-data-entrypoints -->
![賬號、同步與資料入口 介面截圖](../../../screenshots/zh-tw/interface-settings-account-data-entrypoints.png)

登入後才能購買或恢復 GranoFlow Pro 權益，啟用需要賬號的雲同步能力，並進入與賬號有關的個人化配置。閱讀 [賬號總覽](/manual/zh-tw/account/overview/) 查看賬號能做什麼；閱讀 [裝置管理](/manual/zh-tw/account/device-management/) 理解目前裝置和其他裝置的關係。

## 同步入口

同步入口用於讓任務、專案、回顧等核心記錄在多台裝置之間保持一致。

同步不是簡單的「把本機所有設定複製到別處」。它主要處理業務記錄的資料流動；語言、主題、字型、應用程式鎖等目前裝置偏好屬於不同範圍。閱讀 [多端同步](/manual/zh-tw/data-security-and-recovery/sync/) 查看哪些內容會同步，以及同步異常時應該先檢查什麼。

## 資料與恢復入口

資料入口用於匯入、匯出、備份、恢復、查看附件狀態或清理本地占用。

這些操作通常比外觀和目前裝置偏好更敏感：備份是為了在換機、重裝或異常時保留重要資料；恢復會把備份或雲端資料帶回目前裝置。恢復前要確認備份來源、賬號狀態、金鑰和版本條件。閱讀 [備份與恢復](/manual/zh-tw/data-security-and-recovery/backup-and-restore/) 查看詳情。

## 訂閱入口

訂閱入口用於查看 GranoFlow Pro 權益、購買狀態、恢復購買說明，以及不同平台購買可能帶來的限制。

Pro 權益可能影響雲同步、附件能力、儲存配額或進階配置的可用範圍；實際價格和可購買狀態以平台展示為準。閱讀 [訂閱總覽](/manual/zh-tw/subscription/overview/) 理解訂閱為什麼存在，閱讀 [訂閱權益](/manual/zh-tw/subscription/entitlements/) 查看權益邊界。

## AI 助手與標籤管理

AI 助手入口用於選擇或配置你要配合 GranoFlow 使用的外部 AI 工具，例如把整理好的內容交給 ChatGPT、Claude、Gemini、DeepSeek 或自訂助手處理。它不表示 AI 會自動讀取所有本地資料，也不表示 AI 會靜默修改你的記錄。閱讀 [AI 輔助](/manual/zh-tw/ai-assistance/overview/) 理解整體邊界，閱讀 [AI 助手與剪貼簿](/manual/zh-tw/ai-assistance/clipboard-assistant/) 查看剪貼簿流程。

標籤管理用於建立、重新命名、整理或停用任務標籤，讓你按場景、地點、精力或主題橫向整理任務。標籤本身會影響任務組織方式，因此它不應被當成單純外觀設定。閱讀 [標籤](/manual/zh-tw/tasks/tags/) 查看標籤如何幫助整理任務。

## 下一步

- 遇到同步問題，閱讀 [多端同步](/manual/zh-tw/data-security-and-recovery/sync/)。
- 準備備份或恢復，閱讀 [備份與恢復](/manual/zh-tw/data-security-and-recovery/backup-and-restore/)。
- 不確定是否影響賬號，閱讀 [賬號總覽](/manual/zh-tw/account/overview/)。
