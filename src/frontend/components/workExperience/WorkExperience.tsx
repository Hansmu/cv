import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme } from "../../theme/theme";
import { Color } from "../../types/Color";
import { Work } from "../icons/Work";
import { NestedContentContainer } from "../layout/NestedContentContainer";
import { Title } from "../Title";
import { WorkExperienceRow } from "./WorkExperienceRow";
import { WorkExperience as WorkExperienceType } from "../../../shared/types/WorkExperience";
import React from "react";

type WorkExperienceProps = {
  workExperiences: WorkExperienceType[];
};

const useStyles = createUseStyles({
  divider: {
    borderTop: ({ theme }) => `0.0625rem solid ${theme.colors.dark}`,
  },
});

export const WorkExperience: React.FC<WorkExperienceProps> = ({
  workExperiences,
}) => {
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ theme });

  return (
    <div>
      <Title Icon={Work} color={Color.Dark}>
        Work experience
      </Title>
      <NestedContentContainer>
        {workExperiences.map((experience) => (
          <React.Fragment key={experience.companyName}>
            <WorkExperienceRow
              companyName={experience.companyName}
              start={experience.start}
              end={experience.end}
              logoUrl={experience.logoUrl}
              role={experience.role}
              technologies={experience.technologies}
            >
              {experience.notes.map((note) => (
                <ul key={note}>
                  <li>{note}</li>
                </ul>
              ))}
            </WorkExperienceRow>
            <hr className={classes.divider} />
          </React.Fragment>
        ))}
      </NestedContentContainer>
    </div>
  );
};
