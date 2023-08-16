import styled from "@emotion/styled";
import Logo from "../ui/logo/Logo";
import MainNav from "../navbar/MainNav";
import SocialNav from "../navbar/SocialNav";

const StyledFooter = styled.footer`
  /* background-color: var(--color-graydark-500); */
  /* justify-content: space-between; */
  padding-top: 4rem;
  padding-bottom: 6rem;

  & > div {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15.4rem;
    margin: 0 auto;
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
