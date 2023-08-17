import styled from "@emotion/styled";
import MainNav from "../navbar/MainNav";
import SocialNav from "../navbar/SocialNav";
import Logo from "../ui/logo/Logo";

const StyledHeader = styled.header`
  margin-top: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 50;

  @media (min-width: 48em) {
    margin-top: 3rem;
    margin-bottom: 9rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    z-index: 50;
    /* margin: 3rem; */
  }

  @media (min-width: 90em) {
    margin-bottom: 12.7rem;
  }

  & .main-nav-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (min-width: 48em) {
      align-items: end;
      gap: 1.5rem;
    }
    @media (min-width: 90em) {
      margin-right: 3rem;
    }
  }
  /* width: 15.4rem; */
`;

//* COMPONENT: AppHeader
export default function AppHeader() {
  // output
  return (
    <StyledHeader className="container">
      <Logo />

      <div className="main-nav-wrapper">
        <SocialNav />

        <MainNav />
      </div>
    </StyledHeader>
  );
}
