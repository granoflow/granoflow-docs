---
title: "Tags"
description: "Tags are horizontal labels across tasks — things like 'waiting', 'deep work', or 'low energy'. Use them alongside projects for a different angle on your task list."
---

Use tags when you want to mark tasks by status, type, energy level, or a temporary focus. A project tells you which goal a task belongs to; a tag tells you what kind of task it is, so you can filter and organize it later.

For example, you might have a "Fitness app" project. Some tasks in it may be "needs design file", while others may be "waiting on third-party API". Those are not new projects. They are cross-project states or types, which are a good fit for tags.

## How to add tags to a task

When creating a task or opening task details, find the tags area, then select an existing tag or type a new name to create one.

![Tags management screen](../../../screenshots/en/tasks-tags-management.png)

Even if the screenshot does not load, the idea is:

- Existing tags appear as options
- If you do not see the right tag, type a new name to create it
- One task can have multiple tags

## Custom tag templates

When you edit an existing custom tag in tag management, you can add a description template and node template. Later, when a task selects that tag, GranoFlow copies the template content into that task's own description and nodes.

Templates are copied once. After copying, the content belongs to the task itself. Editing or deleting the tag template later will not automatically rewrite existing tasks.

The built-in examples `account`, `bug`, and `feature` are all ordinary custom tags. `account` is useful for account-cleanup tasks and its default description template includes platform name, website, email, phone, third-party login, and notes; it does not include a password field. `bug` is useful for reproduction steps, expected result, and actual result. `feature` is useful for user value, scenarios, and acceptance criteria.

## What to use tags for

Tags work best for **cross-project, reusable** categories. These are good examples:

| Use case | Tag examples |
| --- | --- |
| Energy level / context | `low energy` `deep work` `quick task` |
| Waiting status | `waiting on someone` `needs reply` `pending` |
| Task type | `call` `creative` `admin` |
| Temporary flags | `this week` `revisit later` |

Avoid duplicating project names as tags. If a task is already in a project, you do not need to tag it with the same project name too.

## What happens when you delete a tag

Deleting a tag **does not** delete the tasks that use it. It only removes that tag from those tasks.

:::caution[Confirm before deleting]
Deleting a tag is permanent. Make sure you no longer need the category before you remove it.
:::

## Keeping tags tidy

Too many tags make filtering less useful. Review them from time to time:

- Merge tags with similar meanings
- Delete tags nobody uses anymore
- Keep tag names short and easy to tell apart
