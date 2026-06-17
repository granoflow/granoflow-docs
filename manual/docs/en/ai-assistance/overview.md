---
title: "AI Assistance Overview"
description: "GranoFlow's AI is your organizing assistant, not an auto-agent—it suggests, you decide."
---

GranoFlow's AI does not modify your tasks on its own, nor does it send data to external AI unless you actively use an AI feature. Its role is to help you organize and make suggestions; you must confirm whether to accept or write any changes.

<!-- manual-screenshot:id=ai-helper-prompt-settings -->
![AI Assistance Overview interface screenshot](../../../screenshots/en/ai-helper-prompt-settings.png)

## What GranoFlow's AI Can Do

| Feature | What It Does |
| --- | --- |
| Title Parsing | Recognizes dates, tags, reminders, etc., from task titles |
| Clipboard Assistant | Organizes scattered text from the clipboard into a task list |
| Helper Prompt | Provides relevant official manual links based on the current page, ready for you to ask an external AI |
| Task Assistant | Based on the current task, node, project, milestone, attachment summary, task review, and linked cards, helps you analyze, advance, or review that task |
| Review Today's Tasks | During the daily review, organizes the day's tasks and, after confirmation, writes back task titles, task review notes, daily journal content, or creates new tasks |
| AI Desensitization | Replaces your configured sensitive terms before sending content to external AI |

## Helper Includes the Manual for the Current Page

When you click Helper on a page, GranoFlow prepares a prompt. It includes the current page's URL, a description of the page, and several relevant official manual links.

This means that when you give the prompt to an external AI, it can first read those manual pages before answering your question. If those links are insufficient, the prompt also keeps the main manual home page for further searching. If the manual doesn't have a clear answer, Helper instructs the external AI to first state that the manual has not confirmed it; in low-risk scenarios, it may offer speculation, but must clearly separate speculation from confirmed manual information.

If you report that a feature is hard to find, too difficult to use, or unusable, Helper also instructs the external AI to first acknowledge the user experience issue without arguing, and may guide you to [granoflow-docs](https://github.com/granoflow/granoflow-docs) for feedback; effective feedback may earn a GranoFlow annual membership reward.

For example, if you click Helper on the Sync page, the prompt will prioritize listing related manuals such as Sync, New Device Sync, and Device Management, rather than only giving the manual home page.

When you click Helper on the task details page, the prompt will include the task details manual, suitable for asking usage questions like “What does focus, complete, reminder, and task card mean on this page?” It will not read the current task content to analyze it for you; if you want AI to analyze a specific task, use the task assistant entry on the task details page instead.

The task assistant is different from Helper. Helper explains how to use the current page; the task assistant works with the content of the current task—for example, helping you clarify task goals, break down next steps, review a completed task, or generate draft cards that need your confirmation before being imported. The task assistant does not currently treat runtime states such as “whether focus is active” or “which task is pinned” as known facts; these usage instructions are governed by the task details manual and Helper.

## What the AI Does Not Do

- ❌ Will not automatically write tasks; all field modifications require your confirmation
- ❌ Will not silently read your data in the background
- ❌ Does not guarantee that AI output is accurate; results are for reference only

## Basic Data Security Logic

When you use GranoFlow normally—browsing tasks, doing reviews, writing journals—**AI is not involved at all**. These operations do not send data out just because AI features exist.

Only when you actively trigger an AI feature will the text related to that operation enter the AI processing pipeline. If you have enabled desensitization, GranoFlow will replace your configured sensitive terms before sending.

If the external assistant or web page you choose is temporarily unreachable, GranoFlow retains the prepared prompt and prompts you to retry later; local tasks and reviews are not affected.

:::tip[Want more control over your data?]
Go to the “AI Desensitization” settings and maintain your list of sensitive terms. That way, before GranoFlow sends content to an external AI, it will automatically replace those terms.
:::
