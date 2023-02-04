import { Project } from "./Project";
import { Skill } from "./Skill";

export type WorkExperience = {
  companyName: string;
  logoUrl: string;
  start: string;
  end: string | null;
  role: string;
  notes: string[];
  technologies: Skill[];
  projects: Project[];
};
