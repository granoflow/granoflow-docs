---
title: CLI Troubleshooting
description: "Check command-line connection failures in order."
---

When the CLI reports an error, don't start by changing the command. First confirm which layer is broken: the desktop client, the address, the access code, permissions, or the specific request.

## A Real-World Scenario

If a script shows a connection failure, first open the Granoflow desktop client and the CLI tool settings, then check the access log.

## How to Decide What to Do Next

| What you're facing | What to check first | Next step |
| --- | --- | --- |
| You don't know where to start | Current page title and main entry point | Pick only one item related to your current goal |
| The result is wrong after an action | Status, empty prompt, access records, or sync progress | Go back one level and troubleshoot in order |
| You're worried about affecting data | Backup, sync, account, or permission notes | Stop first, confirm the scope, then continue |

## Boundaries

The more stable your troubleshooting order, the less likely you are to turn a simple connection issue into a script problem.

## Troubleshooting Order

| Order | Checkpoint | Description |
| --- | --- | --- |
| 1 | Is the desktop client running? | The local interface depends on the desktop client |
| 2 | Is the address correct? | Don't mix localhost and LAN addresses |
| 3 | Is the access code correct? | Unauthorized access will block requests |
| 4 | Access log | See if the request reached the application |
| 5 | Specific command parameters | Change the script or parameters only as a last step |

## What's Next

After reading this section, go back to the task you were working on and pick just one minimal action to continue: record one input, check one status, or open the related settings to complete a confirmation.
