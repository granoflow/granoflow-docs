---
title: "Command line tool"
description: "Use the GranoFlow CLI on desktop to manage display preferences, tasks, projects, milestones, tags, domain values, reviews, and local backups."
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

If you want to control GranoFlow from Terminal or a script, install the `granoflow` command from the desktop app settings and keep the GranoFlow app running. You can then use it to check status, adjust display preferences, work with tasks and projects in batches, and create or preview local backup restores.

In this page, CLI only means the `granoflow` command installed on your computer. It is not a development, build, or cloud operations entry point, and it does not provide cloud admin, purchase-platform admin, internal debug reset, cloud wipe, or release commands.

## Install And Check

Install the GranoFlow desktop app first. Then open the Command Line Tool page in the app settings to install or repair the `granoflow` command.

When you use business commands such as tasks, projects, or backups, the GranoFlow app needs to be running. The CLI sends requests to the app. It does not open your local database directly.

Useful checks:

```bash
granoflow
granoflow help
granoflow version --json
granoflow status --json
granoflow display get --json
```

Running `granoflow` opens the GranoFlow desktop app. To read command help, use `granoflow help`, `granoflow --help`, or `granoflow -h`.

Every command supports `--json`, which is useful for scripts and AI assistants. JSON mode only outputs structured results. If the app cannot be reached, the command returns the stable `app_not_reachable` error.

## Display Preferences

Display preference commands adjust the app interface language, appearance, and font size:

```bash
granoflow display get --json
granoflow display language zh-CN --json
granoflow display theme dark --json
granoflow display font-size large --json
granoflow display reset --json
```

`granoflow display language` changes the app interface language. `granoflow lang` only changes the CLI output language in the current terminal window.

`display reset` only resets display preferences. It does not clear your account, tasks, projects, or local data.

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

Structured input always uses `--input <file|->`.

When you pass a file path, the CLI reads JSON from that file. When you pass `-`, it reads from stdin. In JSON, a missing field means no change; a present field means update; an explicit `null` or empty array means clear.

## Status And Images

Tasks, projects, and milestones all have state actions. Prefer clear action commands:

```bash
granoflow task start <task-id> --json
granoflow task complete <task-id> --json
granoflow task reopen <task-id> --json
granoflow project archive <project-id> --json
granoflow milestone complete <milestone-id> --json
```

`task delete` moves the task to the trash state. It is not a physical delete.

When a task is completed without a previous start time, GranoFlow fills in the start time using the same rule as the app.

Task descriptions can use Markdown. A remote image URL is saved as text only. It is not downloaded, encrypted, or turned into an independent image.

Independent image areas are managed with the `image` subcommand or the `images` field in JSON. `images` means the final target collection: keep existing images, add local files, or pass an empty array to clear them.

## Tags, Values, And Reviews

Fixed tags are read-only. Custom tags can be created, updated, and deleted. When a custom tag is deleted, GranoFlow also unlinks it from related objects.

Domain values are managed with `domain-value`. If the limit has been reached, adding another value returns an error. It does not silently replace old content.

`review day` and `review week` support reading and updating. In the first version, `review month` only supports `list` and `show`.

## Backup

CLI backup commands reuse the app's local backup flow:

```bash
granoflow backup create --out backup.granobackup --accept-sync-risk --json
granoflow backup restore --file backup.granobackup --preview --json
granoflow backup restore --file backup.granobackup --confirm --backup-secret-file secret.txt --json
```

`--preview` only checks the backup file and summary. It does not write data. `--confirm` performs the restore. They cannot be used together.

The backup secret can only be passed through a file, which helps avoid leaving the secret directly in shell history.

The older `quick-add`, `logout`, `export`, and `import` commands remain compatible, but they are no longer the main entries in help. For everyday data protection, prefer `backup create` and `backup restore`.

## Next

- To check whether the command is available, start with `granoflow` to open the desktop app, then use `granoflow help` and `granoflow status --json`.
- To write tasks, projects, or reviews in batches, prepare a JSON file first, then use `--input`.
- To handle backup restore, run `backup restore --preview` first to read the summary, then decide whether to use `--confirm`.
