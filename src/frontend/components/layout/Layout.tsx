import React from "react";
import { createUseStyles } from "react-jss";
import { DarkContainer } from "./DarkContainer";
import { LightContainer } from "./LightContainer";

const A4_PAGE_WIDTH = "21cm";
const A4_PAGE_HEIGHT = "29.7cm";

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
    gridTemplateRows: "auto 1fr",
    width: A4_PAGE_WIDTH,
    height: A4_PAGE_HEIGHT,
    overflow: "hidden",
  },
});

type LayoutProps = {
  topLeft: JSX.Element;
  topRight: JSX.Element;
  bottomLeft: JSX.Element;
  bottomRight: JSX.Element;
};

export const Layout: React.FC<LayoutProps> = ({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <DarkContainer borderBottom>{topLeft}</DarkContainer>

      <DarkContainer borderLeft borderBottom>
        {topRight}
      </DarkContainer>

      <LightContainer>{bottomLeft}</LightContainer>

      <DarkContainer borderLeft>{bottomRight}</DarkContainer>
    </div>
  );
};
