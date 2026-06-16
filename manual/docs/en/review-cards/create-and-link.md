---
title: "Create and Link Cards"
description: "Create cards from tasks and reviews, understand the relationship between notes, card layout, task association, and AI draft confirmation."
translationSource: zh-CN
translationReview:
  - deepseek-flash
  - deepseek-pro
  - manual-multilingual-translation
---

When creating a card, the most important thing is not to first think "how many cards should I make", but rather "where does this insight come from, and where should it go back to in the future".

In GranoFlow, cards usually enter from a task context. This has an advantage: you are not creating knowledge from scratch in a blank page, but rather organizing insights next to a task that has already happened. The task provides the source, the card stores a reusable judgment, and the association allows that judgment to return to similar tasks later.

## Don’t Aim for a Complete Card Library from the Start

Many people, when first using a card system, want to build a complete knowledge base upfront: categories, templates, tags, imports, batch organization—all set up.

But insights that truly endure rarely come that way. They come more like a realization after you finish something:

> This insight will definitely be used again.

Creating a card at that moment is far more valuable than importing hundreds all at once. Because it knows its source, and it knows why it exists.

## Core Concept: Note First, Card Face Second

GranoFlow now separates "notes" from "card layout".

The note page stores the full context: title, content, translation, and custom fields. The card layout page determines how those note fields appear on the front and back. You can think of it this way: the note keeps the context, and the card handles the practice format.

Multiple cards can exist under the same note. For example, the same "interview question design" note can have one card that asks about principles, and another card that asks for examples. They share the same note, but each card has its own front-back arrangement.

This separation is important. It prevents you from duplicating an entire note just to make a second related card, and it allows you to return to the same note later for further expansion.

## A Real Task Example

Suppose you completed the task "Read a paper on usability testing". During the review, you discover an insight you’ll reuse often:

> Test questions should require users to perform real actions, not just ask users to evaluate the interface.

You can start from the "task cards" area in the task details:

1. Click "Add card" to enter the "Link cards" page.
2. First search for existing cards to see if the same insight already exists.
3. If no suitable result, select "Add card".
4. On the note page, fill in the title, for example "Usability testing should observe real actions".
5. After filling the title, the other fields unlock; continue filling in the content.
6. Go to the card layout page and arrange the note fields to the front and back.
7. After finishing the layout, return to the note page; the card will be linked to the current task.

The note page automatically saves the field content. When saved successfully, a brief "Saved" indicator appears next to the title. You don’t need to look for a separate "Save note" button.

## What Happens When Adding Manually

Manually adding a card goes through two main pages:

1. **Note page**: First fill in the title; once the title is non-empty, the other fields unlock; field content is saved automatically.
2. **Card layout page**: Choose which fields appear on the front and which on the back.

If there are no cards yet under this note, the footer shows "Create card". If there are already cards, the footer shows "Add another card", allowing you to continue making another card for the same note.

"Cards under this note" are displayed as a grid of front-face thumbnails, and each thumbnail tries to scale the current side fully into the card. Click a thumbnail to switch it to the back in place; click again to switch back to the front. In the advanced options, you can add a title translation, content translation, and custom fields.

The source is automatically written into the current task name when the title is first saved, but it doesn’t interrupt you on the note page; during review, it appears in a lighter style at the bottom of the card back, reminding you where this card came from.

<!-- manual-screenshot:id=review-card-study-answer -->
![Screenshot of the card practice answer interface](../../../screenshots/en/review-card-study-answer.png)

## Linking Existing Cards

You don’t have to create a new card every time.

If you already have relevant cards, you can search first on the "Link cards" page. The page shows how many cards are already linked to the current task and excludes cards already confirmed as linked, so you don’t accidentally link the same cards twice. Open a result to see its cards in a two-column thumbnail grid; open the same result again to collapse the panel. Active cards show their front side with a highlighted border by default. Archived cards show their back side with muted styling. Click a card to flip it between front and back, which decides whether that card will be active or archived after linking. The bottom summary shows how many cards will be linked, how many will be active, and how many will be archived; after you click "Link", the panel closes, that result leaves the pending list, and the linked-card count increases by the number of active cards.

Linking an existing card is suitable when:

- The current task is using an insight you summarized before.
- You find a card that is highly relevant to this task.
- You want this card to later reflect its usage across different tasks.

This step may seem simple, but it affects the "internalized" judgment. The system only classifies a card as internalized when it sees that a mastered card has been brought back to tasks in multiple different projects.

## Using the Task AI Assistant to Draft Cards

The task AI assistant is suitable for turning task analysis or review into reusable card drafts. It does not silently create cards.

AI first confirms its task understanding, source basis, and candidate card direction with you in natural language. Only after you explicitly agree and confirm the import does GranoFlow create the note, card layout, and link to the current task.

Here it’s important to remember a boundary: AI can help you draft, but it cannot judge for you whether this insight is truly worth keeping. The confirmation step is for that purpose. If you see something that sounds good but will not be useful later, ask AI not to import it; if the direction is useful but the wording is off, ask AI to revise it before confirming.

## How the Task Cards Area Displays

The "task cards" area in the task details groups multiple cards under the same note. Unarchived cards appear before archived cards; archived cards can still be opened from the task context, but appear in a more subdued state.

You can click a single card to enter layout editing. In the task details, swipe right on a card to archive or unarchive it; swipe left to unlink it from the current task. Unlinking does not delete the card, nor does it affect its relationships with other tasks. If the same note has multiple card variants, GranoFlow unlinks that whole note from the current task and warns you about the affected range when needed.

In daily, weekly, and monthly reviews, task cards reuse a similar list, but because the context there is not a single task, swiping left moves the card to the trash instead of unlinking it from the current task.

## When Not to Create a Card

If a piece of content is only about the day’s emotion, a temporary arrangement, or a fact that will never be used again, do not force it into a card.

For example, "Meeting at 3 PM today" is not suitable for a card; "Before an important meeting, first confirm whether the decision maker is present" might be suitable. The former is one‑time information, the latter is a reusable judgment.

The next chapter continues: after a card is created, how to use practice, archiving, mastery, and internalization to make sure it doesn’t just stay in the system but actually returns to your actions.
