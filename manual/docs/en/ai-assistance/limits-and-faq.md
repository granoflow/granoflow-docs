---
title: "AI limits and FAQ"
description: "Quick answers to the most common questions about GranoFlow's AI features."
---

If you are worried that AI might silently edit tasks or read your data, the answer is no. GranoFlow's AI features only process relevant text when you actively use them, and any field change must be confirmed by you before it is saved.

## Will AI automatically change my tasks?

**No.** AI can make suggestions, but it does not directly edit tasks for you. If you do not explicitly confirm a suggestion, nothing is written to your data.

## Does AI read my data in the background?

**No.** Only when you actively trigger an AI feature does the text related to your current action enter the processing flow. If you do not trigger an AI feature, AI does not read your data in the background.

## Which AI service receives my data?

That depends on the specific feature you use. GranoFlow calls external AI services to handle the related processing. To see what content may be sent, read "What content may be sent to AI."

## Does redaction guarantee 100% security?

**No.** Redaction is only an aid. It may miss alternate spellings, abbreviations, or variants. It also cannot control how an external AI handles information it has already received. Before sending important content, review it yourself one more time.

## What if AI misidentifies something?

Just do not accept that suggestion. Ignored or unconfirmed suggestions have no effect. You can then open the task details and set the correct field manually.

## Does Review Today's Tasks write changes automatically?

No. AI can help review today's tasks and prepare suggestions for title, Task Review, today's domain reports, and optional new tasks. Task times are read-only context in this flow and are not written back by AI. Allowed fields are written only after you copy the result back into GranoFlow and confirm it in the confirmation view.

## What does the Helper prompt do?

The Helper prompt affects the default way GranoFlow asks external AI questions on your behalf. You can write in "what angle I want AI to use when explaining GranoFlow" so the answers better match your use case.

## Do AI features require internet?

Yes. AI features depend on external services and cannot be used offline.

## What happens when there is no network or the AI service is unavailable?

AI features will show a failure notice. Core features such as tasks, reviews, and journals are not affected. GranoFlow is local-first, so the essentials still work normally while offline.
