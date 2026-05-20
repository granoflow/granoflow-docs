---
title: "Why changes require confirmation"
description: "AI suggestions never write directly to your tasks — confirmation is the key safeguard protecting your data."
---

Changes require confirmation because GranoFlow wants you to check whether the AI understood correctly first. If you do not confirm, AI suggestions are not written to task fields.

**Any AI suggestion that would change a task field requires your explicit confirmation before writing.**

## Why this design

AI does not understand your intent perfectly every time. The same phrase can have several meanings:

- "Want to go for a run tomorrow" — tomorrow could be a due date, a reminder, or just part of the idea.
- "Before next Friday" — this could be a due date or a planned start time.

If AI changed tasks automatically, a wrong guess could write dates, tags, projects, or reminders into the task before you notice. Then you would need to check and fix those fields one by one.

Confirmation has one simple job: before anything is written, you can see what AI is about to change.

## What the confirmation view shows

The confirmation view usually shows:

- Fields identified by AI, such as date, tags, project, or reminder.
- In the daily task review flow, the start time, end time, task title, or Task Review that AI is preparing to update.
- The matching text in the original title, usually highlighted.
- A way to accept or ignore each suggestion separately.

You do not have to accept everything at once. If one suggestion looks wrong, you can ignore just that item.
## If you do not confirm

If you do not confirm, nothing is written. The original title stays unchanged, and task fields are not modified.

You can close the confirmation view, then type again or keep editing.

:::note[Can you undo after confirming?]
After you accept AI suggestions, the task fields are written. You can still edit those fields manually in task details. GranoFlow does not have a dedicated "undo AI action" button, so it is best to review before confirming.
:::
