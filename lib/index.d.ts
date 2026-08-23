/**
 * dsh-theme-escook TypeScript Interface Definitions
 */

export type EscookThemeType = "dark" | "dark-soft" | "light" | "light-soft";

export interface EscookThemeScheme {
  name: string;
  type: "dark" | "light";
  css: string;
}

export interface EscookThemePluginContext {
  setScheme: (key: EscookThemeType) => void;
  dispose: () => void;
}

export default function activate(context: any): EscookThemePluginContext;
