# Manual I18n Review Summary

## Chinese Truth Source

- Source: `manual/README.zh-CN.md`
- Approval: `manual-zh-approval-review` returned `approved`
- Screenshot plan: `manual/final-manual-screenshot-plan.json`

## Locales

- EN: `manual/README.md`
- zh-HK: `manual/README.zh-HK.md`
- zh-TW: `manual/README.zh-TW.md`

## Translation Notes

- `GranoFlow` and screenshot IDs were not translated.
- Image filenames remain `<id>.png`.
- Locale image directories were changed only by locale segment:
  - `zh-cn`
  - `en`
  - `zh-hk`
  - `zh-tw`
- No run folder, timestamped candidate, or temporary screenshot path is referenced by the manuals.
- No medical, diagnosis, therapy, legal, compliance, or outcome-guarantee wording was introduced.

## Screenshot Recapture

Target locale screenshots must be generated from `manual/final-manual-screenshot-plan.json` and reviewed before publication:

- en
- zh-HK
- zh-TW

zh-CN screenshots are already captured and reviewed.
