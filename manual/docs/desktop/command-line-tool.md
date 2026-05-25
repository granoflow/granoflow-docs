---
title: "命令行工具"
description: "用 7 页结构理解 GranoFlow CLI：工作原理、安全边界、命令参考、工作流、JSON 自动化与排障。"
---

`granoflow` 是面向最终用户的桌面 CLI。请把它理解成**本机命令行入口**，不是开发构建工具，也不是云端运维入口。

## 先看这个导航

- 想先理解边界：读 [CLI 如何工作](/manual/desktop/cli-how-it-works/)
- 想确认 token、本地访问、App Lock、密钥区别：读 [CLI 安全设置与密钥边界](/manual/desktop/cli-security-and-settings/)
- 想查完整命令和参数：读 [CLI 命令参考](/manual/desktop/cli-command-reference/)
- 想按真实场景走流程：读 [CLI 工作流](/manual/desktop/cli-workflows/)
- 想给脚本或 AI 助手用：读 [JSON 与脚本调用](/manual/desktop/cli-json-and-scripting/)
- 遇到报错：读 [CLI 排障](/manual/desktop/cli-troubleshooting/)

## 安装与首次检查

在 macOS 上，先把 GranoFlow 拖入「应用程序」，再在 App 的「命令行工具」设置页点「安装命令行工具」或「修复命令行工具」。首次安装时，macOS 可能要求你在「系统设置 → 通用 → 登录项目」中允许「Granoflow 后台项目」；批准后再次点击安装，App 即可创建 `/usr/local/bin/granoflow` 符号链接，后续修复或重装通常不再需要额外操作。需要 macOS 13 或更新版本。其他平台在同一设置页完成安装或修复后，执行：

```bash
granoflow help
granoflow version --json
granoflow bridge config show --json
```

## 读者常见误解

- `granoflow lang` 只影响 CLI 输出语言，不修改 App 语言。
- `granoflow backup-package` 是 native CLI 本地工具，不依赖运行中的 App。
- 业务对象、备份、真实数据 AI 命令都依赖运行中的 App command channel。

## 下一步

建议先读 [CLI 如何工作](/manual/desktop/cli-how-it-works/)，再看命令参考。
