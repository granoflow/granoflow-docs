---
title: "Platform purchases and restore"
description: "When buying or restoring across platforms, understand the restore entry point, limits, and cases where access cannot automatically transfer."
translationSource: zh-CN
translationReview:
  - ux-writing
  - product-frontend-design
---

When buying or restoring across platforms, understand the restore entry point, limits, and cases where access cannot automatically transfer.

## Where To Start

Check the current entitlement from Subscription or Account. Subscription status should come from the server account state; local display is only the current UI feedback.

## How To Use It

- After purchase, stay signed in to the same account and wait for subscription state to refresh.
- Use the restore entry for the platform where the purchase was made, and confirm the signed-in account is correct.
- If entitlement does not appear, check platform, account, network, and purchase record before changing the subscription state.

## Results And Boundaries

Subscription affects available entitlements, but it does not change ownership of your task data. Purchase records, platform orders, and the GranoFlow account need to line up.

- Purchases on one platform may not automatically transfer to another platform.
- Payment card details are handled by the platform; GranoFlow does not store them as part of manual app operations.

## Next Step

If restore still fails, keep the platform order information and recheck the subscription account and platform purchase page.
