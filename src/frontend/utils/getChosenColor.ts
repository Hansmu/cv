import { CustomTheme } from "../theme/theme";
import { Color } from "../types/Color";

export const getChosenColor =
  (theme: CustomTheme) =>
  ({ color }: { color: Color }) => {
    return color === Color.Dark ? theme.colors.dark : theme.colors.light;
  };
