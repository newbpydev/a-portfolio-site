import { RepoType } from "../../types/github";

type Props = {
  project: RepoType;
};

//* COMPONENT: ProjectItem
export default function ProjectItem({ project }: Props) {
  // output
  return (
    <div>
      <h3>{project.name}</h3>
      <span>{project.language}</span>
      <img
        src={`https://raw.githubusercontent.com/UserName/NameRepo/Branch/NameImg.png`}
        alt=""
      />
    </div>
  );
}
