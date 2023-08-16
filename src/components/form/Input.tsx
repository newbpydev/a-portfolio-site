import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";

const StyledInput = styled.input`
  color: white;
  text-transform: uppercase;
  text-align: left;
  border-bottom: 1px solid white;
  padding: 0rem 2.4rem 1.7rem;
  font-size: var(--text-sm);
  letter-spacing: -0.222px;
  width: 100%;
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  // test: string;
}

//* COMPONENT: Input
export default function Input({ ...rest }: Props) {
  // output
  return <StyledInput {...rest} />;
}
