---
title: "Cross-Device Sync"
description: "Learn what states sync brings to other devices, and how to judge when network, account, or conflicts occur."
---

The purpose of cross-device sync is: after you add, modify, or delete content on one device, other devices logged into the same account will also try to reach the same state. It lets you continue the same task, project, review, and card workflow across phone, computer, and tablet, but it is not a backup feature for recovering accidentally deleted content.

It is more accurate to think of sync as "converging the current state across multiple devices". It cares about what should be consistent now, not what it was three days ago. When you really need to preserve a point in time, first create a [local backup](/manual/en/data-security-and-recovery/backup-and-restore/).

<!-- manual-screenshot:id=data-sync-status-main -->
![Cross-Device Sync Interface](../../screenshots/en/data-sync-status-main.png)

## What Does Sync Include and Not Include

✅ Content that syncs:

- Tasks, for example title, due date, tags, status, etc.
- Projects and milestones
- Review records
- Images and attachments, sync when the network allows
- Long-term assets related to review cards, sync within current version support

⚠️ Keep in mind: sync is not backup.

- **If you delete, other devices also delete**: Sync is bidirectional; it does not keep deletions on only one device.
- **No version history**: Sync does not save "what it was three days ago".
- **Images may appear later**: Text content may sync first; images and attachments may sync later.
- **Device preferences are not account data**: Language, theme, fonts, some local settings, and temporary cache usually belong to the current device and should not be understood as requiring consistency across all devices.

## Common Sync States

| State | Meaning |
| --- | --- |
| Syncing | Uploading or downloading changes. |
| Synced | Current device data is consistent with the cloud. |
| Waiting | Changes are queued, usually related to network. |
| Error | Sync encountered a problem; check account or key. |

## What Happens When Offline or Service Unreachable

If there is temporarily no network, local data in GranoFlow is still usable. You can continue recording tasks, organizing projects, writing reviews, searching content, and exporting local backups.

If you are not logged in, are not a member, or cannot connect to the sync service, cloud sync will be temporarily unavailable. When you tap a feature that requires the network, the app will prompt you to retry later; existing local data can still be used.

If the device has network but the sync service is temporarily unreachable, the app will not prevent you from using existing local data. Content already on this device can still be edited; changes that need to be uploaded to or downloaded from the cloud will wait until you sync again later.

Member devices do not need to enable silent sync separately. As long as the account has sync eligibility, the service is reachable, the key status is normal, and the device is in a runnable state, GranoFlow will try to silently supplement new data from other devices in the background. This process remains silent, does not display system banners, does not play sounds, and does not add notification center messages.

## Adding a New Device to Sync

If you get a new phone or reinstall the app and want to connect to your existing cloud data, you need to use the **cloud sync key** from the old device.

This key is usually the Data Key you copied the first time this data was synced to the cloud. If you later changed the Data Key, use the key that corresponds to the current cloud sync data; old backups still need the Data Key from when each backup was created.

Detailed steps → [Syncing Existing Cloud Data on a New Device](/manual/en/data-security-and-recovery/new-device-sync/)

## What to Do When You See "Cloud Sync Recovery"

When GranoFlow finds that the local key on the current device does not match the cloud sync data, it will enter "Cloud Sync Recovery". This is not a normal error pop‑up; it is protecting you from overwriting cloud or local data with the wrong data.

The recovery process asks you to enter the “Cloud Sync Password.” This password is used to attempt to open the encryption material of the current account's cloud data. It is not your login password, and it is not necessarily the Data Key for an old backup. After entering, GranoFlow first checks:

- If the cloud data and local data use the same data key, it will only update the sync settings on this device and then continue syncing.
- If the current account already has protected cloud data and it is not the same set as local data, GranoFlow treats the current account's cloud protection as the target and migrates local data into that account.
- If the input is incorrect, GranoFlow will not save that input, nor will it download cloud data, upload local data, or clear the cloud.

You may also see actions like "Pause Sync" or "Clear Cloud Data". Pausing sync only closes the current recovery entry; it does not mark it as permanently ignored. Clearing cloud data is a high‑risk operation and will require further confirmation and system authentication. When unsure, pause, confirm that the old device, backup files, and current account cloud sync password are all at hand, then continue.

## How Sync and Backup Should Work Together

During daily use, let sync handle current consistency across devices; before performing major operations, let backup handle revertible copies. A reusable judgment is:

- Today you just want the computer and phone to see the same tasks – use sync.
- Before reinstalling the app, changing devices, cleaning up many projects, or importing a lot of content – back up first.
- When you see a sync key or cloud recovery prompt, do not clear the cloud first; first check whether the old device can still be opened, whether a local backup exists, and whether the cloud sync password was saved.

:::caution[Sync Does Not Replace Backup]
Please export local backups regularly. Deleted tasks cannot be recovered by sync because the cloud and other devices will also delete them.
:::
