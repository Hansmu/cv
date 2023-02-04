import { createUseStyles } from "react-jss";
import { Project } from "../../../shared/types/Project";
import { NestedContentContainer } from "../layout/NestedContentContainer";
import { TenureLabel } from "./TenureLabel";

type WorkExperienceProjectsProps = {
  projects: Project[];
};

const useStyles = createUseStyles({
  projectWrapper: {
    margin: "1rem 0",
    lineHeight: "1.5",
    breakInside: "avoid",
  },
  projectName: {
    fontWeight: 600,
  },
});

export const WorkExperienceProjects: React.FC<WorkExperienceProjectsProps> = ({
  projects,
}) => {
  const classes = useStyles();

  return (
    <NestedContentContainer>
      {projects.map((project) => (
        <div key={project.name} className={classes.projectWrapper}>
          <div className={classes.projectName}>{project.name}</div>
          <div>
            <TenureLabel start={project.start} end={project.end} />
          </div>
          <div>{project.role}</div>
          <div>{project.technologies.join(" • ")}</div>
        </div>
      ))}
    </NestedContentContainer>
  );
};
