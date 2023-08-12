import styled from "@emotion/styled";
import MainNav from "../navbar/MainNav";
import SocialNav from "../navbar/SocialNav";

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
      <span>juangomez</span>

      <SocialNav />

      <MainNav />
    </StyledHeader>
  );
}
