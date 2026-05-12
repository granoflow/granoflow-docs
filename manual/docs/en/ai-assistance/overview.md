---
title: "AI assistance overview"
description: "GranoFlow's AI is an organizer assistant, not an autonomous agent — it suggests, you decide."
---

A common concern about AI features: will it automatically change my tasks, or quietly send my data somewhere?

GranoFlow's AI design principle is simple: **AI suggests, you confirm, nothing writes without confirmation**.

![AI assistance settings](../../../screenshots/en/ai-helper-prompt-settings.png)

## What AI can do in GranoFlow

| Feature | What it does |
| --- | --- |
| Title parsing | Recognizes dates, tags, reminders from task titles |
| Clipboard assistant | Organizes copied text into a task list |
| Helper prompt | Adds manual links for the current page so you can consult external AI about GranoFlow |
| AI redaction | Replaces sensitive words before sending to external AI |

## Helper includes manuals for the current page

When you click Helper on any page, GranoFlow puts the current route, a short page description, and several related official manual links into the prompt. The external AI should read those pages before answering; if they are not enough, the prompt still keeps the official manual home page as a fallback.

For example, if you click Helper on the sync page, the prompt prioritizes sync, new-device sync, and device-management manuals instead of only linking to the manual home page.

## What AI will not do

- ❌ Will not automatically write tasks — all field changes require your confirmation
- ❌ Will not silently read your data in the background
- ❌ Cannot guarantee accuracy — results are suggestions, not facts

## The basic data logic

Normal use (browsing tasks, journaling, reviewing) **does not involve AI at all** — your data stays on device.

Only when you actively trigger an AI feature does the relevant text enter the AI processing pipeline. Redaction settings can replace sensitive words before anything is sent.

If the selected external assistant or web page cannot be opened, GranoFlow keeps the prepared prompt and asks you to try again later; local tasks and reviews are not changed.

:::tip[Want more control over your data?]
Go to "AI redaction" settings to maintain a sensitive-word list, so GranoFlow automatically substitutes them before sending content to external AI.
:::
