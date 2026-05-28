---
title: "Search"
description: "Use search to find existing tasks, task nodes, projects, milestones, daily reviews, weekly reviews, and monthly reviews quickly, and understand where results can take you and what search cannot replace."
translationSource: zh-CN
translationReview:
  - manual-usefulness-review
  - ux-writing
---

If you remember one or two words from a task, task node, project, milestone, daily review, weekly review, or monthly review but cannot remember where it is, use search to find and open it. Search is for finding existing content. It is not a full check, and it does not organize tasks or projects for you.

## Where To Enter

Open the search page from the search entry on the home or main interface. After it opens, type a specific keyword in the input box, such as a few consecutive words from a task title, task node title, project description, milestone summary, or review note, then review the result list below.

You can also add structured conditions to the search text:

- Type `#tag` to show tasks with that tag. You can use a system tag label or an existing custom tag name, such as `#Important`, `#Urgent`, `#Work-Learning`, or `#Home`.
- Type `@project` to show tasks in that project. Use the full project name, or a partial name that points to one project clearly.
- Combine normal keywords with structured conditions, such as `draft #Important @Product Refresh`.

<!-- manual-screenshot:id=interface-search-main -->
![Search screen](../../../screenshots/en/interface-search-main.png)

For plain keywords, the page asks you to keep typing when the keyword is too short. A structured condition like `#tag` or `@project` can search on its own, without first reaching three characters.

If there are no results, it only means no matching item was found in the current searchable scope. It can also mean the tag name or project name did not match an existing object. It does not mean GranoFlow has checked every attachment, deleted item, or historical record outside the searchable scope.

## Using Results

Search results are grouped by type, and only groups with results are shown. The group order is tasks, projects, milestones, daily reviews, weekly reviews, and monthly reviews. When task nodes match, search does not show a separate node group. Instead, it shows the owning task once and lists the matching nodes under that task result. This keeps the match reason visible while preserving the task it belongs to.

Task results show the title, update date, and matching text. When several nodes, the task description, or the task review match at the same time, the task result shows short matching excerpts under the same row. If the task title itself matches directly, the result only shows the task title and basic information, without expanding description, review, or node content.

When you open a task result, GranoFlow takes you to the task's current location. It may be in the inbox, task list, completed list, archive, or trash. Project and milestone results open their project context. Review results open the achievements and review area and try to land on the matching day or week.

If the result belongs to a project, you still need to use the task or project page to judge which stage it belongs to, which milestone it relates to, and whether its date still makes sense.

## When To Use It

- You remember part of a task, task node, project, milestone, daily review, weekly review, or monthly review text, but not where it is.
- You want to quickly open a completed or archived task.
- Before organizing the inbox, a project, or a review, you want to find an older task first.

Search does not create tasks, create tags or projects, bulk-edit search results, or save itself as an automatic filtered view. If you need to browse tasks by tag, project, date, or completion state over time, keep using the relevant list or project page.
