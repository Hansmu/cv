import { Tools } from "../icons/Tools";
import { Title } from "../Title";
import { Color } from "../../types/Color";
import { SkillGroup } from "./SkillGroup";
import { NestedContentContainer } from "../layout/NestedContentContainer";
import { Skills as SkillsType } from "../../../shared/types/Skills";
import { SkillLevel } from "../../../shared/types/SkillLevel";

type SkillsProps = {
  skills: SkillsType;
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <>
      <Title Icon={Tools} color={Color.Light}>
        Skills
      </Title>

      <NestedContentContainer>
        {Object.entries(skills).map(([level, skills]) => (
          <SkillGroup key={level} level={level as SkillLevel} skills={skills} />
        ))}
      </NestedContentContainer>
    </>
  );
};
