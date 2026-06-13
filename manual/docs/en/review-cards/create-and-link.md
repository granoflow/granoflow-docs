---
title: "Create and Link Cards"
description: "Create cards from tasks and reviews, understand the relationship between card data, card layout, task association, and AI draft confirmation."
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

## Core Concept: Data First, Card Face Second

GranoFlow now separates "card data" from "card layout".

The card data page stores the knowledge point itself—title, content, translation, and custom fields. The card layout page determines how those data fields appear on the front and back. You can think of it as: data is the raw material, layout is the questioning method.

Multiple cards can exist under the same data. For example, the same "interview question design" data can have one card that asks about principles, and another card that asks for examples. They share the same data, but each card has its own front-back arrangement.

This separation is important. It prevents you from duplicating an entire data set just to make a second related card, and it allows you to return to the same data point later for further expansion.

## A Real Task Example

Suppose you completed the task "Read a paper on usability testing". During the review, you discover an insight you’ll reuse often:

> Test questions should require users to perform real actions, not just ask users to evaluate the interface.

You can start from the "task cards" area in the task details:

1. Click "Add card" to enter the "Link cards" page.
2. First search for existing cards to see if the same insight already exists.
3. If no suitable result, select "Add card".
4. On the card data page, fill in the title, for example "Usability testing should observe real actions".
5. After filling the title, the other fields unlock; continue filling in the content.
6. Go to the card layout page and arrange the data fields to the front and back.
7. After finishing the layout, return to the card data page—the card will be linked to the current task.

The card data page automatically saves the field content. When saved successfully, a brief "Saved" indicator appears next to the title. You don’t need to look for a separate "Save data" button.

## What Happens When Adding Manually

Manually adding a card goes through two main pages:

1. **Card data page**: First fill in the title; once the title is non‑empty, the other fields unlock; field content is saved automatically.
2. **Card layout page**: Choose which fields appear on the front and which on the back.

If there are no cards yet under this data, the footer shows "Create card". If there are already cards, the footer shows "Add another card", allowing you to continue making another card for the same data.

"Cards under this data" are displayed as a grid of front‑face thumbnails. Click a thumbnail to preview the front and back before entering layout editing. In the advanced options, you can add a title translation, content translation, and custom fields.

The source is automatically written into the current task name when the title is first saved, but it doesn’t interrupt you on the card data page; during review, it appears in a lighter style at the bottom of the card back, reminding you where this card came from.

<!-- manual-screenshot:id=review-card-study-answer -->
![Screenshot of the card practice answer interface](../../../screenshots/en/review-card-study-answer.png)

## Linking Existing Cards

You don’t have to create a new card every time.

If you already have a relevant card, you can search first on the "Link cards" page. The page excludes cards already confirmed as linked to the current task, so you don’t accidentally link the same card twice.

Linking an existing card is suitable when:

- The current task is using an insight you summarized before.
- You find a card that is highly relevant to this task.
- You want this card to later reflect its usage across different tasks.

This step may seem simple, but it affects the "internalized" judgment. The system only classifies a card as internalized when it sees that a mastered card has been brought back to tasks in multiple different projects.

## Using AI to Add Cards

"AI add card" is suitable for turning task materials into card drafts, but it does not silently create cards.

After AI returns, it first enters an in‑app candidate preview. You can edit, delete, and then confirm the import in the preview. Only after you confirm does GranoFlow create the card data, card layout, and link to the current task.

Here it’s important to remember a boundary: AI can help you draft, but it cannot judge for you whether this insight is truly worth keeping. The preview phase is for that purpose. If you see something that sounds good but won't be useful later, delete it; if you see something that’s imprecisely expressed but the direction is useful, edit it before importing.

## How the Task Cards Area Displays

The "task cards" area in the task details groups multiple cards under the same data set. Unarchived cards appear before archived cards; archived cards can still be opened from the task context, but appear in a more subdued state.

You can click a single card to enter layout editing. In the task details, swipe right on a card to archive or unarchive it; swipe left to unlink it from the current task. Unlinking only affects the relationship between the current task and this card—it does not delete the card, nor does it affect its relationships with other tasks.

In daily, weekly, and monthly reviews, task cards reuse a similar list, but because the context there is not a single task, swiping left moves the card to the trash instead of unlinking it from the current task.

## When Not to Create a Card

If a piece of content is only about the day’s emotion, a temporary arrangement, or a fact that will never be used again, do not force it into a card.

For example, "Meeting at 3 PM today" is not suitable for a card; "Before an important meeting, first confirm whether the decision maker is present" might be suitable. The former is one‑time information, the latter is a reusable judgment.

The next chapter continues: after a card is created, how to use practice, archiving, mastery, and internalization to make sure it doesn’t just stay in the system but actually returns to your actions.
