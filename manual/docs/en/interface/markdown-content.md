---
title: "Rich content"
description: "Use rich content in task descriptions, project notes, reviews, and card fields; add tables, formulas, local images, remote audio, and YouTube videos."
---

GranoFlow uses a rich content editor for long-text fields. You can type normally, add line breaks, style text, insert links, and add structured content from the toolbar.

Common places include task descriptions, project or milestone notes, review records, and card fields that support rich content. The entry label may change by page, but the editor behavior stays the same.

## Open the editor

Click a supported description or content area to open the editor. The editor is WYSIWYG: type directly, select text to format it, insert objects from the toolbar, then save.

Common toolbar buttons include:

| Button | What it does |
| --- | --- |
| Table | Inserts an editable table |
| Image | Chooses a local image and inserts it as an attachment |
| Media | Inserts remote audio, video, or a third-party video link with a title |
| Formula | Opens a formula dialog with input and preview |
| Flowchart | Inserts a Mermaid flowchart definition |
| Save | Saves the content and returns to the previous page |

On wide screens, advanced tools appear above the editor. On phones or narrow screens, the editor keeps basic text tools visible so the toolbar does not crowd the writing area.

{/* manual-screenshot:id=rich-content-wysiwyg-editor */}

## Add a table

Click **Table** to insert an editable table. Click into a cell and type. Tables are useful for comparisons, step lists, source notes, and structured card knowledge.

{/* manual-screenshot:id=rich-content-table-insert */}

## Add a formula

Click **Formula** to open the formula dialog. Type LaTeX in the top area and check the preview below.

For example:

```text
\sum_{i=1}^{n} x_i = \frac{n(n+1)}{2}
```

The formula appears as an object in the editor. Click the object again to edit it. Reading pages and card practice show the formula preview instead of dumping the definition into the text.

{/* manual-screenshot:id=rich-content-formula-dialog */}

## Add a local image

Click **Image** and choose a file from your device. GranoFlow saves it as an attachment for the current content and inserts an image object.

If you want to keep an image from the web, download it first, then insert it with **Image**. The editor does not ask you to paste an external image URL.

{/* manual-screenshot:id=rich-content-local-image */}

## Add remote audio

Click **Media**, enter a direct audio link, and give it a title. GranoFlow shows it as an audio entry and waits for your click before requesting the external resource.

Common direct audio suffixes include `.mp3`, `.m4a`, `.aac`, `.wav`, and `.ogg`.

{/* manual-screenshot:id=rich-content-remote-audio-trigger */}

## Add a YouTube video

Click **Media**, paste the YouTube link, and give it a title. GranoFlow does not automatically load an embedded player in the text. It shows a video entry first; you open it when you want to watch.

If the video is private, region-limited, age-limited, or removed, playback may fail. Add a short text note near the link so the content still makes sense later.

{/* manual-screenshot:id=rich-content-youtube-video-trigger */}

## Flowcharts

Click **Flowchart** to insert a Mermaid flowchart definition. Flowcharts are useful for steps, dependencies, and simple decisions.

If a flowchart cannot render, GranoFlow shows a short fallback state and keeps an edit path. You can fix the definition, or ask AI to repair it and paste the result back.

{/* manual-screenshot:id=rich-content-mermaid-flow */}

## Remote resources

Remote audio, video, YouTube, and Vimeo links may contact an external service. GranoFlow's rule is simple: it does not load those resources before you confirm or click.

The first time you load a remote resource, you may see a confirmation dialog. If you choose not to be asked again, the choice is remembered on this device only.

{/* manual-screenshot:id=rich-content-remote-resource-setting */}

## Troubleshooting

- Table looks wrong: reopen the editor and check the cells.
- Formula does not render: click the formula object and check the LaTeX.
- Image does not show: make sure the local attachment is still available, or insert the image again.
- Audio or video does not open: check whether the link still works and does not require sign-in.
- Flowchart does not render: click the flowchart object and check the Mermaid definition.

For important content, add a sentence of plain explanation near media or flowcharts. External links can disappear; your explanation stays in GranoFlow.
