---
title: "Completion, Archiving, and Trash"
description: "Task disappeared? First check filters, dates, projects, completed, archived, and trash; it's usually just moved somewhere else."
translationSource: zh-CN
translationReview:
  - deepseek-flash
  - deepseek-pro
  - manual-multilingual-translation
---

Don't immediately assume a task is lost when it disappears from the list. The most common reasons are: it's hidden by a filter, scheduled for a specific day, placed in a project, marked as completed, archived, or sitting in the trash.

The three states in GranoFlow most relevant to "task disappeared" are:

- **Completed**: The task is done, and it appears in the completed view and daily review statistics.
- **Archived**: Hidden from current view but the record is preserved.
- **Trash**: The task was deleted, but the trash hasn't been emptied yet.

## Completion

When a task is done, you can click "Complete" in the task details, or mark it as completed from the completion entry on the list. After completion, this task will:

- Disappear from the current to-do list
- Record a completion time
- Appear in the "Completed" view
- Be used for daily review statistics
- Hide the "Start" and "Complete" buttons in the task details, preventing a finished task from being started again as a to-do

<!-- manual-screenshot:id=tasks-completed-archived-trash -->
![Completion, archiving, and trash interface screenshot](../../../screenshots/en/tasks-completed-archived-trash.png)

:::tip[Tip]
If you still want to see completion records in daily reviews, don't casually delete completed tasks. Completed tasks are not junk; they are your completion records.
:::

After completion, the task details will display "Task Review" and allow editing. This is a good place to record confirmed situations, issues, and lessons learned.

Completed task details also show "Flow Time". This is not an automated "time spent" calculated from start to finish, but the actual focused time you manually record; tasks completed on the same day share that day's flow time. After archiving a task, you can continue to edit the task review, but the editable flow time entry is no longer shown.

## Archiving

Archiving is suitable for tasks you don't want to see every day right now but may need to know existed later.

For example: old tasks in a project, expired items that still have reference value, or content you don't want in the current list but also don't want to delete.

<!-- manual-screenshot:id=tasks-archived-list -->
![Completion, archiving, and trash interface screenshot](../../../screenshots/en/tasks-archived-list.png)

Below the task filters in the archived view, a "Cards" entry is also displayed. It takes you to the archived view in card management, where you can view cards that are not in active review and unarchive them when needed. Card archiving and task archiving have different meanings; if you want to understand why a card can exit active review while still remaining in the task context, read [Practice, Mastery, and Internalization](/manual/en/review-cards/study-and-internalize/).

Archiving and completion are not the same:

- **Completed**: Means the task is truly done, and it counts toward completion statistics.
- **Archived**: Simply hides the task from the current view; it does not mean it's done, and it does not count toward completion statistics.

## Trash

After deleting a task, it goes to the trash. As long as the trash hasn't been emptied, you can still view it there.

At the top of the trash, there are two segments: "Tasks" and "Cards". The tasks segment handles deleted tasks; the cards segment handles deleted review experience cards. The two segments are not mixed; restore, permanently delete, and empty operations only affect the current segment.

When restoring a task, if it originally belonged to a deleted project or milestone, GranoFlow will ask you to choose: restore the original project and milestone as well, or restore only the task to the Inbox. If you choose to restore only the task, it becomes a plain Inbox task without a project, milestone, or date, which you can reorganize later.

<!-- manual-screenshot:id=tasks-trash-list -->
![Completion, archiving, and trash interface screenshot](../../../screenshots/en/tasks-trash-list.png)

:::caution[Think Before Emptying]
Manually emptying the trash is irreversible. If a task once belonged to a project or had review value, it cannot be recovered from the trash after emptying.
:::

## What to Do If You Can't Find a Task

Search in this order—it's usually the fastest:

1. Check if a filter is hiding it, for example showing only "Today" tasks.
2. Consider if it has a date. If so, look in that day's task list.
3. Consider if it was added to a project. If so, look in that project's page.
4. If it was completed, look in the "Completed" view.
5. If you didn't want to see it in the current list, you might have archived it. Look in the "Archived" view.
6. If you deleted it, look in the trash.

Most lost tasks are found in one of these places.

## Task Review After Reactivation

If you wrote a task review after completing a task and later uncompleted or reactivated it, the existing review is not cleared. When the task is not completed, the task details will not show the review; once the task is completed again or archived, the review will reappear and can be edited.

<!-- manual-screenshot:id=tasks-detail-review-readonly -->
![Completion, archiving, and trash interface screenshot](../../../screenshots/en/tasks-detail-review-readonly.png)
