---
title: "System tray and window"
description: "Closing the window does not quit the app — understand how the desktop tray works to avoid confusion."
---

If you closed the GranoFlow desktop window but the app still seems to be running, that is usually normal: **closing the window hides it; it does not quit the app**. To fully close GranoFlow, choose Quit or Exit from the Dock, menu bar, or system tray.

![System tray and window behavior](../../../screenshots/en/desktop-tray-window-behavior.png)

## What happens when you close the window

On macOS and Windows, clicking the window close button (×) usually just hides the GranoFlow window.

The app keeps running in the background. In other words, you no longer see the main window, but GranoFlow has not quit, and syncing continues.

This behavior lets you reopen the window faster later and keeps background syncing from being interrupted.

## How to bring the window back

If the window is hidden, you can open it again like this:

- **macOS**: click the GranoFlow icon in the menu bar
- **Windows**: click the GranoFlow icon in the system tray area of the taskbar
- **Any platform**: if you configured a global shortcut, press that shortcut to bring it back

## How to actually quit the app

If you want GranoFlow to stop running in the background, quit the app manually:

- **macOS**: right-click the GranoFlow icon in the Dock or menu bar, then choose “Quit”
- **Windows**: right-click the GranoFlow icon in the tray, then choose “Exit”

After you actually quit, GranoFlow stops running in the background, and syncing pauses until you open the app again.

:::tip[Want closing the window to quit the app?]
You can change the default close-window behavior in GranoFlow Preferences.
:::
