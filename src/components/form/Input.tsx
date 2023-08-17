import styled from "@emotion/styled";
import { InputHTMLAttributes } from "react";

const StyledInput = styled.input`
  color: white;
  text-transform: uppercase;
  text-align: left;
  border-bottom: 1px solid white;
  padding: 0rem 2.4rem 1.7rem;
  font-size: 1.6rem;
  letter-spacing: -0.222px;
  width: 100%;

  &::placeholder {
    color: white;
    opacity: 0.5;
  }

  &.invalid {
    border-bottom-color: var(--color-error);
  }
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean;
}

//* COMPONENT: Input
export default function Input({ isInvalid, ...rest }: Props) {
  // output
  return <StyledInput {...rest} className={isInvalid ? "invalid" : ""} />;
}
