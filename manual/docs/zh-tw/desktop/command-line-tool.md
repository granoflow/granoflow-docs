---
title: "命令列工具"
description: "了解如何安裝和使用 GranoFlow 命令列工具，查看 JSON 輸出範例，並理解資料匯入、備份和 AI 自動化的安全範圍。"
translationSource: zh-CN
translationReview:
  - ux-writing
  - product-frontend-design
---

命令列工具適合想從終端機、腳本或自動化流程開啟 GranoFlow 的使用者。先確認命令可用，再複製下面的範例；截圖用來對照輸出形態，完整命令以程式碼區塊為準。

## 安裝與確認

桌面版安裝後，設定頁的「命令列工具」入口會集中顯示目前平台的安裝或命令別名狀態、系統脫敏和 Token 驗證設定。正式發布包會分發已編譯好的 `granoflow` 命令，使用者不需要安裝 Dart SDK。

- Windows 安裝包會自動註冊終端機命令，修復時請重新執行安裝包。
- macOS 可以在設定頁安裝或修復 `/usr/local/bin/granoflow`。
- Linux AppImage 需要手動設定命令別名，設定頁會提供可複製命令。
- Android / iOS 不顯示命令列工具入口。

```bash
granoflow version --json
```

![命令列工具輸出版本 JSON](../../../screenshots/zh-tw/desktop-cli-install-check.png)

常用探索命令：

```bash
granoflow
granoflow help
granoflow help version
granoflow version
```

## 輸出語言

`--lang` 只影響單次命令輸出。`granoflow lang <locale>` 會列印一行設定目前終端機視窗語言的命令；執行後只影響這個終端機視窗，關閉視窗後失效，也不會改變 App 內語言設定。

```bash
granoflow --lang zh-TW help version
eval "$(granoflow lang zh-TW)"
granoflow lang zh-TW | Invoke-Expression
```

![命令列工具輸出目前視窗語言設定命令](../../../screenshots/zh-tw/desktop-cli-lang-window.png)

支援的 locale 是 `en`、`zh-CN`、`zh-HK`、`zh-TW`。

## 基礎命令

所有目前命令都支援 `--json`。JSON 模式只輸出 JSON envelope，不會混入人類提示、進度紀錄或 Token 原文。

```bash
granoflow status --json
granoflow open --json
granoflow open today --json
granoflow logout --json
```

`granoflow open` 不帶頁面時會嘗試啟動桌面 App；`status`、`open today` 和 `logout` 需要執行中的 GranoFlow App。App 不可達時，命令會回傳穩定錯誤，而不是繞過 App 直接讀取本機資料庫。

## 指令速查

如果你只想判斷該用哪個命令，可以先看這一組：

| 命令 | 用途 | 是否需要執行中的 App |
| --- | --- | --- |
| `help` | 查看整體說明或某個命令的說明 | 否 |
| `version` | 查看 CLI 版本 | 否 |
| `lang` | 設定目前終端機視窗的輸出語言 | 否 |
| `open` | 開啟首頁、收件匣、今日、專案、回顧、設定等頁面 | 視用法而定 |
| `status` | 輸出執行中 App 的脫敏狀態摘要 | 是 |
| `quick-add` | 把一段文字交給 App 建立任務 | 是 |
| `logout` | 清除本機登入工作階段 | 是 |
| `export` | 匯出使用者資料包 | 是 |
| `import` | 匯入使用者資料包 | 是 |
| `backup create` | 建立本機備份包 | 是 |
| `backup restore --preview` | 預覽本機備份包復原影響 | 是 |
| `backup restore --confirm` | 執行本機備份復原 | 是 |
| `ai-agent tools` | 查看可用 AI 自動化工具 | 否 |
| `ai-agent system-template` | 輸出某個 AI 工具的系統提示模板 | 否 |
| `ai-agent package` | 產生給外部 AI 使用的受控 JSON 包 | 否 |
| `ai-agent <resource> request` | 從本機上下文產生 AI 請求包 | 視資源而定 |
| `ai-agent <resource> validate` | 驗證 AI 回傳 JSON | 否 |
| `ai-agent <resource> apply` | 驗證並套用 AI 回傳結果 | 視資源而定 |
| `ai-agent assets cleanup` | 清理 AI 自動化資產引用 | 否 |

AI 自動化資源包括 `task`、`milestone task-draft`、`daily-review rewrite`、`journal daily`、`journal weekly`、`journal monthly`、`domain-values` 和 `work-learning report`。

## 開啟與快速新增

`open` 可以開啟常用頁面，`quick-add` 可以把一段文字交給執行中的 App 建立任務。

```bash
granoflow open inbox --json
granoflow open today --json
granoflow quick-add "整理每週回顧提綱" --json
granoflow quick-add "今天追蹤備份檢查" --due today --json
```

![命令列工具顯示 quick-add 命令說明](../../../screenshots/zh-tw/desktop-cli-quick-add.png)

`quick-add` 不會在 App 不可達時直接寫入本機資料庫；失敗時請先開啟 GranoFlow 桌面版，再重試命令。

## 資料匯入、匯出與備份

資料命令同樣透過執行中的 App 執行，用於復用 App 內的匯出、匯入、備份、同步風險和附件檢查邏輯。

```bash
granoflow export --scope local --out granoflow-export.gflow --json
granoflow import --file granoflow-export.gflow --json
granoflow backup create --out granoflow-backup.gfbak --json
granoflow backup restore --file granoflow-backup.gfbak --preview --json
granoflow backup restore --file granoflow-backup.gfbak --confirm --backup-secret-file backup-secret.txt --json
```

![命令列工具顯示備份復原預覽的 JSON 錯誤範例](../../../screenshots/zh-tw/desktop-cli-backup-preview.png)

先使用 `--preview` 查看備份包摘要，再用 `--confirm` 執行復原。備份金鑰只能透過 `--backup-secret-file` 傳入，避免金鑰進入 shell 歷史、行程列表或紀錄。

## AI 自動化

`ai-agent` 面向希望把 GranoFlow 資料包交給外部 AI 或自動化流程的使用者。CLI 負責產生、驗證和套用受控 JSON 包；它不會替你呼叫外部模型，也不會在本機資料不可安全讀取時偽造結果。

```bash
granoflow ai-agent tools --json
granoflow ai-agent diagnostics local-store --json
granoflow ai-agent system-template single_task_ai --json
granoflow ai-agent package single_task_ai --input data.json --json
```

![命令列工具輸出 AI tools JSON 清單](../../../screenshots/zh-tw/desktop-cli-ai-agent-tools.png)

資源化入口使用完整路徑：

```bash
granoflow ai-agent task request --id <task-id> --json
granoflow ai-agent task validate --input reply.json --json
granoflow ai-agent task apply --input reply.json --json
```

## 安全設定與下一步

- 開啟設定頁裡的「命令列工具」，確認安裝狀態、系統脫敏和 Token 驗證。
- 需要機器讀取時優先使用 `--json`，需要給人閱讀時使用一般 help。
- 涉及匯入、復原和 AI 套用前，先看預覽或驗證結果，再執行寫入命令。
- 如果命令回傳 App 不可達，先啟動 GranoFlow 桌面版，再重試。
