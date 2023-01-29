import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme } from "../../theme/theme";
import { SkillLevel } from "../../../shared/types/SkillLevel";

const LABEL_MAPPING: Record<SkillLevel, string> = {
  [SkillLevel.Advanced]: "Advanced",
  [SkillLevel.Intermediate]: "Intermediate",
  [SkillLevel.Beginner]: "Beginner",
};

export const LABEL_FONT_SIZE_MAPPING: Record<SkillLevel, string> = {
  [SkillLevel.Advanced]: "1.5rem",
  [SkillLevel.Intermediate]: "1.2rem",
  [SkillLevel.Beginner]: "1rem",
};

type SkillGroupTitleProps = {
  title: SkillLevel;
};

const useStyles = createUseStyles<string, SkillGroupTitleProps>((theme) => ({
  titleContainer: {
    display: "flex",
    alignItems: "center",
    margin: "0.5rem 0",
    fontSize: "1.25rem",
  },
  starsContainer: {
    position: "relative",
    height: "0.0625rem",
    background: theme.colors.light,
    flexGrow: 1,
    margin: "0 0.5rem",
  },
}));

export const SkillGroupTitle: React.FC<SkillGroupTitleProps> = ({ title }) => {
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ theme, title });

  return (
    <div className={classes.titleContainer}>
      <span>{LABEL_MAPPING[title]}</span>
    </div>
  );
};
