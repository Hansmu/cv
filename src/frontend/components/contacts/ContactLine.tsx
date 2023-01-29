import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme } from "../../theme/theme";
import { ReactProps } from "../../types/ReactProps";
import { SvgProps } from "../../types/SvgProps";

type ContactLineProps = ReactProps & {
  Icon: React.FC<SvgProps>;
};

const useStyles = createUseStyles({
  contactLineContainer: {
    display: "flex",
    alignItems: "center",
    lineHeight: 3,
  },
  contactLineIcon: {
    height: "24px",
    width: "24px",
    fill: ({ theme }) => theme.colors.light,
  },
  textWrapper: {
    marginLeft: "0.5rem",
  },
});

export const ContactLine: React.FC<ContactLineProps> = ({ Icon, children }) => {
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ theme });

  return (
    <span className={classes.contactLineContainer}>
      <Icon className={classes.contactLineIcon} />
      <span className={classes.textWrapper}>{children}</span>
    </span>
  );
};
