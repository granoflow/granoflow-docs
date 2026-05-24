---
title: "用 CLI 思考工作流"
description: "用 Think in workflows 方式，把 CLI 命令組合成可執行的日常流程。"
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

先確認 App 可達、同步狀態同任務總覽，再進入寫操作。

## Think in structure

```bash
granoflow task create --input task.json --json
granoflow task set t_123 --input patch.json --json
```

用 `--input <file|->` 令變更可重用、可審查。

## Think in review

```bash
granoflow review day show --date 2026-05-24 --json
granoflow review week list --json
```

喺腳本記錄關鍵輸出，方便後續追蹤。

## Think in backup

高風險操作之前先備份：

```bash
granoflow backup create --out before-change.granobackup --accept-sync-risk --json
```

恢復前先預覽：

```bash
granoflow backup restore --file before-change.granobackup --preview --json
```

## Think in automation

- 全程優先 `--json`
- 先判斷命令係咪需要運行中 App
- 長流程要加入錯誤分支（例如 `app_not_reachable`、`cli_disabled`）