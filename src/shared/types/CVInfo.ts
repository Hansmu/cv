import { Education } from "./Education";
import { PersonInfo } from "./PersonInfo";
import { Skills } from "./Skills";
import { WorkExperience } from "./WorkExperience";

export type CVInfo = {
  personInfo: PersonInfo;
  workExperiences: WorkExperience[];
  skills: Skills;
  educations: Education[];
};
