---
title: "Sign-out, reset, and dangerous actions"
description: "Before signing out, resetting, or deleting, confirm the impact so irreversible actions are not treated like routine cleanup."
translationSource: zh-CN
translationReview:
  - ux-writing
  - product-frontend-design
---

Before signing out, resetting, or deleting, confirm the impact so irreversible actions are not treated like routine cleanup.

## Where To Start

Open Account settings. The account handles sign-in identity, sync identity, device list, and subscription recognition; it is not the local data itself.

## How To Use It

- After signing up or signing in, confirm that this is the account you want to use for sync and subscription recognition.
- Use device management to review signed-in devices. Removing a device changes account association; it does not necessarily erase local data on that device.
- Before sign-out, reset, or deletion actions, confirm whether you have a backup and whether remote data is affected.

## Results And Boundaries

Account state affects sync, subscription, and device recognition. After switching accounts, remote state may look different while local data may still exist on the device.

- Signing out is not account deletion, and account deletion is not the same as clearing every local copy.
- Dangerous actions usually require confirmation; stop first if the impact is unclear.

## Next Step

If the issue is about subscription, continue with “Subscription overview”; if it is about local data, continue with “Backup and restore”.
