---
title: "Manage milestones"
description: "Milestones are phase markers inside a project. They break a big goal into visible progress chunks so you always know where you stand."
---

If you want to split a large project into clear phases, add milestones to the project. Milestones group related tasks under each phase, so you can see where the project is now and what needs to be delivered next.

Without milestones, a project with many tasks can feel like one long to-do list. With milestones, you can group work by outcomes such as “First draft done”, “Testing passed”, or “Live”, making progress easier to understand.

## Add a milestone

On the project detail page, tap “Add milestone”, then enter a milestone name.

Use a name that describes the result of the phase, such as “First draft done”, “Testing passed”, or “Live”. Avoid names like “Phase 1” or “Phase 2” when possible, because they do not explain what the phase is meant to finish.

![Milestone detail view](../../../screenshots/en/projects-milestones-detail.png)

## Milestone states

| State | Meaning |
|-------|---------|
| In progress | The milestone still has unfinished tasks |
| Completed | All tasks in the milestone are complete |
| Archived | You manually archived it, so it is collapsed from the current view |

A milestone is completed when **all tasks inside it are marked complete**. If you later add a new unfinished task to the milestone, it automatically goes back to “In progress”.

## Milestone ordering

Milestones appear in the order you arrange them on the project detail page. You can drag milestones to reorder them.

A common approach is to sort them by time: put the earliest phase at the top and the final delivery phase at the bottom. Then, reading from top to bottom shows the project’s execution order.

## Before deleting a milestone

Before deleting a milestone, if it still contains tasks, GranoFlow asks you how to handle those tasks:

- Move the tasks to another milestone
- Keep the tasks under the project, but without any milestone
- Delete the tasks together with the milestone

:::caution[Deleting a milestone does not auto-delete tasks]
Unless you explicitly choose “also delete tasks”, tasks that were under this milestone will not disappear. They are only removed from the milestone and still belong to the project.
:::
