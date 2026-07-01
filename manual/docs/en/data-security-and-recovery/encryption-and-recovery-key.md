---
title: "Encryption and Recovery Keys"
description: "Understand the difference between the Data Key, Cloud Sync Password, and login password, and which one to save or enter when backing up, syncing for the first time, restoring a backup, or changing devices."
---

The most important thing you can do right now is: while you still have a device that can open GranoFlow, save your key records in a password manager or another secure place. Later, when you change devices, reinstall the app, restore a local backup, or see Cloud Sync Recovery, GranoFlow may ask for the corresponding key. Without it, some encrypted data may not be accessible.

<!-- manual-screenshot:id=data-encryption-recovery-key -->
![Encryption and Recovery Keys interface screenshot](../../../screenshots/en/data-encryption-recovery-key.png)

GranoFlow uses encryption for both backups and cloud sync. Think of a key like the key to a safe: **without the correct key, even GranoFlow's own servers cannot read protected data**. This also means: **if you lose the key yourself, GranoFlow cannot reset it or recover data already protected by it**.

You will see two user-facing names: when creating a local backup or uploading to cloud sync for the first time, GranoFlow shows a “Data Key”; in Cloud Sync Recovery, it asks for a “Cloud Sync Password.” They serve the same kind of encryption protection, but the name follows the target: opening a backup uses a Data Key; opening the current account's cloud sync data uses a Cloud Sync Password.

If you have never changed the key, the same `GF1-...` string may be both the Data Key for a backup and the current Cloud Sync Password. To avoid confusion later, still label each saved record with where it came from: a specific backup, the first sync, or a later key reset.

## First, Separate the Three Names

<!-- markdownlint-disable MD060 -->
|  | Login password or verification email | Data Key | Cloud Sync Password |
| --- | --- | --- | --- |
| What it does | Proves who you are | Opens a local backup, or becomes the cloud protection key during first sync | Opens existing cloud sync data for the current account |
| Where you see it | When signing in | Creating a local backup, first uploading local data to the cloud, or changing the Data Key | A new device joining existing cloud sync, or a mismatch between local and cloud keys |
| If you forget it | A verification email can be resent | **Cannot be recovered** | **Cannot be recovered** |
| If you change it | Only sign-in is affected | Future backups and future cloud protection settings use the new key; old backups still use the old key | Determines whether this device can reconnect to the current account's cloud sync |
<!-- markdownlint-enable MD060 -->

## The Data Key Saved With a Backup

When you create a local backup, GranoFlow shows the “Data Key” before the backup starts. It is hidden by default and appears when you tap the eye icon. You need to copy or write it down, store it safely, then confirm before the backup can start.

That Data Key applies to the current backup and later backups created with it. Generating a new Data Key does not make old backups use the new key. Old backups still require the old key. When you save a backup file, save the Data Key from that moment as well.

When restoring a backup, GranoFlow first tries to open it with the key already saved on the current device. If that works, it will not ask you to enter anything. If it cannot open the backup, it will ask for the Data Key copied when that backup was created. Use the key for that backup, not a newly generated key and not your login password.

## The Data Key Saved During First Sync

If the current account has no cloud data yet, GranoFlow also asks you to confirm and save the Data Key before uploading local data to the cloud for the first time. That key becomes the protection key for this cloud sync data. Later, when a new device joins this cloud sync, or when a device needs Cloud Sync Recovery, you usually enter that key.

So the Data Key saved during first sync and the Data Key saved during backup may be the same key, but they may also differ:

- If you have not changed the Data Key, the same key may open backups created during that period and the current cloud sync data.
- If you reset the Data Key before a backup or before first sync, the new backup or new cloud sync protection uses the new key, while old backups still need the old key.
- If cloud data already exists, a new local Data Key shown on the current device cannot replace the old Cloud Sync Password.

## When Cloud Sync Asks for a Key

When a new device joins existing cloud sync, or when the current device's local key does not match the cloud sync data, GranoFlow enters Cloud Sync Recovery and asks for the “Cloud Sync Password.” It uses this password to try to open existing encrypted cloud sync data for the current account.

After you enter the correct password, GranoFlow also checks whether local data and cloud data belong to the same data set:

- Same data set: only updates sync protection settings on this device.
- Current account already has cloud sync data: uses the current account's cloud sync data as the source of truth, and brings readable local content from this device into the current account.
- Incorrect input: does not save the input, download, upload, or clear data.

Routine sync usually does not keep asking for a key. It asks only when the device lacks current cloud sync protection information, keys do not match, or a new device is joining existing cloud data.

## If You Changed the Data Key

Changing the Data Key updates the active protection entry for this data set. It affects future backups, and for an account with cloud sync eligibility, it also updates cloud sync protection. It does not re-encrypt historical backups, and it does not make old backups open with the new key.

The safest way to save keys is to keep records by date and purpose instead of keeping only something called “latest key.” For example:

- `GranoFlow Cloud Sync Password, used after 2026-06-22`
- `GranoFlow local backup 2026-06-18 Data Key`
- `Backup before old computer migration, may use old key`

## How Should You Save Them?

Save keys somewhere you can still access after leaving the current device, such as a password manager, secure notes, an offline paper record, or encrypted storage. Do not save only a screenshot, and do not keep the key only inside GranoFlow, because you usually need it when you have changed devices, reinstalled the system, or can no longer open the old environment.

A simple practice is to label each key clearly:

- `GranoFlow local backup 2026-06-18 Data Key`
- `GranoFlow Cloud Sync Password`
- `Backup before old computer migration`

That way, when you later restore a backup or recover sync, you can quickly tell which key to use.

## When a New Device May Need a Key

You may need the key for the old device or old backup in these situations:

- Changing to a new phone or computer
- Reinstalling GranoFlow
- Restoring a `.flow.grano` local backup
- Seeing Cloud Sync Recovery or a Cloud Sync Password prompt

After the correct key is entered, the new device can access the corresponding backup or encrypted cloud data.

## What Happens After You Enter a Key?

GranoFlow first checks whether the key can open the target data. When restoring a backup, the target is the backup file. During Cloud Sync Recovery, the target is the current account's cloud sync data.

- **Backup key matches** → GranoFlow continues restoring that backup.
- **Cloud Sync Password matches, and local/cloud data belong to the same data set** → GranoFlow updates sync protection settings on this device, then continues syncing.
- **Cloud Sync Password matches, and the current account already has cloud data** → GranoFlow uses cloud data as the source of truth and brings readable local content from this device into the current account's sync relationship.
- **Key is wrong** → No data is changed; you can enter it again.

## What If You Forget the Key?

Check in this order:

1. **Can the old device still be used?** → Open GranoFlow on the old device, find the key, and copy it.
2. **Is it in your password manager?** → Check the password manager you normally use.
3. **Are there notes beside the backup file?** → Check the backup folder, cloud drive notes, secure notes, or migration checklist.
4. **Does the page offer a “check this device” repair entry?** → It can only help if this device still has usable local protection information.
5. **The old device exists, but the app cannot open?** → Contact GranoFlow Support and describe the old device and current situation.

If none of these work, encrypted cloud data may not be recoverable. You can still check whether you have a `.flow.grano` local backup and its matching Data Key.

## What to Do When You See “Enter Cloud Sync Password”

If GranoFlow asks you to enter the Cloud Sync Password, enter the complete key that corresponds to the current cloud data. Do not clear cloud data first, and do not try a newly generated local Data Key. A Data Key saved for restoring a local backup works here only if it is the same key as the current cloud sync protection.

After you enter the correct key, GranoFlow first checks whether local data and cloud data are the same data set:

- If they are the same data set, only sync key settings on this device are updated.
- If the current account already has cloud sync data, GranoFlow uses the current account's cloud data as the source of truth and brings readable local content from this device into the current account. You only need to confirm you are signed in to the account you want to keep using.

:::caution[Keys are not passwords, and they cannot be reset]
If the Data Key or Cloud Sync Password is lost, GranoFlow cannot reset it or recover data protected by it. Save it now; do not wait until you change devices or restore a backup to discover that a key is missing.
:::
