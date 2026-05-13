---
title: "Data security and sync"
description: "Local-first, end-to-end encryption, and why your encryption key is not your password — understand these three things and your GranoFlow data will not disappear or become unreadable for mysterious reasons."
---

If you only want the practical answer: remember three things. Your GranoFlow data is saved on the device you are using first; when cloud sync is enabled, the cloud stores an encrypted copy; and your login password proves the account is yours, but your encryption key is what unlocks the data.

## What local-first means

Local-first means GranoFlow saves your data on your device first. You can capture tasks, organize projects, and read reviews without staying online all the time.

If cloud sync is not enabled, your data mainly lives in the current device and workspace. Before switching devices or reinstalling, you need to make sure your backup and key are ready.

If cloud sync is enabled, GranoFlow uploads your data to the cloud. The cloud is used for syncing across devices and restoring data after you switch devices.

> Local = the workspace you are using now
> Cloud = an encrypted copy for multi-device sync and recovery

## What end-to-end encryption protects

End-to-end encryption (E2EE) means your data is encrypted before it leaves your device. The cloud stores ciphertext, and GranoFlow's servers cannot read your task content.

But end-to-end encryption is not a complete shield against everything. When you use GranoFlow normally, the app has to decrypt data locally so it can show the content to you. If your device is controlled by malware, or someone else can unlock your device, E2EE cannot protect you from that.

You still need the basics: lock your screen, store your key carefully, and avoid copying private content into services you do not trust.

## Your key is not your login password

This is the most common mix-up. Your password or email code proves the account belongs to you. Your encryption key unlocks your encrypted data.

| | Purpose |
|--|---------|
| **Password / email code** | Proves the account belongs to you |
| **Encryption key** | Unlocks your encrypted data |

So you may be able to log in successfully, but still be unable to open cloud data or backup files without the correct key.

This is not GranoFlow making things difficult. It is the basic boundary of end-to-end encryption: if the server could unlock your data whenever you asked, that would also mean the server could read your content.

**How to store your key:**

- Save it in a reliable password manager
- Do not keep it only as a screenshot on one device
- Before switching devices, confirm the key works

## What happens if you forget your key

What happens depends on what you still have access to.

- Old device can still open the data: you can keep using it or set up sync again
- Only encrypted cloud data, no key: the server cannot decrypt it for you
- Backup file, but not the key used when the backup was created: the backup cannot be restored

> Login gets you back into your account. The key gets you back into your data. They are not interchangeable.

## Before switching devices

Before switching devices, check these three things on the old device:

1. The old device can still open GranoFlow
2. Cloud sync is current, or you have exported the latest backup
3. You know the key for the current data

After that, log in with the same account on the new device, enter the key when prompted, then restore or sync your data.

:::caution[An empty device is not a data source]
When syncing for the first time on a new device, do not treat a device with no data as the "new starting point" for the cloud. This may overwrite your old data.
:::
