---
title: "Data and security overview"
description: "GranoFlow's data protection: local-first + cloud sync + encryption + backup — four layers that complement but cannot replace each other."
---

The moments you truly care about data security are when your phone is lost, your app is reinstalled, you switch devices, or you accidentally delete important tasks.

GranoFlow's data protection has four layers:

```
Local storage → Cloud sync → End-to-end encryption → Manual backup
```

These four layers **work together, but cannot replace each other**.

![Data and security settings entry](../../../screenshots/en/interface-settings-account-data-entrypoints.png)

## What each layer handles

| Layer | Handles | Does not handle |
|-------|---------|----------------|
| **Local storage** | Works without internet | Cannot prevent device loss or damage |
| **Cloud sync** | Cross-device sharing | Not a backup — deletes follow your actions |
| **End-to-end encryption** | Protects cloud data from third parties | Lose the key and you cannot open it |
| **Manual backup** | Last resort for accidental deletion, migration | Not real-time — requires proactive action |

## Most common misconceptions

- **"I have cloud sync, so my data is safe"**: Cloud sync mirrors your actions — if you delete something, the cloud deletes it too.
- **"Signing out clears my data"**: Signing out only disconnects the account. Local data stays intact.
- **"Deleting my account clears everything"**: Account deletion removes cloud data. Local copies on each device are not automatically removed.

## Quick decision guide

```
Data still on device? → Use local recovery or export
Data only in cloud? → Use new device sync or download
Worried about leaks? → Go to encryption settings
Worried about accidental deletion? → Go to backup page
```

:::tip[The most important step]
Save your encryption recovery key. It is the only way to recover cloud data when there is a key mismatch.
:::
