import styled from "@emotion/styled";
import skillsData from "../,,/../../data/skills.json";
import { ExperienceTime } from "../../services/dates/experienceTime";
import { Skill } from "../../types/data.skills";

const StyledHeading = styled.h3`
  font-size: var(--text-sm);
`;

//* COMPONENT: SkillsList
export default function SkillsList() {
  const skills: Skill[] = skillsData;

  // output
  return (
    <div>
      {skills.map((skill) => {
        const experienceStr = ExperienceTime(skill.experience);
        // const startingDate = new Date(skill.experience);
        // const currentDate = new Date();
        // const timeDifferenceMs = currentDate - startingDate;

        // const timeDifferenceDays = Math.floor(
        //   timeDifferenceMs / (1000 * 60 * 60 * 24)
        // );
        // console.log(timeDifferenceDays);

        return (
          <div key={skill.id}>
            <StyledHeading>{skill.name}</StyledHeading>
            <p>{experienceStr}</p>
          </div>
        );
      })}
    </div>
  );
}
