---
title: "Command line tool"
description: "Use a 7-page structure to learn the GranoFlow CLI: how it works, security boundaries, command reference, workflows, JSON automation, and troubleshooting."
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

`granoflow` is the end-user desktop CLI. Treat it as a **local command-line entry point**, not a development/build tool and not a cloud operations interface.

## Start with this map

- Understand boundaries: [How CLI works](/manual/en/desktop/cli-how-it-works/)
- Check token, local access, app lock, and key differences: [CLI security and key boundaries](/manual/en/desktop/cli-security-and-settings/)
- Full commands and options: [CLI command reference](/manual/en/desktop/cli-command-reference/)
- Task-oriented flows: [CLI workflows](/manual/en/desktop/cli-workflows/)
- For scripts and AI assistants: [JSON and scripting](/manual/en/desktop/cli-json-and-scripting/)
- Fix errors: [CLI troubleshooting](/manual/en/desktop/cli-troubleshooting/)

## Install and first checks

Install or repair `granoflow` from the app's Command Line Tool settings page, then run:

```bash
granoflow help
granoflow version --json
granoflow bridge config show --json
```

## Common misconceptions

- `granoflow lang` only changes CLI output language, not app language.
- `granoflow backup-package` is a native local CLI tool and does not require a running app.
- Business object, backup, and real-data AI commands depend on the running app command channel.

## Next

Read [How CLI works](/manual/en/desktop/cli-how-it-works/) first, then use the command reference.