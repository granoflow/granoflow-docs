---
title: "賬號、同步與資料入口"
description: "了解設定頁中的賬號、同步、資料、訂閱、AI 助手和標籤管理入口分別應該如何理解。"
translationSource: zh-CN
translationReview:
  - ux-writing
  - product-frontend-design
---

如果你在設定頁看到賬號、同步、資料、訂閱、AI 助手或標籤管理入口，可以把它們當成前往專門設定頁的按鈕：賬號管登入和裝置，同步管多裝置記錄一致，資料管匯入匯出、備份和恢復，訂閱管 Pro 權益，AI 助手和標籤管理則分別管外部 AI 工具搭配方式和任務標籤。

設定相關頁面：

- [設定總覽](/manual/zh-tw/interface/settings-overview/)
- [語言、主題與字型](/manual/zh-tw/interface/settings-language-appearance/)
- [目前裝置偏好](/manual/zh-tw/interface/device-preferences/)
- [賬號、同步與資料入口](/manual/zh-tw/interface/settings-account-data-entrypoints/)

這些入口不只是改動目前設定頁上的內容。點進去後，通常會進入更具體的頁面，而且有各自的規則和限制。

如果某個操作涉及恢復、刪除、同步重置、金鑰、訂閱權益或登出賬號，先讀對應頁面再繼續。截圖只幫你確認入口位置；即使截圖沒有載入，也可以依照下面的文字判斷每個入口的用途。

## 賬號入口

賬號入口用來註冊、登入、登出、查看賬號狀態，並把目前裝置接入同一個賬號體系。

<!-- manual-screenshot:id=interface-device-preferences-main -->
![賬號、同步與資料入口 介面截圖](../../../screenshots/zh-tw/interface-device-preferences-main.png)

登入後，你才能購買或恢復 GranoFlow Pro 權益，啟用需要賬號的雲端同步能力，並進入與賬號有關的個人化配置。

如果你想知道賬號到底能做什麼，閱讀 [賬號總覽](/manual/zh-tw/account/overview/)。如果你想理解目前裝置和其他裝置之間的關係，閱讀 [裝置管理](/manual/zh-tw/account/device-management/)。

## 同步入口

同步入口用來讓任務、專案、回顧等核心記錄在多台裝置之間保持一致。

同步不等於「把本機所有設定都複製到另一台裝置」。它主要處理工作記錄的資料流動。語言、主題、字型、應用程式鎖等目前裝置偏好屬於另一個範圍。

如果你想確認哪些內容會同步，或同步異常時應該先檢查什麼，閱讀 [多端同步](/manual/zh-tw/data-security-and-recovery/sync/)。

## 資料與恢復入口

資料入口用來匯入、匯出、備份、恢復、查看附件狀態，或清理本地占用。

這些操作通常比外觀設定和目前裝置偏好更敏感。備份是為了在換機、重裝或出現異常時保留重要資料；恢復會把備份或雲端資料帶回目前裝置。

資料管理頁以三張平鋪功能卡片呈現日常操作：「本地備份」卡片裡的「建立本地備份包」會產生加密的 `.flow.grano`，適合整機遷移或恢復；「卡片盒」卡片提供 grano / Anki 匯入、跳轉到卡片盒列表的「匯出目前卡片盒」、目前卡片快取用量與清空快取入口；「加密金鑰」卡片管理裝置金鑰。`.deck.grano` 只處理選定卡片盒、卡片和可打包的本地圖片媒體，不會建立任務本體，也不能替代完整本地備份。破壞性清理入口單獨放在頁面底部的「危險操作」分組。

恢復前，先確認備份來源、賬號狀態、金鑰和版本條件。詳情閱讀 [備份與恢復](/manual/zh-tw/data-security-and-recovery/backup-and-restore/)。

## 訂閱入口

訂閱入口用來查看 GranoFlow Pro 權益、購買狀態、恢復購買說明，以及不同平台購買可能帶來的限制。

Pro 權益可能影響雲端同步、附件能力、儲存配額或進階配置的可用範圍。實際價格和是否可購買，以平台顯示為準。

如果你想理解為什麼會有訂閱，閱讀 [訂閱總覽](/manual/zh-tw/subscription/overview/)。如果你想看權益邊界，閱讀 [訂閱權益](/manual/zh-tw/subscription/entitlements/)。

## AI 助手與標籤管理

AI 助手入口用來選擇或配置你要搭配 GranoFlow 使用的外部 AI 工具，例如把整理好的內容交給 ChatGPT、Codex、Claude、Gemini、DeepSeek 或自訂助手處理。

這個入口不表示 AI 會自動讀取所有本地資料，也不表示 AI 會默默修改你的記錄。整體邊界閱讀 [AI 輔助](/manual/zh-tw/ai-assistance/overview/)；剪貼簿流程閱讀 [AI 助手與剪貼簿](/manual/zh-tw/ai-assistance/clipboard-assistant/)。

標籤管理用來建立、重新命名、整理或停用任務標籤。標籤可以幫你按情境、地點、精力或主題橫向整理任務。

標籤會影響任務組織方式，所以不要把它當成單純的外觀設定。閱讀 [標籤](/manual/zh-tw/tasks/tags/) 查看標籤如何幫助整理任務。

## 下一步

- 遇到同步問題，閱讀 [多端同步](/manual/zh-tw/data-security-and-recovery/sync/)。
- 準備備份或恢復，閱讀 [備份與恢復](/manual/zh-tw/data-security-and-recovery/backup-and-restore/)。
- 不確定某個操作是否影響賬號，閱讀 [賬號總覽](/manual/zh-tw/account/overview/)。
