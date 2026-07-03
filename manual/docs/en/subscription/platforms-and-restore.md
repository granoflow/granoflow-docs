---
title: "Platform purchases and restore"
description: "How to buy on different platforms, restore a purchase, and what to do when cross-platform sharing doesn't work automatically."
---

If you changed devices, reinstalled the app, or your subscription entitlements are not showing, open GranoFlow on the platform where you made the purchase, sign in with the same GranoFlow account, then use “Restore purchases” in Settings to verify it again. GranoFlow subscriptions can currently be purchased through the iOS App Store and Android Google Play. The macOS DMG build does not currently provide a Mac App Store purchase channel, so desktop builds may not show a purchase entry. Store purchase records are handled separately and do not transfer across platforms automatically.

## How to restore a purchase

If you already subscribed but your entitlements disappeared after switching devices or reinstalling the app, follow these steps:

1. Confirm that the GranoFlow account you are signed into now is the same one you used when purchasing.
2. Open GranoFlow Settings.
3. Go to Subscription/Account.
4. Tap Restore purchases.
5. Wait for the platform to verify the purchase. This may take a few seconds to a minute.
6. After verification succeeds, your subscription entitlements will refresh and appear automatically.

## Can I share a purchase across current store platforms?

**No, purchases do not transfer across platforms automatically.** This is because each store platform handles subscriptions separately:

- iOS purchases are processed through Apple App Store.
- Android purchases are processed through Google Play.

These two store platforms are independent payment systems, and they do not share subscription state with each other. The macOS DMG build is not a store purchase platform; if the desktop app has no purchase entry, purchase or restore through the matching iOS or Android store platform.

**Your GranoFlow account itself can be used across platforms.** For example, if you subscribed on iOS, you can use the corresponding entitlements on an iOS device by signing in with the same GranoFlow account. If you also want to use subscription entitlements on Android, you need to purchase separately on Android, or check the refund policy for the relevant platform. The macOS DMG build can sign in to the same GranoFlow account for account data, but it does not currently support an independent Mac App Store subscription purchase.

## What if restore purchases fails?

If your entitlements still do not appear after tapping Restore purchases, check these items in order:

1. **Account match**: Is the GranoFlow account you are signed into now the same account you used when purchasing?
2. **Platform match**: A subscription purchased on iOS must be restored on iOS. A subscription purchased on Android must be restored on Android. The macOS DMG build is not currently a store restore entry.
3. **Network access**: Restoring a purchase requires a connection to Apple, Google, or the relevant platform server.
4. **Subscription status**: The subscription may have expired.

If you have checked everything above and it still does not work, keep a screenshot of your platform order, then contact GranoFlow support.

:::note[GranoFlow doesn't store payment details]
Card numbers, billing addresses, and other payment credentials are handled by Apple or Google. GranoFlow does not store this information.
:::
