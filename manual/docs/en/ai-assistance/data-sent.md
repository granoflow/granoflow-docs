---
title: "What content may be sent to AI"
description: "Normal use does not send any data. Only when you actively use an AI feature does the text needed for that feature enter the flow."
---

If you are only browsing tasks, writing journals, or doing reviews, GranoFlow does not send that content to AI. Text may enter the AI processing flow only when you actively trigger an AI feature, and only the text related to that action is involved.

<!-- manual-screenshot:id=ai-redaction-settings -->
![What content may be sent to AI screen capture](../../../screenshots/en/ai-redaction-settings.png)

## What each feature may send

| AI feature | Content that may be sent |
| --- | --- |
| Title parsing | The task title you are currently typing |
| Clipboard assistant | The text you copied to the clipboard |
| Helper prompt | The current page description + your saved prompt |
| Review AI organize | The review content you triggered organizing for this time |

## What AI redaction settings do

AI redaction settings only affect replacement before content is sent. They do not mean AI automatically judges every piece of sensitive information.

There are four key settings:

- **Master switch**: when off, GranoFlow does not perform outbound redaction replacement.
- **Category defaults**: when the system finds emails, links, dates, long numbers, money, credit cards, IBANs, and similar content by rule, this decides whether the default is "redacted" or "allowed"; phone numbers default to allowed and can be turned on when needed.
- **Phone, number, and money settings**: when phone is on, you can choose recognition regions; numbers can use a minimum digit count and either a number or ID placeholder; money can include symbol/currency-code and Chinese uppercase matching, with either a money or amount placeholder.
- **Redaction terms**: lets you maintain fixed sensitive-term-to-placeholder rules, such as client names, company names, or project codenames.

Auto-discovery is rule-based assistance, not intelligent review. It may miss unusual formats, and it may mistake ordinary numbers for sensitive content. When a category defaults to "redacted", discovered values are temporarily replaced with short-lived placeholders such as `EMAIL_1`, `MONEY_1`, or `ID_1` and GranoFlow tries to restore them after the AI responds; they are not automatically added to your long-term redaction terms. **You still need to check before sending.**

## What redaction terms do

The word list you maintain in "Redaction terms" is replaced with your chosen placeholders before content is sent. See the "Redaction terms" page for details.

## In one sentence

> GranoFlow's AI only involves your data when you actively trigger a feature. It does not collect in the background, does not upload automatically, and only sends text relevant to the current feature.
