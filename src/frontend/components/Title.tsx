import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme } from "../theme/theme";
import { ReactProps } from "../types/ReactProps";
import { SvgProps } from "../types/SvgProps";
import { Color } from "../types/Color";
import { getChosenColor } from "../utils/getChosenColor";
import { Line } from "./Line";

type TitleProps = {
  color: Color;
  Icon: React.FC<SvgProps>;
};

const useStyles = createUseStyles<string, Pick<TitleProps, "color">>(
  (theme) => ({
    titleContainer: {
      display: "flex",
      alignItems: "center",
      fontSize: "1.5rem",
      fontWeight: 600,
      margin: "0.5rem 0",
      color: getChosenColor(theme),
    },
    titleIcon: {
      height: "1.5rem",
      fill: getChosenColor(theme),
    },
    title: {
      marginLeft: "0.5rem",
    },
  })
);

export const Title: React.FC<TitleProps & ReactProps> = ({
  children,
  color,
  Icon,
}) => {
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ color, theme });

  return (
    <span className={classes.titleContainer}>
      <Icon className={classes.titleIcon} />
      <span className={classes.title}>{children}</span>

      <Line color={color} />
    </span>
  );
};
