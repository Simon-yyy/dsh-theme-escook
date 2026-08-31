/**
 * Escook Theme Client Plugin for DSH (Redesigned Edition)
 */

export const THEME_SCHEMES = {
  "dark": {
    name: "escook Dark (经典暗黑)",
    desc: "沉浸深邃蓝黑底色搭配极光日落金橙，现代极客硬朗质感",
    type: "dark",
    colorPreview: "#FF8400",
    bgPreview: "#14171F",
    css: `
      :root, html, body, body[data-ds-dark-theme], [data-theme="escook-dark"] {
        --dsw-alias-bg-base: #14171F !important;
        --dsw-alias-bg-layer-1: #0E1017 !important;
        --dsw-alias-bg-layer-2: #1B1F2A !important;
        --dsw-alias-bg-mask-1: rgba(10, 12, 18, 0.75) !important;
        --dsw-specific-sidebar-fill: #0E1017 !important;
        --dsw-specific-sidebar-nav-item-hover: rgba(255, 132, 0, 0.1) !important;
        --dsw-specific-sidebar-nav-item-active: rgba(255, 132, 0, 0.2) !important;
        --dsw-specific-sidebar-nav-item-active-accent: #FF8400 !important;
        --dsw-specific-input-major: #1B1F2A !important;
        --dsw-specific-bubble: #1B1F2A !important;
        --dsw-specific-menu: #161922 !important;
        --dsw-hovercard-bg: #161922 !important;
        --dsw-alias-tooltip-bg: #222736 !important;
        --dsw-alias-button-elevated-fill: #1B1F2A !important;
        --dsw-alias-button-floating-hover: #262C3D !important;
        --dsw-alias-brand-primary: #FF8400 !important;
        --dsw-alias-button-primary-fill: #FF8400 !important;
        --dsw-alias-button-primary-hover: #FFA033 !important;
        --dsw-alias-label-primary-foreground: #000000 !important;
        --dsw-alias-label-primary: #F4F6FB !important;
        --dsw-alias-label-secondary: #9CA3AF !important;
        --dsw-alias-label-tertiary: #6B7280 !important;
        --dsw-alias-label-dimmed: #4B5563 !important;
        --dsw-alias-label-caption: #6B7280 !important;
        --dsw-alias-interactive-bg-hover: rgba(255, 132, 0, 0.1) !important;
        --dsw-alias-interactive-bg-active: rgba(255, 132, 0, 0.2) !important;
        --dsw-alias-border-l1: #2A3042 !important;
        --dsw-alias-border-l2: #212635 !important;
        --dsw-alias-border-l3: #384058 !important;
        --dsw-alias-border-l4: #4B5563 !important;
        --dsw-alias-markdown-code-block: #0C0E14 !important;
        --dsw-alias-markdown-code-block-banner: #14171F !important;
        --dsw-alias-scrollbar-bg-l2: #2A3042 !important;
        --dsw-alias-scrollbar-hover-l2: #FF8400 !important;
      }
      body, body[data-ds-dark-theme] { background-color: #14171F !important; color: #F4F6FB !important; }
      pre, code, [class*="codeBlock"] {
        background-color: #0C0E14 !important;
        color: #F4F6FB !important;
        border-color: #2A3042 !important;
      }
    `
  },
  "dark-soft": {
    name: "escook Dark Soft (柔和暗黑)",
    desc: "温润哑光深青夜幕底色搭配柔和琥珀流金，长效护眼防疲劳",
    type: "dark",
    colorPreview: "#F6C177",
    bgPreview: "#1A1E29",
    css: `
      :root, html, body, body[data-ds-dark-theme], [data-theme="escook-dark-soft"] {
        --dsw-alias-bg-base: #1A1E29 !important;
        --dsw-alias-bg-layer-1: #141720 !important;
        --dsw-alias-bg-layer-2: #212735 !important;
        --dsw-alias-bg-mask-1: rgba(14, 16, 24, 0.7) !important;
        --dsw-specific-sidebar-fill: #141720 !important;
        --dsw-specific-sidebar-nav-item-hover: rgba(246, 193, 119, 0.1) !important;
        --dsw-specific-sidebar-nav-item-active: rgba(246, 193, 119, 0.18) !important;
        --dsw-specific-sidebar-nav-item-active-accent: #F6C177 !important;
        --dsw-specific-input-major: #212735 !important;
        --dsw-specific-bubble: #212735 !important;
        --dsw-specific-menu: #1B202B !important;
        --dsw-hovercard-bg: #1B202B !important;
        --dsw-alias-tooltip-bg: #293042 !important;
        --dsw-alias-button-elevated-fill: #212735 !important;
        --dsw-alias-button-floating-hover: #2B3346 !important;
        --dsw-alias-brand-primary: #F6C177 !important;
        --dsw-alias-button-primary-fill: #F6C177 !important;
        --dsw-alias-button-primary-hover: #FAD49E !important;
        --dsw-alias-label-primary-foreground: #1A1E29 !important;
        --dsw-alias-label-primary: #D5DAE5 !important;
        --dsw-alias-label-secondary: #8C95A6 !important;
        --dsw-alias-label-tertiary: #677082 !important;
        --dsw-alias-label-dimmed: #4E5666 !important;
        --dsw-alias-label-caption: #677082 !important;
        --dsw-alias-interactive-bg-hover: rgba(246, 193, 119, 0.1) !important;
        --dsw-alias-interactive-bg-active: rgba(246, 193, 119, 0.18) !important;
        --dsw-alias-border-l1: #2B3242 !important;
        --dsw-alias-border-l2: #232938 !important;
        --dsw-alias-border-l3: #3B4459 !important;
        --dsw-alias-border-l4: #4E5666 !important;
        --dsw-alias-markdown-code-block: #12151D !important;
        --dsw-alias-markdown-code-block-banner: #181C26 !important;
        --dsw-alias-scrollbar-bg-l2: #2B3242 !important;
        --dsw-alias-scrollbar-hover-l2: #F6C177 !important;
      }
      body, body[data-ds-dark-theme] { background-color: #1A1E29 !important; color: #D5DAE5 !important; }
      pre, code, [class*="codeBlock"] {
        background-color: #12151D !important;
        color: #D5DAE5 !important;
        border-color: #2B3242 !important;
      }
    `
  },
  "light": {
    name: "escook Light (经典紫韵浅色)",
    desc: "法式法兰绒暖米白搭配典雅皇家罗兰紫，极富书卷杂志质感",
    type: "light",
    colorPreview: "#7C3AED",
    bgPreview: "#FAF8F5",
    css: `
      :root, html, body, body[data-ds-dark-theme], [data-theme="escook-light"] {
        --dsw-alias-bg-base: #FAF8F5 !important;
        --dsw-alias-bg-layer-1: #F3EFEA !important;
        --dsw-alias-bg-layer-2: #FFFFFF !important;
        --dsw-alias-bg-mask-1: rgba(60, 50, 70, 0.3) !important;
        --dsw-specific-sidebar-fill: #F3EFEA !important;
        --dsw-specific-sidebar-nav-item-hover: rgba(124, 58, 237, 0.08) !important;
        --dsw-specific-sidebar-nav-item-active: rgba(124, 58, 237, 0.16) !important;
        --dsw-specific-sidebar-nav-item-active-accent: #7C3AED !important;
        --dsw-specific-input-major: #FFFFFF !important;
        --dsw-specific-bubble: #FFFFFF !important;
        --dsw-specific-menu: #FFFFFF !important;
        --dsw-hovercard-bg: #FFFFFF !important;
        --dsw-alias-tooltip-bg: #1E1B24 !important;
        --dsw-alias-button-elevated-fill: #FFFFFF !important;
        --dsw-alias-button-floating-hover: #F3EFEA !important;
        --dsw-alias-brand-primary: #7C3AED !important;
        --dsw-alias-button-primary-fill: #7C3AED !important;
        --dsw-alias-button-primary-hover: #8B5CF6 !important;
        --dsw-alias-label-primary-foreground: #FFFFFF !important;
        --dsw-alias-label-primary: #1E1B24 !important;
        --dsw-alias-label-secondary: #524E5B !important;
        --dsw-alias-label-tertiary: #716C7B !important;
        --dsw-alias-label-dimmed: #9A94A4 !important;
        --dsw-alias-label-caption: #716C7B !important;
        --dsw-alias-interactive-bg-hover: rgba(124, 58, 237, 0.08) !important;
        --dsw-alias-interactive-bg-active: rgba(124, 58, 237, 0.15) !important;
        --dsw-alias-border-l1: #E6E0D8 !important;
        --dsw-alias-border-l2: #F0EAE2 !important;
        --dsw-alias-border-l3: #DDD6CE !important;
        --dsw-alias-border-l4: #9A94A4 !important;
        --dsw-alias-markdown-code-block: #F4EFE9 !important;
        --dsw-alias-markdown-code-block-banner: #EAE3DA !important;
        --dsw-alias-scrollbar-bg-l2: #E6E0D8 !important;
        --dsw-alias-scrollbar-hover-l2: #7C3AED !important;
      }
      body, body[data-ds-dark-theme] { background-color: #FAF8F5 !important; color: #1E1B24 !important; }
      pre, code, [class*="codeBlock"] {
        background-color: #F4EFE9 !important;
        color: #1E1B24 !important;
        border-color: #E6E0D8 !important;
      }
    `
  },
  "light-soft": {
    name: "escook Light Soft (柔和浅色)",
    desc: "清透微晨纯白搭配活力蜜柑亮橙，清爽明亮不刺眼",
    type: "light",
    colorPreview: "#FF6B00",
    bgPreview: "#F8FAFC",
    css: `
      :root, html, body, body[data-ds-dark-theme], [data-theme="escook-light-soft"] {
        --dsw-alias-bg-base: #F8FAFC !important;
        --dsw-alias-bg-layer-1: #F1F5F9 !important;
        --dsw-alias-bg-layer-2: #FFFFFF !important;
        --dsw-alias-bg-mask-1: rgba(0, 0, 0, 0.25) !important;
        --dsw-specific-sidebar-fill: #F1F5F9 !important;
        --dsw-specific-sidebar-nav-item-hover: rgba(255, 107, 0, 0.08) !important;
        --dsw-specific-sidebar-nav-item-active: rgba(255, 107, 0, 0.16) !important;
        --dsw-specific-sidebar-nav-item-active-accent: #FF6B00 !important;
        --dsw-specific-input-major: #FFFFFF !important;
        --dsw-specific-bubble: #FFFFFF !important;
        --dsw-specific-menu: #FFFFFF !important;
        --dsw-hovercard-bg: #FFFFFF !important;
        --dsw-alias-tooltip-bg: #0F172A !important;
        --dsw-alias-button-elevated-fill: #FFFFFF !important;
        --dsw-alias-button-floating-hover: #F1F5F9 !important;
        --dsw-alias-brand-primary: #FF6B00 !important;
        --dsw-alias-button-primary-fill: #FF6B00 !important;
        --dsw-alias-button-primary-hover: #FF8533 !important;
        --dsw-alias-label-primary-foreground: #FFFFFF !important;
        --dsw-alias-label-primary: #0F172A !important;
        --dsw-alias-label-secondary: #475569 !important;
        --dsw-alias-label-tertiary: #64748B !important;
        --dsw-alias-label-dimmed: #94A3B8 !important;
        --dsw-alias-label-caption: #64748B !important;
        --dsw-alias-interactive-bg-hover: rgba(255, 107, 0, 0.08) !important;
        --dsw-alias-interactive-bg-active: rgba(255, 107, 0, 0.15) !important;
        --dsw-alias-border-l1: #E2E8F0 !important;
        --dsw-alias-border-l2: #F1F5F9 !important;
        --dsw-alias-border-l3: #CBD5E1 !important;
        --dsw-alias-border-l4: #94A3B8 !important;
        --dsw-alias-markdown-code-block: #F1F5F9 !important;
        --dsw-alias-markdown-code-block-banner: #E2E8F0 !important;
        --dsw-alias-scrollbar-bg-l2: #E2E8F0 !important;
        --dsw-alias-scrollbar-hover-l2: #FF6B00 !important;
      }
      body, body[data-ds-dark-theme] { background-color: #F8FAFC !important; color: #0F172A !important; }
      pre, code, [class*="codeBlock"] {
        background-color: #F1F5F9 !important;
        color: #0F172A !important;
        border-color: #E2E8F0 !important;
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
    } catch (e) {}
    console.log(`🌸 [dsh-theme-escook] 当前激活配色: ${scheme.name}`);
  }

  let savedScheme = "dark-soft";
  try {
    savedScheme = localStorage.getItem(storageKey) || localStorage.getItem("dsh_selected_theme") || "dark-soft";
  } catch (e) {}

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
