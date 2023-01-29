import { createUseStyles } from "react-jss";
import { Link } from "../Link";

const SCHOOL_LINE_HEIGHT = "2rem";

type EducationRowProps = {
  name: string;
  level: string;
  speciality: string;
  startYear: number;
  endYear: number;
  thesisTopic: string;
  thesisLink: string;
  schoolLogoLink: string;
};

const useStyles = createUseStyles({
  educationRowContainer: {
    display: "flex",
    marginBottom: "1rem",
  },
  educationRowTextContainer: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "1.25",
  },
  schoolLogo: {
    borderRadius: "50%",
    border: "1px solid",
    marginRight: "0.5rem",
    height: SCHOOL_LINE_HEIGHT,
  },
  year: {
    marginLeft: "0.5rem",
    fontSize: "0.8rem",
  },
  schoolName: {
    lineHeight: SCHOOL_LINE_HEIGHT,
  },
});

export const EducationRow: React.FC<EducationRowProps> = ({
  name,
  level,
  speciality,
  startYear,
  endYear,
  thesisTopic,
  thesisLink,
  schoolLogoLink,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.educationRowContainer}>
      <div>
        <img className={classes.schoolLogo} src={schoolLogoLink} alt={name} />
      </div>
      <div className={classes.educationRowTextContainer}>
        <span className={classes.schoolName}>
          <span>{name}</span>
          <span className={classes.year}>
            ({startYear} - {endYear})
          </span>
        </span>
        <span>{level}</span>
        <span>{speciality}</span>
        <span>
          <Link href={thesisLink}>{thesisTopic}</Link>
        </span>
      </div>
    </div>
  );
};
