import styled from "@emotion/styled";
import Logo from "../ui/logo/Logo";
import MainNav from "../navbar/MainNav";
import SocialNav from "../navbar/SocialNav";

const StyledFooter = styled.footer`
  padding-top: 4rem;
  padding-bottom: 6rem;

  @media (min-width: 40em) {
    padding-top: 3rem;
    padding-bottom: 4rem;
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
