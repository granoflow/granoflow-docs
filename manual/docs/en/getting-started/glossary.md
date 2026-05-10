---
title: "Core concepts"
description: "Core concepts: common terms for life structure, working rhythm, AI assistance, data safety, account benefits, and device interfaces, with how they appear in GranoFlow."
translationSource: zh-CN
translationReview:
  - ux-writing
  - product-frontend-design
---

This glossary explains the words GranoFlow uses for life structure, goal planning, values-based planning, projects, milestones, tasks, local-first privacy, and AI-assisted reflection. Use it when a term in the manual sounds like a normal productivity word but has a more specific product boundary.

## Life structure

### Area

An area is how GranoFlow groups your life investment, such as work and study, physical and mental health, and relationships.

In the product, areas appear in area management, project editing, daily reviews, and progress statistics. You can choose an area for a project, and you can see which area completed tasks belong to in review pages. If older data uses non-standard area tags, the system tries to map them to standard areas; anything it cannot map appears under other areas.

### Values

Values are the standards you want to keep practicing within an area.

In the product, values are not tasks, and they do not automatically mark anything as complete. They are mainly used in area management, daily reviews, and weekly reviews. You can save multiple values for each area, then compare your recent actions against them when reviewing today or the week.

### Project

A project is a container for a goal that keeps moving forward over a period of time.

In the product, projects appear on the project page, task details, inbox organization, daily reviews, and AI project packs. Tasks can be added to projects and milestones. Once a task in the inbox is added to a project, it leaves the inbox. Projects can also be archived, completed, or deleted, but if they still contain active milestones or tasks, the system asks you to confirm how those child items should be handled.

### Milestone

A milestone is a stage inside a project, used to break a project into trackable phases.

In the product, a milestone belongs to a project, and tasks added to a project usually need to land in a specific milestone. Milestones can show progress, hold task drafts, and be completed or archived. If a milestone still has unfinished tasks, the system blocks you from treating that stage as already finished.

### Task

A task is GranoFlow's basic unit of action.

In the product, a task can have a title, due date, reminder, tags, project, milestone, description, and execution status. It can be pending, doing, completed, archived, in trash, and so on. Completion records a completion time, and archiving records an archive time. Daily reviews care about when the task was actually completed, not when it was originally due.

### Node

A node is a step inside a task.

In the product, task details let you break a larger task into multiple nodes and continue adding child nodes. Nodes have their own completion state. When a task has nodes, GranoFlow derives partial or completed display states from node progress, and can automatically complete the parent task when all valid nodes are done.

### Inbox

The inbox is a temporary processing area for unplanned items, not a real folder.

In the product, only tasks with no due date, no project, no milestone, and a pending or doing status appear in the inbox. You can quickly capture ideas there, then organize them out through date, reminder, add to project, and tag controls. Once a task gets a date or joins a project, it no longer belongs in the inbox.

## Working rhythm

### Planning

Planning is the process of turning an idea into something executable.

In the product, planning usually happens in quick add, inbox organization, task details, and project pages. You can add dates, reminders, tags, projects, and milestones to tasks, or convert an inbox task into a project. The `#`, `@`, and `~` tokens in the input box are shortcuts only; tags, projects, or reminders are written only after explicit confirmation and task-write validation.

### Execution

Execution is real progress on a task or node.

In the product, tasks can enter a doing state and work with focus timers, pinned tasks, and background audio. GranoFlow maintains the relationship between doing tasks, focus sessions, and completion times. When you complete a task, related focus sessions are closed first, then the task is marked complete, so review statistics do not get confused time ranges.

### Completion

Completion means a task or node has been handled.

In the product, completion is more than ticking a checkbox. A completed task records a completion time and feeds daily reviews, home statistics, and busy-time projections. If you undo completion, the system clears the corresponding completion time. When all nodes are complete, the parent task may be completed automatically; when a new unfinished node is added or restored, the parent task returns to pending.

### Archive

Archiving means an item has been sealed away from the current workflow.

In the product, archived tasks or milestones leave current lists for archive views and carry an archive time. Archiving projects, milestones, and tasks triggers protective rules: the system asks how child items should be handled, so you do not accidentally treat still-active work as history.

### Daily review

A daily review is the page for seeing what was actually completed and invested on a business day.

In the product, daily reviews are counted by task completion time, not due date. Tasks completed before 3 a.m. still belong to the previous business day. The page shows completed tasks, a timeline, area grouping, invested time, and journal records. Dates with no completed tasks show a quiet empty state instead of empty charts, and date navigation tries to skip long runs of blank days.

### Retrospective

A retrospective is looking back over tasks, projects, and value performance across a period of time.

In the product, a retrospective is not just a paragraph of text. GranoFlow summarizes completed tasks, focus sessions, project progress, area investment, and value records into daily reviews, weekly reviews, monthly details, and related views. The point is to see real investment, stage progress, and reasons for drift, not only completion counts.

## AI assistance

### AI assistant

An AI assistant is the external AI tool you choose, such as ChatGPT, Claude, Gemini, DeepSeek, or a custom assistant.

In the product, GranoFlow does not include a black-box AI that directly changes your data. It prepares prompts, copies them to the clipboard, and tries to open the external AI. If opening fails, the prompt still remains on the clipboard so you can paste it manually into any tool.

### Prompt

A prompt is the instruction text GranoFlow gives to an external AI.

In the product, prompts explain what the AI should ask, organize, and output. Some prompts must keep a specific structure or JSON output requirement; otherwise GranoFlow may not recognize the result when it comes back. You can edit templates, but the system prevents empty or structurally broken templates from being saved.

### Clipboard return

Clipboard return is the flow where you copy results generated by an external AI tool back into GranoFlow, then let GranoFlow recognize and import them.

In the product, AI replies are never written into tasks or reviews silently. After you copy an AI result back to GranoFlow, the system recognizes the format and shows a confirmation dialog. Only after you confirm will it import work or study reports, task drafts, values, and similar content. Content you dismissed or already imported will not keep popping up again.

### Values prompt

A values prompt is a template designed to guide AI in clarifying areas and values.

In the product, it is usually used from area management or settings. You can ask an external AI to question you through this template and help you write values that fit you better. If you break the template, the system falls back to the default template or refuses to save a version missing required structure.

## Data and safety

### Local-first

Local-first means GranoFlow's core data is available on your device first.

In the product, tasks, projects, reviews, and many core features do not require a server connection every time. This keeps recording and organizing available offline, and keeps local search and review faster. Note that the local database mainly relies on the operating system sandbox; data enters the encryption boundary when it leaves the device for cloud sync or backup files.

### Cloud sync

Cloud sync aligns data on this device with cloud sync assets.

In the product, syncing checks the account, membership state, protocol version, cloud state, and encryption key first. Members can upload and sync. Signed-in non-members may keep a one-time download recovery entry when historical cloud data exists. Sync is not a simple overwrite: when the system detects key, version, or cloud reset mismatches, it blocks first and guides recovery.

### Multi-device sync

Multi-device sync keeps phones, computers, and other devices aligned through the cloud.

In the product, when a newly installed empty device joins existing cloud sync, GranoFlow asks for the original cloud sync key. After verification succeeds, it adopts cloud data instead of using that empty device to overwrite the cloud. A clearer source choice or device-join choice appears only when the device already has real local data, after a backup import, or when an old device is resyncing.

### End-to-end encryption

End-to-end encryption (E2EE) means data is encrypted before it leaves your device, and the cloud mainly stores encrypted content.

In the product, the boundary is specific: local use and search prioritize speed, while backups, cloud upload, and remote attachments enter encryption flows. Servers should not directly read your plaintext task content. If the key changes or the cloud state is abnormal, the system pauses sync instead of continuing to write data that may become unreadable.

### Key

A key means the end-to-end encryption key. It is the critical credential that unlocks backup and cloud-encrypted data, not your login password.

In the product, the encryption key uses a fixed format, and common prompts remind you to copy and save it. Before changing the key, the system asks you to confirm that you have saved the new one. Old backups or old cloud data may still require the old key. If the key is lost, the server cannot magically decrypt encrypted data for you.

### Key recovery

Key recovery is the flow for rescuing data when the device, cloud, and key state do not match.

In the product, the recovery page lets you choose local data as the source of truth or cloud data as the source of truth depending on the situation. Choosing local usually rebuilds or clears cloud sync data and requires system authentication. Choosing cloud requires the current cloud key, downloads data, and tries to migrate local attachments. This is a data-safety brake, not a universal back door.

### Backup

A backup exports data from the current device as a `.flow.grano` backup package.

In the product, backups are protected by the end-to-end encryption key and try to check sync state before export. A backup package is not a normal text file; opening it in a text editor will not show task content. If attachments have not been downloaded to this device, the backup may be incomplete. In membership scenarios, the system prompts you to enable or confirm full attachment sync first.

### Restore

Restore imports a `.flow.grano` backup package back into GranoFlow.

In the product, restoring requires the encryption key saved when that backup was created. The system checks backup version, core data files, and attachment integrity. Missing core data blocks import; missing attachments may still let you import text records, but the missing images or PDFs cannot be opened. After import, syncing again may require handling the relationship between cloud and local data.

### Attachment

An attachment is a file attached to a record, but support differs by object type.

In the product, projects can use generic attachments, milestones mainly support PDFs, and tasks are not generic attachment containers. Attachments are stored in local encrypted cache and use controlled capabilities when uploaded to the cloud. PDFs can be previewed inside the app, while other files usually open through external apps. Generic attachments have a per-file size limit, and GranoFlow is not unlimited cloud storage.

### App lock

App lock adds a local verification layer when you open or return to the app.

In the product, it reduces the risk of someone briefly holding your device and immediately browsing your content. It does not replace system lock screen, device encryption, operating system permissions, or malware protection. If the device itself is already compromised, App lock cannot provide complete protection.

## Accounts and benefits

### Account

An account is used for login, sync, device management, subscription recognition, and account recovery features.

In the product, the current public login path is email verification code. Without signing in, you can still use some local capabilities, but the cloud sync entry shows a login guide and does not trigger upload or download. The account page shows the current account, this device, remote devices, deletion requests, and confirmations for risky actions.

### Membership

Membership means the account has an official paid primary entitlement, such as Pro or Angel membership.

In the product, membership state is not decided by the client itself. The client reads the official server entitlement projection, then decides whether cloud sync, capacity, attachment redownload, and certain customization features are available. Old local cache or temporary payment SDK state cannot unlock official membership gates by itself.

### Subscription

A subscription is the purchase relationship recorded by payment channels such as Apple, Google, or Stripe.

In the product, different platforms may use different product IDs, but they eventually project into unified products and entitlements, such as yearly Pro, Angel membership, and storage packages. Services such as RevenueCat connect store events with account state. If a purchase is connected to another GranoFlow account, the current account does not automatically receive that entitlement.

### Benefit

A benefit is a capability the current account can actually use after server confirmation.

In the product, benefits affect sync upload, storage quota, remote attachment redownload, subscription page button states, and some member settings. A benefit is not the raw record of having bought something on a platform. It is the result of projecting payment events through account ownership, refunds, revocations, expiration, and quota state.

## Interface and devices

### Desktop

Desktop refers to computer versions such as Windows, macOS, and Linux.

In the product, desktop is better suited to long organizing sessions, project management, batch editing, and reviews. Wide screens commonly use left navigation or lists with details on the right. When the window gets narrow, navigation and details adjust to narrow-screen rules, avoiding stale task details remaining on the right after the task has disappeared from the list.

### Mobile

Mobile refers to the iOS and Android versions.

In the product, mobile is better suited to quick capture, checking today's tasks, adding daily review notes, and catching thoughts on the go. The mobile task input reduces shortcut-prefix hints and prioritizes ordinary input plus explicit buttons. Some background capabilities are also affected by system limits; for example, after iOS suspends the app, you may need to reopen GranoFlow to continue backup or sync.

### System tray

The system tray is a persistent entry point in the corner of a desktop system.

On supported platforms, clicking the window close button may only hide GranoFlow to the tray. The program keeps running in the background, so focus timers and pinned tasks are not interrupted by accidentally closing the window. To fully quit, use Quit from the tray menu.

### Sidebar mode

Sidebar mode is a narrow desktop window shape.

In the product, it is useful when docked near the side of the screen so you can work while viewing or checking off tasks. Sidebar mode can work with always-on-top and opacity. When the window gains focus it becomes clear, and when it loses focus it returns to the configured transparency, so text stays readable when you are actually entering or reviewing content.
