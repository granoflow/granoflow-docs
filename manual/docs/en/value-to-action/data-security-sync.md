---
title: "Data security and sync"
description: "Local-first, end-to-end encryption, and why your encryption key is not your password — understand these three things and your GranoFlow data will never disappear mysteriously."
---

GranoFlow stores tasks, projects, reviews, and values — personal stuff. Here are the concepts that actually matter, without the tech jargon.

## Local-first

Local-first means your data lives on your device first. You do not need a network connection to capture tasks, organize projects, or read reviews.

Enable cloud sync and GranoFlow uploads an encrypted copy to the cloud — for multi-device access and recovery after switching devices.

> Local = your active workspace  
> Cloud = an encrypted backup for syncing and recovery

## End-to-end encryption

E2EE means data is encrypted before it leaves your device. The cloud stores ciphertext — GranoFlow's servers cannot read your task content.

But encryption is not magic. When you use the app normally, it decrypts data locally so you can see and edit it. If your device is compromised or someone else has physical access and your unlock credentials, E2EE cannot help.

So: lock your screen, save your key, and be careful what you copy to external services.

## Your encryption key is NOT your password

This is the most common confusion:

| | Purpose |
|--|---------|
| **Password / email code** | Proves the account belongs to you |
| **Encryption key** | Unlocks your encrypted data |

You can log in successfully and still be unable to open encrypted cloud data or backups if you do not have the key.

This is not GranoFlow being difficult — it is the basic trade-off of E2EE: if the server could unlock your data whenever you ask, it means the server could always read your content.

**Key storage tips:** Use a reliable password manager. Do not save it only as a screenshot on one device. Verify the key works before switching devices.

## What happens if you lose your key

- Old device still works → you can continue using it or re-establish sync
- Only encrypted cloud data, no key → the server cannot decrypt it for you
- Backup file but wrong key → backup cannot be restored

> Login gets you back into your account. The key gets you back into your data. They are not interchangeable.

## Before switching devices

1. Old device can still open GranoFlow
2. Cloud sync is current, or you have exported a recent backup
3. You know the encryption key for your current data

Then: log in with the same account on the new device → enter the key when prompted → restore or sync.

:::caution[Empty device is not a data source]
When syncing for the first time on a new device, do not treat the empty device as the "source of truth" — that would overwrite your existing cloud data.
:::
