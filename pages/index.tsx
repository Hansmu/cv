import { GetServerSideProps } from "next";
import { getCvInfo } from "../src/backend/functions/getCvInfo";
import { Contacts } from "../src/frontend/components/contacts/Contacts";
import { Education } from "../src/frontend/components/education/Education";
import { Introduction } from "../src/frontend/components/introduction";
import { Layout } from "../src/frontend/components/layout/Layout";
import { Skills } from "../src/frontend/components/skills/Skills";
import { WorkExperience } from "../src/frontend/components/workExperience/WorkExperience";
import { CVInfo } from "../src/shared/types/CVInfo";

type Props = {
  cvInfo: CVInfo;
};

export default function CV({ cvInfo }: Props) {
  const introduction = (
    <Introduction
      fullName={cvInfo.personInfo.fullName}
      title={cvInfo.personInfo.title}
      base64Image={cvInfo.personInfo.base64Image}
      about={cvInfo.personInfo.about}
    />
  );

  const contacts = (
    <Contacts
      email={cvInfo.personInfo.contacts.email}
      phone={cvInfo.personInfo.contacts.phone}
      linkedIn={cvInfo.personInfo.contacts.linkedIn}
      github={cvInfo.personInfo.contacts.github}
    />
  );

  const skillsAndEducation = (
    <div>
      <Skills skills={cvInfo.skills} />
      <Education educations={cvInfo.educations} />
    </div>
  );

  return (
    <Layout
      topLeft={introduction}
      topRight={contacts}
      bottomLeft={<WorkExperience workExperiences={cvInfo.workExperiences} />}
      bottomRight={skillsAndEducation}
    />
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const cvInfo = await getCvInfo();

  return {
    props: {
      cvInfo,
    },
  };
};
