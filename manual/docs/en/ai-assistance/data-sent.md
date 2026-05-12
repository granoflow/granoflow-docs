---
title: "What content may be sent to AI"
description: "Normal use sends nothing to AI — only when you actively trigger an AI feature does relevant text enter the processing pipeline."
---

The most important thing first: **browsing tasks, writing journals, and doing reviews do not send any data to AI.**

Data enters the AI pipeline only when you actively trigger an AI feature, and only the text relevant to that specific operation.

![AI redaction settings](../../../screenshots/en/ai-redaction-settings.png)

## What each feature sends

| AI feature | What is sent |
|-----------|-------------|
| Title parsing | The task title you are currently typing |
| Clipboard assistant | The text you copied to the clipboard |
| Helper prompt | Current page description + your saved prompt |
| Review AI organize | The specific review content you triggered organizing for |

## AI redaction settings

Three key settings:

- **Master switch**: when off, GranoFlow performs no outbound redaction substitution
- **Category defaults**: when auto-discovered, whether email, phone, links etc. default to "redacted" or "allowed"
- **Phone region**: affects the recognition range for phone number patterns

Auto-discovery is rule-based, not intelligent review. It may miss unusual formats and may misidentify ordinary numbers. **You still need to check content before sending.**

## Redaction terms

The word list you maintain in "Redaction terms" is applied automatically before content is sent. See the "Redaction terms" page for details.

## In one sentence

> GranoFlow's AI only touches your data when you take action. No background collection, no automatic upload — scope is limited to the current feature's relevant text.
