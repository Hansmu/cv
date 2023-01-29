import { writeFile, readFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { CVInfo } from "../../shared/types/CVInfo";
import sha256 from "crypto-js/sha256";
import aes from "crypto-js/aes";
import equals from "deep-equal";

const JSON_DIRECTORY = path.join(process.cwd(), "src", "backend", "resources");
const ENCRYPTION_KEY = process.env.encryptionKey;

export enum Data {
  PersonInfo = "personInfo",
  WorkExperiences = "workExperiences",
  Skills = "skills",
  Educations = "educations",
}

type EncryptedFileContent = {
  content: string;
  hash: string;
};

export class EncryptionService<
  CVProperty extends keyof CVInfo,
  CVPropertyValue extends CVInfo[CVProperty]
> {
  private encryptedFileName: string;
  private encryptedFilePath: string;

  private decryptedFileName: string;
  private decryptedFilePath: string;

  constructor(private encryptionFor: CVProperty) {
    this.encryptedFileName = `${this.encryptionFor}.encoded.json`;
    this.encryptedFilePath = `${JSON_DIRECTORY}/${this.encryptedFileName}`;

    this.decryptedFileName = `${this.encryptionFor}.decoded.json`;
    this.decryptedFilePath = `${JSON_DIRECTORY}/${this.decryptedFileName}`;
  }

  setCvInfoPropertyValue = async (cvInfo: Partial<CVInfo>) => {
    cvInfo[this.encryptionFor] = await this.getDecryptedData();
  };

  private getDecryptedData = async (): Promise<CVPropertyValue> => {
    const encryptedFile: EncryptedFileContent | null = this.hasEncryptedFile()
      ? await this.readFileContent<EncryptedFileContent>(this.encryptedFilePath)
      : null;
    const decryptedFile: CVPropertyValue | null = this.hasDecryptedFile()
      ? await this.readFileContent<CVPropertyValue>(this.decryptedFilePath)
      : null;

    if (decryptedFile) {
      const decryptedFileContentHash = sha256(decryptedFile);

      if (
        !encryptedFile ||
        !equals(encryptedFile.hash, decryptedFileContentHash)
      ) {
        const encrypted = aes
          .encrypt(JSON.stringify(decryptedFile), ENCRYPTION_KEY)
          .toString();

        const encryptedContent: EncryptedFileContent = {
          content: encrypted,
          hash: decryptedFileContentHash,
        };

        await writeFile(
          this.encryptedFilePath,
          JSON.stringify(encryptedContent, null, 2)
        );
      }

      return decryptedFile;
    }

    if (encryptedFile) {
      const bytes = aes.decrypt(encryptedFile.content, ENCRYPTION_KEY);
      const decryptedContent: CVPropertyValue = JSON.parse(bytes.toString());

      await writeFile(this.decryptedFilePath, JSON.stringify(decryptedContent));

      return decryptedContent;
    }

    throw new Error(
      "Either the encrypted or decrypted JSON files have to be present. Neither can be found!"
    );
  };

  private readFileContent = async <FileContentType>(
    path
  ): Promise<FileContentType> => {
    const fileContent = await readFile(path, "utf-8");
    return JSON.parse(fileContent);
  };

  private hasEncryptedFile = () => {
    return existsSync(this.encryptedFilePath);
  };

  private hasDecryptedFile = () => {
    return existsSync(this.decryptedFilePath);
  };
}
