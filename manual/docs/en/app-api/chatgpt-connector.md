---
title: GranoFlow ChatGPT Connector
description: "Let ChatGPT access GranoFlow after authorization."
---

The Connector links ChatGPT in your browser with your GranoFlow data. It differs from the local MCP because ChatGPT doesn't run inside your computer's process.

## A Real-World Scenario

If you want ChatGPT to look up tasks or help you organize a review, first follow the Connector documentation to complete authorization, then ask a clear question so it can read the data it needs.

## How to Decide the Next Step

| Your Situation | What to Check First | Next Step |
| --- | --- | --- |
| Don't know where to start | The current page title and main entry point | Choose only one item relevant to your current goal |
| The result after an action is wrong | Status, empty prompt, access logs, or sync progress | Go back one level and troubleshoot step by step |
| Worried about impacting data | Backup, sync, account, or permissions documentation | Stop first, confirm the scope, then continue |

## Boundaries

The Connector is suitable for conversational queries and organization, not for bypassing confirmation to make large-scale destructive changes.

## When to Use the Connector

| Scenario | Better Entry Point | Reason |
| --- | --- | --- |
| Asking about tasks inside the ChatGPT web page | ChatGPT Connector | ChatGPT doesn't run in your local process |
| A local agent reading tasks | MCP Server or Local HTTP API | The tool is on the same machine as GranoFlow |
| Accessing the desktop interface from a mobile device | Local network connection | Requires the desktop address and access code |

::::note[Authorize first, then ask]
The Connector should be used only after explicit authorization. When asking, be clear about what kind of data you want it to read — for example, today's tasks, a specific project, or recent reviews.
::::

## Next Steps

After reading this section, go back to the task you were working on and choose just one small action to proceed: record an entry, check a status, or open the relevant settings to complete a confirmation.
