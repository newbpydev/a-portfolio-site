import styled from "@emotion/styled";
import { RepoType } from "../../types/github";
import Button from "../buttons/Button";
import ProjectLanguageItem from "./ProjectLanguageItem";

const StyledProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;

  & img {
    /* margin-bottom: 2rem; */
  }

  & h3 {
    color: var(--color-graylight-0);
    font-size: var(--text-m);
    font-weight: 700;
    line-height: 3.2rem;
    text-transform: uppercase;
    margin-bottom: 0.7rem;
  }

  & .project-languages {
    display: flex;
    gap: 1.8rem;
  }

  & .project-action-btns {
    display: flex;
    gap: 3.2rem;
  }
`;

type Props = {
  project: RepoType;
};

//* COMPONENT: ProjectItem
export default function ProjectItem({ project }: Props) {
  const languages = ["css", "typescript", "html"];

  // output
  return (
    <StyledProjectItem>
      <img src={`images/thumbnails/thumbnail-project-1-small.webp`} alt="" />

      <div>
        <h3>{project.name}</h3>
        <div className="project-languages">
          {languages.map((language) => (
            <ProjectLanguageItem key={language} language={language} />
          ))}
        </div>
      </div>

      <div className="project-action-btns">
        <Button>View Project</Button>
        <Button>View Code</Button>
      </div>
    </StyledProjectItem>
  );
}
