export const theme = {
  colors: {
    dark: "#234E70",
    light: "#FBF8BE",
  },
} as const;

export type CustomTheme = typeof theme;
