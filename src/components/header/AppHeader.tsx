import styled from "@emotion/styled";
import MainNav from "../navbar/MainNav";
import SocialNav from "../navbar/SocialNav";
import Logo from "../ui/logo/Logo";

const StyledHeader = styled.header`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 15.4rem;
`;

type Props = {};

//* COMPONENT: AppHeader
export default function AppHeader({}: Props) {
  // output
  return (
    <StyledHeader>
      <Logo />

      <SocialNav />

      <MainNav />
    </StyledHeader>
  );
}
