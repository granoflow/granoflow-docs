---
title: "Quick add"
description: "Use quick add to capture one task quickly, with optional date, reminder, tag, project, or milestone fields."
translationSource: zh-CN
translationReview:
  - ux-writing
  - product-frontend-design
---

Quick add is for capturing one thing before you lose it. Tap the `+` in the middle of the bottom bar, enter a task title, then submit.

If you do not want to organize it yet, a title is enough. Tasks without a date, project, or milestone stay in the inbox so you can sort them later.

## Write a Title

You can enter plain text, for example:

```text
Prepare the weekly report
Reply to Alex
Check release screenshots
```

After writing the title, use the submit button. Granoflow saves the line as the task title.

## Add Fields in the Title

On desktop, the input hint shows `#tag @project ~reminder`. These shortcuts are optional.

- Type `#` to search tags.
- Type `@` to search projects or milestones.
- Type `~` to enter a reminder time.

For example:

```text
Check subscription page copy @Website redesign #release ~tomorrow 8am
```

A shortcut only becomes a task field after you choose a suggestion, or confirm it with `Enter` / `Tab`. If you do not confirm it, text such as `#release` or `@Website redesign` stays in the title as normal text.

## Dates and Reminders

You can also type a date phrase directly:

```text
Check release screenshots by Friday
```

Date phrases may be highlighted or shown as a pending date. They become the task date only after you click the date hint or confirm the phrase by typing a space after it. Unconfirmed date text stays in the title.

Use `~` for reminders, for example:

```text
Organize screenshots tomorrow ~8am
Reply to Alex ~8am
```

A reminder is the notification time, not the task date itself. If the task does not have a date yet, Granoflow chooses a suitable task date from the reminder time. You can also set the date manually with the date button below the input.

## Use the Buttons Below

If you do not want to use shortcuts, use the buttons below the input:

- Date
- Reminder
- Add to project
- Tag

The buttons and the `#`, `@`, and `~` shortcuts write to the same task fields. Selected fields appear as small tokens; click a token to change it, or remove it to clear the field.

## Suggestions and Corrections

As you type, Granoflow may show similar task suggestions. Clicking a suggestion applies that task's title, plus its most recently saved tags, project, or milestone, and creates the new task immediately.

If Granoflow finds an obvious typo, the first submit may correct the text instead of saving right away. Review the corrected title, then submit again to save it.

## Mobile and Desktop

On mobile, the input hint is shorter and usually only asks you to enter a new task. On desktop, it shows `#tag @project ~reminder` for faster keyboard entry.

Shortcuts are only a faster path. You can ignore them and use the buttons below the input to set the date, reminder, project, milestone, and tags.
