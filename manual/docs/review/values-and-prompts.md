---
title: 价值观与 AI 研究偏好
description: 通过调整价值观和 AI 研究偏好，让 AI 辅助更贴近你的判断方式，同时保持导入格式和安全边界不可编辑。
---

如果你想让日记整理、周回顾和价值观探索更像你自己的判断方式，可以从「会员设置 > AI 研究偏好」进入配置。它会影响之后 AI 辅助时优先参考的理论、书籍、学者、例子风格和表达方式，但不会自动改写已经存在的任务、记录或历史总结。

<!-- manual-screenshot:id=review-values-prompts-settings -->
![价值观与提示词 界面截图](../../screenshots/zh-cn/review-values-prompts-settings.png)

## AI 研究偏好做什么

AI 研究偏好不是完整 Prompt 编辑器。它只告诉 AI 在分析时更偏向哪些参考框架，例如行为科学、认知学习、生产力系统、管理组织、心理调节或哲学生活方式。

<!-- manual-screenshot:id=review-domain-values-prompt-settings -->
![价值观与 AI 研究偏好 界面截图](../../screenshots/zh-cn/review-domain-values-prompt-settings.png)

<!-- manual-screenshot:id=review-daily-journal-prompt-settings -->
![价值观与 AI 研究偏好 界面截图](../../screenshots/zh-cn/review-daily-journal-prompt-settings.png)

<!-- manual-screenshot:id=review-weekly-review-prompt-settings -->
![价值观与 AI 研究偏好 界面截图](../../screenshots/zh-cn/review-weekly-review-prompt-settings.png)

<!-- manual-screenshot:id=review-work-learning-report-prompt-settings -->
![价值观与 AI 研究偏好 界面截图](../../screenshots/zh-cn/review-work-learning-report-prompt-settings.png)

研究偏好会被放进 AI 请求包，但不能覆盖系统安全规则、隐私边界、导入格式、JSON 结构或字段校验。旧的 Helper、AI 改写、日记、周记、价值观和工作 / 学习日报 Prompt 路由会进入同一个研究偏好页，不再提供完整 Prompt 编辑入口。

## 问卷与价值观设置

日回顾问卷可以随时重写和保存。今天、昨天或更早的日期都可以重新整理；保存只表示保存当前版本，不会把问卷锁定。

领域价值观设置会把你的长期方向带进回顾上下文。价值观可以随时修改，也可以随着实际记录慢慢变清楚。它不是填完一次就永远正确的分类表。

## 这些设置的边界

- **研究偏好不保证 AI 输出质量**：它能引导方向，但不代表 AI 一定答得准。
- **不影响任务和项目**：这些设置只影响后续分析取向、草稿和问题组织，不会改变已有记录。
- **不改变导入合同**：系统 prompt、response contract、JSON schema 和脱敏规则不可在这里编辑。
- **会员限制**：部分设置是会员专属，非会员可以查看默认配置但无法自定义。

:::tip[不知道从哪里改起？]
先写一两句你希望 AI 参考的方向，例如“多用行为科学解释拖延，给建议时说明适用边界”。比起改完整 Prompt，这更不容易破坏导入格式。
:::
