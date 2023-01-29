import { Title } from "../Title";
import { Color } from "../../types/Color";
import { EducationRow } from "./EducationRow";
import { Education as EducationIcon } from "../icons/Education";
import { NestedContentContainer } from "../layout/NestedContentContainer";
import { createUseStyles } from "react-jss";
import { Education as EducationType } from "../../../shared/types/Education";

type EducationProps = {
  educations: EducationType[];
};

const useStyles = createUseStyles({
  educationContainer: {
    marginTop: "3rem",
  },
});

export const Education: React.FC<EducationProps> = ({ educations }) => {
  const classes = useStyles();

  return (
    <div className={classes.educationContainer}>
      <Title Icon={EducationIcon} color={Color.Light}>
        Education
      </Title>
      <NestedContentContainer>
        {educations.map((education) => (
          <EducationRow
            key={education.level + education.startYear}
            name={education.name}
            level={education.level}
            speciality={education.speciality}
            startYear={education.startYear}
            endYear={education.endYear}
            thesisTopic={education.thesisTopic}
            thesisLink={education.thesisLink}
            schoolLogoLink={education.schoolLogoLink}
          />
        ))}
      </NestedContentContainer>
    </div>
  );
};
