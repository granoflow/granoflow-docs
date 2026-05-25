---
title: "CLI 安全設定與密鑰邊界"
description: "理解本機訪問開關、Token Verification、App Lock、脫敏與多種密鑰邊界。"
translationSource: zh-CN
translationReview:
  - ux-writing
  - plan-eng-review
---

## Think in permissions

受保護 App command channel 命令有固定 gate 順序：

1. 本機訪問總開關（CLI enabled）
2. App lock
3. nonce
4. Token Verification（只喺開啟時）

`help`、`version`、`open` 屬於發現與喚起入口，唔要求 token。

## Token Verification

開啟後，讀取或修改 App 數據嘅受保護命令需要 token。

- 可以用 `--token <value>` 傳入
- 或使用 `GRANOFLOW_CLI_TOKEN`

## 本機訪問開關

本機訪問關閉時，受保護命令會被拒絕（例如 `cli_disabled`），唔係靜默失敗。

## App Lock 與 nonce

即使 Token Verification 關閉，前置 gate 仍然生效。App lock 或 nonce 校驗失敗時，命令會先被拒絕。

## Think in redaction as assistance

脫敏用於減少內容送去外部 AI 前嘅敏感暴露風險。佢係輔助處理，唔等於加密、token 校驗或權限系統。

## Think in secrets separately

- **CLI token**：本機命令授權令牌
- **備份密鑰**：備份包加密/恢復 secret（通常由文件提供）
- **雲端同步密鑰**：端到端加密雲同步數據恢復密鑰

三者用途唔同，唔可以互相替代。

## CLI 臨時資產清理

`granoflow clean --json` 係 native CLI 本機清理命令：

```bash
granoflow clean --json
granoflow clean --older-than 30m --json
granoflow clean --all --json
```

`--all` 唔可以同 `--older-than` 同時使用。
