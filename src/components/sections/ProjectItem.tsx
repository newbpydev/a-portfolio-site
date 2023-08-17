import styled from "@emotion/styled";
import { RepoType } from "../../types/github";
import Button from "../buttons/Button";
import ProjectLanguageItem from "./ProjectLanguageItem";

const StyledProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;

  @media (min-width: 48em) {
  }
  @media (min-width: 90em) {
    position: relative;
  }

  & img {
    /* margin-bottom: 2rem; */
    @media (min-width: 48em) {
    }
    @media (min-width: 90em) {
      /* z-index: 0; */
      &:hover {
        background-color: rgba(black, 0.5);
      }
    }
  }

  & h3 {
    color: var(--color-graylight-0);
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.2rem;
    text-transform: uppercase;
    margin-bottom: 0.7rem;
    @media (min-width: 48em) {
      font-size: 2.4rem;
    }
    @media (min-width: 90em) {
    }
  }

  & .project-languages {
    display: flex;
    gap: 1.8rem;

    @media (min-width: 48em) {
    }
    @media (min-width: 90em) {
    }
  }

  & .project-action-btns {
    display: flex;
    gap: 3.2rem;

    @media (min-width: 48em) {
    }
    @media (min-width: 90em) {
      position: absolute;
      /* display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; */
      top: 0rem;
      left: 0rem;
      width: 54rem;
      height: 40rem;
      transition: opacity 0.2s ease-out;
      opacity: 0;

      &:hover {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.75);
        opacity: 1;
      }
    }
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
