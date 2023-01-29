import { CSSProperties } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme } from "../../theme/theme";
import { ReactProps } from "../../types/ReactProps";

type DarkContainerProps = {
  borderLeft?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderTop?: boolean;
};

const buildBorders = (props: DarkContainerProps) => {
  return Object.entries(props).reduce(
    (styles: CSSProperties, [borderProperty, isEnabled]) => {
      if (!isEnabled) {
        return styles;
      }

      return {
        ...styles,
        [borderProperty]: "5px solid",
      };
    },
    {}
  );
};

const useStyles = createUseStyles<string, DarkContainerProps>({
  container: ({ theme, ...props }) => ({
    background: theme.colors.dark,
    color: theme.colors.light,
    padding: "1.5rem",
    ...buildBorders(props),
  }),
});

export const DarkContainer: React.FC<DarkContainerProps & ReactProps> = ({
  children,
  ...containerProps
}) => {
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ theme, ...containerProps });

  return <div className={classes.container}>{children}</div>;
};
