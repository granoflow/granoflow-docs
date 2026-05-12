---
title: "Redaction terms"
description: "Maintain a sensitive-word-to-placeholder mapping so GranoFlow automatically substitutes them before sending content to external AI."
---

Redaction terms work like a find-and-replace list: you define "Acme Corp" → "CLIENT_A", and every time GranoFlow sends content to external AI, it swaps "Acme Corp" for "CLIENT_A" first, then tries to restore the placeholder in the response.

![Redaction terms settings](../../../screenshots/en/ai-redaction-terms-settings.png)

## What to add

- Client names, company names
- Project codenames (internal nicknames)
- Fixed email addresses, physical addresses
- Contract amounts, account identifiers
- Any term you use often but do not want sent directly to external AI

## How to add a term

1. Go to AI settings → Redaction terms
2. Add a term with its placeholder
3. Use recognizable placeholders like `CLIENT_A` or `PROJECT_X`
4. Save — it takes effect on the next AI trigger

## Redacted vs Allowed

Each term has two states:

- **Redacted**: replaced with placeholder before sending; AI response tries to restore it
- **Allowed**: no substitution applied (use when the term is not sensitive)

## Does this guarantee security?

**No.** Redaction is an aid, not a security guarantee:

- It may miss abbreviations or unusual spellings
- It only processes the terms you have defined
- GranoFlow cannot control how external AI handles content it has already received

Manually review important content before sending.

:::tip[Members-only feature]
Redaction terms are available to members. Non-members can view the interface but cannot customize it.
:::
