---
title: "Daily Review"
description: "Daily review counts by task completion time and helps you view today's time invested and use AI to organize task reviews."
translationSource: zh-CN
translationReview:
  - deepseek-flash
  - deepseek-pro
  - manual-multilingual-translation
---

The daily review is used at the end of the day to confirm what you actually accomplished and write a few notes. It counts tasks by their **completion time**, not due date; each day starts fresh at midnight.

You can swipe to the previous or next day beside the date title. When in portrait mode and the detail page is open, the top of the detail page shows the current date and continues using the same previous/next day buttons; even if no tasks were completed on a day, you can still navigate to it to see an empty state.

{/* manual-screenshot:id=review-overview-main */}
![Daily review main interface](../../../screenshots/en/review-overview-main.png)

## Counting Logic

The daily review only looks at when a task was marked as completed.

This means:

- A task due yesterday but completed today → appears in today's review
- A task completed at 23:58 yesterday → appears in yesterday's review
- A task completed at 1:00 today → **appears in today's review**

In other words, the daily review groups by calendar day: tasks completed after midnight enter the new day's review.

## How to Write a Daily Review

There is no fixed format. You can directly write a few things worth remembering today, for example:

- What got done today, what didn't
- What went smoothly, what got stuck
- What you want to handle first tomorrow
- How you felt today

Three to five sentences are usually enough. You don't need to write a formal report or answer every prompt question.

## Organizing Today's Task Time

The right side of the daily review shows "Today's Time Invested." This time is calculated as the union of the day's task time blocks: if two task times overlap, the overlapping portion is not counted twice.

"Flow Time" is a separate manually recorded time. It represents your subjective confirmation of true focused time, and can only be entered manually. It is not automatically derived from task start time, completion time, or time invested. You can fill it in the daily review, or from the detail of any completed task on that day; completed tasks on the same day share the same daily flow time.

<!-- manual-screenshot:id=review-daily-time-overlap-entry -->
![Daily review screenshot](../../../screenshots/en/review-daily-time-overlap-entry.png)

Task blocks in the timeline are based on the task title. If a task is linked to a project and there is enough space in the block, the project name appears in smaller text below the title; short tasks, tasks with narrowed blocks after overlapping, or tasks without a linked project display only the task title.

If a task's time is inaccurate, first go back to that completed task's detail, tap "Time Record," and adjust the start time and completion time to a period closer to reality. Doing this makes the task time blocks in the daily review, as well as later weekly and monthly reviews, more representative of your actual day. Full instructions are in [Calibrate time after completion](../tasks/completion-and-archive#calibrate-time-after-completion).

If you want to reorganize the day's task review, tap "Review Today's Tasks" to let the AI understand the day's flow based on recorded task times and organize the domains, projects, and milestone progress involved. Task times are read-only context; actual time corrections need to be done manually in the task list or task detail. After copying the results back to GranoFlow, you need to confirm in a dialog before they are written to task titles, task reviews, that day's domain daily report, or optionally new tasks. Full flow in [Review Today's Tasks](../ai-assistance/daily-task-review).

Weekly and monthly reviews aggregate the daily manually recorded flow time to show the total amount of true focused time for that week or month.

## Days with No Completed Tasks

If a day has no completed tasks, the daily review doesn't pressure you with empty charts or statements like "You did nothing today." The right side still displays basic information, such as zero time invested and a lightweight feedback when review is not applicable.

An empty page simply means: no completed tasks were recorded for this day.

:::note[Reviews are for you]
The audience for your review is future you, not your boss or users. Write in a way that you'll understand later.
:::
