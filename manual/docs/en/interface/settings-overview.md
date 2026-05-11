---
title: "Settings overview"
description: "Understand how GranoFlow organizes settings, which entries only affect the current device, and which lead to account, sync, data, subscription, or AI pages."
translationSource: zh-CN
translationReview:
  - ux-writing
  - product-frontend-design
---

Settings pages:

- [Settings overview](/manual/en/interface/settings-overview/)
- [Language, theme, and font](/manual/en/interface/settings-language-appearance/)
- [Device preferences](/manual/en/interface/device-preferences/)
- [Account, sync, and data entry points](/manual/en/interface/settings-account-data-entrypoints/)
- [Command Line Tool](/manual/en/interface/settings-overview/#command-line-tool)

Settings is the central entry point in GranoFlow. It brings display experience, device preferences, account, sync, data, subscription, AI, and about information into one place, but each entry affects a different scope.

This page helps you decide whether a setting only changes how this device feels, or whether it opens account, data, or subscription-related pages.

## Appearance

Appearance usually includes theme, font size, and language.

These settings mainly affect what you see on the current device. Changing language, switching to dark mode, or increasing font size does not rewrite tasks, projects, tags, or review records, and it does not change the meaning of data in [multi-device sync](/manual/en/data-security-and-recovery/sync/).

If you only want to adjust reading and display, continue to [Language, theme, and font](/manual/en/interface/settings-language-appearance/).

## Current Device

Device preferences control how this device behaves, such as timer sound, app lock, task reminder banners, swipe action notifications, and overlap protection for focus time ranges.

These options are closer to “how this device reminds me, protects me, and gives feedback.” They should not be understood as account-level business data or as a cross-device sync promise.

## Account and Sync

The account entry is for signing in, signing out, checking account status, or opening account-related capabilities. The sync entry helps you understand the relationship between the current device and cloud data.

If you need to handle sign-in, devices, or sync, start with [Account overview](/manual/en/account/overview/) and [Device management](/manual/en/account/device-management/). If you want to understand how data moves between devices, read [Multi-device sync](/manual/en/data-security-and-recovery/sync/).

## Creation and Review

Settings may include entries for AI assistants, tag management, prompts, or review-related configuration.

These entries open specific configuration or explanation pages. They do not mean AI will automatically change your records. For flows that involve external AI tools, first understand the boundaries in [AI assistance](/manual/en/ai-assistance/overview/) and [AI assistant and clipboard](/manual/en/ai-assistance/clipboard-assistant/).

## Command Line Tool

Settings includes a Command Line Tool entry for managing Granoflow CLI installation, system redaction reuse, and token verification.

If you only run `granoflow help`, `granoflow version`, `granoflow status --json`, or `granoflow open <route> --json` manually, you usually do not need extra setup. When external scripts or AI automation need to call Granoflow, you can enable token verification on this page and create up to 5 CLI tokens. The token value is shown only when it is created or regenerated, and it is not shown again after you close the dialog.

Use System Redaction is enabled by default. When enabled, CLI output and future exports to external tools reuse GranoFlow’s existing redaction rules. To edit redaction terms, use Manage Redaction Settings on the page to open the existing redaction settings.

CLI test helper entries are only for local automation and screenshot preparation. They require the running desktop app to receive the command, and they do not put cloud admin, subscription, notification, or test-account reset capabilities into regular user entry points.

The CLI `export`, `import`, and `backup` commands also require the running desktop app to receive the command. Import, export, and backup commands read or write local data files; preview a backup restore before confirming it.

## Data and Recovery

Data and recovery entries are for import, export, backup, restore, attachments, or cleanup-related actions.

These actions usually have more impact than appearance settings. Read the relevant page before continuing, especially [Backup and restore](/manual/en/data-security-and-recovery/backup-and-restore/) and [Data and security overview](/manual/en/data-security-and-recovery/overview/).

## About, Subscription, and Research

The about area usually includes version information, account entry points, and necessary support entries. Hidden diagnostics or test data entries are not shown as default entries for regular users.

Subscription entries are for checking entitlements, purchase status, or restore purchase guidance. Specific entitlements and platform rules are covered in [Subscription overview](/manual/en/subscription/overview/) and by the platform UI.

Research plans are low-frequency entries for users who actively choose to participate in feedback or research. They do not affect daily tasks or data structure.

## Next

- To adjust display, read [Language, theme, and font](/manual/en/interface/settings-language-appearance/).
- To understand local device switches, read [Device preferences](/manual/en/interface/device-preferences/).
- To handle account, sync, or data entries, read [Account, sync, and data entry points](/manual/en/interface/settings-account-data-entrypoints/).
- To let terminal commands, scripts, or AI automation call Granoflow, open Command Line Tool in Settings.
