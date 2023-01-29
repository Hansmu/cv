import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme } from "../../theme/theme";
import { Skill } from "../../../shared/types/Skill";
import { SkillLevel } from "../../../shared/types/SkillLevel";
import { NESTING_DISTANCE } from "../layout/NestedContentContainer";
import { SkillGroupTitle } from "./SkillGroupTitle";

type SkillGroupProps = {
  level: SkillLevel;
  skills: Skill[];
};

const useStyles = createUseStyles({
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    flexGrow: 1,
  },
  skillsContainer: {
    display: "flex",
  },
  skill: {
    lineHeight: "1.5",
  },
  lineContainer: {
    width: NESTING_DISTANCE,
    display: "flex",
    justifyContent: "center",
  },
  line: {
    background: ({ theme }) => theme.colors.light,
    width: "0.0625rem",
  },
});

export const SkillGroup: React.FC<SkillGroupProps> = ({ level, skills }) => {
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ theme });

  if (!skills.length) {
    return null;
  }

  return (
    <div>
      <SkillGroupTitle title={level} />
      <div className={classes.skillsContainer}>
        <div className={classes.lineContainer}>
          <div className={classes.line} />
        </div>

        <div className={classes.skillsGrid}>
          {skills.map((skill) => (
            <span key={skill} className={classes.skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
