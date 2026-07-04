---
title: Write Tasks in Natural Language
description: "Write tasks in natural language: include dates, tags, projects, or reminders in the title, then confirm before they are written to the fields."
---

Sometimes you just want to jot down something quickly without opening a bunch of fields. Natural language input is designed for this: you can type dates, tags, projects, or reminders right in the title. GranoFlow recognizes them, shows candidates, and waits for your confirmation before writing them into the corresponding fields.

It’s not meant to replace all editing with a single sentence. More precisely, it’s a quick entry point when creating a task.

## An example

```text
整理报告 明天 #工作 @论文初稿 ~下午3点
```

This sentence contains the task title, a date, a tag, a project or milestone, and a reminder time. GranoFlow identifies these as candidates; only after you confirm do they enter the corresponding fields.

## Common patterns

| What you type | Candidate meaning |
| --- | --- |
| `#work` | Add the "work" tag |
| `@draft-paper` | Associate with a project or milestone |
| `tomorrow`, `next Friday`, `March 5` | Set a due date |
| `~3pm`, `~tomorrow 9am` | Set a reminder time |

To confirm, click the candidate or press **Enter** / **Tab**. Press **Escape** to dismiss the candidate list and leave the unconfirmed text in the title.

::::caution[Nothing is written until you confirm]
Recognized content will not automatically become tags, dates, projects, milestones, or reminders. You must explicitly confirm before it is written to the corresponding fields. Any unconfirmed part stays as title text.
::::

## Why confirmation is needed

The confirmation step may seem like an extra action, but it prevents accidental writes. For example, "discuss design next Friday" might be just a title or it could be a date; `@website-redesign` could refer to a project or simply be text you want in the title.

GranoFlow first shows candidates and then waits for you to confirm—so the final fields are always your decision.

## Common limitations

| Situation | Better approach |
| --- | --- |
| `#`, `@`, `~` placed oddly | Place them clearly before words, e.g., `#work` |
| Want to set a date | Write `tomorrow`, `next Friday` directly; don’t use `@` |
| Complex sentences not recognized accurately | Manually open the fields and edit |
| Candidate is not what you wanted | Don’t confirm; keep it as title text |

Natural language input is just a shortcut, not a requirement. If the recognition isn’t right, simply set the fields manually.

## Next steps

If you often add similar structures to your tasks, check out "Tags" to use custom tag templates and reduce repetitive entry.
