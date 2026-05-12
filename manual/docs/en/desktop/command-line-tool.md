---
title: "Command line tool"
description: "Use the GranoFlow CLI on desktop to manage display preferences, tasks, projects, milestones, tags, domain values, reviews, and local backups."
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

The GranoFlow CLI is a command-line entry point for desktop users, scripts, and AI assistants. It is useful for adjusting display preferences, reading or updating tasks, projects, milestones, tags, domain values, reviews, and for creating or restoring local backups.

In this page, CLI means the `granoflow` command installed on a user's computer. It is not a development, build, or cloud-operations entry point, and it does not provide cloud admin, purchase-platform admin, test-account reset, cloud wipe, or release commands.

## Install And Check

Install the desktop app first, then open the Command Line Tool page in settings to install or repair the `granoflow` command. Business commands require the desktop app to be running. The command sends the request to the app instead of opening your local database directly.

Useful checks:

```bash
granoflow help
granoflow version --json
granoflow status --json
granoflow display get --json
```

Every command supports `--json` for scripts and AI use. JSON mode outputs structured results only. If the app cannot be reached, the command returns the stable `app_not_reachable` error.

## Display Preferences

Display preference commands adjust the app interface language, appearance, and font size:

```bash
granoflow display get --json
granoflow display language zh-CN --json
granoflow display theme dark --json
granoflow display font-size large --json
granoflow display reset --json
```

`granoflow display language` changes the app interface language. `granoflow lang` only changes the CLI output language in the current terminal window. `display reset` only resets display preferences; it does not clear your account, tasks, projects, or local data.

## Business Objects

Public resource names use singular form: `task`, `project`, `milestone`, `tag`, `domain-value`, and `review`.

Common examples:

```bash
granoflow task list --json
granoflow task create --input task.json --json
granoflow task complete <task-id> --json
granoflow project list --json
granoflow milestone review <milestone-id> --json
granoflow tag list --json
granoflow domain-value limit show --json
granoflow review day show --date 2026-05-12 --json
```

Structured input uses `--input <file|->`. A file path reads JSON from that file; `-` reads JSON from stdin. Missing fields mean no change, present fields mean update, and explicit `null` or an empty array means clear.

## Status And Images

Tasks, projects, and milestones all have state actions. Prefer explicit actions:

```bash
granoflow task start <task-id> --json
granoflow task complete <task-id> --json
granoflow task reopen <task-id> --json
granoflow project archive <project-id> --json
granoflow milestone complete <milestone-id> --json
```

`task delete` moves the task to the trash state; it is not a physical delete. When a task is completed without a previous start time, GranoFlow fills the start time using the same rule as the app.

Task descriptions can contain Markdown. A remote image URL stays as text; GranoFlow does not download it, encrypt it, or turn it into an independent image. Independent image areas are managed with the `image` subcommand or the `images` field in JSON. `images` means the final target collection: keep existing images, add local files, or pass an empty array to clear them.

## Tags, Values, And Reviews

Fixed tags are read-only. Custom tags can be created, updated, and deleted; deleting one also unlinks it from related objects.

Domain values are managed with `domain-value`. If the limit is reached, adding another value returns an error instead of silently replacing old content.

`review day` and `review week` support reading and updating. In the first version, `review month` only supports `list` and `show`.

## Backup

CLI backup commands reuse the app's local backup flow:

```bash
granoflow backup create --out backup.granobackup --accept-sync-risk --json
granoflow backup restore --file backup.granobackup --preview --json
granoflow backup restore --file backup.granobackup --confirm --backup-secret-file secret.txt --json
```

`--preview` checks the backup file and summary without writing data. `--confirm` performs the restore. They cannot be used together. The backup secret can only be passed through a file, so it is not left directly in shell history.

The older `quick-add`, `logout`, `export`, and `import` commands remain compatible, but they are no longer the main entries in help. For everyday data protection, prefer `backup create` and `backup restore`.

## Next

- To check whether the command is available, start with `granoflow help` and `granoflow status --json`.
- To write tasks, projects, or reviews in batches, prepare a JSON file and use `--input`.
- To handle backup restore, run `backup restore --preview` first, then decide whether to use `--confirm`.
