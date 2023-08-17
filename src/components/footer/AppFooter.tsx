import styled from "@emotion/styled";
import Logo from "../ui/logo/Logo";
import SocialNav from "../navbar/SocialNav";

const StyledFooter = styled.footer`
  padding-top: 4rem;
  padding-bottom: 6rem;

  @media (min-width: 40em) {
    padding-top: 3rem;
    padding-bottom: 4rem;
  }

  @media (min-width: 90em) {
    padding-top: 4.7rem;
    padding-bottom: 9.2rem;
  }

  & > div {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* width: 15.4rem; */
    margin: 0 auto;

    @media (min-width: 40em) {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }

    @media (min-width: 90em) {
      max-width: 111rem;
    }
  }
`;

//* COMPONENT: AppFooter
export default function AppFooter() {
  // output
  return (
    <StyledFooter className="container-bottom">
      <div>
        <Logo />

        <SocialNav />
      </div>
    </StyledFooter>
  );
}
