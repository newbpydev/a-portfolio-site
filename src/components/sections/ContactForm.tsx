import styled from "@emotion/styled";

type Props = {};

const StyledContactForm = styled.form`
  border-bottom: 1px solid white;
`;

//* COMPONENT: ContactForm
export default function ContactForm({}: Props) {
  // output
  return <StyledContactForm>ContactForm</StyledContactForm>;
}
