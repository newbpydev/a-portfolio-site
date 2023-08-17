import axios from "axios";
import { useEffect, useState } from "react";
import { RepoType } from "../../types/github";
import { projectsData } from "../../data/repoData";
import ProjectItem from "./ProjectItem";
import { getRepo, getRepos } from "../../services/github/gitRepo";
import styled from "@emotion/styled";

const StyledProjectsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media (min-width: 48em) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 6rem;
    column-gap: 2rem;
  }

  @media (min-width: 90em) {
    row-gap: 7rem;
    column-gap: 3rem;
  }
`;

//* COMPONENT: ProjectsList
export default function ProjectsList() {
  const [projects, setProjects] = useState<RepoType[]>(projectsData);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://api.github.com/users/newbpydev/repos`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  //           },
  //         }
  //       );
  //       console.log(res);
  //       const data = await res.data;
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  // output
  // getRepos();

  return (
    <StyledProjectsList>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </StyledProjectsList>
  );
}
