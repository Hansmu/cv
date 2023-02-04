import { Skill } from "./Skill";

export type Project = {
  start: string;
  end: string | null;
  name: string;
  role: string;
  technologies: Skill[];
};
