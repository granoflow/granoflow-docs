---
title: "CLI workflows and HTTP workflows"
description: "Use Think in workflows to combine CLI commands and HTTP calls into practical daily flows."
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

## Think in capture: first capture the current state

```bash
# CLI approach
granoflow status --json
granoflow task list --json

# Direct HTTP call
curl -s http://127.0.0.1:42667/v1/status
curl -s http://127.0.0.1:42667/v1/task
```

Check app reachability, sync state, and task overview before write operations.

## Think in structure: structured writes

```bash
granoflow task create --input task.json --json
granoflow task set t_123 --input patch.json --json
```

Use `--input <file|->` to make changes reusable and reviewable.

## Think in review: review and verify

```bash
granoflow review day show --date 2026-05-24 --json
granoflow review week list --json
```

Record key outputs in scripts for traceability.

## Think in backup: backup before high-risk operations

```bash
granoflow backup create --out before-change.granobackup --accept-sync-risk --json
```

Preview before restore:

```bash
granoflow backup restore --file before-change.granobackup --preview --json
```

## Think in automation: for AI assistants or scripts

- Prefer `--json` end-to-end
- First check whether the running app is needed (via `/v1/status`)
- Add error branches for long flows (e.g. `app_not_reachable`, `cli_disabled`)
- You can also call the local HTTP API directly via curl, without relying on the `granoflow` CLI being installed
