---
title: "Data and security overview"
description: "GranoFlow's data protection: local-first + cloud sync + encryption + backup — four layers that complement but cannot replace each other."
---

If you want to know how GranoFlow protects your data, remember this: local storage, cloud sync, end-to-end encryption, and manual backup each handle a different job. They reduce risk together, but none of them replaces the others.

GranoFlow's data protection has four layers:

```text
Local storage → Cloud sync → End-to-end encryption → Manual backup
```

These four layers **work together, but cannot replace each other**. When your phone is lost, the app is reinstalled, you switch devices, or important tasks are accidentally deleted, first decide which layer the problem belongs to, then go to the matching place to handle it.

![Data and security settings entry](../../../screenshots/en/interface-device-preferences-main.png)

## What each layer handles

| Layer | Handles | Does not handle |
| --- | --- | --- |
| **Local storage** | Lets the app use data on this device even when offline | Does not prevent device loss or damage |
| **Cloud sync** | Shares the same data across multiple devices | Is not a backup; if you delete something by mistake, the cloud usually deletes it too |
| **End-to-end encryption** | Protects cloud data from being read by third parties | If the key is lost or does not match, you cannot open the cloud data yourself |
| **Manual backup** | Gives you a last line of defense for accidental deletion or migration | Is not real-time; a backup only contains the data from the time you created it |

## Most common misconceptions

- **"I have cloud sync, so my data is safe"**: Cloud sync follows your actions. If you delete data, the cloud usually syncs that deletion too.
- **"Signing out clears my data"**: Signing out only disconnects the account. Local data stays on the current device.
- **"Deleting my account clears all data"**: Account deletion removes cloud data. Local copies on each device are not automatically deleted.

## Start here when something goes wrong

```text
Data still on the device? → Use local recovery or export
Data only in the cloud? → Sync or download on the new device
Worried about data leaks? → Go to encryption settings
Worried about accidental deletion? → Go to the backup page
```

:::tip[The most important step]
Save your encryption recovery key. It is the only credential that can help you recover cloud data when there is a key mismatch.
:::
