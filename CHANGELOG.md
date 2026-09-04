# Changelog

All notable changes to `dsh-theme-escook` will be documented in this file.

## [1.0.1] - 2026-09-04

### Improved & Fixed
- 🎨 **主题调色板全面升级**：精简为 4 款纯净经典主题，彻底重构颜色对比度与护眼调色；
- 🛡️ **彻底消除白底白字缺陷**：补齐平台层与模块层背景变量（`--dsw-alias-bg-module-platform` 等），加固选择器组件文本对比度；
- 🔄 **DSH Desktop 桌面端热挂载与防冲突**：自动识别桌面客户端宿主环境，通过 `registerThemes` 优雅委派，杜绝样式重复覆盖；
- 🖼️ **官方插件市场高清预览**：新增 16:9 4 合 1 真实界面效果图，并在注册表中配置 `screenshots` 字段。

## [1.0.0] - 2026-08-23

### Features
- Initial official release of `dsh-theme-escook`.
- Full native support for 4 signature color schemes:
  - 🌸 **escook Dark**: Deep black base with vibrant warm amber highlights.
  - 🌸 **escook Dark Soft**: Midnight blue-violet base with amber gold accents and syntax highlighting.
  - 🌸 **escook Light**: Parchment warm white background with elegant violet accents.
  - 🌸 **escook Light Soft**: Minimalist clean white with soft amber tones.
- Deep integration with DeepSeek Harness `--dsw-*` native design system tokens.
- Zero-dependency client runtime injection.
