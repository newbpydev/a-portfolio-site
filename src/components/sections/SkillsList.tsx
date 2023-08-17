import styled from "@emotion/styled";
import skillsData from "../,,/../../data/skills.json";
import { ExperienceTime } from "../../services/dates/experienceTime";
import { Skill } from "../../types/data.skills";

const StyledSkillItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 48em) {
    gap: 1.4rem;
  }
  @media (min-width: 90em) {
  }

  & h3 {
    color: var(--color-graylight-0);
    font-weight: 700;
    font-size: 3.2rem;
    letter-spacing: -1px;
    line-height: 4rem;

    @media (min-width: 48em) {
      font-size: 4.8rem;
      line-height: 5.6rem;
      letter-spacing: -1.5px;
    }
    @media (min-width: 90em) {
    }
  }

  & p {
    font-size: var(----text-sm);
    line-height: 2.6rem;

    @media (min-width: 48em) {
      font-sze: 1.8rem;
    }
    @media (min-width: 90em) {
    }
  }
`;

// const StyledHeading = styled.h3`
// `;

//* COMPONENT: SkillsList
export default function SkillsList() {
  const skills: Skill[] = skillsData;

  // output
  return (
    <>
      {skills.map((skill) => {
        const experienceStr = ExperienceTime(skill.experience);
        return (
          <StyledSkillItem key={skill.id}>
            <h3>{skill.name}</h3>
            <p>{experienceStr}</p>
          </StyledSkillItem>
        );
      })}
    </>
  );
}
