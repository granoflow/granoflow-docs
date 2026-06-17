---
title: "Completion, Archive & Trash"
description: "Can't find a task? Check filters, dates, projects, completed, archived, and the Trash — it's usually just moved somewhere."
---

If a task disappears from your list, don't panic that it's lost. The most common reasons are: it's hidden by a filter, assigned to a specific day, inside a project, already completed, archived, or sitting in the Trash.

In GranoFlow, the three states most relevant to "missing tasks" are:

- **Completed**: The task is done. It appears in the Completed view and in daily review statistics.
- **Archived**: Temporarily hidden from view, but the record is preserved.
- **Trash**: The task was deleted, but the Trash hasn't been emptied yet.

## Completion

When you finish something, you can mark it as complete by tapping "Complete" in the task details or using the complete button from the list. Once complete, the task will:

- Disappear from your current to-do list
- Record a completion time
- Appear in the "Completed" view
- Be counted in daily review statistics
- Hide the "Start" and "Complete" buttons in the task details, so that a finished task won't accidentally be started again as a to-do

If the task is currently in a focus session, tapping "Complete" will first end the current focus session, then complete the task, and remove it from the "Current Task". This keeps the task state, focus records, and the current-task section at the top of the task list consistent.

<!-- manual-screenshot:id=tasks-completed-archived-trash -->
![Completion, Archive & Trash interface screenshot](../../../screenshots/en/tasks-completed-archived-trash.png)

:::tip[Tip]
If you want to see completion records in your daily review, don't delete completed tasks. Completed tasks are not trash — they are your record of what you've accomplished.
:::

After completion, the task details will show "Task Review" and allow editing. This is a good place to record confirmed situations, issues, and lessons learned.

The completed task details also show "Flow Time". This is not an automatically calculated "time spent" from start to finish, but the true focused time you manually record. Tasks completed on the same day share that day's flow time. After a task is archived, you can still edit the task review, but the editable flow time entry will no longer be shown.

Focus sessions and flow time are not the same field. A focus session records a period of dedicated work you start and end on a specific task. Flow time is the subjective focused time you manually confirm during review, helping you reflect on how deeply you immersed yourself that day. Both can assist your review, but their meanings differ.

## Archive

Archiving is suitable for tasks you don't want to see every day now, but may need to know existed later.

For example: old tasks in a project, expired items that still have reference value, or content you don't want on your current list but also don't want to delete.

<!-- manual-screenshot:id=tasks-archived-list -->
![Completion, Archive & Trash interface screenshot](../../../screenshots/en/tasks-archived-list.png)

Below the filter in the Archived view, you'll also see a "Cards" entry. This takes you to the archived view within card management, where you can review cards that are not actively scheduled for review, and unarchive them if needed. Card archiving and task archiving have different meanings. To understand why a card can exit active review while remaining in its task context, read [Practice, Mastery & Internalization](/manual/review-cards/study-and-internalize/).

Archiving and completing are not the same:

- **Complete**: Means the task is truly done. It enters the completion statistics.
- **Archive**: Simply hides the task from the current view. It does not mean the task is done, and it does not enter completion statistics.

## Trash

After you delete a task, it moves to the Trash. As long as the Trash hasn't been emptied, you can still view it there.

At the top of the Trash, there are two segments: "Tasks" and "Cards". The Tasks segment handles deleted tasks; the Cards segment handles deleted review cards. The two segments are kept separate — restoring, permanently deleting, or emptying operations apply only to the current segment.

In the Cards segment, swipe right on a card to restore it; swipe left to enter permanent-deletion confirmation.

When restoring a task, if it originally belonged to a project or milestone that has also been deleted, GranoFlow will ask you to choose: restore the original project and milestone together, or restore only the task to the Inbox. If you choose to restore only the task, it becomes a plain Inbox task with no project, no milestone, and no date — you can reorganize it later.

<!-- manual-screenshot:id=tasks-trash-list -->
![Completion, Archive & Trash interface screenshot](../../../screenshots/en/tasks-trash-list.png)

:::caution[Think Before Emptying]
Manually emptying the Trash is irreversible. If the task once belonged to a project or had review value, you won't be able to retrieve it from the Trash after emptying.
:::

## What to Do When You Can't Find a Task

Check in this order — it's usually the fastest:

1. See if a filter is hiding it, for example showing only "today's" tasks.
2. Think about whether it has a date. If yes, look in the task list for that date.
3. Think about whether it was added to a project. If yes, go to that project's page.
4. If it's already done, look in the "Completed" view.
5. If you didn't want to see it in your current list, you might have archived it — look in the "Archived" view.
6. If you deleted it, look in the Trash.

Most missing tasks will be found in one of these places.

## Task Review After Re‑enabling

If you wrote a task review after completing a task and then later uncompleted or re‑enabled it, the existing review is not cleared. While the task is incomplete, the task details will not show the review. When the task is completed or archived again, the review will reappear and be editable.

<!-- manual-screenshot:id=tasks-detail-review-readonly -->
![Completion, Archive & Trash interface screenshot](../../../screenshots/en/tasks-detail-review-readonly.png)
