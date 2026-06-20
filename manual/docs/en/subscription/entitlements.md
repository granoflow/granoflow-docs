---
title: "Subscription Benefits"
description: "Understand the truly stable capabilities unlocked by Pro, and why Pro Settings participate in sync and backup in plaintext."
---

The most common misunderstanding about subscription benefits is mixing up "what features you can use" with "what settings you can change."

In GranoFlow, the most definite and core capability among membership benefits is **cloud sync**: when your account has valid Pro benefits, GranoFlow allows you to sync local data to the cloud and continue using it across multiple devices. As for the many options in "Pro Settings," they are not a permanent, fixed privilege list; rather, they are advanced parameters temporarily opened to Pro users to handle uncertainties during the product's early stages.

In other words, Pro Settings are not a control panel that must be studied daily. They are more like a buffer: if you are not satisfied with GranoFlow's current default settings, you can adjust them here to a version that suits you better; if the defaults are already good enough, you can leave them untouched. To ensure these adjustments persist with your account and local backup, the Pro Settings currently included in the allowlist participate in cloud sync and local backup in plaintext.

<!-- manual-screenshot:id=subscription-vip-settings -->

![Subscription benefits interface screenshot](/manual/screenshots/en/subscription-vip-settings.png)

## Why Do Pro Settings Exist

When a product first faces real users, some default values are hard to pin down correctly from the start.

For example, how high should the time investment threshold in the heatmap be to be reasonable? At what point should the diagnostic status prompt you to enter a state of fatigue, stagnation, or abnormality? How transparent should the pinned window on desktop be so it neither blocks nor obscures? There is no single answer to these questions that fits everyone.

If GranoFlow hardcoded these parameters, users with different habits would find it difficult to use. If all parameters were open to everyone, it would overwhelm new users. So the current approach is: keep core features simple, treat cloud sync as a clear Pro benefit; place some advanced defaults that are still being validated into Pro Settings, and include the account-level Pro Settings allowlist in sync and backup.

## A Real-Life Scenario

Suppose you record tasks, daily reviews, and focus time in GranoFlow every day. After a while, you notice the heatmap colors always turn dark too quickly, as if the system treats ordinary workdays as heavy days; or you feel the diagnostic prompts appear too early, not matching your rhythm.

At this point, you don't need to interpret this as "must upgrade to use normally." Free users can still use core tasks, projects, reviews, and local data capabilities. Pro users simply have an additional adjustment entry: you can go into Pro Settings and change the heatmap threshold, diagnostic phases, diagnostic anomaly trigger conditions, or AI research preferences to make the current version closer to your workflow.

But there is an important boundary: these allowlisted Pro Settings are synced to the server in plaintext and written to local backups in plaintext. They are not private notes, task bodies, or encrypted content; they are parameter values you have chosen. We will use the experience from these settings as reference for future development, observing which configurations real users more commonly adopt.

## Which Are Stable Benefits, Which Are Advanced Settings

You can use this method to distinguish:

| Type              | Examples                                                                                                   | How to Understand                                                                                                           |
| ----------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Stable benefits   | Cloud sync, multi-device continuity, sync-related capabilities                                             | These are the most core and definite unlocked abilities of Pro                                                              |
| Advanced settings | Heatmap threshold, diagnostic phases, diagnostic anomaly trigger conditions, AI research preferences, etc. | These are space for Pro users to adjust defaults, not a permanent promise that every item will remain editable indefinitely |

If a default value stabilizes after enough real-world usage and is generally acceptable to free users, we may finalize it as a new default setting. At that point, the corresponding option may be removed from Pro Settings and no longer exist as an editable item.

This is not taking away stable core benefits; it is converging "still-experimental parameters" into "product default behavior."

## What Happens Without Membership

Non-members can usually see some Pro Settings entries. Seeing the entry does not mean the current account has permission to modify them.

You may encounter several situations:

- The cloud sync entry prompts that Pro is required.
- Some advanced settings can be viewed but not saved.
- After clicking a setting, the app guides you to view subscription or upgrade information.

This is to let you know where the features are and what adjustment space you might gain after subscribing. It does not mean free users' data is restricted, nor that local features stop working due to lack of a subscription.

## Think About One Thing Before Modifying Pro Settings

If you are just starting to use GranoFlow, it is not recommended to change all Pro Settings right away. Use the defaults for a while, and only come back here to adjust when you encounter something that doesn't suit you.

If you already know exactly what you want to change, follow this sequence:

1. Does this setting affect cloud sync, attachments, or multi-device usage?
2. Does this setting only change display, thresholds, prompts, or AI assistant preferences?
3. Do you accept that this parameter will be synced to the server in plaintext, and included in local backup in plaintext, as reference for future product default adjustments?

If you cannot accept point 3, do not modify this item. Keep the default value.

## Special Notes on Sync Benefits

Cloud sync is the core benefit of Pro. If the current account has no active benefits, the sync entry will prompt you to view or subscribe to membership.

<!-- manual-screenshot:id=subscription-sync-vip-upsell -->

![Sync membership info interface screenshot](/manual/screenshots/en/subscription-sync-vip-upsell.png)

Seeing the sync benefits info page **does not mean sync has started, nor that your local data is lost**. Local data exists independently of sync benefits. Data only enters the cloud sync pipeline when you are logged in, meet the benefit conditions, and actively complete the sync-related process.

Here, two types of data should be distinguished: user content such as tasks, projects, milestones, card notes are handled according to GranoFlow's encryption boundaries; the Pro Settings allowlist itself is plaintext setting values that persist with sync and local backup. Ordinary device preferences, such as language, theme, window state, current AI assistant selection, etc., are not turned into account-level sync content due to Pro Settings sync.

:::note[Benefits are determined by the server]
The benefit status displayed locally in the app comes from account information returned by the server. When the network is poor, it may temporarily show incorrectly; just refresh later.
:::

After understanding the difference between benefits and advanced settings, the next step is to continue with Platform Purchase and Restore Purchase: it explains why the same Pro benefit may display differently across different store platforms and different login accounts.
