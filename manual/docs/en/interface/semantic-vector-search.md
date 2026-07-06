---
title: Local Semantic Search and Vector Models
description: "Understand local semantic search, model download, precision settings, and multi-device behavior."
---

Local Semantic Search changes search from "find the same word" to "find related meaning" across tasks, projects, milestones, cards, and reusable knowledge. Once you have many records in Granoflow, the hard part is often not missing information. It is remembering the words you used when you wrote it.

Vector search is built for that situation. Granoflow turns tasks, projects, milestones, cards, reviews, and related records into local semantic information. When you add cards, search old records, or import AI-generated cards, Granoflow can surface similar content first and lay groundwork for future knowledge graph features.

## A Real-World Scenario

You once wrote a card: "Do not use the inbox as a long-term list." A few weeks later, you search for "when should temporary ideas be cleared." Ordinary search relies more on shared words. With Local Semantic Search enabled, Granoflow can treat the two as related ideas and move related records closer to the top.

The result is still only a candidate. You decide whether to link, skip, or create a new card.

## Where It Appears

| Area | When enabled | When disabled |
| --- | --- | --- |
| Adding cards from a task | Similar cards appear directly | The old keyword-based flow returns |
| Search and card management | Results are sorted with semantic similarity | Ordinary text matching is used |
| AI card import | Similar cards are previewed before writing | Semantic preview is not shown |
| Daily, weekly, and monthly reviews | Related cards can be recommended for the current review | Existing lists and entry points remain |
| Project, milestone, and tag candidates | Semantic ranking helps sort candidates | Existing ranking is used |

## Model Details

The first time you enable Local Semantic Search, Granoflow asks you to confirm the local model download. The model is not bundled with the app installer. If you are not on Wi-Fi, Granoflow asks again and shows the download size.

| Item | Details |
| --- | --- |
| Model | Google EmbeddingGemma Q8, local profile ID `local_google_embeddinggemma_q8` |
| Model source | Google EmbeddingGemma, using the LiteRT / TFLite artifact, provided under the Gemma Terms of Use |
| Model file | `embeddinggemma-300M_seq512_mixed-precision.tflite`, about 179.1 MB |
| Tokenizer file | `sentencepiece.model`, about 4.7 MB |
| Download and installed size | About 183.8 MB; keep at least 300 MB free |

::::note[Enabled only after verification]
Granoflow enables local vector search only after the model files are downloaded and verified. If verification fails, the model is not loaded.

Vector search is a powerful AI-assisted feature, but it is optional. If storage is tight on a device, you can leave it uninstalled; Granoflow will continue using ordinary search and the previous flows.
::::

## Storage Precision and Search Precision

Settings include two sliders. Storage precision decides how much information each record keeps. Search precision decides how much of that information the current device reads for ranking.

| Setting | Levels | What it does |
| --- | --- | --- |
| Storage precision | High / Fine / Best | Controls how much vector information each record stores. If a record is stored only at High, raising search precision cannot recover information that was never stored. |
| Search precision | Low / Medium / High / Fine / Best | Controls how much vector information this device reads during search. Records stored at Best can still benefit even when the current search precision is lower. |

::::tip[For multiple devices]
If you use multiple devices, keep at least one regular device at Best storage precision. When that device sees lower-precision records, it can upgrade them in the background.
::::

## Managing Downloaded Models

Downloaded models are not removed automatically just because you try another model. Granoflow leaves deletion to you.

| Action | Rule |
| --- | --- |
| Delete a downloaded model | You delete it manually in Settings |
| Delete the active model | Not allowed directly, to avoid breaking the enabled feature by accident |
| Delete the last model | Turn off vector search first, then delete the model |

## Automatic Downgrade

Granoflow evaluates device performance to choose the default storage precision, default search precision, and available levels. You can change them in Settings. If the device is under pressure, Granoflow may save a lower, safer setting. This is a real settings change, not a one-time downgrade for the current search.

If a higher search precision worked well at first but later gets downgraded, it usually means your data set has grown, not that the model is broken. The same search precision has to process more candidates as you add more records, which increases device pressure. Granoflow saves a safer setting to keep search responsive.

When this happens, Granoflow sends an internal notification with the old and new settings. If you believe the device is stable again, you can raise the setting manually.

## Privacy and Sync

Vectors are generated from text you have already stored in Granoflow. During backup, import, sync, and local API access, vector fields follow the same handling as text fields. They do not need redacted display.

Local backups do not export vectors in the first version. After import or sync, Granoflow rebuilds vectors from existing text.

## Boundaries

Best means the highest local level for the current on-device model. It does not mean the same capability as cloud Gemini models. Semantic ranking is still only ranking. If a card feels wrong, use the card content, task context, and your own judgment.

If card search ranking is often incorrect, open a GitHub issue. We may consider a suitable cloud vector API integration based on real feedback.
