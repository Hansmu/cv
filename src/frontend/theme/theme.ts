export const theme = {
  colors: {
    dark: "#234E70",
    light: "white",
  },
} as const;

export type CustomTheme = typeof theme;
