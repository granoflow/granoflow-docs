---
title: "Backup and Restore"
description: "Backup is a secure copy before changing devices, reinstalling, accidental deletion, and large-scale reorganization; it requires proactive creation and saving the data key."
---

When you are about to change devices, reinstall the system, delete a large amount of content, or simply want to keep a revertible copy after completing an important phase, you should first create a local backup. This is not an automatic background sync but a `.flow.grano` file you actively export. This file will save the packable data and attachments from the current device at that moment, encrypted with the data key.

The most easily misunderstood point here is: backup is not "another sync button." Sync aims to keep multiple devices consistently up to date; backup saves a point in time. Sync allows new tasks to appear on another device, but if you accidentally delete a task, the deletion will also be synced. The value of backup is the opposite: it lets you keep a secure copy under your own control before performing important operations.

<!-- manual-screenshot:id=data-backup-restore-management -->
![Backup and Restore Interface Screenshot](../../../screenshots/en/data-backup-restore-management.png)

## First, remember one thing: keep the file and data key together

The local backup package will be encrypted. Before creating a backup, GranoFlow first displays the "data key," which is hidden by default with a mask; you can tap the eye icon to view it. You can only start the backup after checking "I have copied the data key and saved it in a safe place."

This confirmation is not just a formality. When you later restore this backup, if the current device cannot automatically open it using the locally saved key, GranoFlow will ask you to enter the data key that was used for this backup. Regenerating a new data key only affects backups created from now on; it cannot open old backups. Therefore, the safest practice is to save the backup file and its corresponding data key separately in locations you can retrieve, such as a password manager, secure notes, external hard drive, or a cloud drive you trust.

If you also use cloud sync, this Data Key may or may not be the same string as your current Cloud Sync Password. Judge by the target: to restore a `.flow.grano` backup, use the Data Key copied when that backup was created; for a new device joining cloud sync or Cloud Sync Recovery, use the Cloud Sync Password that corresponds to the current account's cloud data. For the full relationship, see [Encryption and Recovery Keys](/manual/en/data-security-and-recovery/encryption-and-recovery-key/).

A real scenario: you want to create a backup before switching computers. Don't just put the `.flow.grano` file into a cloud drive and call it done; also save the displayed data key into your password manager, and write a note like "GranoFlow 2026-06 backup before switching computers." Half a year later, if your old computer is no longer at hand, this note will be more important than you imagine.

## What is the difference between backup and sync?

A backup is a "copy of data at a point in time." Sync is synchronizing current data to the cloud or other devices. They solve different problems and cannot replace each other.

<!-- markdownlint-disable MD060 -->
|  | Backup | Cloud sync |
| --- | --- | --- |
| Does it preserve historical state? | ✅ Yes, a snapshot at a point in time | ❌ Only represents the current state |
| Can you revert to an old state after accidental deletion? | ✅ Yes, you can restore to the state when the backup was created | ❌ Deletion usually syncs to the cloud as well |
| Does it require your active action? | ✅ Requires manual export and saving of the file | ✅/❌ Sync happens automatically but does not save historical versions |
| Does it depend on attachments already on the current device? | ✅ Only packs content already on the current device | ✅ Complements cloud data and attachments based on sync capability |
<!-- markdownlint-enable MD060 -->

If you are a Pro user and want your backup to include cloud attachments as much as possible, first enable "Full sync of attachments" in Pro settings. If not enabled, GranoFlow will prevent you from proceeding with creating a local backup and guide you to the settings. After enabling, if the sync service is temporarily unreachable, sync still has pending content, or some cloud attachments have not yet been downloaded to the device, GranoFlow will prompt "Backup may be incomplete." You can cancel and wait for sync to complete before backing up, or continue and export only the content already on the current device.

## When should you make a backup?

It is recommended to export a backup in these situations:

- Before upgrading to a major App version
- Before changing phones, computers, or reinstalling the system
- Before deleting a large number of tasks or projects
- After completing an important phase and wanting to keep a record of it
- Before importing external card decks, organizing a large number of review cards, or cleaning up attachment cache

## Card deck package vs full backup

The Data Management page displays several types of data operations as cards. The `Local backup` card creates a `.flow.grano` file, suitable for switching devices, reinstalling, and full device restore. The `Card deck` card handles `.deck.grano` card deck packages, which can migrate selected card decks, cards, and packable local image media, but cannot replace a full backup and does not automatically sync to the cloud. The card deck card also shows current card cache usage and limit, and provides an entry to clear the cache. For more edge cases, see [Card decks, import and export](/manual/en/review-cards/decks-import-export/).

In the `Card deck` card, tapping "Export card deck" enters the card deck list, where you can select top-level card decks to export.

## How to make a backup

1. Open GranoFlow settings.
2. Go to the Data Management page.
3. In the "Local backup" card, select "Create local backup package."
4. If you see a sync or full attachment prompt, follow the prompt to confirm whether to continue.
5. In the pop-up pre-backup confirmation, view the "data key." Tap the eye icon to display the full key if needed.
6. Save the data key in a safe location, then check "I have copied the data key and saved it in a safe place."
7. Tap "Start backup."
8. Depending on platform capabilities, choose a save location or complete the share saving. Desktop will first ask for a save location; Android usually saves to the Downloads directory; iOS exports via Share or Files.
9. Wait for the export to complete. Do not tap repeatedly or force close the app during processing.
10. Confirm that the backup file is saved to a location you control, such as iCloud, a local folder, an external hard drive, or your computer.

If you cancel the save location or close the system share panel, GranoFlow will not record this operation as a completed backup. If a backup is already in progress, tapping "Create backup" again will be blocked to avoid generating two interfering backup files simultaneously.

## How to import a backup

1. Open GranoFlow settings.
2. Go to the Data Management page.
3. In the "Local backup" card, select "Import backup."
4. Locate the previously saved `.flow.grano` file.
5. Before importing, confirm the device is connected to power, especially for mobile devices.
6. View the backup time, backup version, and content summary to confirm this is the backup you want to import.
7. If GranoFlow asks for the "data key," enter the one you saved when creating this backup.
8. Confirm the import, then wait for the process to complete. Do not perform repeated operations during processing.

When importing, GranoFlow first tries to open the backup using the key saved on the current device. If it can open, it will not ask for an extra key; only if it cannot open will it prompt for the data key. Enter the Data Key copied when this backup was created, not your login password and not a newly generated Data Key. Entering an incorrect key will not change the current data.

If this device has already joined cloud sync, GranoFlow will try to keep the sync protection relationship between this device and the current account unchanged while importing: the backup content is brought onto the current device, rather than allowing an old backup to change the cloud sync identity of the current account. If this device has never joined cloud sync, the backup becomes the basis for using this device going forward. You do not need to judge these technical differences; just enter the corresponding Data Key when prompted and wait for the progress to finish.

Importing a backup is an incremental merge and does not clear the current device. Records that exist in the backup but not on this device are imported. When the same record exists on both sides, GranoFlow compares the last modified time and keeps the newer one. If the timestamp is still identical at millisecond precision, GranoFlow uses the backup version so devices can converge to the same data. Local records and local attachment files that are not in the backup are kept.

Attachments also follow the import plan. If the parent task, project, or milestone is missing, deleted, or unsafe, or if the attachment file itself is missing, GranoFlow will not force that attachment in. If the backup package is missing attachment files, importing is blocked by default. Only when you explicitly choose "Ignore missing attachments and continue importing" does GranoFlow proceed with the remaining importable records. This choice is suitable when you have confirmed that the missing attachments are not important, or you just want to import tasks, projects, and text records as quickly as possible.

If the result says that some records could not be imported, those records usually have missing timestamps, unsafe parent relationships, or incomplete attachment files. GranoFlow skips them and keeps the local side. You can export a plaintext JSON file to inspect those failed records; if any of them matter, use the JSON as a reference and recreate them manually.

:::caution[Create a current backup first if you need a fallback]
Importing a backup does not clear the current device, but it may update records that have the same ID when the backup is newer. Before importing an old backup, create a current backup first if you want a fallback for the current state.
:::

Once you understand local backup, the next step is naturally to distinguish it from the role of [multi-device sync](/manual/en/data-security-and-recovery/sync/): backup gives you a revertible copy, while sync keeps multiple devices converging to the same current state.
