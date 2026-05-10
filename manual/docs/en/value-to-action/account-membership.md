---
title: "Account and Membership: Understand Sign-In, Entitlements, and Purchase Boundaries"
description: "Understand accounts, sign-in, membership entitlements, subscription state, and platform purchase boundaries in GranoFlow."
---

This page supports the values-to-action path. GranoFlow can connect long-term goals, tasks, projects, and review; account, sync, AI, and membership features only make that personal planning practice clearer and more controllable. They do not decide your values or change data without your confirmation.

GranoFlow can be used as a local tool first, but account and membership affect sync, recovery, device management, and some advanced capabilities.

This chapter explains several things that are easy to mix up:

- what signing in is for
- how local use differs from signed-in use
- how membership entitlements are checked
- why subscription, membership, and entitlement are not the same word
- what Apple, Google, RevenueCat, and GranoFlow each handle
- why the desktop app may not show a purchase entry

## What Signing In Is For

Signing in mainly identifies who you are.

After you sign in, GranoFlow can connect certain capabilities to your account, such as:

- cloud sync
- multi-device use
- device management
- membership entitlement recognition
- restore purchases
- account deletion requests
- server-related notifications and state

When signed out, you can still use many local capabilities.

This matches GranoFlow's local-first design: daily recording, organizing, and review should not depend on the server at every step.

But if you want cross-device sync, cloud data recovery, or membership features that require server confirmation, you need to sign in.

A simple way to think about it:

> Local use answers "How do I record and organize now?" Signing in answers "Who owns this data and these entitlements?"

## Local Use and Signed-In Use

When signed out, GranoFlow behaves more like a device-local tool.

You can record tasks, organize projects, and write reviews, but the content mainly stays on the current device.

After signing in, GranoFlow can connect local data with the account, cloud sync, and membership entitlements.

That does not mean everything becomes public or uploads as plain text after sign-in. Sync, encryption, backup, and recovery still have their own boundaries.

A more accurate model is:

- Signed out: mainly local use
- Signed in: account-related capabilities become available
- Sync enabled: data can align across devices
- Correct key entered: matching encrypted data can be opened

Signing in is only the first step. It does not mean the server can directly read all of your content.

## What Membership Entitlements Are

Membership entitlements are the paid capabilities the current account can actually use.

For example:

- cloud sync upload
- higher capacity or storage-related capability
- member-only settings
- features that require account entitlement checks
- advanced capabilities that may become available later

Membership entitlements are not decided by the client alone.

The app should not treat you as a member only because of a local button, cache, or temporary state.

GranoFlow checks payment platform information, RevenueCat, server-side subscription snapshots, and related state to decide whether the current account really has the entitlement.

This avoids mistaken grants and mistaken removals of user entitlements.

## Subscription, Membership, and Entitlement

These three words are easy to mix up.

**Subscription**: the purchase relationship in Apple, Google, or another payment channel.  
**Membership**: the user identity GranoFlow describes publicly, such as Pro or Angel.  
**Entitlement**: the capabilities the current account can actually use.

For example:

You purchase GranoFlow Pro annually in the Apple App Store.

That is a subscription record.

RevenueCat receives and organizes that purchase state.

The GranoFlow server uses that state to mark your account as having the related membership entitlements.

Finally, the app reads the server-confirmed entitlements and decides whether to open the related features.

The path is roughly:

> Platform purchase -> RevenueCat recognition -> GranoFlow server sync -> App shows entitlements

Do not treat "I once tapped the purchase button" as "this account definitely has entitlement now".

If account binding, refunds, expiration, revocation, platform state, or sync state changes, the final available entitlement can also change.

## What Apple and Google Handle

Apple and Google handle payment and subscription flows on their own platforms.

For example:

- showing in-app purchase dialogs
- processing payment
- managing subscription state
- handling refunds and renewals
- providing restore purchase capability
- reviewing products and subscriptions under platform rules

GranoFlow cannot bypass platform rules by guiding users to buy elsewhere inside the app, and it cannot suggest external payment paths such as "the website is cheaper" inside the app.

In official iOS and Android store builds, if a purchase entry exists, it should use Apple's or Google's platform payment system.

## What RevenueCat Handles

RevenueCat connects payment platforms with GranoFlow's entitlement system.

It organizes purchase events from Apple, Google, and other platforms into more consistent subscription and entitlement states.

This means GranoFlow does not need a completely different entitlement system for every platform.

But RevenueCat is not the final user interface.

Users ultimately see membership status and available features inside GranoFlow.

A simple summary:

> Apple / Google handle payment and platform subscriptions, RevenueCat organizes purchase state, and GranoFlow shows entitlements based on the account.

## What Supabase and the Server Handle

GranoFlow's server stores and syncs account-related state.

One important principle is:

> The client displays and requests. It should not write subscription facts by itself.

Subscription state, membership entitlements, system notifications, account recovery results, and similar facts should be maintained by the server, webhooks, or controlled backend processes.

This is not complexity for its own sake. It is about safety.

If the client could write membership state by itself, anyone might forge entitlements by changing local data. That would break the paid system and create confusing user states.

So the app should read server-confirmed entitlements instead of declaring "I am a member" by itself.

## Why Desktop May Not Show a Purchase Entry

Payment boundaries are more sensitive on desktop.

GranoFlow desktop may be distributed through Microsoft Store, Snap, Flatpak, or direct download. To avoid platform payment rule and external purchase guidance issues, the desktop app may show existing membership entitlements without offering a purchase entry.

That means:

- If you already have membership, signing in on desktop can unlock the related capabilities.
- If you do not have membership, desktop may not provide a purchase button.
- Desktop should not guide you to an external web purchase through prompts, links, or buttons.
- Different distribution channels may have different restrictions, and the app keeps the boundary clear.

This is not a missing feature. It is part of platform compliance.

GranoFlow is still a structure tool at its core, not a place to insert purchase paths on every surface.

## Why NFT or Certificate Purchase Does Not Appear in the App

GranoFlow may have surrounding certificate or NFT systems, but they are not part of the core app experience.

The app should not show:

- NFT purchase entries
- wallet connection
- minting or on-chain actions
- NFT market prices
- external purchase hints
- an entry to offset in-app subscription with NFT

This keeps platform boundaries clear and avoids turning the core structure tool into a finance or trading story.

For app users, the important part is:

> After signing in, the app shows available capabilities based on official entitlements.

Certificates, NFT, or surrounding web systems should not interfere with the core app experience.

## What Restore Purchase Means

Restore purchase usually means asking the platform to check previous purchases again and try to align them with the current account entitlements.

This is useful in cases such as:

- changing devices
- reinstalling the app
- subscription state not refreshing in time
- platform purchase succeeded but entitlement does not appear in the app yet
- signing in again with the same platform account

But restore purchase is not magic.

If the purchase was linked to another GranoFlow account, or the platform subscription has been refunded, revoked, or expired, the current account may not receive entitlement.

Restore purchase rechecks purchase state. It does not create membership from nothing.

## What to Check When Switching Platforms

Apple and Google are different platforms.

A subscription purchased through Apple usually belongs to Apple's purchase ecosystem.  
A subscription purchased through Google usually belongs to Google Play purchase records.

GranoFlow tries to recognize entitlements through the account and RevenueCat, but platform, binding, and restore boundaries may still exist.

The safest approach:

- Sign in with the same GranoFlow account.
- Before purchasing, confirm the signed-in account is correct.
- After purchasing, wait for entitlement refresh.
- After changing devices, sign in with the same account first.
- If entitlement does not appear, try restore purchase.

Do not switch purchases casually across multiple GranoFlow accounts. Otherwise it becomes hard to tell which account owns the entitlement.

## Account Deletion and Data Deletion

Account deletion is not simply signing out.

Signing out only means the current device is no longer signed in.

Account deletion usually means you want to delete account-related information, and it may affect server-side state, sync data, and later recovery.

Before deleting, confirm:

- whether you have exported a local backup
- whether you saved the key
- whether other devices still need to sync
- whether membership or subscription needs attention
- whether you understand recovery limits after deletion

If you only want to stop using the app temporarily, do not delete the account directly.

If you only want to stop cloud sync, do not mix that up with account deletion.

## Common Misunderstandings

### If I can sign in, can I recover all data?

Not necessarily.

Sign-in proves the account belongs to you, but encrypted data still needs the correct key.

If you lose the key and no old device can open the data, the server usually cannot decrypt it for you.

### If I bought membership, will membership always show?

Not necessarily.

Entitlement depends on current subscription state, platform purchase records, refunds, expiration, account binding, and server sync results.

Having purchased before does not mean it is still valid now.

### If I purchase on one platform, will another platform recognize it immediately?

Not necessarily.

Cross-platform recognition requires account, payment state, and server sync to line up correctly. After changing devices or platforms, use the same GranoFlow account and restore purchase when needed.

### If desktop has no purchase button, does that mean membership cannot be used?

No.

Desktop can show existing entitlements, but for compliance and distribution boundaries, it may not provide a purchase entry.

### If NFT is not shown in the app, does that mean NFT does not exist?

No.

It only means the NFT or certificate system is not part of the core app experience. The app does not show it so platform payment and product boundaries remain clear.

## A Simple Check

When you run into an account or membership issue, ask:

> Which GranoFlow account am I signed in to?  
> Which platform did the purchase happen on?  
> Is the platform subscription still active?  
> Has the app refreshed entitlements?  
> Does cloud data need a key before it can be opened?  
> Am I mixing account, subscription, key, and data recovery together?

These questions usually help locate most issues.

## Next

At this point, the beginner path is complete:

> Quick Start -> Turn Values into Action -> From Domains to Tasks -> Set Long-Term Direction First -> Projects and Milestones -> Tasks and Inbox -> Review -> AI Assistance -> Data Safety and Sync -> Account and Membership

If you only want to start using GranoFlow, this is enough.

After this, read detailed feature pages as needed:

- task system overview
- projects
- milestones
- review
- data safety
- backup and restore
- FAQ

GranoFlow does not require you to understand every feature at once.

Write down one thing, complete one step, do one review, then slowly build your own time structure.
