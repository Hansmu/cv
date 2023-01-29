import { CustomTheme } from "./theme/theme";

declare global {
  namespace Jss {
    export interface Theme extends CustomTheme {}
  }
}

export {};
