import styled from "@emotion/styled";

type Props = {
  language: string;
};

const StyledProjectLanguageItem = styled.span`
  text-transform: uppercase;
`;

//* COMPONENT: ProjectLanguageItem
export default function ProjectLanguageItem({ language }: Props) {
  // output
  return <StyledProjectLanguageItem>{language}</StyledProjectLanguageItem>;
}
