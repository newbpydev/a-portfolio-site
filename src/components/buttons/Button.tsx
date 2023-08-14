import styled from "@emotion/styled";
import { ReactNode } from "react";

const StyledButton = styled.button``;

type Props = {
  children: ReactNode;
};

//* COMPONENT: Button
export default function Button({ children }: Props) {
  // output
  return <StyledButton>{children}</StyledButton>;
}
