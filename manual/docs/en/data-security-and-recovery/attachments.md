---
title: "Attachments and images"
description: "Images and attachments are stored and synced separately from text tasks — knowing the difference helps you avoid accidental data loss."
---

If you are wondering whether images are saved safely with your tasks, remember this first: text tasks and image attachments are stored and synced separately. Text may appear on another device before the image finishes uploading; Clear local attachments keeps images and only removes local non-image attachments from this device.

![Attachment management entry](../../../screenshots/en/subscription-vip-settings.png)

## How text and images differ

- **Text tasks**: small, quick to sync, and usually stay in sync between the device and cloud soon after changes
- **Image attachments**: large, slower to sync, and may still be uploading after the text task has already synced

So if a task appears on another device but the image is not visible yet, it does not necessarily mean the task was lost. Usually, keep the network stable and give the image more time to upload and download.

## What removing image attachments means

<!-- manual-screenshot:id=data-attachments-clear-detail -->
![Attachments and images screen capture](../../../screenshots/en/data-attachments-clear-detail.png)

There are two different things you can do with image-related data:

- **Remove from task**: stops the task from being linked to that image; the local file may still remain on this device
- **Clear local attachments (keep images)**: available from `Settings → Pro Settings`; when full attachment sync is off, it clears local non-image attachments from this device to free storage, and when full attachment sync is on, the action is disabled

After you clear local attachments, cleared non-image attachments can usually be downloaded again later. Whether images appear on another device still depends on whether they were uploaded successfully to the cloud; if an image was never uploaded, switching devices or clearing app data can remove the only available copy.

## Do local backups include images?

Local backups usually include only text data, such as tasks, projects, and review records. **Image files may not be included**. If you need images to be kept long term, the important thing is that cloud sync is working normally and the images have a chance to upload when network is available.

:::note[Images require network to upload]
Images do not upload offline. For example, if you attach a photo to a task while underground, that image will wait until the next time network is available before it continues uploading to the cloud.
:::
