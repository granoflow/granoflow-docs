---
title: "用 CLI 和 HTTP 思考工作流"
description: "用 Think in workflows 的方式，把 CLI 命令和 HTTP 呼叫組合成可審查、可回滚的日常自動化流程。"
---

自動化腳本最容易出錯的地方，不是少寫一個命令，而是没有先判断“這一段需要 App 吗”“這次
會不會寫入資料”“失敗時怎么停下来”。GranoFlow 的本機 HTTP API 和 CLI 适合按工作流
組织：先抓现状，再預覽寫入，最後執行并记录结果。

## Think in capture：先抓现状

先確認 App、本機介面和目标資料是否可達：

```bash
# CLI 方式
granoflow health --json
granoflow api version --json
granoflow task list --json

# 直接 HTTP 呼叫
curl -s http://127.0.0.1:56789/v1/health
curl -s http://127.0.0.1:56789/v1/tasks
```

如果這一步失敗，不要继续寫入。先去排查 App 是否執行、本機 HTTP API 是否開啟、連接埠是否
一致、存取碼是否正确。

## Think in preview：寫入前先看請求

建立任務、更新回顧這類寫操作，优先用 JSON 檔案保存輸入，再用 `--dry-run` 預覽：

```bash
granoflow task create --input task.json --dry-run --json
granoflow review day update --date 2026-05-24 --input day.json --dry-run --json
```

`--dry-run` 返回的是本機請求預覽，不會呼叫真實寫入端點。它适合放在腳本的審查阶段，让
你確認路徑、方法和 JSON 结构都符合预期。

## Think in commit：確認後再執行

確認輸入無誤後，再去掉 `--dry-run`：

```bash
granoflow task create --input task.json --json
granoflow task complete --id task_123 --json
granoflow review week value --week-start 2026-05-18 --value-id value_123 --input value.json --json
```

寫入命令依賴執行中的 App 服務層。CLI 不會在 App 不可達時绕過 App 直接寫資料庫。

## Think in cards：把卡片操作当作獨立流程

復习卡片和任務的關係容易被腳本寫乱。建議把卡組导入、卡片封存、任務解绑分成獨立步骤：

```bash
granoflow deck import anki notes.apkg --dry-run --json
granoflow deck import anki notes.apkg --confirm dry_run_123 --json
granoflow card unlink --task-id task_123 --card-id card_123 --json
```

导入 Anki 包時，先 dry-run，確認 dry-run id 後再 confirm。任務解绑只解除關係，不應被当作
刪除卡片。

## Think in backup packages：備份包轉換是離線工具

CLI 目前公開的備份能力是離線包轉換：

```bash
granoflow backup decrypt --input encrypted.flow.grano --output plaintext.flow.grano --secret-file secret.txt --json
granoflow backup encrypt --input plaintext.flow.grano --output encrypted.flow.grano --secret-file secret.txt --json
```

這适合在你已经拿到備份包時做加密狀態轉換。它不建立新的 App 備份，也不把備份恢復進 App。
涉及真實備份建立、恢復和云同步风险時，请回到 App 內的資料安全與恢復流程。

## Think in automation：给 AI 助手或腳本

- 全程优先 `--json`
- 開始阶段先呼叫 `/v1/health` 或 `granoflow health --json`
- 寫入前先用 `--dry-run` 保存請求預覽
- 對錯誤碼建立分支，例如 `config_error`、`auth_error`、`network_error`、`api_error`
- 不把 CLI 輸出的人類可讀文本当作穩定协議
- 不把 `scripts/anz` 当作用戶自動化介面；它只服務倉庫工程流程

## 下一步

理解工作流之後，再看 JSON、環境變數和直接 HTTP 呼叫，會更容易把腳本寫成可復用的小工具，
而不是一次性的終端命令串。
