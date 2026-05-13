---
title: "Writing tasks in natural language"
description: "Type #tag, @date, or ~reminder right in the task title. GranoFlow detects them as suggestions and only saves them after you confirm."
---

If you want to quickly add a tag, due date, or reminder to a task, type it directly in the task title. For example, enter `Write report @tomorrow #work ~3pm`, and GranoFlow will show the date, tag, and reminder as suggestions; they are only saved to fields after you confirm them.

## How to use it

When adding or editing a task title, type things like this:

- `#work`: suggests adding a tag called “work”
- `@tomorrow`: suggests setting the due date to tomorrow
- `~3pm`: suggests setting a reminder time

When GranoFlow detects `#`, `@`, `~`, or a date phrase, the matching suggestion is highlighted in the input field.

![Natural language parsing confirmation](../../../screenshots/en/tasks-title-parser-confirmation.png)

You can confirm a suggestion in two ways:

- Click the highlighted suggestion
- Press **Enter** or **Tab** to confirm the current suggestion

:::caution[Important: nothing is saved until you confirm]
Detected content does **not** automatically become a tag, date, or reminder. You must explicitly confirm it before it is saved to the matching field. Anything you do not confirm stays in the title text as-is.
:::

## Quick syntax reference

| You type | What happens |
| --- | --- |
| `#work` | Suggests adding a “work” tag |
| `@tomorrow` `@next Friday` `@March 5` | Suggests a due date |
| `~3pm` `~9am tomorrow` | Suggests a reminder time |
| `Write report @tomorrow #work` | Suggests both a date and a tag |

## Limitations

- `#`, `@`, and `~` work best at clear word boundaries, such as `#work`, not `fix#work`
- Parsing results are suggestions; the final value is whatever you confirm in the fields
- Symbols inside complex sentences may not always be recognized correctly

If a suggestion is wrong, set the field manually. Natural language input is only a shortcut, not a required workflow.
