import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme } from "../theme/theme";
import { Color } from "../types/Color";
import { getChosenColor } from "../utils/getChosenColor";

type LineProps = {
  color: Color;
};

const useStyles = createUseStyles((theme) => ({
  titleLine: {
    flexGrow: 1,
    height: "0.2rem",
    margin: "0 0.5rem",
    background: getChosenColor(theme),
  },
}));

export const Line: React.FC<LineProps> = ({ color }) => {
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ color, theme });

  return <span className={classes.titleLine} />;
};
