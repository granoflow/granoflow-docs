---
title: "How AI helps organize titles"
description: "When you type a task title, AI can recognize dates, tags, projects, and reminders — but it never changes your task without confirmation."
---

You type "Meeting with Sarah tomorrow 3pm #work" — and then have to manually set the due date, add the tag, and set the reminder. Everything was already in the title.

Title parsing solves this.

![Title parsing interface](../../../screenshots/en/ai-title-parsing-quick-add.png)

## What title parsing recognizes

GranoFlow analyzes your task title as you type, looking for:

- **Time expressions**: tomorrow, next Friday, March 15, 3pm…
- **Tags**: #work #personal and similar hashtag patterns
- **Project mentions**: automatically matches your existing project names
- **Reminder triggers**: "remind me," "don't forget," and similar phrases

## What happens after recognition

AI shows its findings as suggestions — **nothing writes automatically**. You can:

- ✅ Accept all suggestions
- ✅ Accept only some (for example, just the tag but not the date)
- ✅ Ignore all suggestions and keep typing normally

Suggestions that are not accepted have zero effect on the task.

## When recognition is wrong

AI recognition is rule-based and model-assisted — not 100% accurate. If something is misidentified:

- Just ignore that suggestion — unaccepted suggestions do not write
- Set the correct field manually in task details

:::note[English date expressions work too]
Writing "tomorrow 3pm" or "next Monday" in your title is also recognized — no need to use Chinese only.
:::
