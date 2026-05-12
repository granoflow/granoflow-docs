---
title: "Creating and editing tasks"
description: "Creating a task should take under five seconds. Write a title, save, done. This page explains every field and when you actually need it."
---

One rule for adding a task: **write a title, hit save**. Everything else is optional — fill in the details when you need them.

## Where to create a task

| Entry point | Best for |
| --- | --- |
| Bottom **+** button | Quick capture anytime |
| Input field in Inbox | When you are already organizing the inbox |
| Inside a project or milestone | To assign the task directly |
| Node inside an existing task | To break a big task into steps |

## The task editing screen

![Create and edit task dialog](../../../screenshots/en/tasks-create-edit-dialog.png)

What each field does:

| Field | Required? | What it does |
| --- | --- | --- |
| Title | ✅ Yes | The task name — be specific so it is easy to act on |
| Description | Optional | Background notes, links, context |
| Due date | Optional | Sets which day's task list it appears in |
| Reminder | Optional | Sends a notification at the set time (cannot be in the past) |
| Project | Optional | Moves the task out of the inbox into a project |
| Milestone | Optional | Assigns the task to a specific phase within a project |
| Tags | Optional | For filtering; a task can have multiple tags |
| Nodes | Optional | Breaks the task into smaller steps |

:::tip[Natural language input]
In the title field, you can type `#tag`, `@date`, or `~reminder` and GranoFlow will parse them automatically. For example, `Finish report @tomorrow #work` will detect tomorrow's date and a "work" tag. See [Writing tasks in natural language](title-parser) for the full syntax.
:::

## Where does the task go after saving?

It depends on what you filled in:

- **No date, no project** → Inbox
- **Date set** → That day's task list
- **Project assigned** → Inside the project
- **Created inside a project page** → Automatically assigned to that project

Editing a field does not create a new task — it changes where the same task lives.

## Editing an existing task

Tap any task to open its detail view. Change any field; the task auto-saves when you close the detail.

:::caution[Note]
Reminders cannot be set to a time in the past. If you try, the system will prompt you to pick a new time.
:::

Completing, archiving, and deleting are separate actions. Editing a task field does not automatically mark it complete.
