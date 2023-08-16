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
`;

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

//* COMPONENT: Textarea
export default function Textarea({ ...rest }: Props) {
  // output
  return <StyledTextarea {...rest} />;
}
