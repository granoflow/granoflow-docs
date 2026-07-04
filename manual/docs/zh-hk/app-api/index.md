---
title: App 接口總覽
description: "理解本地 HTTP API、MCP Server 和 ChatGPT Connector 的關係。"
---

App 接口不係所有人都要打開的功能。佢適合想俾 AI 工具或腳本喺明確授權下存取 Granoflow 的用戶。

## 一個真實場景

本機 AI 工具通常行本地 HTTP API 或 MCP；瀏覽器入面的 ChatGPT 需要 Connector；手機局域網連接仲要考慮地址同訪問碼。

## 本地接口的兩個檢查點

![指令列工具設定](../../screenshots/zh-hk/route-command-line-tool-settings-command-line-tool-main.png)

指令列工具設定頁係本地接口的起點。呢度可以見到本機地址、訪問碼同接口狀態；連接 AI 工具之前，先確認呢啲資料。

![訪問日誌](../../screenshots/zh-hk/route-local-http-api-access-log-settings-command-line-tool-access-log-main.png)

訪問日誌適合排查連接問題。請求能否到達、係咪被拒絕、係咪嚟自預期工具，都可以先喺呢度判斷。

## 點樣判斷下一步

| 你遇到的情況 | 先睇乜 | 下一步 |
| --- | --- | --- |
| 不知從邊度開始 | 當前頁面標題同主要入口 | 只選擇同當前目標有關的一項 |
| 操作之後結果不啱 | 狀態、空提示、訪問記錄或同步進度 | 返到上一層，按順序排查 |
| 擔心影響數據 | 備份、同步、帳號或權限說明 | 先停低，確認範圍之後再繼續 |

## 邊界

先分清楚 AI 運行喺邊度，再選擇連接方式。

## 下一步

讀完呢一節之後，返去你正在處理的任務，只揀一個最小動作繼續：記錄一項輸入、檢查一個狀態、或打開相關設定完成一次確認。
