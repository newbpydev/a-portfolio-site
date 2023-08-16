import styled from "@emotion/styled";
import MainNav from "../navbar/MainNav";
import SocialNav from "../navbar/SocialNav";
import Logo from "../ui/logo/Logo";

const StyledHeader = styled.header`
  /* margin: 2rem auto 0; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 48em) {
    margin-top: 3rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    /* margin: 3rem; */
  }

  @media (min-width: 90em) {
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
    }
  }
  /* width: 15.4rem; */
`;

type Props = {};

//* COMPONENT: AppHeader
export default function AppHeader({}: Props) {
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
