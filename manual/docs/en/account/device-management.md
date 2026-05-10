---
title: "Device management"
description: "View and manage signed-in devices, and understand the boundaries between device removal, sync identity, and local data."
translationSource: zh-CN
translationReview:
  - ux-writing
  - product-frontend-design
---

View and manage signed-in devices, and understand the boundaries between device removal, sync identity, and local data.

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
