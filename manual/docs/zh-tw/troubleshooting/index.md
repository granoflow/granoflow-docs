---
title: "常見問題與排查順序"
description: "遇到卡片、同步、資料、截圖或頁面異常時的排查入口。"
docType: "Troubleshooting"
readerGoal: "遇到卡片、同步、資料、截圖或頁面異常時的排查入口。"
---

排查問題時，先保留證據，再做可能影響資料的操作。不要一開始就刪除本地資料、重裝或覆蓋備份。

如果頁面大面積空白，只顯示 `Bad state`、`Exception`、`database closed` 之類的一行錯誤，這不是可接受的手冊截圖，也不是正常頁面。記錄 route、語言、seed 和操作路徑後，再重啟或重建截圖環境。

卡片學習截圖必須使用固定 seed 卡片 `card_domain_garden_manual_screenshot`。如果出現其他卡片，說明隊列、seed 或語言環境不對。
