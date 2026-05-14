---
title: "Auto-arrange task time"
description: "When several task times overlap in the daily review, auto-arrange them into a preview timeline that is easier to check."
---

If you often add tasks after the work is already done, the daily review may show several tasks clustered around the same time. Auto-arranging task time first puts those records into a preview timeline that is easier to inspect, adjust by dragging, and then save.

This is not a calendar scheduling tool, and it does not prove the exact real-world timeline. Task times can still overlap in GranoFlow. This entry is only a lightweight review aid.

## Where to start

Open the daily review. If the right sidebar finds overlapping task times, it shows the **Auto-arrange task time** entry.

{/* manual-screenshot:id=review-daily-time-overlap-entry */}

If there are no overlapping tasks, this prompt is hidden. You can still use **Review Today's Tasks** directly.

## What auto-arrangement does

The first version uses a simple default:

| Rule | Meaning |
| --- | --- |
| Start time | 9:00 AM on the review date |
| End time | The current time when you auto-arrange |
| Distribution | Evenly distributed in task order |
| Timeline | Non-overlapping inside the preview sheet; gaps are allowed |
| Data rule | Task times are still allowed to overlap |

Task order prefers completion order, creation order, and the current display order. Choosing the entry does not immediately change task time. GranoFlow first opens a bottom preview sheet so you can check the result before saving.

{/* manual-screenshot:id=review-daily-task-time-arrangement */}

## How to check the result

The preview sheet also shows a timeline. Each task block can only be adjusted vertically: drag the top edge to change the start time, or the bottom edge to change the end time. Task blocks cannot be dragged horizontally.

Look at three things:

1. Whether the total time window matches roughly when you worked.
2. Whether the task order matches the order you remember.
3. Whether any task looks obviously too long or too short.

You do not need to make every minute exact. For daily review, it is usually enough to separate records that were accidentally clustered together.

The preview sheet does not allow two tasks to overlap. That limit keeps the drag interaction simple; it does not change GranoFlow's general rule that real task times may overlap elsewhere.

## How this relates to Review Today's Tasks

**Auto-arrange task time** organizes time blocks first. **Review Today's Tasks** lets AI help you check whether each task's duration makes sense, then write confirmed start time, end time, title, or Task Review back into tasks.

If you are not sure how to divide the time, auto-arrange first, then continue with [Review Today's Tasks](../ai-assistance/daily-task-review).
