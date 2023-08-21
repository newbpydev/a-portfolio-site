import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

const StyledButton = styled.button`
  color: white;
  border-bottom: 2px solid var(--color-green-500);
  padding-bottom: 1rem;
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: 2.286px;
  line-height: 2.6rem;
  text-transform: uppercase;
  cursor: pointer;

  transition: color 0.2s ease-in;

  &:hover {
    color: var(--color-green-500);
  }
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

// type Props = {
//   children: ReactNode;
// };

//* COMPONENT: Button
export default function Button({ children, ...rest }: Props) {
  // output
  return <StyledButton {...rest}>{children}</StyledButton>;
}
