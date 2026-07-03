---
title: "Data, Safety, and Recovery: Know Where the Truth Lives"
description: "Understand local-first use, account state, sync, backup, recovery, and data cleanup boundaries."
docType: "Explanation"
readerGoal: "After reading, know the entry point, main state, next step, and boundary."
sources:
  - "granoflow-docs/manual/final-manual-screenshot-plan.json"
  - "docs-temp/plans/73-granoflow-manual-rewrite-screenshot-i18n-publish-v02.md"
---

The first rule for data work is simple: know where the current truth lives. What you see starts on the current device; sync, backup, and recovery support continuity, but they do not remove the need to understand local state.

When sync or recovery looks wrong, do not start by clearing local data. Preserve evidence first, then inspect account, backup, sync, and recovery entry points.

## Where to start

Start from the sidebar, settings, or the current workflow entry point instead of relying on an old remembered path.

## How to use it

1. Confirm that the current page is the right entry point for the workflow.
2. Do the smallest useful action first, then observe how the page changes.
3. Move durable judgment back into tasks, projects, reflection, or cards.

## Screenshot evidence

The screenshots below confirm the entry point and main state for this page.

This image passed macOS dark landscape screenshot review. Screenshot ID `route-account-main` corresponds to `/account`.

![This image passed macOS dark landscape screenshot review. Screenshot ID `route-account-main` corresponds to `/account`.](../../../screenshots/en/route-account-main.png)

This image passed macOS dark landscape screenshot review. Screenshot ID `route-account-recovery-main` corresponds to `/account-recovery`.

![This image passed macOS dark landscape screenshot review. Screenshot ID `route-account-recovery-main` corresponds to `/account-recovery`.](../../../screenshots/en/route-account-recovery-main.png)

This image passed macOS dark landscape screenshot review. Screenshot ID `route-data-management-settings-data-management-main` corresponds to `/settings/data-management`.

![This image passed macOS dark landscape screenshot review. Screenshot ID `route-data-management-settings-data-management-main` corresponds to `/settings/data-management`.](../../../screenshots/en/route-data-management-settings-data-management-main.png)

This image passed macOS dark landscape screenshot review. Screenshot ID `route-local-backup-progress-settings-data-management-progress-main` corresponds to `/settings/data-management/progress`.

![This image passed macOS dark landscape screenshot review. Screenshot ID `route-local-backup-progress-settings-data-management-progress-main` corresponds to `/settings/data-management/progress`.](../../../screenshots/en/route-local-backup-progress-settings-data-management-progress-main.png)

This image passed macOS dark landscape screenshot review. Screenshot ID `route-clear-attachments-settings-clear-attachments-main` corresponds to `/settings/clear-attachments`.

![This image passed macOS dark landscape screenshot review. Screenshot ID `route-clear-attachments-settings-clear-attachments-main` corresponds to `/settings/clear-attachments`.](../../../screenshots/en/route-clear-attachments-settings-clear-attachments-main.png)

This image passed macOS dark landscape screenshot review. Screenshot ID `route-sync-progress-sync-main` corresponds to `/sync`.

![This image passed macOS dark landscape screenshot review. Screenshot ID `route-sync-progress-sync-main` corresponds to `/sync`.](../../../screenshots/en/route-sync-progress-sync-main.png)

This image passed macOS dark landscape screenshot review. Screenshot ID `route-sync-device-join-settings-sync-device-join-main` corresponds to `/settings/sync-device-join`.

![This image passed macOS dark landscape screenshot review. Screenshot ID `route-sync-device-join-settings-sync-device-join-main` corresponds to `/settings/sync-device-join`.](../../../screenshots/en/route-sync-device-join-settings-sync-device-join-main.png)

This image passed macOS dark landscape screenshot review. Screenshot ID `route-sync-vip-upsell-main` corresponds to `/sync-vip-upsell`.

![This image passed macOS dark landscape screenshot review. Screenshot ID `route-sync-vip-upsell-main` corresponds to `/sync-vip-upsell`.](../../../screenshots/en/route-sync-vip-upsell-main.png)

This image passed macOS dark landscape screenshot review. Screenshot ID `route-cloud-key-takeover-settings-cloud-key-takeover-main` corresponds to `/settings/cloud-key-takeover`.

![This image passed macOS dark landscape screenshot review. Screenshot ID `route-cloud-key-takeover-settings-cloud-key-takeover-main` corresponds to `/settings/cloud-key-takeover`.](../../../screenshots/en/route-cloud-key-takeover-settings-cloud-key-takeover-main.png)

This image passed macOS dark landscape screenshot review. Screenshot ID `route-server-key-recovery-settings-server-key-recovery-main` corresponds to `/settings/server-key-recovery`.

![This image passed macOS dark landscape screenshot review. Screenshot ID `route-server-key-recovery-settings-server-key-recovery-main` corresponds to `/settings/server-key-recovery`.](../../../screenshots/en/route-server-key-recovery-settings-server-key-recovery-main.png)

This image passed macOS dark landscape screenshot review. Screenshot ID `route-ai-redaction-settings-settings-ai-redaction-main` corresponds to `/settings/ai-redaction`.

![This image passed macOS dark landscape screenshot review. Screenshot ID `route-ai-redaction-settings-settings-ai-redaction-main` corresponds to `/settings/ai-redaction`.](../../../screenshots/en/route-ai-redaction-settings-settings-ai-redaction-main.png)

This image passed macOS dark landscape screenshot review. Screenshot ID `route-ai-redaction-terms-settings-vip-ai-redaction-terms-main` corresponds to `/settings/vip-ai-redaction-terms`.

![This image passed macOS dark landscape screenshot review. Screenshot ID `route-ai-redaction-terms-settings-vip-ai-redaction-terms-main` corresponds to `/settings/vip-ai-redaction-terms`.](../../../screenshots/en/route-ai-redaction-terms-settings-vip-ai-redaction-terms-main.png)

## What changes

After this page, you should know which page you are looking at, whether the state looks normal, and which neighboring workflow comes next.

## Boundary

Do not treat screenshots as feature guarantees. They prove the visible state for current macOS, dark theme, landscape, and test seed data. Account, subscription, sync, AI, and external-tool pages still depend on your permissions and local state.

## Next step

When this page makes sense, continue with: [Desktop and local interfaces](../desktop-local-api/)
