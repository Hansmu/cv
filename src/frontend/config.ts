enum WorkExperienceMode {
  Description = "description",
  Projects = "projects",
}

const CONFIG = {
  workExperienceMode:
    process.env.workExperienceMode || WorkExperienceMode.Projects,
};

export const isDisplayingProjects = () => {
  return CONFIG.workExperienceMode === WorkExperienceMode.Projects;
};
