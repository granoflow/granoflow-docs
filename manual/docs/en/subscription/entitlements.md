---
title: "Subscription entitlements"
description: "What subscriber features look like in the app, and how subscriber-only settings differ from the rest."
---

If you want to know whether you can use a subscriber feature, check the feature’s own entry first: GranoFlow does not have one separate “subscriber area.” Subscriber entitlements appear where the related features live, such as sync, AI assistance, and personalization settings.

Membership status is based on the primary membership capability returned by the server. Pro must still be within its valid period; Angel membership is a long-term primary entitlement and ordinary expiration does not remove it. Only revoking events such as refunds or transfers make Angel membership unavailable.

<!-- manual-screenshot:id=subscription-vip-settings -->
![Subscription entitlements screen capture](../../../screenshots/en/subscription-vip-settings.png)

## Subscriber-only features

The following features require subscriber entitlements for full use.

### Sync

- Multi-device cloud sync
- Sync history and status view

### AI assistance

- AI title parsing (recognizes dates, tags, reminders)
- Clipboard assistant
- Custom AI redaction terms

### Personalization

- AI Assistants & Prompts settings
- Custom review prompts
- Custom journal, weekly journal, values, and work / learning report prompts
- Helper prompt customization
- Diagnostics configuration and heatmap threshold settings

Prompt and AI rewrite entries are grouped under Prompt Settings in Pro settings. Open it, then choose the specific scenario.

## What happens when you are not subscribed

Most subscriber-only entries are still visible when you are not subscribed. Seeing an entry does not mean you already have access to it.

You may see two kinds of behavior:

- Tapping the entry shows an upgrade prompt.
- Some settings can be viewed, but become read-only, so changes cannot be saved.

This lets you see where the feature is and what settings may become available after subscribing.

## A note on sync entitlements

Sync is a subscriber feature. If your current account has no active entitlement, the sync entry will prompt you to view or activate a subscription.

<!-- manual-screenshot:id=subscription-sync-vip-upsell -->
![Subscription entitlements screen capture](../../../screenshots/en/subscription-sync-vip-upsell.png)

Seeing the sync entitlement page **does not mean sync has started, and does not mean your local data has been lost**. Local data exists independently of sync entitlements.

:::note[Entitlement status comes from the server]
What the app displays for your subscription status is based on account information returned by GranoFlow’s servers. If the network is poor, it may temporarily show an incorrect state. Refresh after a moment.
:::
