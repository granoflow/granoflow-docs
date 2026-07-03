---
title: "Rich text content"
description: "Use rich text in task descriptions, project notes, review records, and card fields. Add tables, formulas, local images, remote audio, and YouTube videos."
---

GranoFlow's long-text fields use rich text editing. You can type directly, add line breaks, bold text, insert links, or use the toolbar to add structured content.

Common locations include task descriptions, project or milestone notes, review records, and card fields that support rich text. The entry text may differ from page to page, but the editing method is consistent.

## Opening the editor

Tap the description or content area in a field that supports rich text, and you'll enter the editing page. The editor is WYSIWYG by default: you type directly in the body, select text to bold or italicize, insert links, and when you save and reopen, it will still display as rich text.

The common buttons at the top include:

| Button | Use |
| --- | --- |
| Table | Insert an editable table |
| Image | Select an image from your device and insert it as an attachment |
| Media | Insert a remote audio, video, or third-party video link, and optionally add a title |
| Formula | Open a formula editing popup; enter the formula at the top and preview the result below |
| Flowchart | Insert a Mermaid flowchart definition |
| Save | Save the content and return to the previous page |

On wide screens, advanced tool buttons appear above the editing area; on phones or narrow screens, the editor keeps basic text tools to avoid the toolbar taking up body space.

<!-- manual-screenshot-needed:id=rich-content-wysiwyg-editor; reason=Display the WYSIWYG editor, rich text toolbar, and save button -->

## Adding a table

Tap the "Table" toolbar button; GranoFlow inserts an editable table. After insertion, tap directly into a cell to enter text; press Enter for a new line, and the input stays within the current cell or body.

Tables are good for comparisons, steps, reference lists, and structured knowledge in study cards. After saving, the table will still display and be editable as a table when reopened.

<!-- manual-screenshot-needed:id=rich-content-table-insert; reason=Display editable table cells and the appearance after saving -->

## Adding a formula

Tap "Formula" to open a dedicated popup. In the upper area, enter a LaTeX formula; below, see a live preview. After confirming, the formula is inserted as an object into the body.

For example, you can enter:

```text
\sum_{i=1}^{n} x_i = \frac{n(n+1)}{2}
```

The formula object displays as a preview block in the editing area. To edit, tap the formula object to reopen the popup. Formula content is saved with the field; study cards and reading pages show the formula preview rather than spreading the raw definition in the body.

<!-- manual-screenshot-needed:id=rich-content-formula-dialog; reason=Display formula input area, preview area, and formula object in body -->

## Adding a local image

Tap "Image", then select an image from your device. GranoFlow saves the image as an attachment for the current content and inserts an image object in the body.

The image title is used for description and fallback placeholder. If the image file is missing, fails to decode, or is temporarily unreadable, the page shows a short placeholder; it does not spread the full local path in the body.

If you want to save an image from a web page, first download it to your device, then insert it via the "Image" button.

<!-- manual-screenshot-needed:id=rich-content-local-image; reason=Display local image selection, body preview, and failure placeholder -->

## Adding remote audio

Tap "Media", then select or enter an audio link, and give it a title. When rendered, an audio entry appears; tap it to open or play the audio. The page does not automatically request external sites before you tap.

Currently recognized common audio extensions include `.mp3`, `.m4a`, `.aac`, `.wav`, `.ogg`. If the link is not a direct audio file but a playback web page, it may only be opened as a regular web page.

<!-- manual-screenshot-needed:id=rich-content-remote-audio-trigger; reason=Display remote audio title, trigger, and confirmation before clicking -->

## Adding a YouTube video

Tap "Media", enter a YouTube link, and give it a title. GranoFlow does not automatically load third‑party players in the body; the video appears as an entry, and you tap it to open the external page or player.

Videos that require login, are region‑restricted, age‑restricted, or have been removed cannot be guaranteed to play. We recommend writing the video's content clearly in the title or body, so that if the external link becomes invalid, the original meaning is still evident.

<!-- manual-screenshot-needed:id=rich-content-youtube-video-trigger; reason=Display YouTube title, trigger, and remote resource confirmation -->

## Flowchart

Tap "Flowchart" to insert a Mermaid flowchart definition. After saving, the body and card study page show the flowchart preview. Flowcharts are good for expressing steps, dependencies, and simple decision paths.

Mermaid is sensitive to indentation, arrows, and node characters. If a flowchart fails to render, GranoFlow shows a brief failure state. To edit, return to the editing page, tap the flowchart object, adjust the definition, and save again; you can also hand the flowchart definition over to AI for repairs and paste it back.

<!-- manual-screenshot-needed:id=rich-content-mermaid-flow; reason=Display flowchart object, inline preview, and edit entry -->

## Remote resource confirmation and settings

Remote audio, video, YouTube, or Vimeo links may all make requests to external services. GranoFlow's principle: without confirmation or a tap, do not automatically load remote content.

When you first tap or load a remote resource, you'll see a confirmation popup. After checking "Don't ask again", the current device remembers this choice. This setting only affects the current device; it does not change your tasks, projects, reviews, or card content.

To make the confirmation popup appear again, go to Settings → Pro Settings, find "Warn before loading remote Markdown resources", and change it back to require a warning. When the switch is off, remote images, audio, and video will load directly within allowed limits; when you turn it back on, you'll be asked again before loading remote resources.

<!-- manual-screenshot-needed:id=rich-content-remote-resource-setting; reason=Display the remote rich-text resource warning switch on the Settings page -->

## Troubleshooting display issues

If content doesn't display correctly, return to the editing page and check the corresponding object:

- Table not showing: Confirm the table still has headers and cell content.
- Formula not showing: Tap the formula object and check if the LaTeX input is complete.
- Image not showing: Confirm the local attachment is still readable, or re‑insert the image.
- Audio or video won't play: Confirm the link is still accessible and doesn't require additional login.
- YouTube won't play: Confirm the video hasn't been removed, is not region‑restricted, and doesn't require login.
- Flowchart not showing: Return to the editing page, tap the flowchart object, and check if the Mermaid definition is complete.

If content is important, add a line of text description next to the media or flowchart. External media may become invalid, but the text description will remain in GranoFlow.
