---
title: "Account, sync, and data entry points"
description: "Understand what account, sync, data, subscription, AI assistant, and tag management entries in Settings are for."
translationSource: zh-CN
translationReview:
  - ux-writing
  - product-frontend-design
---

When you see Account, Sync, Data, Subscription, AI Assistant, or Tag Management in Settings, treat them as buttons that open more specific settings pages: Account handles sign-in and devices, Sync keeps records consistent across devices, Data handles import, export, backup, and restore, Subscription handles Pro entitlements, and AI Assistant and Tag Management handle external AI tool setup and task tags.

Settings pages:

- [Settings overview](/manual/en/interface/settings-overview/)
- [Language, theme, and font](/manual/en/interface/settings-language-appearance/)
- [Device preferences](/manual/en/interface/device-preferences/)
- [Account, sync, and data entry points](/manual/en/interface/settings-account-data-entrypoints/)

These entries do not only change something on the current Settings page. After you open one, you usually move to a more specific page with its own rules and limits.

If an action involves restore, delete, sync reset, keys, subscription entitlements, or signing out, read the relevant page before continuing. Screenshots only help you confirm where the entries are; even if a screenshot does not load, the text below explains what each entry is for.

## Account Entry

The account entry is for signing up, signing in, signing out, checking account status, and connecting the current device to the same account system.

<!-- manual-screenshot:id=interface-device-preferences-main -->
![Account, sync, and data entry points screenshot](../../../screenshots/en/interface-device-preferences-main.png)

After signing in, you can purchase or restore GranoFlow Pro entitlements, enable cloud sync capabilities that require an account, and access account-related personalization.

To understand what an account can do, read [Account overview](/manual/en/account/overview/). To understand how the current device relates to other devices, read [Device management](/manual/en/account/device-management/).

## Sync Entry

The sync entry is for keeping core records such as tasks, projects, and reviews consistent across devices.

Sync does not mean “copy every local setting to another device.” It mainly handles the movement of work records. Current-device preferences such as language, theme, font, and app lock are in a different scope.

To confirm what syncs, or what to check first when sync behaves unexpectedly, read [Multi-device sync](/manual/en/data-security-and-recovery/sync/).

## Data and Recovery Entry

The data entry is for import, export, backup, restore, checking attachment status, or clearing local storage use.

These actions are usually more sensitive than appearance settings and device preferences. Backup helps preserve important data when changing devices, reinstalling, or dealing with an issue; restore brings backup or cloud data back to the current device.

Data Management shows three flat action cards for everyday work: the **Local backup** card creates an encrypted `.flow.grano` file for whole-device migration or recovery; the **Card decks** card offers grano and Anki import, **Export current deck** to open the card deck list, current card cache usage, and a clear-cache action; the **Encryption key** card manages your device key. A `.deck.grano` package only handles the selected card deck, its cards, and packageable local image media. It does not create tasks and does not replace a full local backup. Destructive cleanup actions stay in a separate **Danger zone** group at the bottom.

Before restoring, confirm the backup source, account status, key, and version conditions. Read [Backup and restore](/manual/en/data-security-and-recovery/backup-and-restore/) for details.

## Subscription Entry

The subscription entry is for checking GranoFlow Pro entitlements, purchase status, restore purchase guidance, and limits that may come from purchases on different platforms.

Pro entitlements may affect cloud sync, attachment capabilities, storage quota, or access to advanced configuration. Actual prices and purchase availability follow the platform UI.

To understand why subscriptions exist, read [Subscription overview](/manual/en/subscription/overview/). To see entitlement boundaries, read [Subscription entitlements](/manual/en/subscription/entitlements/).

## AI Assistant and Tag Management

The AI assistant entry is for choosing or configuring the external AI tool you want to use with GranoFlow, such as handing prepared content to ChatGPT, Codex, Claude, Gemini, DeepSeek, or a custom assistant.

This entry does not mean AI will automatically read all local data, and it does not mean AI will silently change your records. For the overall boundaries, read [AI assistance](/manual/en/ai-assistance/overview/). For the clipboard flow, read [AI assistant and clipboard](/manual/en/ai-assistance/clipboard-assistant/).

Tag management is for creating, renaming, organizing, or disabling task tags. Tags help you organize tasks across contexts, places, energy levels, or themes.

Tags affect how tasks are organized, so do not treat them as appearance settings. Read [Tags](/manual/en/tasks/tags/) to see how tags help organize tasks.

## Next

- If you run into sync issues, read [Multi-device sync](/manual/en/data-security-and-recovery/sync/).
- If you are preparing to back up or restore, read [Backup and restore](/manual/en/data-security-and-recovery/backup-and-restore/).
- If you are not sure whether an action affects the account, read [Account overview](/manual/en/account/overview/).
