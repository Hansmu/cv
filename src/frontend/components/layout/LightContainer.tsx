import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme } from "../../theme/theme";
import { ReactProps } from "../../types/ReactProps";

const useStyles = createUseStyles({
  lightContainer: ({ theme }) => ({
    background: theme.colors.light,
    color: theme.colors.dark,
    padding: "2rem",
  }),
});

export const LightContainer: React.FC<ReactProps> = ({ children }) => {
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ theme });

  return <div className={classes.lightContainer}>{children}</div>;
};
