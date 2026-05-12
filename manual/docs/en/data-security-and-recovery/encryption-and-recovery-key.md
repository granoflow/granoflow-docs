---
title: "Encryption and recovery key"
description: "GranoFlow encrypts your cloud data with an encryption key — it is not your login password, and if you lose it, the cloud data cannot be recovered."
---

GranoFlow's cloud sync data is end-to-end encrypted. The encryption key is like a safe combination — **without it, even GranoFlow's servers cannot read your data**.

But that also means: **if you lose the key, it is genuinely gone**.

![Encryption and recovery key screen](../../../screenshots/en/data-encryption-recovery-key.png)

## Key vs password — what is the difference

| | Login (password or email link) | Encryption / sync key |
|--|-------------------------------|----------------------|
| What it does | Proves who you are | Opens encrypted cloud data |
| If you forget | Request a new verification email | **Cannot be recovered** |
| If you change it | Only affects sign-in | Affects whether you can access cloud data |

## Where to find your key

In GranoFlow Settings → Data / Security / Sync, you can view and save the current cloud sync key for this device.

**Strongly recommended: write down the key or save it to your password manager.**

## When you need the key on a new device

When you:

- Switch to a new phone or computer
- Reinstall GranoFlow
- See a "sync key mismatch" prompt

GranoFlow asks for the sync key from your old device before it can access existing cloud data.

## What happens after entering the key

GranoFlow verifies whether the key can open the current cloud data:

- **Key matches, same data set** → connects to sync directly
- **Key matches, but local device has new data** → shows a choice screen for which data to keep
- **Key is wrong** → nothing changes, prompts you to try again

## If you lost the key

Work through these in order:

1. **Is the old device available?** → Open GranoFlow on it, find and copy the key
2. **Is it in your password manager?** → Check there
3. **Old device exists but app will not open?** → Contact GranoFlow support

If none of the above apply, the encrypted cloud data may be unrecoverable. Local backups (if you have them) still work.

:::caution[Keys cannot be reset]
Losing your encryption key means losing access to your cloud data. Save your key now — do not wait until you need it.
:::
