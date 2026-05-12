---
title: "命令列工具"
description: "在桌面端使用 GranoFlow CLI 管理任務、專案、里程碑、標籤、領域價值觀、回顧和本機備份。"
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

GranoFlow CLI 是給桌面端使用者、腳本和 AI 助手使用的命令列入口。它適合批次查看或更新任務、專案、里程碑、標籤、領域價值觀、回顧紀錄，以及建立或恢復本機備份。

本頁的 CLI 只指安裝到使用者電腦上的 `granoflow` 命令。它不是開發、建置或雲端維運入口，不提供雲端管理員、購買平台管理員、測試賬號重置、雲端清空或發布類命令。

## 安裝與確認

先安裝桌面端，再在設定裡進入「命令列工具」頁面安裝或修復 `granoflow` 命令。使用業務命令時，桌面端 App 需要正在執行；命令會把請求交給 App 處理，而不是直接打開你的本機資料庫。

常用檢查：

```bash
granoflow help
granoflow version --json
granoflow status --json
```

所有命令都支援 `--json`，適合給腳本或 AI 使用。JSON 模式只輸出結構化結果；如果 App 無法連接，會返回穩定的 `app_not_reachable` 錯誤。

## 業務物件

公開資源名使用單數：`task`、`project`、`milestone`、`tag`、`domain-value`、`review`。

常見用法：

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

結構化輸入統一使用 `--input <file|->`。傳檔案路徑時讀取該 JSON 檔案；傳 `-` 時從 stdin 讀取。JSON 中欄位缺失表示不改，欄位出現表示更新，明確寫 `null` 或空陣列表示清空。

## 狀態和圖片

任務、專案、里程碑都有狀態動作。優先使用明確動作：

```bash
granoflow task start <task-id> --json
granoflow task complete <task-id> --json
granoflow task reopen <task-id> --json
granoflow project archive <project-id> --json
granoflow milestone complete <milestone-id> --json
```

`task delete` 會把任務移入回收狀態，不是物理刪除。任務完成時，如果之前沒有開始時間，GranoFlow 會按 App 內相同規則補齊。

任務描述可以寫 Markdown；遠端圖片 URL 只會作為文字儲存，不會被下載、加密或變成獨立圖片。獨立圖片區用 `image` 子命令或 JSON 裡的 `images` 欄位管理，`images` 表示最終目標集合：保留已有圖片、新增本機檔案，或用空陣列清空。

## 標籤、價值觀和回顧

固定標籤是唯讀的。自訂標籤可以建立、更新和刪除；刪除時會同步從相關物件上解除連結。

領域價值觀用 `domain-value` 管理。達到數量上限後，繼續新增會返回錯誤，而不是靜默覆蓋舊內容。

`review day` 和 `review week` 支援查看和更新；`review month` 首版只支援 `list` 和 `show`。

## 備份

CLI 的備份命令沿用 App 內的本機備份流程：

```bash
granoflow backup create --out backup.granobackup --accept-sync-risk --json
granoflow backup restore --file backup.granobackup --preview --json
granoflow backup restore --file backup.granobackup --confirm --backup-secret-file secret.txt --json
```

`--preview` 只檢查備份檔案和摘要，不寫入資料；`--confirm` 才執行恢復。兩者不能同時使用。備份密鑰只能透過檔案傳入，避免把密鑰直接留在命令歷史裡。

舊的 `quick-add`、`logout`、`export`、`import` 仍保留相容，但不會作為主幫助裡的核心入口。日常資料保護優先使用 `backup create` 和 `backup restore`。

## 下一步

- 想確認命令是否可用，先執行 `granoflow help` 和 `granoflow status --json`。
- 想批次寫入任務、專案或回顧，優先準備 JSON 檔案並使用 `--input`。
- 想處理備份，先執行 `backup restore --preview` 看摘要，再決定是否 `--confirm`。
