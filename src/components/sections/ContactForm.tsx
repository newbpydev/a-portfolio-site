import styled from "@emotion/styled";
import Input from "../form/Input";
import Button from "../buttons/Button";
import { useState } from "react";
import Textarea from "../form/Textarea";

type Props = {};

const StyledContactForm = styled.div`
  border-bottom: 1px solid white;

  padding-top: 6rem;
  padding-bottom: 9rem;
`;

//* COMPONENT: ContactForm
export default function ContactForm({}: Props) {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [message, setMessage] = useState("");

  // output
  return (
    <StyledContactForm>
      <div>
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>

      <form>
        <Input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <Input
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />

        <Textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button>Send Message</Button>
      </form>
    </StyledContactForm>
  );
}
