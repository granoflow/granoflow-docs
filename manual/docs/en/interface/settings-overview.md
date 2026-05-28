---
title: "Settings overview"
description: "Understand how GranoFlow organizes settings, which entries only affect the current device, and which lead to account, sync, data, subscription, or AI pages."
translationSource: zh-CN
translationReview:
  - ux-writing
  - product-frontend-design
---

<!-- markdownlint-disable MD013 -->

If you are not sure what a setting affects, first check its group: Appearance and Current Device usually only affect display and reminders on this device; Account, Sync, Data, Subscription, and AI entries take you to pages for more specific settings or explanations.

Settings pages:

- [Settings overview](/manual/en/interface/settings-overview/)
- [Language, theme, and font](/manual/en/interface/settings-language-appearance/)
- [Device preferences](/manual/en/interface/device-preferences/)
- [Account, sync, and data entry points](/manual/en/interface/settings-account-data-entrypoints/)
- [Command line tool](/manual/en/desktop/command-line-tool/)

Settings is the central entry point in GranoFlow. It brings display experience, device preferences, account, sync, data, subscription, AI, and about information into one place, but each entry has a different scope.

## Appearance

Appearance usually includes theme, font size, and language.

<!-- manual-screenshot:id=interface-settings-overview-main -->
![Settings overview interface screenshot](../../../screenshots/en/interface-settings-overview-main.png)

These settings mainly affect what you see on the current device. Changing language, switching to dark mode, or increasing font size does not rewrite tasks, projects, tags, or review records, and it does not change the meaning of data in [multi-device sync](/manual/en/data-security-and-recovery/sync/).

If you only want to adjust reading and display, continue to [Language, theme, and font](/manual/en/interface/settings-language-appearance/).

## Current Device

Device preferences control how this device behaves, such as timer sound, app lock, messages and reminders, and swipe action notifications.

You can think of these options as: how this device reminds me, protects me, and shows feedback. They should not be understood as account-level business data or as a cross-device sync promise.

Messages and reminders centralize task reminders, notification center messages, and silent sync. Task reminders can control system banners and sound. Notification center messages stay inside the app by default, and only show system banners after you turn that on. Silent sync catches up data in the background without showing banners or playing sounds.

## Account and Sync

The account entry is for signing in, signing out, checking account status, or opening account-related capabilities. The sync entry helps you understand the relationship between the current device and cloud data.

If you need to handle sign-in, devices, or sync, start with [Account overview](/manual/en/account/overview/) and [Device management](/manual/en/account/device-management/). If you want to understand how data moves between devices, read [Multi-device sync](/manual/en/data-security-and-recovery/sync/).

## Creation and Review

Settings may include entries for AI assistants, tag management, prompts, or review-related configuration.

These entries open specific configuration or explanation pages. They do not mean AI will automatically change your records. For flows that involve external AI tools, first understand the boundaries in [AI assistance](/manual/en/ai-assistance/overview/) and [AI assistant and clipboard](/manual/en/ai-assistance/clipboard-assistant/).

## Command Line Tool

Settings includes a Command Line Tool entry for installing or repairing the `granoflow` command and confirming whether the current platform can use the CLI from a terminal.

This CLI is only for the user's local computer and the running desktop app. It does not include development, build, cloud admin, internal debugging, or release commands.

If you only run `granoflow help`, `granoflow version`, `granoflow status --json`, `granoflow display get --json`, or `granoflow open <route> --json` manually, you usually do not need extra setup. When scripts or AI assistants need structured results, prefer `--json`.

To adjust app display preferences from the terminal, use `granoflow display language/theme/font-size/reset`. These commands only affect display experience. They do not clear account or business data.

Business object commands include `task`, `project`, `milestone`, `tag`, `domain-value`, and `review`. These commands require the running desktop app to receive the request. If the app cannot be reached, the command returns `app_not_reachable` and does not bypass the app to read or write the local database directly.

The CLI `backup create` and `backup restore` commands also require the running desktop app. Preview a backup restore with `--preview` before importing anything with `--confirm`.

See [Command line tool](/manual/en/desktop/command-line-tool/) for the full map. For complete command matrix, open [CLI command reference](/manual/en/desktop/cli-command-reference/). For token/local access boundaries, open [CLI security and key boundaries](/manual/en/desktop/cli-security-and-settings/).

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
- To let terminal commands, scripts, or AI assistants call GranoFlow, read [Command line tool](/manual/en/desktop/command-line-tool/).
