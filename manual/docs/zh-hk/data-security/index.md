---
title: "數據、安全與恢復：先知道真相源在哪裡"
description: "理解本地優先、賬號、同步、備份、恢復和數據清理邊界。"
docType: "Explanation"
readerGoal: "讀完後能知道本頁入口、主要狀態、下一步和邊界。"
sources:
  - "granoflow-docs/manual/final-manual-screenshot-plan.json"
  - "docs-temp/plans/73-granoflow-manual-rewrite-screenshot-i18n-publish-v02.md"
---

數據相關操作的第一條原則很簡單：先知道目前真相源在哪裡。你看到的數據首先來自目前設備；同步、備份和恢復是為了延續使用，而不是讓你忽略本地狀態。

遇到同步或恢復問題時，不要把「清空本地數據」當成第一步。先保留現場，再看賬號、備份、同步和恢復入口。

## 從哪裡開始

先從側邊欄、設置頁或目前工作流入口進入，不要直接依賴記憶中的舊路徑。

## 怎樣使用

1. 確認目前頁面是不是你要處理的工作流入口。
2. 先完成最小動作，再觀察頁面狀態變化。
3. 把需要長期保存的判斷寫回任務、項目、回顧或卡片。

## 截圖證據

下面的截圖用來確認這個頁面的入口和主要狀態。

這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-account-main`，對應入口 `/account`。

![這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-account-main`，對應入口 `/account`。](../../../screenshots/zh-hk/route-account-main.png)

這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-account-recovery-main`，對應入口 `/account-recovery`。

![這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-account-recovery-main`，對應入口 `/account-recovery`。](../../../screenshots/zh-hk/route-account-recovery-main.png)

這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-data-management-settings-data-management-main`，對應入口 `/settings/data-management`。

![這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-data-management-settings-data-management-main`，對應入口 `/settings/data-management`。](../../../screenshots/zh-hk/route-data-management-settings-data-management-main.png)

這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-local-backup-progress-settings-data-management-progress-main`，對應入口 `/settings/data-management/progress`。

![這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-local-backup-progress-settings-data-management-progress-main`，對應入口 `/settings/data-management/progress`。](../../../screenshots/zh-hk/route-local-backup-progress-settings-data-management-progress-main.png)

這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-clear-attachments-settings-clear-attachments-main`，對應入口 `/settings/clear-attachments`。

![這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-clear-attachments-settings-clear-attachments-main`，對應入口 `/settings/clear-attachments`。](../../../screenshots/zh-hk/route-clear-attachments-settings-clear-attachments-main.png)

這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-sync-progress-sync-main`，對應入口 `/sync`。

![這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-sync-progress-sync-main`，對應入口 `/sync`。](../../../screenshots/zh-hk/route-sync-progress-sync-main.png)

這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-sync-device-join-settings-sync-device-join-main`，對應入口 `/settings/sync-device-join`。

![這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-sync-device-join-settings-sync-device-join-main`，對應入口 `/settings/sync-device-join`。](../../../screenshots/zh-hk/route-sync-device-join-settings-sync-device-join-main.png)

這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-sync-vip-upsell-main`，對應入口 `/sync-vip-upsell`。

![這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-sync-vip-upsell-main`，對應入口 `/sync-vip-upsell`。](../../../screenshots/zh-hk/route-sync-vip-upsell-main.png)

這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-cloud-key-takeover-settings-cloud-key-takeover-main`，對應入口 `/settings/cloud-key-takeover`。

![這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-cloud-key-takeover-settings-cloud-key-takeover-main`，對應入口 `/settings/cloud-key-takeover`。](../../../screenshots/zh-hk/route-cloud-key-takeover-settings-cloud-key-takeover-main.png)

這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-server-key-recovery-settings-server-key-recovery-main`，對應入口 `/settings/server-key-recovery`。

![這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-server-key-recovery-settings-server-key-recovery-main`，對應入口 `/settings/server-key-recovery`。](../../../screenshots/zh-hk/route-server-key-recovery-settings-server-key-recovery-main.png)

這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-ai-redaction-settings-settings-ai-redaction-main`，對應入口 `/settings/ai-redaction`。

![這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-ai-redaction-settings-settings-ai-redaction-main`，對應入口 `/settings/ai-redaction`。](../../../screenshots/zh-hk/route-ai-redaction-settings-settings-ai-redaction-main.png)

這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-ai-redaction-terms-settings-vip-ai-redaction-terms-main`，對應入口 `/settings/vip-ai-redaction-terms`。

![這張圖已通過 macOS 深色橫屏截圖評審。 截圖 ID `route-ai-redaction-terms-settings-vip-ai-redaction-terms-main`，對應入口 `/settings/vip-ai-redaction-terms`。](../../../screenshots/zh-hk/route-ai-redaction-terms-settings-vip-ai-redaction-terms-main.png)

## 完成後會怎樣

讀完這一頁後，你應該能判斷自己在看哪一個頁面、目前狀態是否正常，以及下一步應該進入哪個相鄰工作流。

## 邊界

不要把截圖當成功能承諾。截圖只證明目前 macOS、深色、橫屏、測試 seed 下的可見狀態。賬號、訂閱、同步、AI 或外部工具相關頁面，仍要結合你的權限和本機狀態判斷。

## 下一步

如果你已理解本頁的角色，下一步繼續讀： [桌面端與本地接口](../desktop-local-api/)
