import styled from "@emotion/styled";
import { RepoType } from "../../types/github";
import Button from "../buttons/Button";

const StyledProjectItem = styled.div`
  text-align: left;

  & h3 {
    color: var(--color-graylight-0);
    font-size: var(--text-m);
    font-weight: 700;
    line-height: 3.2rem;
    text-transform: uppercase;
  }

  & span {
    text-transform: uppercase;
  }
`;

type Props = {
  project: RepoType;
};

//* COMPONENT: ProjectItem
export default function ProjectItem({ project }: Props) {
  // output
  return (
    <StyledProjectItem>
      <img src={`images/thumbnails/thumbnail-project-1-small.webp`} alt="" />
      <h3>{project.name}</h3>
      <span>{project.language}</span>

      <div>
        <Button>View Project</Button>
        <Button>View Code</Button>
      </div>
    </StyledProjectItem>
  );
}
