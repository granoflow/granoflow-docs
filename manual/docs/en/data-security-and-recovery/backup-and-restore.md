---
title: "Backup and restore"
description: "Backup is your last line of defense against accidental deletion, device failure, or migration — but it requires action on your part."
---

Backup is your "undo" for situations sync cannot handle. But it is not automatic — you have to create it, and save it somewhere safe.

![Backup and restore management screen](../../../screenshots/en/data-backup-restore-management.png)

## Backup vs sync

| | Backup | Cloud sync |
|--|--------|-----------|
| Captures a point-in-time snapshot? | ✅ Yes | ❌ Only current state |
| Recovers accidentally deleted tasks? | ✅ Yes, to the backup time | ❌ Deletion syncs everywhere |
| Requires manual action? | ✅ Yes, export manually | Automatic, but no history |

## When to create a backup

- Before upgrading to a major new App version
- Before switching phones or reinstalling the OS
- Before deleting a large batch of tasks or a whole project
- After completing a major phase, if you want to preserve a snapshot

## How to create a backup

1. Open GranoFlow Settings → Data / Backup
2. Choose Export backup
3. Save the file somewhere you control (iCloud, local folder, computer…)

## How to restore from backup

1. Open GranoFlow Settings → Data / Backup
2. Choose Import backup
3. Select the backup file and import

:::caution[Restoring overwrites current data]
Importing a backup replaces your current device data with the backup snapshot. If you want to keep the current device's latest content, export a new backup first, then import the older one.
:::
