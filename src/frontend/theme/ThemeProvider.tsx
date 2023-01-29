import React from "react";
import { ThemeProvider as CustomThemeProvider } from "react-jss";
import { ReactProps } from "../types/ReactProps";
import { theme } from "./theme";

export const ThemeProvider: React.FC<ReactProps> = ({ children }) => {
  return <CustomThemeProvider theme={theme}>{children}</CustomThemeProvider>;
};
