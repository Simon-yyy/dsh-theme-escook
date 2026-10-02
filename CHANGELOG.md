# Changelog

All notable changes to `dsh-theme-escook` will be documented in this file.

## [1.0.4] - 2026-10-02

### 修复
- 将前端 ESM 源码构建为 `__ModuleLoader__.load` 注册包，修复应用启动时的 `Unexpected token 'export'` 和模块未注册错误。
- 导出 Cordis `apply` 激活接口，并在卸载时清理插件样式与控制器。
- `apply` 返回清理函数交给 Cordis 管理，修复仅监听 `dispose` 事件导致真实卸载不清理样式的问题。
- 激活接口使用箭头函数，避免被实际 Cordis 误判为构造函数而忽略返回的清理函数。
- 增加浏览器脚本加载、四套主题切换、卸载及真实宿主模块加载器回归验证；打包前强制构建并执行测试。
- 增加实际 Cordis 的激活、卸载和重新启用回归验证，避免仅用模拟生命周期判定通过。

## [1.0.3] - 2026-10-02

### 修复
- 扩展主题运行时兼容范围，支持 DeepSeek Harness `0.2.0-rc.2` 及后续 `0.2` 版本，保留旧版支持并阻止未经适配的 `0.3` 版本。
- 新增运行时兼容边界回归测试，并将客户端入口及主题变量检查纳入 `npm test`。

## [1.0.2] - 2026-09-25

### Fixed
- Export the `./client` entry required by DeepSeek Harness client modules, preventing startup failure when this theme is installed.

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
