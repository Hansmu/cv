import { CVInfo } from "../../shared/types/CVInfo";
import { EncryptionService } from "../services/EncryptionService";

const ENCRYPTERS = [
  new EncryptionService("personInfo"),
  new EncryptionService("workExperiences"),
  new EncryptionService("skills"),
  new EncryptionService("educations"),
] as const;

export const getCvInfo = async (): Promise<CVInfo> => {
  const cvInfo: Partial<CVInfo> = {};

  for (let index = 0; index < ENCRYPTERS.length; index++) {
    const encrypter = ENCRYPTERS[index];
    await encrypter.setCvInfoPropertyValue(cvInfo);
  }

  return cvInfo as CVInfo;
};
