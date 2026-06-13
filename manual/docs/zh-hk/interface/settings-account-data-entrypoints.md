---
title: "賬號、同步與數據入口"
description: "了解設定頁中的賬號、同步、數據、訂閱、AI助手和標籤管理入口分別應該如何理解。"
translationSource: zh-CN
translationReview:
  - deepseek-flash
  - deepseek-pro
  - manual-multilingual-translation
---

如果你在設定頁見到賬號、同步、數據、訂閱、AI助手或標籤管理入口，可以把它們當成通往專門設定頁的按鈕：賬號管登入和設備，同步管多設備記錄一致，數據管匯入匯出、備份和還原，訂閱管 Pro 權益，AI助手和標籤管理分別管外部 AI 工具配合方式和任務標籤。

設定相關頁面：

- [設定總覽](/manual/zh-hk/interface/settings-overview/)
- [語言、主題與字型](/manual/zh-hk/interface/settings-language-appearance/)
- [當前設備偏好](/manual/zh-hk/interface/device-preferences/)
- [賬號、同步與數據入口](/manual/zh-hk/interface/settings-account-data-entrypoints/)

這些入口唔會淨係停留喺當前設定頁裏面。點入去之後，通常會進入更具體嘅頁面，而且有自己嘅規則同限制。

如果某個操作涉及還原、刪除、同步重置、密鑰、訂閱權益或賬號登出，先讀對應頁面再繼續。截圖只幫你確認入口位置；就算截圖冇載入，都可以按下面嘅文字判斷每個入口嘅用途。

## 賬號入口

賬號入口用嚟註冊、登入、登出、查看賬號狀態，並將當前設備接入同一個賬號體系。

<!-- manual-screenshot:id=interface-device-preferences-main -->
![賬號、同步與數據入口 界面截圖](../../../screenshots/zh-hk/interface-device-preferences-main.png)

登入後，你先可以購買或還原 GranoFlow Pro 權益，啟用需要賬號嘅雲同步能力，並進入同賬號有關嘅個人化配置。

如果你想知道賬號到底可以做啲乜，請閱讀 [賬號總覽](/manual/zh-hk/account/overview/)。如果你想理解當前設備同其他設備之間嘅關係，請閱讀 [設備管理](/manual/zh-hk/account/device-management/)。

## 同步入口

同步入口用嚟讓任務、項目、回顧等核心記錄喺多台設備之間保持一致。

同步唔等於「將本機所有設定複製到另一台設備」。佢主要處理業務記錄嘅數據流動。語言、主題、字型、應用鎖等當前設備偏好屬於另一個範圍。

如果你想確認邊啲內容會同步，或者同步異常時應該先檢查啲乜，請閱讀 [多端同步](/manual/zh-hk/data-security-and-recovery/sync/)。

## 數據與還原入口

數據入口用嚟匯入、匯出、備份、還原、查看附件狀態，或清理本地佔用。

呢啲操作通常比外觀設定同當前設備偏好更敏感。備份係為咗喺換機、重裝或出現異常時保留重要數據；還原會將備份或雲端數據帶返當前設備。

數據管理頁以三張平舖功能卡片呈現日常操作：「本地備份」卡片裏嘅「建立本地備份包」生成加密嘅 `.flow.grano`，適合整機遷移或還原；「卡片盒」卡片提供 grano 卡片盒匯入、Anki 匯入說明彈窗、跳轉到卡片盒列表嘅「匯出當前卡片盒」、當前卡片快取佔用同清空快取入口；「加密密鑰」卡片管理設備密鑰。`.deck.grano` 只處理揀定嘅卡片盒、卡片同可以打包嘅本地圖片媒體，唔會建立任務本體，亦唔可以替代完整本地備份。破壞性清理入口單獨放喺頁面底部嘅「危險操作」分組。卡片盒同備份嘅分別請閱讀 [卡片盒、匯入與匯出](/manual/zh-hk/review-cards/decks-import-export/)。

還原前，先確認備份來源、賬號狀態、密鑰同版本條件。詳細請閱讀 [備份與還原](/manual/zh-hk/data-security-and-recovery/backup-and-restore/)。

## 訂閱入口

訂閱入口用嚟查看 GranoFlow Pro 權益、購買狀態、還原購買說明，以及唔同平台購買可能帶嚟嘅限制。

Pro 權益可能影響雲同步、附件能力、儲存配額或進階配置嘅可用範圍。實際價格同是否可購買，以平台展示為準。

如果你想理解點解會有訂閱，請閱讀 [訂閱總覽](/manual/zh-hk/subscription/overview/)。如果你想睇權益邊界，請閱讀 [訂閱權益](/manual/zh-hk/subscription/entitlements/)。

## AI 助手與標籤管理

AI 助手入口用嚟選擇或配置你想配合 GranoFlow 使用嘅外部 AI 工具，例如將整理好嘅內容交給 ChatGPT、Codex、Claude、Gemini、DeepSeek 或自訂助手處理。

呢個入口唔表示 AI 會自動讀取所有本地數據，亦唔表示 AI 會靜默修改你嘅記錄。整體邊界請閱讀 [AI 輔助](/manual/zh-hk/ai-assistance/overview/)；剪貼簿流程請閱讀 [AI 助手與剪貼簿](/manual/zh-hk/ai-assistance/clipboard-assistant/)。

標籤管理用嚟建立、重新命名、整理或停用任務標籤。標籤可以幫你按場景、地點、精力或主題橫向整理任務。

標籤會影響任務組織方式，所以唔好當佢係單純嘅外觀設定。請閱讀 [標籤](/manual/zh-hk/tasks/tags/) 查看標籤點樣幫手整理任務。

## 下一步

- 遇到同步問題，閱讀 [多端同步](/manual/zh-hk/data-security-and-recovery/sync/)。
- 準備備份或還原，閱讀 [備份與還原](/manual/zh-hk/data-security-and-recovery/backup-and-restore/)。
- 唔肯定某個操作會唔會影響賬號，閱讀 [賬號總覽](/manual/zh-hk/account/overview/)。
