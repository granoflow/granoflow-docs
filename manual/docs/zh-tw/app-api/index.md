---
title: App 介面總覽
description: "了解本機 HTTP API、MCP Server 與 ChatGPT Connector 的關係。"
---

App 介面不是每個人都需要開啟的功能。它適合想讓 AI 工具或腳本在明確授權下存取 Granoflow 的使用者。

## 一個真實場景

本機 AI 工具通常走本機 HTTP API 或 MCP；瀏覽器裡的 ChatGPT 需要 Connector；手機區域網路連線還需要考慮位址與存取碼。

## 本機介面的兩個檢查點

![指令列工具設定](../../screenshots/zh-tw/route-command-line-tool-settings-command-line-tool-main.png)

指令列工具設定頁是本機介面的起點。這裡可以看到本機位址、存取碼與介面狀態；連接 AI 工具前，請先確認這些資訊。

![存取紀錄](../../screenshots/zh-tw/route-local-http-api-access-log-settings-command-line-tool-access-log-main.png)

存取紀錄適合用來排查連線問題。請求是否送達、是否被拒絕、是否來自預期工具，都可以先從這裡判斷。

## 怎麼判斷下一步

| 你遇到的情況 | 先看什麼 | 下一步 |
| --- | --- | --- |
| 不知道該從哪裡開始 | 當前頁面標題與主要入口 | 只選擇和當前目標有關的一項 |
| 操作後結果不對 | 狀態、空提示、存取記錄或同步進度 | 回到上一層，按順序排查 |
| 擔心影響資料 | 備份、同步、帳號或權限說明 | 先停下，確認範圍後再繼續 |

## 邊界

先釐清 AI 執行在哪裡，再選擇連線方式。

## 下一步

讀完這一節後，回到你正在處理的任務，只選一個最小動作繼續：記錄一筆輸入、檢查一個狀態、或開啟相關設定完成一次確認。
