---
title: "Writing tasks in natural language"
description: "When quickly adding a task, type date phrases, #tag, @project or milestone, and ~reminder. GranoFlow detects them as suggestions and only saves them after you confirm."
---

If you want to quickly add a tag, due date, project ownership, or reminder to a task, type it directly in the quick-add task title. For example, enter `Write report tomorrow #work @paper-draft ~3pm`, and GranoFlow will show the date, tag, project or milestone, and reminder as suggestions. They are only saved to fields after you confirm them.

## How to use it

When quickly adding a task, type things like this:

- `#work`: suggests adding a tag called “work”
- `@paper-draft`: suggests linking a project or milestone
- `tomorrow`, `next Friday`, `March 5`: suggests setting a due date
- `~3pm`: suggests setting a reminder time

When GranoFlow detects `#`, `@`, `~`, or a date phrase, it shows the matching suggestion in the input field.

<!-- manual-screenshot:id=tasks-title-parser-confirmation -->
![Writing tasks in natural language screen capture](../../../screenshots/en/tasks-title-parser-confirmation.png)

Tag, project, milestone, and reminder suggestions can be confirmed in two ways:

- Click the highlighted suggestion
- Press **Enter** or **Tab** to confirm the current suggestion

Date suggestions also need confirmation. You can click the date suggestion; if you just typed a clear date phrase, you can also press Space after the date phrase to write it to the due date field.

:::caution[Important: nothing is saved until you confirm]
Detected content does **not** automatically become a tag, date, project, milestone, or reminder. You must explicitly confirm it before it is saved to the matching field. Anything you do not confirm stays in the title text as-is.
:::

Project, milestone, and tag suggestions follow the same rule. The suggestion list only helps you choose; the field is saved only after you click a suggestion or confirm it with Enter or Tab. If you press Escape or leave the suggestion unconfirmed, the text stays in the task title as ordinary text.

## Quick syntax reference

| You type | What happens |
| --- | --- |
| `#work` | Suggests adding a “work” tag |
| `@paper-draft` `@website-redesign` | Suggests linking a project or milestone |
| `tomorrow` `next Friday` `March 5` | Suggests setting a due date |
| `~3pm` `~9am tomorrow` | Suggests a reminder time |
| `Write report tomorrow #work @paper-draft` | Suggests a date, tag, and project or milestone |

## Limitations

- `#`, `@`, and `~` work best at clear word boundaries, such as `#work`, not `fix#work`
- `@` is only for projects or milestones, not dates. To set a date, write a date phrase such as `tomorrow` or `next Friday`
- Parsing results are suggestions; the final value is whatever you confirm in the fields
- Symbols inside complex sentences may not always be recognized correctly

If a suggestion is wrong, set the field manually. Natural language input is only a shortcut, not a required workflow.
