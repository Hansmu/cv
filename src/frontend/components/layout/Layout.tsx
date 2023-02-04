import React from "react";
import { createUseStyles } from "react-jss";
import { isDisplayingProjects } from "../../config";
import { DarkContainer } from "./DarkContainer";
import { LightContainer } from "./LightContainer";

const A4_PAGE_WIDTH = "21cm";
const A4_PAGE_HEIGHT_IN_CM = 29.7;

const NUMBER_OF_A4_PAGES_REQUIRED = isDisplayingProjects() ? 2 : 1;

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
    gridTemplateRows: "auto 1fr",
    width: A4_PAGE_WIDTH,
    height: `${NUMBER_OF_A4_PAGES_REQUIRED * A4_PAGE_HEIGHT_IN_CM}cm`,
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
