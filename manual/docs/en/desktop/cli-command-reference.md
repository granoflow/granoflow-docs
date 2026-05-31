---
title: "CLI command reference"
description: "View public stable granoflow CLI commands, parameters, HTTP endpoint mapping, and app dependency classification."
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

<!-- markdownlint-disable MD013 -->

## HTTP API equivalence

All functionality provided by the `granoflow` CLI also corresponds to local HTTP API endpoints. The CLI is an optional interactive client — you can call the API directly with curl:

```bash
# Equivalent to granoflow status --json
curl -s http://127.0.0.1:42667/v1/status

# Equivalent to granoflow task list --json
curl -s http://127.0.0.1:42667/v1/task

# Equivalent to granoflow backup create --out backup.granobackup
curl -s -X POST http://127.0.0.1:42667/v1/backup -d '{"out":"backup.granobackup"}'
```

The local HTTP API listens on `http://127.0.0.1:42667` by default; the port can be changed on the settings page.

## Quick classification

### Does not require running app

- `help`
- `version`
- `lang`
- `bridge config show`
- `bridge port set <port>`
- `bridge config repair --reset`
- `clean`
- `backup-package inspect|encrypt|decrypt|merge`

### Requires running app (via HTTP API)

- `display *`
- `open <route>` (plain `open` without a route launches the app)
- `status`
- `sync run`
- `task|project|milestone|tag|domain-value|review`
- `quick-add`, `logout`, `export`, `import`
- `backup create|restore`
- `ai-agent` real-data commands

## Core commands

```bash
granoflow help
granoflow help task
granoflow version --json
granoflow lang get
granoflow lang zh-HK
granoflow lang reset
```

## Bridge commands (local HTTP port configuration)

```bash
granoflow bridge config show --json
granoflow bridge port set 52001 --json
granoflow bridge config repair --reset --json
```

## Display commands (requires app)

```bash
granoflow display get --json
granoflow display language zh-CN --json
granoflow display theme dark --json
granoflow display font-size large --json
granoflow display window-layout landscape --json
granoflow display reset --json
```

## Business object commands (requires app)

Resources: `task`, `project`, `milestone`, `tag`, `domain-value`, `review`

Structured input: `--input <file|->`

```bash
granoflow task list --json
granoflow task create --input task.json --json
granoflow task tag add t_123 custom_bug --json
granoflow tag template show custom_bug --json
granoflow project update p_123 --input patch.json --json
granoflow review day show --date 2026-05-24 --json
```

## Backup commands (requires app)

```bash
granoflow backup create --out backup.granobackup --accept-sync-risk --json
granoflow backup restore --file backup.granobackup --preview --json
granoflow backup restore --file backup.granobackup --confirm --backup-secret-file secret.txt --json
```

`--preview` and `--confirm` are mutually exclusive.

## backup-package commands (native CLI)

```bash
granoflow backup-package inspect --file backup.granobackup --json
granoflow backup-package encrypt --file plain.granobackup --out encrypted.granobackup --secret-file secret.txt --json
granoflow backup-package decrypt --file encrypted.granobackup --out plain.granobackup --secret-file secret.txt --json
granoflow backup-package merge --left a.granobackup --right b.granobackup --out merged.granobackup --json
```

## JSON automation contract

Public commands support `--json`. JSON mode returns a structured envelope only, with no human-readable text mixed in.
