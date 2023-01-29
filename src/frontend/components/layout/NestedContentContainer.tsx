import { createUseStyles } from "react-jss";
import { ReactProps } from "../../types/ReactProps";

export const NESTING_DISTANCE = "1rem";

const useStyles = createUseStyles({
  nestedContentContainer: {
    marginLeft: NESTING_DISTANCE,
  },
});

export const NestedContentContainer: React.FC<ReactProps> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.nestedContentContainer}>{children}</div>;
};
