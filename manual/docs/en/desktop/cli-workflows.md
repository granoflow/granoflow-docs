---
title: "CLI workflows"
description: "Use Think in workflows to combine CLI commands into practical daily flows."
translationSource: zh-CN
translationReview:
  - ux-writing
  - plan-eng-review
---

## Think in capture

```bash
granoflow status --json
granoflow task list --json
```

Check app reachability, sync state, and task overview before write operations.

## Think in structure

```bash
granoflow task create --input task.json --json
granoflow task set t_123 --input patch.json --json
```

Use `--input <file|->` to make changes reusable and reviewable.

## Think in review

```bash
granoflow review day show --date 2026-05-24 --json
granoflow review week list --json
```

Record key outputs in scripts for traceability.

## Think in backup

Before high-risk changes:

```bash
granoflow backup create --out before-change.granobackup --accept-sync-risk --json
```

Before restore, preview first:

```bash
granoflow backup restore --file before-change.granobackup --preview --json
```

## Think in automation

- prefer `--json` end-to-end
- check whether command requires running app
- branch explicitly on errors such as `app_not_reachable` and `cli_disabled`
