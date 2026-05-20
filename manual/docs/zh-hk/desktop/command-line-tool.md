---
title: "命令列工具"
description: "在桌面端使用 GranoFlow CLI 管理顯示偏好、任務、項目、里程碑、標籤、領域價值觀、回顧和本地備份。"
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

如果你想用終端機或腳本操作 GranoFlow，先在桌面端設定入面安裝 `granoflow` 命令，並保持 GranoFlow App 正在運行。之後你可以用它查看狀態、調整顯示偏好、批量處理任務和項目，亦可以建立或預覽恢復本地備份。

本頁的 CLI 只指安裝到用戶電腦上的 `granoflow` 命令。它不是開發、構建或雲端運維入口，不提供雲端管理員、購買平台管理員、內部調試重置、雲端清空或發佈類命令。

## 安裝與確認

先安裝 GranoFlow 桌面端。然後打開 App 設定入面的「命令列工具」頁面，安裝或修復 `granoflow` 命令。

使用任務、項目、備份等業務命令時，GranoFlow App 需要正在運行。CLI 會把請求交給 App 處理，不會直接打開你的本地數據庫。

常用檢查：

```bash
granoflow
granoflow help
granoflow version --json
granoflow status --json
granoflow display get --json
```

只運行 `granoflow` 會打開 GranoFlow 桌面端。查看命令說明請使用 `granoflow help`、`granoflow --help` 或 `granoflow -h`。

所有命令都支援 `--json`，適合腳本或 AI 助手讀取。JSON 模式只輸出結構化結果。如果 App 無法連接，會返回穩定的 `app_not_reachable` 錯誤。

## 顯示偏好

顯示偏好命令用來調整 App 介面語言、外觀和字體大小：

```bash
granoflow display get --json
granoflow display language zh-HK --json
granoflow display theme dark --json
granoflow display font-size large --json
granoflow display reset --json
```

`granoflow display language` 修改 App 介面語言。`granoflow lang` 只修改目前終端機視窗入面的 CLI 輸出語言。

`display reset` 只重置顯示偏好，不會清空帳號、任務、項目或本地數據。

## 業務對象

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

結構化輸入統一使用 `--input <file|->`。

傳文件路徑時，CLI 會讀取這個 JSON 文件。傳 `-` 時，CLI 會從 stdin 讀取。JSON 入面的欄位缺失表示不修改；欄位出現表示更新；明確寫 `null` 或空陣列表示清空。

## 狀態和圖片

任務、項目、里程碑都有狀態動作。優先使用清楚的動作命令：

```bash
granoflow task start <task-id> --json
granoflow task complete <task-id> --json
granoflow task reopen <task-id> --json
granoflow project archive <project-id> --json
granoflow milestone complete <milestone-id> --json
```

`task delete` 會把任務移入回收狀態，不是物理刪除。

任務完成時，如果之前沒有開始時間，GranoFlow 會按 App 內相同規則補齊開始時間。

任務描述可以寫 Markdown。遠端圖片 URL 只會作為文字保存，不會被下載、加密或變成獨立圖片。

獨立圖片區用 `image` 子命令或 JSON 入面的 `images` 欄位管理。`images` 表示最終目標集合：可以保留已有圖片、加入本地文件，或用空陣列清空。

## 標籤、價值觀和回顧

固定標籤是唯讀的。自訂標籤可以建立、更新和刪除。刪除自訂標籤時，GranoFlow 會同時把它從相關對象上解除連結。

領域價值觀用 `domain-value` 管理。達到數量上限後，繼續加入會返回錯誤，不會靜默覆蓋舊內容。

`review day` 和 `review week` 支援查看和更新。`review month` 首版只支援 `list` 和 `show`。

## 備份

CLI 的備份命令沿用 App 內的本地備份流程：

```bash
granoflow backup create --out backup.granobackup --accept-sync-risk --json
granoflow backup restore --file backup.granobackup --preview --json
granoflow backup restore --file backup.granobackup --confirm --backup-secret-file secret.txt --json
```

`--preview` 只檢查備份文件和摘要，不會寫入數據。`--confirm` 才會執行恢復。兩者不能同時使用。

備份密鑰只能透過文件傳入，這樣可以避免把密鑰直接留在命令歷史入面。

舊的 `quick-add`、`logout`、`export`、`import` 仍保留兼容，但不會作為主幫助入面的核心入口。日常數據保護優先使用 `backup create` 和 `backup restore`。

## 下一步

- 想確認命令是否可用，先運行 `granoflow` 打開桌面端，再使用 `granoflow help` 和 `granoflow status --json`。
- 想批量寫入任務、項目或回顧，先準備 JSON 文件，再使用 `--input`。
- 想處理備份恢復，先運行 `backup restore --preview` 看摘要，再決定是否使用 `--confirm`。
