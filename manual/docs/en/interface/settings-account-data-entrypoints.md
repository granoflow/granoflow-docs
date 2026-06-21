---
title: "Account, sync & data entry points"
description: "Understand how to interpret the account, sync, data, subscription, AI assistant, tag management, and Pro Settings entries on the Settings page."
---

If you see entries on the Settings page for account, sync, data, subscription, AI assistant, tag management, or Pro Settings, think of them as buttons that take you to dedicated pages: account manages login and devices, sync keeps records consistent across devices, data management handles local backups, card decks, and dangerous operations, subscription handles Pro benefits, AI assistant and tag management respectively handle external AI tool integration and task tags.

Related settings pages:

- [Settings overview](/manual/interface/settings-overview/)
- [Language, theme & fonts](/manual/interface/settings-language-appearance/)
- [Current-device preferences](/manual/interface/device-preferences/)
- [Account, sync & data entry points](/manual/interface/settings-account-data-entrypoints/)

These entries do not just stay on the current Settings page. Once you tap into them, they usually take you to more specific pages with their own rules and limitations.

If an operation involves restore, deletion, sync reset, keys, subscription benefits, or account logout, read the corresponding page first. Screenshots only help you confirm entry locations; even if a screenshot hasn't loaded, you can still judge each entry's purpose from the text below.

## Account entry

The account entry is located in the "About" area on the Settings page. It's used to register, log in, log out, view account status, and connect the current device to the same account system.

<!-- manual-screenshot:id=interface-device-preferences-main -->
![Account, sync & data entry points interface screenshot](../../screenshots/en/interface-device-preferences-main.png)

After logging in, you can purchase or restore GranoFlow Pro benefits, enable cloud sync that requires an account, and enter account-related personalization.

If you want to know what an account can do, read [Account overview](/manual/account/overview/). If you want to understand the relationship between the current device and other devices, read [Device management](/manual/account/device-management/).

## Sync entry

Sync status is typically accessed through the account, the sync entry in Settings, or a top/side sync attention indicator. The top/side entry appears only when there is pending sync work, syncing is in progress, sync has failed, or something needs attention; when everything is up to date, GranoFlow does not keep a permanent "synced" completion icon in the top bar. It is used to keep core records like tasks, projects, and reviews consistent across multiple devices.

Sync does not mean "copy all local settings to another device." It primarily handles the flow of business record data. Language, theme, fonts, app lock, and other current-device preferences belong to a different scope.

If you want to confirm what does get synced, or what to check first when sync is abnormal, read [Multi-device sync](/manual/data-security-and-recovery/sync/).

## Data & restore entry

The "Data Management" entry is used for import, export, backup, restore, viewing card media cache, or performing dangerous cleanup operations.

These operations are usually more sensitive than appearance settings and current-device preferences. Backups are for preserving important data when switching devices, reinstalling, or encountering anomalies; restore brings backup or cloud data back to the current device.

The Data Management page presents everyday operations as function cards: "Create local backup package" in the "Local Backup" card generates an encrypted `.flow.grano`, suitable for full-device migration or restore; the "Card Deck" card provides grano card deck import, Anki import description popup, "Export card deck" that jumps to the card deck list, current card cache usage, and a clear cache entry. `.deck.grano` only handles selected card decks, cards, and packable local image media; it does not create task entities and cannot replace a full local backup. Destructive cleanup entries are placed separately in the "Dangerous Operations" group at the bottom of the page. For the difference between card decks and backups, read [Card decks, import & export](/manual/review-cards/decks-import-export/).

Before restoring, confirm backup source, account status, keys, and version conditions. See [Backup & restore](/manual/data-security-and-recovery/backup-and-restore/) for details.

## Subscription entry

The subscription entry is located in "Pro Settings" and is used to view GranoFlow Pro benefits, purchase status, restore purchase instructions, and possible restrictions from different platform purchases.

Pro benefits may affect cloud sync, attachment capabilities, storage quotas, or advanced configuration availability. Actual prices and purchase availability depend on platform display.

If you want to understand why there is a subscription, read [Subscription overview](/manual/subscription/overview/). If you want to see benefit boundaries, read [Subscription entitlements](/manual/subscription/entitlements/).

## AI assistant & tag management

The AI assistant entry is usually in "Preferences" and is used to select or configure external AI tools you want to use with GranoFlow, e.g., handing organized content to ChatGPT, Codex, Claude, Gemini, DeepSeek, or a custom assistant.

This entry does not mean AI automatically reads all local data, nor does it mean AI silently modifies your records. For overall boundaries, read [AI Assistance](/manual/ai-assistance/overview/); for clipboard workflows, read [AI Assistant & Clipboard](/manual/ai-assistance/clipboard-assistant/).

Tag management is usually in "Preferences" and is used to create, rename, organize, or deactivate task tags. Tags help you organize tasks by scenario, location, energy, or theme.

Tags affect task organization, so do not treat them as a purely appearance setting. Read [Tags](/manual/tasks/tags/) to see how tags help organize tasks.

## Pro Settings entry

"Pro Settings" houses subscription and advanced capability entries, such as full attachment sync, clear local attachments, remote rich-text resource prompts, card media cache limit, card study group size, domain count limit, AI research preferences, and AI desensitization.

These entries are not all at the same risk level: subscription affects benefits, full attachment sync and clearing attachments affect local storage, AI desensitization affects text processing before sending to external AI, and remote rich-text resource prompts only control whether the current device asks again before loading external resources. Once you enter Pro Settings, first determine the scope of impact based on each specific card, then proceed.

## Next steps

- If you're having sync issues, read [Multi-device sync](/manual/data-security-and-recovery/sync/).
- If you're preparing a backup or restore, read [Backup & restore](/manual/data-security-and-recovery/backup-and-restore/).
- If you're unsure whether an operation affects your account, read [Account overview](/manual/account/overview/).
