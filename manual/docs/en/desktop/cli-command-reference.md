---
title: "CLI command reference"
description: "Find public stable granoflow CLI commands, options, and app dependency classification."
translationSource: zh-CN
translationReview:
  - ux-writing
  - plan-eng-review
---

<!-- markdownlint-disable MD013 -->

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

### Requires running app command channel

- `display *`
- `open <route>` (plain `open` without route is for launching app)
- `status`
- `sync run`
- `task|project|milestone|tag|domain-value|review`
- `quick-add`, `logout`, `export`, `import`
- `backup create|restore`
- real-data `ai-agent` commands

## Core commands

```bash
granoflow help
granoflow help task
granoflow version --json
granoflow lang get
granoflow lang zh-HK
granoflow lang reset
```

## Bridge commands

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

Public commands support `--json`. JSON mode returns structured envelope only, with no human text mixed in.
