import gitHub from "../../assets/images/icon-github.svg";
// import { ReactComponent as Logo } from "../../assets/images/icon-github.svg";
import fronendMentor from "../../assets/images/icon-frontend-mentor.svg";
import linkedIn from "../../assets/images/icon-linkedin.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import styled from "@emotion/styled";
import SocialIcon from "../ui/social/SocialIcon";

const StyledSocialDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 15.4rem;

  & svg {
    fill: var(--color-graylight-0);
    transition: fill 0.2s ease-in-out;

    &:hover {
      fill: var(--color-graylight-400);
    }
  }

  /* height: 2rem; */
`;

type Props = {};

//* COMPONENT: SocialNav
export default function SocialNav({}: Props) {
  // output
  return (
    <StyledSocialDiv>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <SocialIcon media="github" />
      </a>

      <a href="http://" target="_blank" rel="noopener noreferrer">
        <SocialIcon media="frontend-mentor" />
      </a>

      <a
        href="https://www.linkedin.com/in/juan-gomez-8b05575b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon media="linkedin" />
      </a>

      <a
        href="https://twitter.com/Newb_PyDev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon media="twitter" />
      </a>
    </StyledSocialDiv>
  );
}
