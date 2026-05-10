---
title: "Redaction terms"
description: "Maintain sensitive terms that are replaced before sending to external AI, and understand redact, allow, visible cloud sync, and encrypted cloud sync."
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
  - plan-eng-review
---

Redaction terms maintain mappings between fixed sensitive text and replacement tokens. When you use an AI feature, GranoFlow replaces terms set to “Redact” inside allowed content fields before handing the content to an external AI tool.

This page only affects content preparation for external AI and restoration on return. It does not delete original text from tasks, projects, reviews, or attachments.

## Where To Enter

Open “Redaction terms” from AI-related settings. If the page shows a membership prompt, the current account may not be able to edit redaction terms; review existing terms according to the page state.

Good candidates include client names, company names, project codenames, internal product names, fixed emails, fixed addresses, or other text you often do not want to send directly to external AI.

## Adding And Editing Terms

When adding a term, enter the sensitive term and its redaction token. Keep the token easy to recognize, such as a short client, project, or company placeholder, so AI responses are more likely to preserve it.

<!-- manual-screenshot:id=ai-redaction-terms-settings -->
![Redaction terms screen](../../../screenshots/en/ai-redaction-terms-settings.png)

When editing, you usually change the token, not turn an old term into a different sensitive term. Deleting a term removes that mapping; future AI requests no longer replace text through that mapping.

## Redact, Allow, And Cloud State

Each term has two separate choices:

- “Redact”: replace the term with its token before sending to AI, then try to restore it in allowed fields on return.
- “No redact”: do not replace this term on outbound content, while keeping it as part of discovery and policy records.
- “Visible” cloud sync: allowed terms may sync in visible form so multiple devices can share the policy.
- “Encrypted” cloud sync: the original term syncs in encrypted form, which is better when you do not want the term text to be visible.

If a sensitive term should not be sent to external AI, keep it as “Redact.” Changing it to “No redact” leaves the original text in matching AI requests.

## Automatic Discovery And Limits

When AI redaction is enabled, GranoFlow can use category defaults to detect emails, phones, links, tokens, IP addresses, paths, money, and similar content, then add them to the term list or use them for the current replacement.

Automatic discovery is rule-based help, not human review. It may miss variants, abbreviations, content in screenshots, or unusual writing, and it may flag ordinary text. Review the content before sending it to AI.

Redaction and restoration only apply to content fields declared by the current feature. They do not scan the whole local database and cannot guarantee that the external AI will preserve tokens, understand them correctly, or delete information it has received.

## Next Step

To understand the overall data scope of AI features, read “What may be sent to AI.” If you are worried about AI results changing tasks, read “Why changes need confirmation.”
