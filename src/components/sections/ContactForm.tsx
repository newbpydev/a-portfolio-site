import styled from "@emotion/styled";
import Input from "../form/Input";
import Button from "../buttons/Button";
import { useState } from "react";
import Textarea from "../form/Textarea";

const StyledContactForm = styled.div`
  border-bottom: 1px solid white;
  position: relative;
  padding-top: 6rem;
  padding-bottom: 9rem;

  & .form-container {
    min-width: 34.3rem;
    max-width: 44.5rem;
    margin: 0 auto;
  }

  @media (min-width: 48em) {
  }
  @media (min-width: 90em) {
  }

  & .contact-heading {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: var(--text-sm);
    line-height: 2.6rem;
    margin-bottom: 5rem;

    @media (min-width: 48em) {
      font-size: 1.8rem;
      line-height: 2.8rem;
      margin-bottom: 4.8rem;
    }
    @media (min-width: 90em) {
    }

    & h2 {
      color: white;
      font-size: 4rem;
      line-height: 4rem;
      font-weight: 700;
      letter-spacing: -1.136px;

      @media (min-width: 48em) {
        font-size: 7.2rem;
        line-height: 7.2rem;
        letter-spacing: -2.045px;
      }
      @media (min-width: 90em) {
      }
    }
  }

  &::before {
    position: absolute;
    content: "";
    bottom: 9.5rem;
    left: -37rem;
    width: 53rem;
    height: 12.9rem;
    background: url("images/patterns/pattern-rings.svg") no-repeat center
      center/cover;

    @media (min-width: 48em) {
      bottom: 3rem;
    }
    @media (min-width: 90em) {
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 0 auto;
  gap: 3.2rem;

  @media (min-width: 48em) {
  }
  @media (min-width: 90em) {
  }
`;

//* COMPONENT: ContactForm
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [message, setMessage] = useState("");

  // output
  return (
    <StyledContactForm>
      <div className="form-container">
        <div className="contact-heading">
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>

        <StyledForm>
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
            rows={3}
          />

          <Button>Send Message</Button>
        </StyledForm>
      </div>
    </StyledContactForm>
  );
}