---
title: "What content may be sent to AI"
description: "Normal use does not send any data. Only when you actively use an AI feature does the text needed for that feature enter the flow."
---

If you are only browsing tasks, writing journals, or doing reviews, GranoFlow does not send that content to AI. Text may enter the AI processing flow only when you actively trigger an AI feature, and only the text related to that action is involved.

![AI redaction settings](../../../screenshots/en/ai-redaction-settings.png)

## What each feature may send

| AI feature | Content that may be sent |
|-----------|--------------------------|
| Title parsing | The task title you are currently typing |
| Clipboard assistant | The text you copied to the clipboard |
| Helper prompt | The current page description + your saved prompt |
| Review AI organize | The review content you triggered organizing for this time |

## What AI redaction settings do

AI redaction settings only affect replacement before content is sent. They do not mean AI automatically judges every piece of sensitive information.

There are three key settings:

- **Master switch**: when off, GranoFlow does not perform outbound redaction replacement.
- **Category defaults**: when the system finds emails, phone numbers, links, and similar content by rule, this decides whether the default is "redacted" or "allowed".
- **Phone region**: affects the recognition range for phone number rules.

Auto-discovery is rule-based assistance, not intelligent review. It may miss unusual formats, and it may mistake ordinary numbers for sensitive content. **You still need to check before sending.**

## What redaction terms do

The word list you maintain in "Redaction terms" is automatically replaced before content is sent. See the "Redaction terms" page for details.

## In one sentence

> GranoFlow's AI only involves your data when you actively trigger a feature. It does not collect in the background, does not upload automatically, and only sends text relevant to the current feature.
