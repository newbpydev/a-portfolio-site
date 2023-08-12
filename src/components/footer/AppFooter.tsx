import styled from "@emotion/styled";
import Logo from "../ui/logo/Logo";
import MainNav from "../navbar/MainNav";
import SocialNav from "../navbar/SocialNav";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 15.4rem;
  margin: 0 auto;
`;

//* COMPONENT: AppFooter
export default function AppFooter() {
  // output
  return (
    <StyledFooter>
      <Logo />

      <SocialNav />
    </StyledFooter>
  );
}
