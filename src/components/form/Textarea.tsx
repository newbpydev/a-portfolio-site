import styled from "@emotion/styled";
import { TextareaHTMLAttributes } from "react";

const StyledTextarea = styled.textarea`
  color: white;
  text-transform: uppercase;
  text-align: left;
  border-bottom: 1px solid white;
  padding: 0rem 2.4rem 1.7rem;
  font-size: var(--text-sm);
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

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean;
}

//* COMPONENT: Textarea
export default function Textarea({ isInvalid, ...rest }: Props) {
  // output
  return <StyledTextarea {...rest} className={isInvalid ? "invalid" : ""} />;
}
