import { createUseStyles } from "react-jss";
import { Skill } from "../../../shared/types/Skill";
import { ReactProps } from "../../types/ReactProps";
import { TenureLabel } from "./TenureLabel";

type WorkExperienceRow = ReactProps & {
  companyName: string;
  start: string;
  end: string | null;
  logoUrl: string;
  role: string;
  technologies: Skill[];
};

const LOGO_SIZE = "2rem";

const useStyles = createUseStyles({
  workExperienceRowContainer: {
    display: "flex",
    marginTop: "2rem",
  },
  workTitleContainer: {},
  workLogoContainer: {
    height: LOGO_SIZE,
    width: LOGO_SIZE,
    borderRadius: "50%",
    marginRight: "1rem",
  },
  companyNameWrapper: {
    display: "flex",
    alignItems: "center",
  },
  companyNameText: {
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: LOGO_SIZE,
  },
  text: {
    lineHeight: "1.5",
  },
});

export const WorkExperienceRow: React.FC<WorkExperienceRow> = ({
  companyName,
  start,
  end,
  logoUrl,
  role,
  technologies,
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.workExperienceRowContainer}>
      <img
        className={classes.workLogoContainer}
        src={logoUrl}
        alt={companyName}
      />
      <div className={classes.workTitleContainer}>
        <div className={classes.companyNameWrapper}>
          <span className={classes.companyNameText}>{companyName}</span>
        </div>
        <div className={classes.text}>
          <TenureLabel start={start} end={end} />
        </div>

        <div className={classes.text}>{role}</div>

        <div className={classes.text}>{technologies.join(" • ")}</div>

        <div>{children}</div>
      </div>
    </div>
  );
};
