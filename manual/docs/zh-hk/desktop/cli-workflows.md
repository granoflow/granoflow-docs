---
title: "用 CLI 同 HTTP 思考工作流"
description: "用 Think in workflows 方式，將 CLI 命令同 HTTP 呼叫組合成可執行嘅日常流程。"
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

## Think in capture：先捉現狀

```bash
# CLI 方式
granoflow status --json
granoflow task list --json

# 直接 HTTP 呼叫
curl -s http://127.0.0.1:42667/v1/status
curl -s http://127.0.0.1:42667/v1/task
```

先確認 App 可達、同步狀態同任務總覽，再進入寫操作。

## Think in structure：結構化寫入

```bash
granoflow task create --input task.json --json
granoflow task set t_123 --input patch.json --json
```

用 `--input <file|->` 令變更可重用、可審查。

## Think in review：回顧與校驗

```bash
granoflow review day show --date 2026-05-24 --json
granoflow review week list --json
```

喺腳本記錄關鍵輸出，方便後續追蹤。

## Think in backup：高風險操作前先備份

```bash
granoflow backup create --out before-change.granobackup --accept-sync-risk --json
```

恢復前先預覽：

```bash
granoflow backup restore --file before-change.granobackup --preview --json
```

## Think in automation：俾 AI 助手或腳本

- 全程優先 `--json`
- 先判斷係咪需要運行中嘅 App（透過 `/v1/status` 檢查）
- 長流程要加入錯誤分支（例如 `app_not_reachable`、`cli_disabled`）
- 亦可以直接透過 curl 呼叫本機 HTTP API，唔依賴 `granoflow` CLI 係咪已安裝
