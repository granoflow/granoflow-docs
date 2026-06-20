---
title: "Think in CLI and HTTP Workflows"
description: "Use a Think in workflows approach to combine CLI commands and HTTP calls into auditable, reversible daily automation flows."
---

The easiest way to break an automation script is not forgetting a command. It is skipping the questions: does this step need the app, will this write data, and how should the script stop if it fails? GranoFlow's Local HTTP API and CLI work best as workflows: capture the current state, preview writes, then execute and record the result.

## Think in Capture: Start with the Current State

First confirm that the app, local interface, and target data are reachable:

```bash
# CLI
granoflow health --json
granoflow api version --json
granoflow task list --json

# Direct HTTP
curl -s http://127.0.0.1:56789/v1/health
curl -s http://127.0.0.1:56789/v1/tasks
```

If this fails, do not continue to writes. Check whether the app is running, whether the Local HTTP API is enabled, whether the port matches, and whether the access code is correct.

## Think in Preview: Inspect Writes First

For write operations such as creating tasks or updating reviews, keep the input in a JSON file and preview it with `--dry-run`:

```bash
granoflow task create --input task.json --dry-run --json
granoflow review day update --date 2026-05-24 --input day.json --dry-run --json
```

`--dry-run` returns a local request preview and does not call the real write endpoint. It belongs in the review stage of a script, where you confirm the path, method, and JSON shape.

## Think in Commit: Execute After Confirmation

After the input looks right, remove `--dry-run`:

```bash
granoflow task create --input task.json --json
granoflow task complete --id task_123 --json
granoflow review week value --week-start 2026-05-18 --value-id value_123 --input value.json --json
```

Write commands depend on the running app service layer. The CLI will not bypass the app and write the database directly when the app is unreachable.

## Think in Cards: Treat Card Actions as Their Own Flow

Review cards and tasks can become tangled if a script does too much at once. Keep deck import, card archiving, and task unlinking as separate steps:

```bash
granoflow deck import anki notes.apkg --dry-run --json
granoflow deck import anki notes.apkg --confirm dry_run_123 --json
granoflow card unlink --task-id task_123 --card-id card_123 --json
```

For Anki import, run dry-run first and confirm with the dry-run id. Unlinking from a task removes the relationship; it should not be treated as deleting the card.

## Think in Backup Packages: Conversion Is Offline

The current public backup capability in the CLI is offline package conversion:

```bash
granoflow backup decrypt --input encrypted.flow.grano --output plaintext.flow.grano --secret-file secret.txt --json
granoflow backup encrypt --input plaintext.flow.grano --output encrypted.flow.grano --secret-file secret.txt --json
```

Use this when you already have a backup package and need to convert its encryption state. It does not create a new app backup or restore a backup into the app. For real backup creation, restore, and cloud-sync risk, return to the in-app Data Security and Recovery flow.

## Think in Automation: For AI Assistants or Scripts

- Prefer `--json` throughout
- Start with `/v1/health` or `granoflow health --json`
- Preview writes with `--dry-run`
- Branch on error codes such as `config_error`, `auth_error`, `network_error`, and `api_error`
- Do not treat human-readable CLI text as a stable protocol
- Do not use `scripts/anz` as a user automation API; it is for repository engineering workflows only

## Next

Once the workflow shape is clear, JSON, environment variables, and direct HTTP calls become easier to turn into reusable tools instead of one-off terminal strings.
