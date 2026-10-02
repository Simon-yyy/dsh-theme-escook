// 自动构建产物，请修改 client/client.js 后运行 npm run build。
window.__ModuleLoader__.load({
  id: "dsh-theme-escook",
  factory: (require) => {
    const module = { exports: {} };
    const exports = module.exports;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// client/client.js
var client_exports = {};
__export(client_exports, {
  THEME_SCHEMES: () => THEME_SCHEMES,
  apply: () => apply,
  default: () => activate
});
module.exports = __toCommonJS(client_exports);
var THEME_SCHEMES = {
  "dark": {
    name: "escook Dark (\u7ECF\u5178\u6697\u9ED1 \xB7 \u6807\u5FD7\u6696\u9633\u6A59)",
    desc: "VS Code \u5F6C\u54E5\u7ECF\u5178\u6696\u8C03\u6781\u5BA2\u6DF1\u7070\u642D\u914D\u6807\u5FD7\u6696\u9633\u6A59\uFF0C\u6B63\u7EDF\u8010\u770B\u957F\u6548\u62A4\u773C",
    type: "dark",
    colorPreview: "#ef820c",
    bgPreview: "#252526",
    css: `
      :root, html, body, body[data-ds-dark-theme], [data-theme="escook-dark"] {
        --dsw-alias-bg-base: #252526 !important;
        --dsw-alias-bg-layer-1: #202021 !important;
        --dsw-alias-bg-layer-2: #29292c !important;
        --dsw-alias-bg-layer-3: #2d2d30 !important;
        --dsw-alias-bg-module-platform: #2d2d30 !important;
        --dsw-alias-bg-multi-select: #2d2d30 !important;
        --dsw-alias-bg-overlay: #333333 !important;
        --dsw-specific-selector: #2d2d30 !important;
        --dsw-alias-bg-mask-1: rgba(18, 18, 20, 0.75) !important;
        --dsw-specific-sidebar-fill: #202021 !important;
        --dsw-specific-sidebar-nav-item-hover: rgba(239, 130, 12, 0.1) !important;
        --dsw-specific-sidebar-nav-item-active: rgba(239, 130, 12, 0.2) !important;
        --dsw-specific-sidebar-nav-item-active-accent: #ef820c !important;
        --dsw-specific-input-major: #29292c !important;
        --dsw-specific-bubble: #29292c !important;
        --dsw-specific-menu: #202021 !important;
        --dsw-hovercard-bg: #29292c !important;
        --dsw-alias-tooltip-bg: #1c1c1d !important;
        --dsw-alias-button-elevated-fill: #2f2f33 !important;
        --dsw-alias-button-floating-hover: #38383c !important;
        --dsw-alias-brand-primary: #ef820c !important;
        --dsw-alias-button-primary-fill: #ef820c !important;
        --dsw-alias-button-primary-hover: #ff9940 !important;
        --dsw-alias-label-primary-foreground: #ffffff !important;
        --dsw-alias-label-primary: #fafafa !important;
        --dsw-alias-label-secondary: #cccccc !important;
        --dsw-alias-label-tertiary: #888888 !important;
        --dsw-alias-label-dimmed: #555555 !important;
        --dsw-alias-label-caption: #888888 !important;
        --dsw-alias-interactive-bg-hover: rgba(239, 130, 12, 0.1) !important;
        --dsw-alias-interactive-bg-active: rgba(239, 130, 12, 0.2) !important;
        --dsw-alias-border-l1: #333333 !important;
        --dsw-alias-border-l2: #2a2a2a !important;
        --dsw-alias-border-l3: #3e3e3e !important;
        --dsw-alias-border-l4: #555555 !important;
        --dsw-alias-markdown-code-block: #1c1c1d !important;
        --dsw-alias-markdown-code-block-banner: #252526 !important;
        --dsw-alias-scrollbar-bg-l2: #333333 !important;
        --dsw-alias-scrollbar-hover-l2: #ef820c !important;
      }
      body, body[data-ds-dark-theme] { background-color: #252526 !important; color: #fafafa !important; }
      pre, code, [class*="codeBlock"] {
        background-color: #1c1c1d !important;
        color: #fafafa !important;
        border-color: #333333 !important;
      }
      [class*="selector"], [class*="themeCube"] {
        color: #fafafa !important;
        background-color: #2d2d30 !important;
      }
      [class*="selected"], [class*="themeCube"]:hover {
        border-color: #ef820c !important;
      }
    `
  },
  "dark-soft": {
    name: "escook Dark Soft (\u67D4\u548C\u6697\u9ED1 \xB7 \u67D4\u5149\u5976\u674F\u9EC4)",
    desc: "Ayu \u7ECF\u5178\u6DF1\u6D77\u84DD\u7070\u5E95\u8272\u642D\u914D\u6E29\u6DA6\u5976\u674F\u9EC4\uFF0C\u7EC6\u817B\u67D4\u548C\u957F\u6548\u9632\u75B2\u52B3",
    type: "dark",
    colorPreview: "#ffcc66",
    bgPreview: "#1f2430",
    css: `
      :root, html, body, body[data-ds-dark-theme], [data-theme="escook-dark-soft"] {
        --dsw-alias-bg-base: #1f2430 !important;
        --dsw-alias-bg-layer-1: #191e28 !important;
        --dsw-alias-bg-layer-2: #232834 !important;
        --dsw-alias-bg-layer-3: #262c3b !important;
        --dsw-alias-bg-module-platform: #262c3b !important;
        --dsw-alias-bg-multi-select: #262c3b !important;
        --dsw-alias-bg-overlay: #333a4c !important;
        --dsw-specific-selector: #262c3b !important;
        --dsw-alias-bg-mask-1: rgba(16, 20, 28, 0.7) !important;
        --dsw-specific-sidebar-fill: #191e28 !important;
        --dsw-specific-sidebar-nav-item-hover: rgba(255, 204, 102, 0.1) !important;
        --dsw-specific-sidebar-nav-item-active: rgba(255, 204, 102, 0.18) !important;
        --dsw-specific-sidebar-nav-item-active-accent: #ffcc66 !important;
        --dsw-specific-input-major: #232834 !important;
        --dsw-specific-bubble: #232834 !important;
        --dsw-specific-menu: #191e28 !important;
        --dsw-hovercard-bg: #191e28 !important;
        --dsw-alias-tooltip-bg: #171b24 !important;
        --dsw-alias-button-elevated-fill: #2b3140 !important;
        --dsw-alias-button-floating-hover: #333a4c !important;
        --dsw-alias-brand-primary: #ffcc66 !important;
        --dsw-alias-button-primary-fill: #ffcc66 !important;
        --dsw-alias-button-primary-hover: #ffd580 !important;
        --dsw-alias-label-primary-foreground: #1f2430 !important;
        --dsw-alias-label-primary: #cbccc6 !important;
        --dsw-alias-label-secondary: #969aa4 !important;
        --dsw-alias-label-tertiary: #707a8c !important;
        --dsw-alias-label-dimmed: #515764 !important;
        --dsw-alias-label-caption: #707a8c !important;
        --dsw-alias-interactive-bg-hover: rgba(255, 204, 102, 0.1) !important;
        --dsw-alias-interactive-bg-active: rgba(255, 204, 102, 0.18) !important;
        --dsw-alias-border-l1: #373e4c !important;
        --dsw-alias-border-l2: #2d3340 !important;
        --dsw-alias-border-l3: #444c5e !important;
        --dsw-alias-border-l4: #515764 !important;
        --dsw-alias-markdown-code-block: #171b24 !important;
        --dsw-alias-markdown-code-block-banner: #1f2430 !important;
        --dsw-alias-scrollbar-bg-l2: #373e4c !important;
        --dsw-alias-scrollbar-hover-l2: #ffcc66 !important;
      }
      body, body[data-ds-dark-theme] { background-color: #1f2430 !important; color: #cbccc6 !important; }
      pre, code, [class*="codeBlock"] {
        background-color: #171b24 !important;
        color: #cbccc6 !important;
        border-color: #373e4c !important;
      }
      [class*="selector"], [class*="themeCube"] {
        color: #cbccc6 !important;
        background-color: #262c3b !important;
      }
      [class*="selected"], [class*="themeCube"]:hover {
        border-color: #ffcc66 !important;
      }
    `
  },
  "light": {
    name: "escook Light (\u7ECF\u5178\u6D45\u8272 \xB7 \u5178\u96C5\u7D2B\u7F57\u5170)",
    desc: "Solarized \u7ECF\u5178\u62A4\u773C\u6696\u7C73\u767D\u642D\u914D\u5178\u96C5\u7D2B\u7F57\u5170\u4E0E\u9752\u58A8\u6587\u672C\uFF0C\u6E29\u6DA6\u7EB8\u8D28\u4E66\u5377\u611F",
    type: "light",
    colorPreview: "#705697",
    bgPreview: "#fdf6e3",
    css: `
      :root, html, body, body[data-ds-dark-theme], [data-theme="escook-light"] {
        --dsw-alias-bg-base: #fdf6e3 !important;
        --dsw-alias-bg-layer-1: #f8f0d8 !important;
        --dsw-alias-bg-layer-2: #ffffff !important;
        --dsw-alias-bg-layer-3: #eee8d5 !important;
        --dsw-alias-bg-module-platform: #eee8d5 !important;
        --dsw-alias-bg-multi-select: #eee8d5 !important;
        --dsw-alias-bg-overlay: #e3dac6 !important;
        --dsw-specific-selector: #eee8d5 !important;
        --dsw-alias-bg-mask-1: rgba(50, 40, 60, 0.25) !important;
        --dsw-specific-sidebar-fill: #f8f0d8 !important;
        --dsw-specific-sidebar-nav-item-hover: rgba(112, 86, 151, 0.08) !important;
        --dsw-specific-sidebar-nav-item-active: rgba(112, 86, 151, 0.16) !important;
        --dsw-specific-sidebar-nav-item-active-accent: #705697 !important;
        --dsw-specific-input-major: #ffffff !important;
        --dsw-specific-bubble: #ffffff !important;
        --dsw-specific-menu: #ffffff !important;
        --dsw-hovercard-bg: #ffffff !important;
        --dsw-alias-tooltip-bg: #2b2638 !important;
        --dsw-alias-button-elevated-fill: #f4ecce !important;
        --dsw-alias-button-floating-hover: #ece2c4 !important;
        --dsw-alias-brand-primary: #705697 !important;
        --dsw-alias-button-primary-fill: #705697 !important;
        --dsw-alias-button-primary-hover: #876cad !important;
        --dsw-alias-label-primary-foreground: #ffffff !important;
        --dsw-alias-label-primary: #586e75 !important;
        --dsw-alias-label-secondary: #657b83 !important;
        --dsw-alias-label-tertiary: #93a1a1 !important;
        --dsw-alias-label-dimmed: #b58900 !important;
        --dsw-alias-label-caption: #93a1a1 !important;
        --dsw-alias-interactive-bg-hover: rgba(112, 86, 151, 0.08) !important;
        --dsw-alias-interactive-bg-active: rgba(112, 86, 151, 0.15) !important;
        --dsw-alias-border-l1: #e3dac6 !important;
        --dsw-alias-border-l2: #ece3cf !important;
        --dsw-alias-border-l3: #d8ceb8 !important;
        --dsw-alias-border-l4: #b58900 !important;
        --dsw-alias-markdown-code-block: #f5eed8 !important;
        --dsw-alias-markdown-code-block-banner: #ebe4cc !important;
        --dsw-alias-scrollbar-bg-l2: #e3dac6 !important;
        --dsw-alias-scrollbar-hover-l2: #705697 !important;
      }
      body, body[data-ds-dark-theme] { background-color: #fdf6e3 !important; color: #586e75 !important; }
      pre, code, [class*="codeBlock"] {
        background-color: #f5eed8 !important;
        color: #586e75 !important;
        border-color: #e3dac6 !important;
      }
      [class*="selector"], [class*="themeCube"] {
        color: #586e75 !important;
        background-color: #eee8d5 !important;
      }
      [class*="selected"], [class*="themeCube"]:hover {
        border-color: #705697 !important;
      }
    `
  },
  "light-soft": {
    name: "escook Light Soft (\u67D4\u548C\u6D45\u8272 \xB7 \u6D3B\u529B\u67D4\u548C\u6A59)",
    desc: "\u73B0\u4EE3\u6781\u7B80\u6E05\u900F\u6D45\u7070\u642D\u914D\u67D4\u548C\u6D3B\u529B\u6A59\uFF0C\u660E\u4EAE\u6E05\u723D\u4E0D\u523A\u773C",
    type: "light",
    colorPreview: "#ff9940",
    bgPreview: "#fafafa",
    css: `
      :root, html, body, body[data-ds-dark-theme], [data-theme="escook-light-soft"] {
        --dsw-alias-bg-base: #fafafa !important;
        --dsw-alias-bg-layer-1: #f2f2f2 !important;
        --dsw-alias-bg-layer-2: #ffffff !important;
        --dsw-alias-bg-layer-3: #e8e8e8 !important;
        --dsw-alias-bg-module-platform: #e8e8e8 !important;
        --dsw-alias-bg-multi-select: #e8e8e8 !important;
        --dsw-alias-bg-overlay: #dcdcdc !important;
        --dsw-specific-selector: #e8e8e8 !important;
        --dsw-alias-bg-mask-1: rgba(0, 0, 0, 0.2) !important;
        --dsw-specific-sidebar-fill: #f2f2f2 !important;
        --dsw-specific-sidebar-nav-item-hover: rgba(255, 153, 64, 0.08) !important;
        --dsw-specific-sidebar-nav-item-active: rgba(255, 153, 64, 0.16) !important;
        --dsw-specific-sidebar-nav-item-active-accent: #ff9940 !important;
        --dsw-specific-input-major: #ffffff !important;
        --dsw-specific-bubble: #ffffff !important;
        --dsw-specific-menu: #ffffff !important;
        --dsw-hovercard-bg: #ffffff !important;
        --dsw-alias-tooltip-bg: #2d3748 !important;
        --dsw-alias-button-elevated-fill: #eaeaea !important;
        --dsw-alias-button-floating-hover: #e0e0e0 !important;
        --dsw-alias-brand-primary: #ff9940 !important;
        --dsw-alias-button-primary-fill: #ff9940 !important;
        --dsw-alias-button-primary-hover: #f58220 !important;
        --dsw-alias-label-primary-foreground: #ffffff !important;
        --dsw-alias-label-primary: #2d3748 !important;
        --dsw-alias-label-secondary: #4a5568 !important;
        --dsw-alias-label-tertiary: #718096 !important;
        --dsw-alias-label-dimmed: #a0aec0 !important;
        --dsw-alias-label-caption: #718096 !important;
        --dsw-alias-interactive-bg-hover: rgba(255, 153, 64, 0.08) !important;
        --dsw-alias-interactive-bg-active: rgba(255, 153, 64, 0.15) !important;
        --dsw-alias-border-l1: #dcdcdc !important;
        --dsw-alias-border-l2: #e8e8e8 !important;
        --dsw-alias-border-l3: #d0d0d0 !important;
        --dsw-alias-border-l4: #a0aec0 !important;
        --dsw-alias-markdown-code-block: #f0f2f5 !important;
        --dsw-alias-markdown-code-block-banner: #e6e9ee !important;
        --dsw-alias-scrollbar-bg-l2: #dcdcdc !important;
        --dsw-alias-scrollbar-hover-l2: #ff9940 !important;
      }
      body, body[data-ds-dark-theme] { background-color: #fafafa !important; color: #2d3748 !important; }
      pre, code, [class*="codeBlock"] {
        background-color: #f0f2f5 !important;
        color: #2d3748 !important;
        border-color: #dcdcdc !important;
      }
      [class*="selector"], [class*="themeCube"] {
        color: #2d3748 !important;
        background-color: #e8e8e8 !important;
      }
      [class*="selected"], [class*="themeCube"]:hover {
        border-color: #ff9940 !important;
      }
    `
  }
};
function activate(context) {
  if (typeof window !== "undefined" && window.__DSH_BUILTIN_THEMES__) {
    console.info("\u{1F338} [dsh-theme-escook] \u68C0\u6D4B\u5230\u5F53\u524D\u5904\u4E8E DSH Desktop \u684C\u9762\u7AEF\uFF0C\u6B63\u5728\u5C06\u63D2\u4EF6\u6700\u65B0\u4E3B\u9898\u77E9\u9635\u70ED\u540C\u6B65\u81F3\u5BA2\u6237\u7AEF...");
    const builtin = window.__DSH_BUILTIN_THEMES__;
    if (typeof builtin.registerThemes === "function") {
      builtin.registerThemes(THEME_SCHEMES);
    }
    const themeController2 = {
      schemes: Object.keys(THEME_SCHEMES),
      setScheme(key) {
        builtin.apply(key);
      },
      getCurrentScheme() {
        return builtin.getCurrent();
      },
      dispose() {
        if (window.__ESCOOK_THEME__ === themeController2) {
          delete window.__ESCOOK_THEME__;
        }
      }
    };
    window.__ESCOOK_THEME__ = themeController2;
    return themeController2;
  }
  const styleId = "dsh-theme-escook-styles";
  const storageKey = "dsh_theme_escook_scheme";
  let styleEl = document.getElementById(styleId);
  function applyScheme(key) {
    const validKey = THEME_SCHEMES[key] ? key : "dark-soft";
    const scheme = THEME_SCHEMES[validKey];
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = scheme.css;
    document.documentElement.setAttribute("data-dsh-theme", `escook-${validKey}`);
    try {
      localStorage.setItem(storageKey, validKey);
    } catch (e) {
    }
    console.info(`\u{1F338} [dsh-theme-escook] \u5F53\u524D\u6FC0\u6D3B\u914D\u8272: ${scheme.name}`);
  }
  let savedScheme = "dark-soft";
  try {
    savedScheme = localStorage.getItem(storageKey) || localStorage.getItem("dsh_selected_theme") || "dark-soft";
  } catch (e) {
  }
  applyScheme(savedScheme);
  const themeController = {
    schemes: Object.keys(THEME_SCHEMES),
    setScheme(key) {
      applyScheme(key);
    },
    getCurrentScheme() {
      try {
        return localStorage.getItem(storageKey) || "dark-soft";
      } catch (e) {
        return "dark-soft";
      }
    },
    dispose() {
      if (styleEl && styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl);
      }
      document.documentElement.removeAttribute("data-dsh-theme");
      if (window.__ESCOOK_THEME__ === themeController) {
        delete window.__ESCOOK_THEME__;
      }
    }
  };
  window.__ESCOOK_THEME__ = themeController;
  return themeController;
}
var apply = (context) => {
  const controller = activate(context);
  return () => controller.dispose();
};

    return module.exports;
  }
});
