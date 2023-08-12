import styled from "@emotion/styled";
import MainNav from "../navbar/MainNav";
import SocialNav from "../navbar/SocialNav";
import Logo from "../ui/logo/Logo";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
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
