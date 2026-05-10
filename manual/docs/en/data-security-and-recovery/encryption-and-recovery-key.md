---
title: "Encryption and recovery key"
description: "Understand the difference between the encryption key, cloud sync key recovery, and cloud key takeover before choosing a data source."
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

GranoFlow uses an encryption key to protect data that is synced or backed up. Signing in proves who you are; the encryption key determines whether this device can open existing encrypted cloud data.

If you are moving to a new device, reinstalling the app, restoring a backup, or seeing “Cloud sync settings need attention,” first confirm that your important data is still visible on the current device before continuing.

## Where To Enter

You may reach these pages from:

- Data, security, sync, or backup settings.
- A sync failure prompt, top sync status prompt, or recovery prompt in the cloud data overview.
- “Replace local key with cloud key” in data management.

These entry points all mean that this device and cloud sync are not aligned yet. They are not ordinary refresh buttons.

## Entering The Sync Key From Another Device

When GranoFlow asks for the sync key from another device, it first checks whether that key can open the current cloud data. Before that check finishes, it does not save the entered key, clear local data, or start downloading cloud data.

After the check:

- If cloud and local use the same data key, GranoFlow only updates sync settings on this device so it can continue with the same cloud data.
- If cloud and local are different data sets, the page asks whether to keep local data, use cloud data, or cancel.
- If the key format is wrong, the key is not for this cloud data, or the network is unavailable, recovery does not continue.

This path cannot guarantee recovery for a sync key you did not save. What can be recovered depends on what verifiable material still exists on this device, the old device, cloud data, or local backups.

## Checking This Device When You Do Not Have The Key

In some cases, even if you forgot the cloud sync key, this device may still hold local material that can verify the cloud data. The page may show a secondary action such as “No key? Check this device.”

That first step only checks the device. If it passes, GranoFlow asks again before repairing only the cloud sync key. Confirming that repair does not upload this device's business data, clear cloud sync, or download cloud data.

If the check fails, cloud data has no usable check record, or this device cannot read local encryption material, go back to entering the sync key, using a backup, or canceling until you can check the old device.

## Replacing The Local Key With The Cloud Key

“Replace local key with cloud key” is for cases where this device has local data, but you decide it should use the cloud sync key. You usually reach it from data management or a key-mismatch prompt.

Before using it, confirm two things:

1. The key you enter is the complete key for the current cloud sync data.
2. You know whether the local data and attachments on this device still need to be kept.

If local and cloud actually use the same data key, GranoFlow only updates how this device is protected. If they differ, the page asks you to confirm a longer takeover flow: keep this device's data, protect it with the cloud key, process local attachments where possible, then rebuild cloud sync.

This can take time, especially when the device has many attachments. Do not treat it as a normal sign-in or sync repair when you are unsure which data source should win.

## Choosing A Source

- To keep this device's data: before choosing “Rebuild cloud sync” or a similar path, confirm that the local tasks, projects, reviews, and attachments are the version you want to keep. Cloud sync will use this device's data afterward.
- To use cloud data: before choosing “Use cloud data” or “Clear local data,” confirm that newly created local content can be discarded or has been saved elsewhere.
- If you are unsure: cancel, then check the old device, cloud overview, and local backups first.

Sync and key recovery cannot decide which data is more important for you, and they cannot guarantee that every unsynced attachment, old-device remnant, or encrypted cloud record without a saved key can be recovered.

## Next Step

If you are restoring existing cloud data on a new device, read “Sync existing cloud data on a new device.” If you have a local backup file, read “Backup and restore.”
