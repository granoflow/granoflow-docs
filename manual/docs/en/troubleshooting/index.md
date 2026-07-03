---
title: "Troubleshooting"
description: "Check card, sync, data, screenshot, and page issues in the right order."
docType: "Troubleshooting"
readerGoal: "Know what to check before taking destructive action."
---

Troubleshooting should preserve evidence before destructive actions. Do not start by deleting local data, reinstalling the app, or overwriting backups.

If a page shows a mostly blank screen with one line such as `Bad state`, `Exception`, or `database closed`, it is not a valid manual screenshot and not a normal page state. Record the route, locale, seed, and action path, then restart or rebuild the screenshot environment.

Review-card screenshots must use the fixed seed card `card_domain_garden_manual_screenshot`. If another card appears, the queue, seed, or locale is wrong.

For missing manual images, verify the stable path `manual/screenshots/<locale>/<id>.png` and the canonical screenshot plan. Never publish run-folder or timestamped candidate images.
