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
- **Phone, number, and money settings**: when phone is on, you can choose recognition regions and search by region name, English name, code, or dialing prefix; the dialing prefix only helps you find a region, while recognition follows the regions you save. Numbers can use a minimum digit count and either a number or ID placeholder; money can include symbol/currency-code and Chinese uppercase matching, with either a money or amount placeholder.
- **Redaction terms**: lets you maintain fixed sensitive-term-to-placeholder rules, such as client names, company names, or project codenames.

Auto-discovery is rule-based assistance, not intelligent review. It may miss unusual formats, and it may mistake ordinary numbers for sensitive content. When a category defaults to "redacted", discovered values are temporarily replaced with easier-to-read short-lived redacted values such as `13xxxxx4821`, `foxxxx3920@1846.com`, `2026-08-17`, or `192.43.18.206`, and GranoFlow tries to restore them after the AI responds; they are not automatically added to your long-term redaction terms. **You still need to check before sending.**

## What automatic redacted values look like

Rule-based discovery tries to preserve the type shape so AI can tell whether it is seeing a phone number, email, link, date, amount, card number, IBAN, IP address, MAC address, token, or file path.

- Numbers, phone numbers, cards, and similar account identifiers: values with 6 or more digits keep the first two real digits, use `x` in the middle, and end with 4 short-lived stable random digits; values under 6 digits become same-length random digits.
- Money: keeps the currency or amount marker and a rough scale, so AI can do coarse analysis, but not exact accounting.
- Dates: keep the year and replace the month and day with legal random values.
- Emails and links: keep a recognizable structure, while domains become short-lived random numeric domains such as `1846.com`.
- Paths: keep common structural words and file extensions, while other segments become random letters.

AI prompt packages and local HTTP AI assistant exports also include `isRedacted` and `redactionReason`. `isRedacted: true` means the redaction pass completed for this request; `false` means redaction was disabled, the prompt package could not be confirmed, or redaction metadata was missing, with the specific reason written in `redactionReason`.

## What redaction terms do

The word list you maintain in "Redaction terms" is replaced with your chosen placeholders before content is sent. See the "Redaction terms" page for details.

## In one sentence

> GranoFlow's AI only involves your data when you actively trigger a feature. It does not collect in the background, does not upload automatically, and only sends text relevant to the current feature.
