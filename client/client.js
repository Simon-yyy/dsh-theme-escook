/**
 * dsh-theme-escook - Client Theme Injector (4 Schemes)
 * 🌸 彬哥の VS Code 完整 4 款经典主题 for DeepSeek Harness
 * 1. escook Dark (经典暗黑)
 * 2. escook Dark Soft (柔和暗黑)
 * 3. escook Light (经典紫韵浅色)
 * 4. escook Light Soft (柔和浅色)
 */

export const THEME_SCHEMES = {
  "dark": {
    name: "escook Dark (经典暗黑)",
    type: "dark",
    css: `
      :root, html, body, body[data-ds-dark-theme], [data-theme="escook-dark"] {
        --dsw-alias-bg-base: #252526 !important;
        --dsw-alias-bg-layer-1: #202020 !important;
        --dsw-alias-bg-layer-2: #29292c !important;
        --dsw-alias-bg-mask-1: rgba(0, 0, 0, 0.6) !important;
        --dsw-specific-sidebar-fill: #202020 !important;
        --dsw-specific-sidebar-nav-item-hover: rgba(255, 255, 255, 0.08) !important;
        --dsw-specific-sidebar-nav-item-active: rgba(239, 130, 12, 0.18) !important;
        --dsw-specific-sidebar-nav-item-active-accent: #EF820C !important;
        --dsw-specific-input-major: #29292c !important;
        --dsw-specific-bubble: #29292c !important;
        --dsw-specific-menu: #29292c !important;
        --dsw-hovercard-bg: #29292c !important;
        --dsw-alias-tooltip-bg: #202020 !important;
        --dsw-alias-button-elevated-fill: #29292c !important;
        --dsw-alias-button-floating-hover: #333336 !important;
        --dsw-alias-brand-primary: #EF820C !important;
        --dsw-alias-button-primary-fill: #EF820C !important;
        --dsw-alias-button-primary-hover: #ff9940 !important;
        --dsw-alias-label-primary-foreground: #ffffff !important;
        --dsw-alias-label-primary: #fafafa !important;
        --dsw-alias-label-secondary: #cccccc !important;
        --dsw-alias-label-tertiary: #999999 !important;
        --dsw-alias-label-dimmed: #777777 !important;
        --dsw-alias-label-caption: #888888 !important;
        --dsw-alias-interactive-bg-hover: rgba(255, 255, 255, 0.08) !important;
        --dsw-alias-interactive-bg-active: rgba(255, 255, 255, 0.14) !important;
        --dsw-alias-border-l1: #383838 !important;
        --dsw-alias-border-l2: #2e2e2e !important;
        --dsw-alias-border-l3: #444444 !important;
        --dsw-alias-border-l4: #555555 !important;
        --dsw-alias-markdown-code-block: #1e1e1e !important;
        --dsw-alias-markdown-code-block-banner: #252526 !important;
        --dsw-alias-scrollbar-bg-l2: #383838 !important;
        --dsw-alias-scrollbar-hover-l2: #EF820C !important;
      }
      body, body[data-ds-dark-theme] { background-color: #252526 !important; color: #fafafa !important; }
      pre, code, [class*="codeBlock"] {
        background-color: #1e1e1e !important;
        color: #d4d4d4 !important;
        border-color: #383838 !important;
      }
    `
  },
  "dark-soft": {
    name: "escook Dark Soft (柔和暗黑)",
    type: "dark",
    css: `
      :root, html, body, body[data-ds-dark-theme], [data-theme="escook-dark-soft"] {
        --dsw-alias-bg-base: #1f2430 !important;
        --dsw-alias-bg-layer-1: #191e2a !important;
        --dsw-alias-bg-layer-2: #232834 !important;
        --dsw-alias-bg-mask-1: rgba(15, 18, 26, 0.65) !important;
        --dsw-specific-sidebar-fill: #191e2a !important;
        --dsw-specific-sidebar-nav-item-hover: rgba(255, 204, 102, 0.08) !important;
        --dsw-specific-sidebar-nav-item-active: rgba(255, 204, 102, 0.16) !important;
        --dsw-specific-sidebar-nav-item-active-accent: #ffcc66 !important;
        --dsw-specific-input-major: #232834 !important;
        --dsw-specific-bubble: #232834 !important;
        --dsw-specific-menu: #232834 !important;
        --dsw-hovercard-bg: #232834 !important;
        --dsw-alias-tooltip-bg: #191e2a !important;
        --dsw-alias-button-elevated-fill: #232834 !important;
        --dsw-alias-button-floating-hover: #2b3240 !important;
        --dsw-alias-brand-primary: #ffcc66 !important;
        --dsw-alias-button-primary-fill: #ffcc66 !important;
        --dsw-alias-button-primary-hover: #fac761 !important;
        --dsw-alias-label-primary-foreground: #1f2430 !important;
        --dsw-alias-label-primary: #cbccc6 !important;
        --dsw-alias-label-secondary: #969aa4 !important;
        --dsw-alias-label-tertiary: #707a8c !important;
        --dsw-alias-label-dimmed: #5c6773 !important;
        --dsw-alias-label-caption: #707a8c !important;
        --dsw-alias-interactive-bg-hover: rgba(255, 204, 102, 0.1) !important;
        --dsw-alias-interactive-bg-active: rgba(255, 204, 102, 0.18) !important;
        --dsw-alias-border-l1: #373e4c !important;
        --dsw-alias-border-l2: #2d3443 !important;
        --dsw-alias-border-l3: #4f5869 !important;
        --dsw-alias-border-l4: #636e84 !important;
        --dsw-alias-markdown-code-block: #1a1f29 !important;
        --dsw-alias-markdown-code-block-banner: #232834 !important;
        --dsw-alias-scrollbar-bg-l2: #373e4c !important;
        --dsw-alias-scrollbar-hover-l2: #ffcc66 !important;
      }
      body, body[data-ds-dark-theme] { background-color: #1f2430 !important; color: #cbccc6 !important; }
      pre, code, [class*="codeBlock"] {
        background-color: #1a1f29 !important;
        color: #cbccc6 !important;
        border-color: #2d3443 !important;
      }
      .hljs-keyword, .token.keyword { color: #f28779 !important; font-weight: 600; }
      .hljs-string, .token.string { color: #bae67e !important; }
      .hljs-function, .token.function { color: #73d0ff !important; }
      .hljs-number, .token.number { color: #ff9940 !important; }
      .hljs-comment, .token.comment { color: #5c6773 !important; font-style: italic; }
    `
  },
  "light": {
    name: "escook Light (经典紫韵浅色)",
    type: "light",
    css: `
      :root, html, body, body[data-ds-dark-theme], [data-theme="escook-light"] {
        --dsw-alias-bg-base: #FDF6E3 !important;
        --dsw-alias-bg-layer-1: #F5EEDB !important;
        --dsw-alias-bg-layer-2: #EDE5D0 !important;
        --dsw-alias-bg-mask-1: rgba(88, 70, 50, 0.35) !important;
        --dsw-specific-sidebar-fill: #F5EEDB !important;
        --dsw-specific-sidebar-nav-item-hover: rgba(112, 86, 151, 0.08) !important;
        --dsw-specific-sidebar-nav-item-active: rgba(112, 86, 151, 0.16) !important;
        --dsw-specific-sidebar-nav-item-active-accent: #705697 !important;
        --dsw-specific-input-major: #EDE5D0 !important;
        --dsw-specific-bubble: #EDE5D0 !important;
        --dsw-specific-menu: #FFFFFF !important;
        --dsw-hovercard-bg: #FFFFFF !important;
        --dsw-alias-tooltip-bg: #2B2B2B !important;
        --dsw-alias-button-elevated-fill: #EDE5D0 !important;
        --dsw-alias-button-floating-hover: #e4dcc4 !important;
        --dsw-alias-brand-primary: #705697 !important;
        --dsw-alias-button-primary-fill: #705697 !important;
        --dsw-alias-button-primary-hover: #8a6ab8 !important;
        --dsw-alias-label-primary-foreground: #ffffff !important;
        --dsw-alias-label-primary: #2b2b2b !important;
        --dsw-alias-label-secondary: #4a5c63 !important;
        --dsw-alias-label-tertiary: #657b83 !important;
        --dsw-alias-label-dimmed: #839496 !important;
        --dsw-alias-label-caption: #657b83 !important;
        --dsw-alias-interactive-bg-hover: rgba(112, 86, 151, 0.08) !important;
        --dsw-alias-interactive-bg-active: rgba(112, 86, 151, 0.15) !important;
        --dsw-alias-border-l1: #d3cbb7 !important;
        --dsw-alias-border-l2: #e2dbca !important;
        --dsw-alias-border-l3: #ccc4af !important;
        --dsw-alias-border-l4: #b8af98 !important;
        --dsw-alias-markdown-code-block: #f7f0dc !important;
        --dsw-alias-markdown-code-block-banner: #ede5d0 !important;
        --dsw-alias-scrollbar-bg-l2: #d3cbb7 !important;
        --dsw-alias-scrollbar-hover-l2: #705697 !important;
      }
      body, body[data-ds-dark-theme] { background-color: #FDF6E3 !important; color: #2b2b2b !important; }
      pre, code, [class*="codeBlock"] {
        background-color: #f7f0dc !important;
        color: #2b2b2b !important;
        border-color: #d3cbb7 !important;
      }
    `
  },
  "light-soft": {
    name: "escook Light Soft (柔和浅色)",
    type: "light",
    css: `
      :root, html, body, body[data-ds-dark-theme], [data-theme="escook-light-soft"] {
        --dsw-alias-bg-base: #FAFAFA !important;
        --dsw-alias-bg-layer-1: #F0F0F0 !important;
        --dsw-alias-bg-layer-2: #FFFFFF !important;
        --dsw-alias-bg-mask-1: rgba(0, 0, 0, 0.3) !important;
        --dsw-specific-sidebar-fill: #F0F0F0 !important;
        --dsw-specific-sidebar-nav-item-hover: rgba(255, 153, 64, 0.08) !important;
        --dsw-specific-sidebar-nav-item-active: rgba(255, 153, 64, 0.16) !important;
        --dsw-specific-sidebar-nav-item-active-accent: #ff9940 !important;
        --dsw-specific-input-major: #FFFFFF !important;
        --dsw-specific-bubble: #FFFFFF !important;
        --dsw-specific-menu: #FFFFFF !important;
        --dsw-hovercard-bg: #FFFFFF !important;
        --dsw-alias-tooltip-bg: #1F2937 !important;
        --dsw-alias-button-elevated-fill: #FFFFFF !important;
        --dsw-alias-button-floating-hover: #f5f5f5 !important;
        --dsw-alias-brand-primary: #ff9940 !important;
        --dsw-alias-button-primary-fill: #ff9940 !important;
        --dsw-alias-button-primary-hover: #ffaa5e !important;
        --dsw-alias-label-primary-foreground: #ffffff !important;
        --dsw-alias-label-primary: #1F2937 !important;
        --dsw-alias-label-secondary: #4B5563 !important;
        --dsw-alias-label-tertiary: #6B7280 !important;
        --dsw-alias-label-dimmed: #9CA3AF !important;
        --dsw-alias-label-caption: #6B7280 !important;
        --dsw-alias-interactive-bg-hover: rgba(255, 153, 64, 0.08) !important;
        --dsw-alias-interactive-bg-active: rgba(255, 153, 64, 0.15) !important;
        --dsw-alias-border-l1: #E5E7EB !important;
        --dsw-alias-border-l2: #F3F4F6 !important;
        --dsw-alias-border-l3: #D1D5DB !important;
        --dsw-alias-border-l4: #9CA3AF !important;
        --dsw-alias-markdown-code-block: #f4f4f5 !important;
        --dsw-alias-markdown-code-block-banner: #e5e7eb !important;
        --dsw-alias-scrollbar-bg-l2: #E5E7EB !important;
        --dsw-alias-scrollbar-hover-l2: #ff9940 !important;
      }
      body, body[data-ds-dark-theme] { background-color: #FAFAFA !important; color: #1F2937 !important; }
      pre, code, [class*="codeBlock"] {
        background-color: #f4f4f5 !important;
        color: #1F2937 !important;
        border-color: #E5E7EB !important;
      }
    `
  }
};

export default function activate(context) {
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
      // 忽略隐私模式下的存储错误
    }
    console.log(`🌸 [dsh-theme-escook] 当前激活配色: ${scheme.name}`);
  }

  // 优先读取用户之前保存的配色方案，默认 dark-soft
  let savedScheme = "dark-soft";
  try {
    savedScheme = localStorage.getItem(storageKey) || localStorage.getItem("dsh_selected_theme") || "dark-soft";
  } catch (e) {}

  applyScheme(savedScheme);

  // 暴露全局便捷控制接口供控制台与扩展直接调用
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
