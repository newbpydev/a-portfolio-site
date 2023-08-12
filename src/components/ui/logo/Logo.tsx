import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledLogo = styled.span`
  color: var(--color-graylight-0);
  transition: color 0.3s ease-in;
  cursor: pointer;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.2rem;
  letter-spacing: -0.333px;

  &:hover {
    color: var(--color-graylight-400);
  }
`;

//* COMPONENT: Logo
export default function Logo() {
  // output
  return (
    <StyledLogo>
      <Link to="/">juangomez</Link>
    </StyledLogo>
  );
}
