import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme } from "../theme/theme";
import { ReactProps } from "../types/ReactProps";

type LinkProps = ReactProps & {
  href: string;
};

const useStyles = createUseStyles({
  link: {
    color: ({ theme }) => theme.colors.light,
  },
});

export const Link: React.FC<LinkProps> = ({ children, href }) => {
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ theme });

  return (
    <a className={classes.link} href={href}>
      {children}
    </a>
  );
};
