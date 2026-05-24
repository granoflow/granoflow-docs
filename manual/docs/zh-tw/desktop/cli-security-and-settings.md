---
title: "CLI 安全設定與密鑰邊界"
description: "理解本機存取開關、Token Verification、App Lock、脫敏與多種密鑰邊界。"
translationSource: zh-CN
translationReview:
  - ux-writing
  - plan-eng-review
---

## Think in permissions

受保護 App command channel 命令有固定 gate 順序：

1. 本機存取總開關（CLI enabled）
2. App lock
3. nonce
4. Token Verification（只在開啟時）

`help`、`version`、`open` 屬於發現與喚起入口，不要求 token。

## Token Verification

開啟後，讀取或修改 App 資料的受保護命令需要 token。

- 可用 `--token <value>` 傳入
- 或使用 `GRANOFLOW_CLI_TOKEN`

## 本機存取開關

本機存取關閉時，受保護命令會被拒絕（例如 `cli_disabled`），不是靜默失敗。

## App Lock 與 nonce

即使 Token Verification 關閉，前置 gate 仍生效。App lock 或 nonce 驗證失敗時，命令會先被拒絕。

## Think in redaction as assistance

脫敏用於降低內容送往外部 AI 前的敏感暴露風險。它是輔助處理，不等於加密、token 驗證或權限系統。

## Think in secrets separately

- **CLI token**：本機命令授權令牌
- **備份密鑰**：備份包加密/還原 secret（通常透過檔案提供）
- **雲端同步密鑰**：端到端加密雲同步資料恢復密鑰

三者用途不同，不能互相替代。

## CLI 暫存資產清理

`granoflow clean --json` 是 native CLI 本機清理命令：

```bash
granoflow clean --json
granoflow clean --older-than 30m --json
granoflow clean --all --json
```

`--all` 不能和 `--older-than` 同時使用。