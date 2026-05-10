---
title: "Data Safety and Sync: Understand Local Data, Cloud Data, Backups, and Keys"
description: "Understand GranoFlow local-first use, cloud sync, end-to-end encryption, backup, and recovery boundaries for more controlled personal planning data."
---

This page supports the values-to-action path. GranoFlow can connect long-term goals, tasks, projects, and review; account, sync, AI, and membership features only make that personal planning practice clearer and more controllable. They do not decide your values or change data without your confirmation.

The content you record in GranoFlow may include tasks, projects, reviews, values, journals, and attachments.

That content is private, so it helps to understand a few boundaries:

- which data mainly stays local
- which data may sync to the cloud
- what end-to-end encryption means
- why the key is not your sign-in password
- why backup files are not meant to open like plain text
- what to check when changing devices or restoring data

This chapter avoids deep technical detail and focuses on what you actually need to know.

## What Local-First Means

Local-first means GranoFlow's core data is available on your device first.

You do not need to wait for a server every time you open the app. Basic actions such as recording tasks, organizing projects, and viewing reviews can happen on the device first.

This brings several benefits:

- You can keep recording without a network.
- Opening and searching feel faster.
- Temporary server problems do not immediately block daily use.
- Your personal time structure is not fully dependent on a remote server.

But local-first does not mean "local forever only".

If you enable cloud sync, GranoFlow uploads the data that needs to sync so you can continue on other devices and recover after changing devices or reinstalling.

A simple way to think about it:

> Local data is your current workspace. Cloud data is an encrypted copy for multi-device sync and recovery.

## What Cloud Sync Does

Cloud sync mainly solves two problems.

First, using multiple devices.

You might capture a task on your phone, organize projects on your computer, then return to your phone to review. Sync helps those devices stay aligned.

Second, recovery.

If you change devices, reinstall the app, or local data is damaged, cloud sync data can help restore earlier records.

Cloud sync does not turn the server into the main workspace.

Daily use still starts from your device. The server stores encrypted sync data and helps devices align when needed.

## What End-to-End Encryption Protects

The core idea of end-to-end encryption (E2EE) is:

> Before data leaves your device, it is encrypted; the cloud mainly stores encrypted content.

This reduces risk from cloud data leaks, incorrect permissions, or server-side exposure.

For a tool that stores personal plans, reviews, and values, this matters. Your tasks and reviews should not easily become plain text that other people can read.

But encryption is not magic.

When you use GranoFlow normally on a device, the app needs to decrypt data locally to display, search, and edit it. If the device itself is compromised, or someone already has access to your unlocked device, end-to-end encryption cannot solve every risk.

You should still:

- set a system lock screen
- avoid handing your device to others casually
- avoid installing software from unknown sources
- keep your key safe
- be careful when copying content to external AI or other tools

## The Key Is Not Your Sign-In Password

This is the easiest point to misunderstand.

A sign-in password or email verification code proves:

> This account belongs to you.

An encryption key opens:

> Your encrypted data.

They are not the same thing.

You may be able to sign in, but without the correct key, you may still be unable to open encrypted cloud data or backups.

This is not the system making things difficult. It is the basic tradeoff of end-to-end encryption. If the server could unlock your data whenever you forgot the key, then the server would already have the ability to read your private content.

So you need to save the key carefully.

Recommended practices:

- Store the key in a reliable password manager.
- Do not keep it only as a screenshot on one device.
- Do not send it through untrusted chat tools.
- Before changing devices, confirm the key works.
- When exporting a backup, confirm you know the matching key.

## What Happens If You Forget the Key

If you forget the key, several things may happen.

If an old device can still open the data, it may still help you continue using GranoFlow or rebuild sync.

If you only have encrypted cloud data but no correct key, the server usually cannot unlock it for you from nothing.

If you have a backup file but not the key used when the backup was created, the backup may also be impossible to restore.

Do not treat "I can sign in" as "I can definitely recover all encrypted data".

A more accurate rule is:

> Sign-in gets you back to the account. The key opens the data.

## Why Backups Are Also Encrypted

GranoFlow backup files are not meant to be opened casually like plain text files.

That can feel less convenient, but it has an important benefit: if a backup is uploaded by mistake, sent to the wrong person, or placed in a poorly protected folder, your tasks, journals, reviews, and attachments are not immediately exposed as readable content.

A backup is closer to an encrypted package.

It helps you:

- restore data when needed
- keep a copy before changing devices
- retain control if cloud sync has issues
- avoid spreading plain text files everywhere

After exporting a backup, save the matching key as well.

A backup without the key is not full recovery ability.

## What to Check When Changing Devices

Before changing devices, confirm three things:

1. The old device can still open GranoFlow.
2. Cloud sync is healthy, or you have exported the latest backup.
3. You know the key for the current data.

When a new device syncs for the first time and encrypted cloud data already exists, you usually need to enter the correct key before the device can use cloud data.

Do not treat an empty device as a new source of truth. An empty device does not have your old records. If handled incorrectly, it may create confusion about sync direction.

The safest order is:

- confirm data is complete on the old device
- export a backup
- save the key
- sign in on the new device
- follow the prompts to restore or sync

## What to Check When Restoring a Backup

When restoring a backup, you need the key that matches the backup.

The system will try to check whether the backup file is complete, whether the version is compatible, and whether core data exists.

If core data is missing, restore may not continue.

If some attachments are missing, text records may restore while certain images or files cannot open.

So backup quality matters more than backup quantity:

- The backup should come from a trusted source.
- The export should have completed fully.
- The key should be saved correctly.
- Important attachments should be included or downloadable again.
- After restore, check tasks, projects, reviews, and attachments.

## What Clearing Cloud Data Means

Clearing cloud data is a risky action.

It does not mean signing out, and it does not mean pausing sync.

It usually means you no longer want the current sync data stored in the cloud, or you plan to rebuild cloud state from local data or a backup.

Before doing this, check:

- whether this device still has complete data
- whether you have exported a backup
- whether you saved the key
- whether other devices still use the old cloud data
- whether you are ready to sync again afterward

If you only want to stop using cloud sync temporarily, do not clear cloud data casually.

Only consider it carefully when the key is lost, cloud state is abnormal, or you plan to rebuild sync from a cleaner local data set.

## Be Careful Before Sending Content to External AI

There is an important difference between AI assistance and data safety:

GranoFlow can try to protect data inside the app, backups, and cloud sync. But when you actively copy content to external AI, that content enters the external service's processing scope.

Before sending, check whether it includes:

- real names, emails, phone numbers, or addresses
- other people's privacy
- company confidential information
- unpublished business plans
- sensitive health or emotional records
- journal content you do not want to leave the device

If you are unsure, remove sensitive parts first or send only a summary.

For example, do not send:

> Full chat logs and contact information for Zhang San in a company project.

Write instead:

> A collaborator raised several issues, and I want to organize my response.

AI is useful for organizing, but it should not become the default exit for private content.

## Do Not Treat Security as an Absolute Promise

GranoFlow uses local-first behavior, end-to-end encryption, encrypted backups, and confirmation flows to reduce risk.

But no software can guarantee absolute safety.

You still need to do your part:

- protect your device
- save the key
- export and share carefully
- avoid suspicious software
- avoid sending private content to untrusted services
- read prompts carefully before clearing cloud data or restoring backups

Security is not one button. It is a set of habits.

GranoFlow can reduce accidental exposure and mistaken actions, but it cannot keep every judgment for you.

## A Simple Check

When you are not sure whether an action is safe, ask:

> Where is this data now?  
> Has it left my device?  
> Was it encrypted before leaving?  
> Have I saved the key?  
> Do I really want to give it to this service or device?

These questions are more useful than memorizing technical terms.

## Next

For concrete operation steps, continue with:

- Data and security overview
- Multi-device sync
- Sync existing cloud data on a new device
- Encryption and recovery key
- Backup and restore
