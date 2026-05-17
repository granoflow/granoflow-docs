---
title: "Daily review"
description: "The daily review counts tasks by completion time and helps you review time invested, auto-arrange overlapping task times, and use AI for task reviews."
---

The daily review helps you check what you actually finished during the day and write a few notes about it. It counts tasks by **completion time**, not due date; tasks completed before 3 AM count as the previous day.

{/* manual-screenshot:id=review-overview-main */}
![Daily review](../../../screenshots/en/review-overview-main.png)

## How tasks are counted

The daily review only looks at when a task was marked complete.

This means:

- Task due yesterday, completed today → appears in today's review
- Task completed yesterday at 11:58 PM → appears in yesterday's review
- Task completed today at 1:00 AM → **appears in yesterday's review**, because anything completed before 3 AM counts as the previous day

This is designed for people who work past midnight or go to sleep late. That early-morning time is treated as an extension of yesterday, not the start of a new workday.

## What to write

There is no fixed format. You can simply write a few things worth remembering, such as:

- What you completed, and what you did not complete
- What felt smooth, and what got stuck
- What you want to handle first tomorrow
- What your state felt like today

Three to five sentences is usually enough. You do not need to write a formal report, and you do not need to answer every prompt.

## Arranging today's task time

The right side of the daily review shows **Time invested today**. This is calculated from the union of today's task time blocks: if two tasks overlap, the overlapping minutes are not counted twice.

If GranoFlow finds overlapping task times, it shows a prompt to auto-arrange task time. This is useful when you forgot to record tasks during work and later completed several tasks at once, making their times cluster around the same moment.

{/* manual-screenshot:id=review-daily-time-overlap-entry */}

When you choose **Auto-arrange task time**, GranoFlow first puts today's tasks into a bottom preview sheet. By default, it starts at 9:00 AM and ends at the current time, then distributes tasks evenly in task order. You can drag the top or bottom edge of a task block to adjust its start or end time before saving. Tasks do not overlap inside the preview sheet only to keep the drag interaction simple; task times can still overlap at the data level, and this is not a scheduling calendar.

See [Auto-arrange task time](task-time-arrangement) for the full rules.

You can also choose **Review Today's Tasks** and let AI help you check how long each task took, then summarize the day's domain, project, and milestone progress. AI only prepares suggestions. After you copy the result back into GranoFlow, you still need to confirm before it writes task start time, end time, title, Task Review, or today's domain reports. See [Review Today's Tasks](../ai-assistance/daily-task-review) for the full flow.

## Days with no completed tasks

If no tasks were completed on a given day, the daily review shows an empty state. It does not use empty charts or messages like "you did nothing today" to create pressure.

The empty page simply means: no completed tasks were recorded for that day.

:::note[The review is for you]
The audience is your future self, not your boss or other users. Write it in whatever way will make sense to you later.
:::
