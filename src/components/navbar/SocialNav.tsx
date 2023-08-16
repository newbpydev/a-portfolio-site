import styled from "@emotion/styled";
import SocialIcon from "../ui/social/SocialIcon";

const StyledSocialDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 15.4rem;
  min-height: 2rem;

  @media (min-width: 48em) {
    min-height: 2.4rem;
    min-width: 19.2rem;
  }
  @media (min-width: 90em) {
  }

  & a {
  }

  & svg {
    display: block;

    fill: var(--color-graylight-0);
    transition: fill 0.2s ease-in-out;

    &:hover {
      fill: var(--color-green-500);
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
        title="Link to Frontend Mentor"
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
