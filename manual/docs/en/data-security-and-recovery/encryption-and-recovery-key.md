---
title: "Encryption & Recovery Key"
description: "Understand what the data key and cloud sync password protect respectively, especially which one to save when changing devices, importing backups, and syncing recovery."
---

The most important thing you can do right now is: on a device where GranoFlow is still accessible, save the critical keys to a password manager or a secure location. Later, when you switch devices, reinstall the app, import a local backup, or see a “Cloud Sync Recovery” prompt, GranoFlow may ask you to enter the corresponding key. Without it, some encrypted data may not be accessible.

<!-- manual-screenshot:id=data-encryption-recovery-key -->
![Encryption & Recovery Key interface screenshot](../../screenshots/en/data-encryption-recovery-key.png)

Both GranoFlow backups and cloud sync use encryption. The key acts like a safe key: **without the correct key, even GranoFlow’s own servers cannot read the protected data.** This also means: **if you lose the key yourself, GranoFlow cannot help you reset or retrieve the data it has already protected.**

There are two names you will see: “Data Key” is shown when creating a local backup; “Cloud Sync Password” is what you enter during cloud sync recovery. They both serve encryption underneath, but appear in different scenarios. Do not treat them as login passwords, and do not store them only inside GranoFlow.

## Key vs. Login Password – What’s the Difference?

<!-- markdownlint-disable MD060 -->
|  | Login Password (or verification email) | Data Key / Cloud Sync Password |
| --- | --- | --- |
| What it’s used for | Proving who you are | Opening encrypted cloud data |
| What happens if forgotten | Verification email can be resent | **Cannot be retrieved** |
| What happens if changed | Only affects login | Affects access to cloud data |
<!-- markdownlint-enable MD060 -->

## Where Does the Data Key Appear?

When creating a local backup, GranoFlow shows the “Data Key” before the backup begins. It is hidden by default and only appears when you tap the eye icon. You must copy it and store it safely, then tick the confirmation box, before the backup can be created.

This data key corresponds to the current and future backups created with it. Generating a new data key does not cause old backups to use the new key – old backups still require the old key. When saving a backup file, also save the data key that was in use at the time.

## Where Does the Cloud Sync Password Appear?

When a new device joins an existing cloud sync, or when the device’s local key and the cloud sync data key do not match, GranoFlow enters “Cloud Sync Recovery” and asks for the “Cloud Sync Password.” This password is used to try to open the existing encrypted sync data in the cloud.

After entering the correct password, GranoFlow continues to determine whether the local data and the cloud data belong to the same set:

- **Same set of data:** Only updates the sync protection settings on this device.
- **Not the same set of data:** The current account's cloud protection is treated as the target, and local data is migrated into that account.
- **Incorrect password:** Nothing is saved, no download, no upload, no data is cleared.

## How Should You Save It?

We recommend saving keys to a location you can still access after leaving your current device – such as a password manager, secure notes, offline paper records, or encrypted storage. Do not save only a screenshot, and do not store it only inside GranoFlow, because you will need the key precisely when you have switched devices, reinstalled the system, or can no longer open the old environment.

A simple practice is to label each key clearly:

- `GranoFlow local backup 2026-06-18 data key`
- `GranoFlow cloud sync password`
- `Backup before old computer migration`

This way, when you later import a backup or restore a sync, you can quickly determine which key to use.

## When Is a Key Needed on a New Device?

You may need the key that corresponds to the old device or old backup in the following cases:

- Switching to a new phone or computer
- Reinstalling GranoFlow
- Importing a `.flow.grano` local backup
- Seeing a “Cloud Sync Recovery” or cloud sync password prompt

After entering the correct key, the new device can then access the corresponding backup or encrypted cloud data.

## What Happens After Entering the Key?

GranoFlow first checks whether the key can open the target data. For backup import, the target is the backup file; for cloud sync recovery, the target is the cloud sync data of the current account.

- **Key matches and data belongs to the same set** → Import or connect sync continues.
- **Key matches, but local and cloud data are not the same set** → The current account's cloud protection is used as the target, and GranoFlow migrates local data into that account.
- **Key is incorrect** → No data is changed; you are prompted to re-enter.

## What If You Forget the Key?

Check in this order:

1. **Is the old device still usable?** → Open GranoFlow on that device and copy the key.
2. **Is it in a password manager?** → Check the password manager you normally use.
3. **Are there notes next to the backup file?** → Check the backup folder, cloud storage notes, secure notes, or migration checklist.
4. **Old device exists but the app won’t open?** → Contact GranoFlow Support, explaining the old device and the current situation.

If none of the above works, cloud encrypted data may not be recoverable. Local backups (if available) remain usable.

## What to Do When You See “Enter Cloud Sync Password”

If GranoFlow prompts you to enter the cloud sync password, fill in the full key that corresponds to the current cloud data. Do not clear the cloud data first, and do not randomly try a newly generated local data key.

After entering the correct key, GranoFlow first determines whether the local data and cloud data are the same set:

- If they are the same set, only the sync key settings on this device are updated.
- If they are not the same set, the current account's cloud protection is used as the target. Before proceeding, confirm that you are using the intended account.

:::caution[Keys are not passwords and cannot be reset]
Once the data key or cloud sync password is lost, GranoFlow cannot help you reset or retrieve the data protected by them. Save them now – do not wait until you switch devices or import a backup only to find you are missing a key.
:::
