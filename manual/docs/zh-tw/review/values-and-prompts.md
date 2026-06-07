---
title: 價值觀與 AI 研究偏好
description: 調整價值觀和 AI 研究偏好，讓 AI 輔助更貼近你的判斷方式，同時保持匯入格式和安全邊界不可編輯。
---

如果你想讓日記整理、每週回顧和價值觀探索更貼近你的判斷方式，可以從「會員設定 > AI 研究偏好」進入配置。它會影響之後 AI 輔助時優先參考的理論、書籍、學者、例子風格和表達方式，但不會自動改寫已經存在的任務、記錄或歷史總結。

<!-- manual-screenshot:id=review-values-prompts-settings -->
![價值觀與 AI 研究偏好 介面截圖](../../../screenshots/zh-tw/review-values-prompts-settings.png)

## AI 研究偏好做什麼

AI 研究偏好不是完整 Prompt 編輯器。它只告訴 AI 在分析時更偏向哪些參考框架，例如行為科學、認知學習、生產力系統、管理組織、心理調節或哲學生活方式。

<!-- manual-screenshot:id=review-work-learning-report-prompt-settings -->
![價值觀與 AI 研究偏好 介面截圖](../../../screenshots/zh-tw/review-work-learning-report-prompt-settings.png)

<!-- manual-screenshot:id=review-domain-values-prompt-settings -->
![價值觀與 AI 研究偏好 介面截圖](../../../screenshots/zh-tw/review-domain-values-prompt-settings.png)

<!-- manual-screenshot:id=review-daily-journal-prompt-settings -->
![價值觀與 AI 研究偏好 介面截圖](../../../screenshots/zh-tw/review-daily-journal-prompt-settings.png)

<!-- manual-screenshot:id=review-weekly-review-prompt-settings -->
![價值觀與 AI 研究偏好 介面截圖](../../../screenshots/zh-tw/review-weekly-review-prompt-settings.png)

研究偏好會放入 AI 請求包，但不能覆蓋系統安全規則、隱私邊界、匯入格式、JSON 結構或欄位校驗。舊 Helper、AI 改寫、日記、週記、價值觀和工作 / 學習日報 Prompt 路由會進入同一個研究偏好頁，不再提供完整 Prompt 編輯入口。

## 問卷與價值觀設定

日回顧問卷可以隨時重寫和儲存。今天、昨天或更早的日期都可以重新整理；儲存只表示保存目前版本，不會把問卷鎖定。

領域價值觀設定會把你的長期方向帶進回顧脈絡。價值觀可以隨時修改，也可以隨著實際記錄慢慢變清楚。它不是填完一次就永遠正確的分類表。

## 這些設定的邊界

- **研究偏好不保證 AI 輸出品質**：它能引導方向，但不代表 AI 一定答得準。
- **不影響任務和專案**：這些設定只影響後續分析取向、草稿和問題組織，不會改變已有記錄。
- **不改變匯入合同**：系統 prompt、response contract、JSON schema 和脫敏規則不可在這裡編輯。
- **會員限制**：部分設定是會員專屬，非會員可以查看預設配置但無法自訂。

:::tip[不知道從哪裡改起？]
先寫一兩句你希望 AI 參考的方向，例如「多用行為科學解釋拖延，給建議時說明適用邊界」。
:::
