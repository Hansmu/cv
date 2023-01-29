import { createUseStyles } from "react-jss";
import { Skill } from "../../../shared/types/Skill";
import { ReactProps } from "../../types/ReactProps";

const MILLISECONDS_IN_A_MONTH = 2_629_746_000;

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

const dateFormatter = Intl.DateTimeFormat("en-GB", {
  month: "short",
  year: "numeric",
});

const formatDate = (date: string | null) => {
  if (!date) {
    return "TBA";
  }

  return dateFormatter.format(new Date(date));
};

const getTenure = (startDate: string, endDate: string | null) => {
  const parsedEndDate = endDate ? new Date(endDate) : new Date();
  const durationInMilliseconds =
    parsedEndDate.getTime() - new Date(startDate).getTime();
  const durationInMonths = Math.round(
    durationInMilliseconds / MILLISECONDS_IN_A_MONTH
  );

  return {
    years: Math.floor(durationInMonths / 12),
    months: durationInMonths % 12,
  };
};

const buildTimeLabel = (unit: number, label: string) => {
  if (!unit) {
    return null;
  }

  if (unit === 1) {
    return `${unit} ${label}`;
  }

  return `${unit} ${label}s`;
};

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
  const tenure = getTenure(start, end);

  const tenureLabel = [
    buildTimeLabel(tenure.years, "year"),
    buildTimeLabel(tenure.months, "month"),
  ]
    .filter(Boolean)
    .join(", ");

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
          {tenureLabel} ({formatDate(start)} - {formatDate(end)})
        </div>

        <div className={classes.text}>
          Technologies: {technologies.join(", ")}
        </div>
        <div className={classes.text}>{role}</div>

        <div>{children}</div>
      </div>
    </div>
  );
};
