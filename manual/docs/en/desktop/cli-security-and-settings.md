---
title: "CLI security and key boundaries"
description: "Understand local access, Token Verification, app lock, redaction, and the boundaries between different keys."
translationSource: zh-CN
translationReview:
  - ux-writing
  - plan-eng-review
---

## Think in permissions

Protected app command channel commands follow a fixed gate order:

1. local CLI access switch (`cliEnabled`)
2. app lock
3. nonce
4. Token Verification (when enabled)

`help`, `version`, and `open` are discovery/wake-up entries and do not require token.

## Token Verification

When enabled, protected commands that read/write app data require token.

- pass token with `--token <value>`
- or use `GRANOFLOW_CLI_TOKEN`

## Local access switch

When local CLI access is off, protected commands are rejected (for example `cli_disabled`).

## App lock and nonce

Even if Token Verification is off, earlier gates still apply. If app lock or nonce check fails, the command is rejected first.

## Think in redaction as assistance

Redaction helps reduce sensitive exposure before sending content to external AI tools. It is assistance, not encryption, token verification, or a permissions system.

## Think in secrets separately

- **CLI token**: local command authorization token
- **Backup secret**: secret used for backup package encryption/restore (usually via file)
- **Cloud sync key**: recovery key for end-to-end encrypted cloud sync data

They are different and not interchangeable.

## CLI temporary asset cleanup

`granoflow clean --json` is a native local cleanup command:

```bash
granoflow clean --json
granoflow clean --older-than 30m --json
granoflow clean --all --json
```

`--all` cannot be used with `--older-than`.