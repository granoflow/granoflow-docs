---
title: "Troubleshooting"
description: "When cards, sync, screenshots, or data look wrong, preserve evidence before changing state."
docType: "How-to"
readerGoal: "After reading, know the entry point, main state, next step, and boundary."
sources:
  - "granoflow-docs/manual/final-manual-screenshot-plan.json"
  - "docs-temp/plans/73-granoflow-manual-rewrite-screenshot-i18n-publish-v02.md"
---

When troubleshooting, preserve evidence before changing state. Screenshots, sync, recovery, and card queues can all depend on locale, seed data, login state, window state, and database readiness.

If a page is mostly blank and shows only one line such as `Bad state`, `Exception`, or `database closed`, it is not a normal page and must not enter the manual. Record route, locale, seed, and action path, then restart or rebuild the screenshot environment.

## Where to start

Start from the sidebar, settings, or the current workflow entry point instead of relying on an old remembered path.

## How to use it

1. Confirm that the current page is the right entry point for the workflow.
2. Do the smallest useful action first, then observe how the page changes.
3. Move durable judgment back into tasks, projects, reflection, or cards.

## Screenshot evidence

The screenshots below confirm the entry point and main state for this page.

## What changes

After this page, you should know which page you are looking at, whether the state looks normal, and which neighboring workflow comes next.

## Boundary

Do not treat screenshots as feature guarantees. They prove the visible state for current macOS, dark theme, landscape, and test seed data. Account, subscription, sync, AI, and external-tool pages still depend on your permissions and local state.

## Next step

When this page makes sense, continue with: [Manual home](../)
