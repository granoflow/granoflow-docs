---
title: "用 CLI 和 HTTP 思考工作流"
description: "用 Think in workflows 方式，把 CLI 命令和 HTTP 呼叫組合成可執行的日常流程。"
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

## Think in capture：先抓現狀

```bash
# CLI 方式
granoflow status --json
granoflow task list --json

# 直接 HTTP 呼叫
curl -s http://127.0.0.1:42667/v1/status
curl -s http://127.0.0.1:42667/v1/task
```

先確認 App 可達、同步狀態和任務總覽，再進入寫操作。

## Think in structure：結構化寫入

```bash
granoflow task create --input task.json --json
granoflow task set t_123 --input patch.json --json
```

用 `--input <file|->` 讓變更可重複使用、可審查。

## Think in review：回顧與驗證

```bash
granoflow review day show --date 2026-05-24 --json
granoflow review week list --json
```

在腳本裡記錄關鍵輸出，便於後續追蹤。

## Think in backup：高風險操作前先備份

```bash
granoflow backup create --out before-change.granobackup --accept-sync-risk --json
```

還原前先預覽：

```bash
granoflow backup restore --file before-change.granobackup --preview --json
```

## Think in automation：給 AI 助手或腳本

- 全程優先 `--json`
- 先判斷是否需要執行中的 App（透過 `/v1/status` 檢查）
- 對長流程加入錯誤分支（如 `app_not_reachable`、`cli_disabled`）
- 也可直接透過 curl 呼叫本機 HTTP API，不依賴 `granoflow` CLI 是否安裝
