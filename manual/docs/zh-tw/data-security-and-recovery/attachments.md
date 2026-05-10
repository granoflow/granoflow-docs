---
title: "附件與圖片"
description: "瞭解附件和圖片如何跟隨任務或記錄儲存，以及它們在同步、備份和刪除時的邊界。"
translationSource: zh-CN
translationReview:
  - ux-writing
  - product-frontend-design
---

瞭解附件和圖片如何跟隨任務或記錄儲存，以及它們在同步、備份和刪除時的邊界。

## 從哪裡開始

從設定裡的資料、安全、同步、備份或帳號相關入口開始。先判斷你要處理的是日常同步、設備遷移、誤刪復原，還是帳號刪除。

<!-- manual-screenshot:id=data-attachments-clear-detail -->
![附件與圖片界面截图](../../../screenshots/manual/zh-tw/data-attachments-clear-detail.png)

<!-- manual-screenshot:id=data-attachments-clear-entry -->
![附件與圖片 介面截圖](../../../screenshots/manual/zh-tw/data-attachments-clear-entry.png)

## 怎麼操作

- 日常使用先確認本設備資料是否可見，再看是否需要同步到其他設備。
- 涉及加密、復原密鑰、備份導入或帳號刪除前，先讀完確認資訊並儲存必要憑證。
- 操作後檢查當前設備和其他設備的狀態；如果需要復原，優先使用明確的備份文件或復原入口。

## 結果和邊界

GranoFlow 採用本地優先思路：本地可用是基礎，同步和備份負責擴展到多設備和復原場景。它們互相補充，但不能彼此替代。

- 同步不是備份；備份也不會保證替你解決所有帳號或密鑰問題。
- 加密和復原密鑰能保護資料，但忘記密鑰或丟失本地備份時，復原能力會受到限制。

## 下一步

不確定從哪排查時，先進入“資料與安全總覽”或“同步問題排查”。
