---
title: "Manage milestones"
description: "Milestones are phase markers inside a project. They break a big goal into visible progress chunks so you always know where you stand."
---

As a project grows, the most stressful thing is often not having many tasks —
it is not knowing how far you have actually progressed. Tasks tell you “what
to do next”; milestones tell you “what counts as done for this phase”.

In GranoFlow, milestones are not just folders that group tasks. They are
checkpoints for each stage of the project: a milestone can contain multiple
tasks, but the real question a milestone answers is “has this result been
achieved?” When you think of milestones this way, the project page is no
longer a long to-do list; it becomes a roadmap that shows phase-level
progress.

Imagine you are preparing a course launch. You can break the project into
milestones like “Course outline confirmed”, “Recording complete”, and
“Pre-launch checks”. Under each milestone, you put the relevant tasks: write
the outline, record units, check links, prepare the launch copy. Every time
you open the project, you don’t see “27 tasks remaining”; you see “stuck
before ‘Recording complete’, need to close this phase next”.

## Think about the result of each phase first

Before creating a milestone, ask yourself a simple question: when this phase
is done, what result can someone see?

A good milestone name usually reads like a delivered outcome, such as “First
draft done”, “Tests passed”, or “Course live”. It doesn’t need to be long, but
it should still make sense when you come back to it days later.

Try to avoid names like “Phase 1” or “Phase 2”. They look neat when created,
but later you will have to remember what “Phase 1” actually meant. Milestones
are meant to reduce that recall cost.

## Add a milestone

On the project detail page, tap “Add milestone”, enter the name, then tap
“Add”. The new milestone appears in the project, and you can then place tasks
under it.

New milestones require you to tap “Add” because you are creating a new phase
node. Once the milestone exists, editing it works differently: most changes
are saved automatically when you finish the action — no extra save button
needed.

<!-- manual-screenshot:id=projects-milestones-detail -->
![Manage milestones screen capture](../../../screenshots/en/projects-milestones-detail.png)

## When editing an existing milestone, when are changes saved?

Editing an existing milestone uses auto-save. When you finish editing a field
and complete the corresponding action, GranoFlow writes the change to the
project. There is no separate “Save” button at the bottom.

Different content types save at slightly different times:

| What you edit | When it is saved |
| --- | --- |
| Title | Saved when you leave the title input field |
| Due date | Saved when you pick the date |
| Description | Saved after you save the description edit page |
| Image | Saved after you upload or delete an image |
| PDF attachment | Saved after you upload or delete a PDF |

A common misconception: auto-save does not mean your input is submitted before
you finish. For example, the title is saved when you leave the input field;
the description is saved when you go back to the milestone from the
description edit page. Simply go through your editing steps normally — you
don’t need to click an extra “save all” button.

If you are creating a new milestone, you still need to tap “Add” to complete
creation. Auto-save applies to subsequent edits of an existing milestone.

## How to close the right-side edit panel

On a wide screen or desktop layout, tapping a milestone opens an edit panel on
the right side. It is not a modal that requires submission — it is a side
editing area within the project detail.

To close the right-side panel, tap any blank area in the left-side project
detail. This does not change your project content; it simply collapses the
panel so you can see the full project view.

If you tap a different project, milestone, task, or action button on the left
instead of a blank area, GranoFlow performs your action. For example, tapping
another milestone switches the right panel to that milestone; tapping a
navigation item to go to another page closes the panel.

On a narrow screen or mobile layout, the milestone edit panel opens like a new
page. Use the back button at the top to return to the project detail.

## Use progress and status to decide if a phase is finished

Tasks inside a milestone affect its progress: the more tasks completed, the
closer the milestone is to being finished. But progress and milestone status
are not the same thing. Progress tells you “how much is left”; status tells
you whether the phase is currently in progress, completed, or archived.

| Status | Meaning |
| --- | --- |
| In progress | The phase is still active, or it still has unfinished tasks |
| Completed | The phase has been marked complete |
| Archived | It is collapsed, and completed tasks are archived together |

Before archiving a milestone, any tasks that are visible to you must be
completed or archived first. If there are still unfinished tasks, GranoFlow
prevents archiving and asks you to handle them.

## Reorder milestones

Milestones appear in the order you arrange them on the project detail page.
You can drag milestones to reorder them.

A common approach is to sort them by the project’s progression: put the
earliest phase at the top and the final delivery phase at the bottom. That
way, reading from top to bottom shows the project’s journey from preparation
to delivery. Only group phases by theme if your project is better organized
that way.

## Before deleting a milestone

Delete only appears for empty milestones. If the milestone still contains
tasks, the delete option is hidden. Move, complete, archive, or delete those
tasks first, then come back to delete the milestone.

:::caution[Deleting a milestone does not auto-delete tasks]
Deleting a milestone does not delete its tasks. Handle the tasks first, then
delete the empty milestone.
:::

Once you understand milestones, the next step is usually putting tasks into
the right project and phase. Continue reading “Link tasks to a project” to see
the differences between linking a task to a project, linking it to a
milestone, and whether it still appears in Today.
