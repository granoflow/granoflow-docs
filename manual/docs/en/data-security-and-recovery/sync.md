---
title: "Cross-device sync"
description: "Sync brings changes from one device to all others signed in to the same account — but it is not a backup."
---

Sync takes changes you make on one device and delivers them to every other device signed in to the same account.

![Sync status screen](../../../screenshots/en/data-sync-status-main.png)

## What syncs, and what does not

✅ What syncs:

- Tasks (title, due date, tags, status…)
- Projects and milestones
- Review records
- Images and attachments (when network allows)

⚠️ Sync is not a backup:

- **Delete something and it deletes everywhere** — sync is bidirectional
- **No version history** — sync does not remember "what things looked like 3 days ago"
- **Images may lag** — text syncs first, images may follow later

## Common sync statuses

| Status | Meaning |
| --- | --- |
| Syncing | Uploading or downloading changes |
| Synced | This device matches the cloud |
| Waiting | Changes queued, usually a network issue |
| Error | Sync hit a problem — check account or encryption key |

## Offline and service unavailable states

GranoFlow's local data remains usable. You can still capture tasks, organize projects, write reviews, search, and export local backups.

If you turn on Offline Mode, sync, sign-in, membership checks, and purchase restore are temporarily unavailable. When you tap those online features, the app will explain that the related service cannot be reached; turn Offline Mode off when you want to try again.

If your device has internet but the sync service is temporarily unavailable, local use is not blocked. Data already on this device remains editable; changes that need upload or download can be synced later.

## Adding a new device to sync

If you installed GranoFlow on a new phone or reinstalled the app, you need the **cloud sync key** from your old device to join the existing cloud data.

See the full walkthrough → [Sync existing cloud data to a new device](/manual/data-security-and-recovery/new-device-sync/)

:::caution[Sync does not replace backup]
Export local backups regularly. Tasks you delete accidentally cannot be recovered through sync — the cloud deletes them too.
:::
