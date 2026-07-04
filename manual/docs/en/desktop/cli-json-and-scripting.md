---
title: JSON and Scripting
description: "Connect automation scripts with structured output."
---

JSON output is ideal for script reading, while plain text output is for human reading. When writing automation, prefer having scripts read stable fields rather than parsing natural language.

## A Real-World Scenario

For example, if you need to count tasks, have the command output JSON, then let the script read the `count` field or the length of the list.

## How to Decide the Next Step

| Your Situation | What to Check First | Next Step |
| --- | --- | --- |
| Don't know where to start | Current page title and main entry | Select only one item related to your current goal |
| Result is wrong after an operation | Status, empty prompts, access logs, or sync progress | Go back one level and troubleshoot in order |
| Worried about affecting data | Backup, sync, account, or permission notes | Stop first, confirm the scope, then proceed |

## Boundaries

Scripts should also clearly handle error paths: connection failure, invalid access code, no data — each should give a distinct message.

## Next Steps

After reading this section, return to the task you are working on and pick just one minimal action to continue: log an input, check a status, or open related settings to complete a confirmation.
