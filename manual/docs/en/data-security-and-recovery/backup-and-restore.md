---
title: "Backup and Restore"
description: "Backup is your last line of defense against accidental deletion, device damage, or migration—but it’s not real-time and requires you to take the initiative."
translationSource: zh-CN
translationReview:
  - deepseek-flash
  - deepseek-pro
  - manual-multilingual-translation
---

If you want to keep a recoverable copy of your data before accidental deletion, switching devices, or reinstalling, manually export a backup file on the GranoFlow settings Data/Backup page and save the file to a location you can find and control.

<!-- manual-screenshot:id=data-backup-restore-management -->
![Backup and Restore interface screenshot](../../../screenshots/en/data-backup-restore-management.png)

## What’s the difference between backup and sync?

A backup is a "point-in-time copy of your data." Sync is synchronizing current data to the cloud or another device. They solve different problems.

<!-- markdownlint-disable MD060 -->
|  | Backup | Cloud Sync |
| --- | --- | --- |
| Does it preserve historical state? | ✅ Yes, a snapshot at a point in time | ❌ Only represents the current state |
| Can you revert to an old state after accidental deletion? | ✅ Yes, you can restore to the state when the backup was created | ❌ Deletion is usually synced to the cloud as well |
| Does it require you to take action? | ✅ Requires manual export and saving the file | ✅/❌ Sync happens automatically but does not preserve historical versions |
<!-- markdownlint-enable MD060 -->

## When should you back up?

It is recommended to export a backup before the following situations:

- Before upgrading to a major App version
- Before changing phones, computers, or reinstalling the system
- Before deleting a large number of tasks or projects
- After completing an important milestone, if you want to keep a record of that point

## Card Deck Packs vs. Full Backups

The data management page shows cards in a tiled layout: the `Local Backup` card exports a `.flow.grano` file encrypted with your device key, suitable for switching devices or full device restore; the `Card Deck` card handles `.deck.grano` card deck packs, allowing you to migrate selected card decks, cards, and packable local image media, but cannot replace a full backup and will not automatically sync to the cloud. The Card Deck card also displays current card cache usage and its limit, along with an entry to clear the cache. For more details, see [Card Decks, Import & Export](/manual/en/review-cards/decks-import-export/).

On the `Card Deck` card, clicking "Export current deck" takes you to the deck list, where you can select top-level decks and then export.

## How to create a backup

1. Open GranoFlow settings.
2. Go to the Data Management page.
3. On the "Local Backup" card, select "Create local backup package".
4. Wait for the export to finish — do not click repeatedly or close the page while processing.
5. Save the exported backup file to a location you can control, such as iCloud, a local folder, or your computer.

## How to restore from a backup

1. Open GranoFlow settings.
2. Go to the Data/Backup page.
3. Select "Import backup".
4. Locate the backup file you saved earlier.
5. Confirm the import and wait for the restore to finish — do not repeat the operation while processing.

:::caution[Restore will overwrite current data]
Restoring from a backup is an overwrite operation. After importing, the data on the current device will be replaced by the data in the backup file. If you want to keep the latest content on your current device, first export a current backup, then import the old backup.
:::
