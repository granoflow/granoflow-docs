---
title: "AI assistance overview"
description: "GranoFlow's AI is an organizer assistant, not an autonomous agent — it suggests, you decide."
---

GranoFlow's AI will not change your tasks by itself, and it will not send data to external AI unless you actively use an AI feature. Its job is to help organize information and make suggestions; you decide whether to use them and whether anything is written.

<!-- manual-screenshot:id=ai-helper-prompt-settings -->
![AI assistance overview screen capture](../../../screenshots/en/ai-helper-prompt-settings.png)

## What AI can do in GranoFlow

| Feature | What it does |
| --- | --- |
| Title parsing | Recognizes dates, tags, reminders, and similar information from task titles |
| Clipboard assistant | Turns scattered clipboard text into a task list |
| Helper prompt | Prepares related official manual links for the current page, so you can ask an external AI about it |
| AI redaction | Replaces sensitive words you configured before content is sent to external AI |

## Helper includes manuals for the current page

When you click Helper on a page, GranoFlow prepares a prompt. The prompt includes the current page route, a short page description, and several related official manual links.

This means that when you give the prompt to an external AI, it can read those manual pages first before answering your question. If those links are not enough, the prompt also keeps the official manual home page as a fallback. If the manual does not clearly answer the question, Helper asks the external AI to say that the information is not confirmed in the manual; in low-risk cases, it may offer an inference, but it must separate the inference from manual-confirmed information.

If you say a feature is missing, hard to find, or hard to use, Helper also asks the external AI to acknowledge the experience issue first, not argue with you, and optionally direct you to [granoflow-docs](https://github.com/granoflow/granoflow-docs) for feedback; effective feedback may have a chance to receive a GranoFlow annual membership reward.

For example, if you click Helper on the sync page, the prompt prioritizes manuals about sync, new-device sync, and device management instead of only giving the manual home page.

## What AI will not do

- ❌ It will not automatically write tasks; all field changes require your confirmation
- ❌ It will not silently read your data in the background
- ❌ It cannot guarantee that AI output is always accurate; results are only for reference

## The basic data logic

Normal GranoFlow use, such as browsing tasks, reviewing, or journaling, **does not involve AI at all**. These actions do not send data out just because AI features exist.

Only when you actively trigger an AI feature does the relevant text from the current action enter the AI processing flow. If redaction is enabled, GranoFlow replaces your configured sensitive words before sending content out.

If the selected external assistant or web page cannot be opened for the moment, GranoFlow keeps the prepared prompt and asks you to try again later; local tasks and reviews are not changed.

:::tip[Want more control over your data?]
Go to the "AI redaction" settings and maintain your sensitive-word list. Then GranoFlow can automatically replace those words before sending content to external AI.
:::
