import styled from "@emotion/styled";
import SocialIcon from "../ui/social/SocialIcon";

const StyledSocialDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 15.4rem;
  min-height: 2rem;

  & a {
  }

  & svg {
    display: block;

    fill: var(--color-graylight-0);
    transition: fill 0.2s ease-in-out;

    &:hover {
      fill: var(--color-graylight-400);
    }
  }

  /* height: 2rem; */
`;

//* COMPONENT: SocialNav
export default function SocialNav() {
  // output
  return (
    <StyledSocialDiv>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to GitHub"
      >
        <SocialIcon media="github" />
      </a>

      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to Fronend Mentor"
      >
        <SocialIcon media="frontend-mentor" />
      </a>

      <a
        href="https://www.linkedin.com/in/juan-gomez-8b05575b/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to LinkedIn"
      >
        <SocialIcon media="linkedin" />
      </a>

      <a
        href="https://twitter.com/Newb_PyDev"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to Twitter"
      >
        <SocialIcon media="twitter" />
      </a>
    </StyledSocialDiv>
  );
}