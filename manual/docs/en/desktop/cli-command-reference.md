---
title: "CLI Commands and HTTP Mapping"
description: "Look up current public granoflow CLI commands, parameters, HTTP endpoint mappings, and app dependency categories."
---

<!-- markdownlint-disable MD013 -->

The `granoflow` CLI is a client for the Local HTTP API. Commands that read or write app data call public endpoints under `http://127.0.0.1:<port>`. Offline backup-package conversion commands only process the backup files you provide and do not connect to the app.

If you do not want to install the CLI, you can call the same HTTP API with curl.

## Direct HTTP Examples

```bash
# Health check
curl -s http://127.0.0.1:56789/v1/health

# Version information
curl -s http://127.0.0.1:56789/v1/version

# List tasks
curl -s http://127.0.0.1:56789/v1/tasks

# Create a task; protected endpoints usually need an access code
curl -s -X POST http://127.0.0.1:56789/v1/tasks   -H "Authorization: Bearer <token>"   -d '{"title":"Example task"}'
```

## Quick Categories

### Requires Only the CLI

- `help`
- `config`
- `backup decrypt`
- `backup encrypt`

### Requires the Local HTTP API

- `health`
- `api version`
- `api capabilities`
- `task list`
- `task create`
- `task complete`
- `project list`
- `project create`
- `review day show/update`
- `review week show/update/value`
- `deck list/show/create/delete/cards/import anki`
- `card archive/unarchive/trash/unlink/unlink-note`
- `ai-agent tools`
- `ai-agent task export/validate/import`

## Basic Commands

```bash
granoflow help
granoflow help task
granoflow help --json
granoflow config --json
```

`config` shows the API address, token source, and config-file path currently used by the CLI. Tokens are redacted.

## API and Status Commands

```bash
granoflow health --json
granoflow api version --json
granoflow api capabilities --json
```

These commands work well as reachability checks at the start of a script.

## Task and Project Commands

```bash
granoflow task list --json
granoflow task create --input task.json --dry-run --json
granoflow task create --input task.json --json
granoflow task complete --id task_123 --json
granoflow project list --json
granoflow project create --input project.json --dry-run --json
```

`--input <file|->` means reading JSON from a file or stdin. `--dry-run` only creates a local request preview and does not call the write endpoint.

## Review Commands

```bash
granoflow review day show --date 2026-05-24 --json
granoflow review day update --date 2026-05-24 --input day.json --dry-run --json
granoflow review week show --week-start 2026-05-18 --json
granoflow review week update --week-start 2026-05-18 --input week.json --json
granoflow review week value --week-start 2026-05-18 --value-id value_123 --input value.json --json
```

## Card and Deck Commands

```bash
granoflow deck list --json
granoflow deck show deck_123 --json
granoflow deck create --name "Exam review" --json
granoflow deck cards deck_123 --include-children --active --json
granoflow deck import anki notes.apkg --dry-run --json
granoflow deck import anki notes.apkg --confirm dry_run_123 --skip-cards-with-missing-media --json

granoflow card archive card_123 --json
granoflow card unarchive card_123 --json
granoflow card trash card_123 --json
granoflow card unlink --task-id task_123 --card-id card_123 --json
granoflow card unlink-note --task-id task_123 --note-id note_123 --json
```

## Offline Backup-Package Conversion

```bash
granoflow backup decrypt   --input encrypted.flow.grano   --output plaintext.flow.grano   --secret-file secret.txt   --json

granoflow backup encrypt   --input plaintext.flow.grano   --output encrypted.flow.grano   --secret-env GRANOFLOW_BACKUP_SECRET   --json
```

These two commands only convert backup-package files. They do not create an app backup or restore data into the app.

## AI Agent Commands

```bash
granoflow ai-agent tools --json
granoflow ai-agent task export --id task_123 --json
granoflow ai-agent task validate --input draft.json --json
granoflow ai-agent task import --input draft.json --dry-run --json
```

AI agent commands still go through the Local HTTP API and app authorization boundaries. They do not read the local database directly.

## JSON Automation Contract

Public commands support `--json`. JSON mode only outputs a structured envelope and does not mix in human-readable text. Scripts should branch on error codes rather than natural-language prompts.
