---
title: "Why changes require confirmation"
description: "AI suggestions never write directly to your tasks — confirmation is the key safeguard protecting your data."
---

Some AI products automatically change things, and by the time you notice something is wrong, it is too late to undo cleanly. GranoFlow does not work that way.

**Any AI suggestion that would change a task field requires your explicit confirmation before writing.**

## Why this design

AI recognition is not 100% accurate. The same phrase can have multiple valid interpretations:

- "Want to go for a run tomorrow" — is that a due date? A reminder? Just a thought?
- "Before next Friday" — due date? Planned start time?

Without confirmation, a misinterpretation could silently change multiple fields. Confirmation lets you glance at "is this what AI understood?" before anything sticks.

## What the confirmation view shows

- Fields AI identified (date, tags, project, reminder…)
- The corresponding text in the original title (usually highlighted)
- The ability to accept or dismiss each suggestion individually

## If you do not confirm

Nothing changes. The original title stays intact, and no task fields are modified. You can close the confirmation view and continue typing from scratch.

:::note[Can you undo after confirming?]
Once you accept AI suggestions, the fields are written. You can edit them manually in task details. GranoFlow does not have a dedicated "undo AI action" button, so reviewing before confirming matters.
:::
