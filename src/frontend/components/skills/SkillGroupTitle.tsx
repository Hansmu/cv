import { createUseStyles } from "react-jss";
import { SkillLevel } from "../../../shared/types/SkillLevel";

const LABEL_MAPPING: Record<SkillLevel, string> = {
  [SkillLevel.Advanced]: "Advanced",
  [SkillLevel.Intermediate]: "Intermediate",
  [SkillLevel.Beginner]: "Beginner",
};

type SkillGroupTitleProps = {
  title: SkillLevel;
};

const useStyles = createUseStyles({
  titleContainer: {
    display: "flex",
    alignItems: "center",
    margin: "0.5rem 0",
    fontSize: "1.25rem",
  },
});

export const SkillGroupTitle: React.FC<SkillGroupTitleProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.titleContainer}>
      <span>{LABEL_MAPPING[title]}</span>
    </div>
  );
};
