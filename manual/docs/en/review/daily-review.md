---
title: "Daily review"
description: "The daily review counts tasks by completion time and helps you review time invested and use AI for task reviews."
---

The daily review helps you check what you actually finished during the day and write a few notes about it. It counts tasks by **completion time**, not due date; each new day starts at midnight.

Use the previous-day and next-day buttons beside the date title to move through daily reviews. On portrait screens, the detail page also shows the current date in the header and keeps the same day navigation; days with no completed tasks can still be opened as empty states.

{/* manual-screenshot:id=review-overview-main */}
![Daily review](../../../screenshots/en/review-overview-main.png)

## How tasks are counted

The daily review only looks at when a task was marked complete.

This means:

- Task due yesterday, completed today → appears in today's review
- Task completed yesterday at 11:58 PM → appears in yesterday's review
- Task completed today at 1:00 AM → appears in today's review

In other words, the daily review uses natural calendar days: tasks completed after midnight belong to the new day.

## What to write

There is no fixed format. You can simply write a few things worth remembering, such as:

- What you completed, and what you did not complete
- What felt smooth, and what got stuck
- What you want to handle first tomorrow
- What your state felt like today

Three to five sentences is usually enough. You do not need to write a formal report, and you do not need to answer every prompt.

## Arranging today's task time

The right side of the daily review shows **Time invested today**. This is calculated from the union of today's task time blocks: if two tasks overlap, the overlapping minutes are not counted twice.

<!-- manual-screenshot:id=review-daily-time-overlap-entry -->
![Daily review screen capture](../../../screenshots/en/review-daily-time-overlap-entry.png)

Task blocks in the timeline keep the task title as the main text. If a task belongs to a project and the block has enough space, the project name appears below the title in smaller text; short tasks, narrowed overlapping tasks, and tasks without a project only show the task title.

If you want to review today's task reflections, choose **Review Today's Tasks** and let AI use the recorded task times as context, then summarize the day's domain, project, and milestone progress. Task times are read-only in this flow; real time corrections must be made manually in the task list or task detail view. After you copy the result back into GranoFlow, you still need to confirm before it writes task title, Task Review, today's domain reports, or optional new tasks. See [Review Today's Tasks](../ai-assistance/daily-task-review) for the full flow.

## Days with no completed tasks

If no tasks were completed on a given day, the daily review shows an empty state. It does not use empty charts or messages like "you did nothing today" to create pressure.

The empty page simply means: no completed tasks were recorded for that day.

:::note[The review is for you]
The audience is your future self, not your boss or other users. Write it in whatever way will make sense to you later.
:::
