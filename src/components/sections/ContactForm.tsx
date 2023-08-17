// import styled from "@emotion/styled";
import Input from "../form/Input";
import Button from "../buttons/Button";
import { FormEventHandler, useState } from "react";
import Textarea from "../form/Textarea";
import styled from "@emotion/styled";
import validator from "validator";
import WrongIcon from "../ui/social/WrongIcon";
import {
  getRateLimit,
  getRepos,
  getUserLanguages,
} from "../../services/github/gitRepo";

const StyledContactForm = styled.div`
  border-bottom: 1px solid white;
  position: relative;
  padding-top: 6rem;
  padding-bottom: 9rem;

  @media (min-width: 48em) {
  }
  @media (min-width: 90em) {
    /* width: 100%; */
    /* display: flex; */
    max-width: 111rem;
    margin: 0 auto;
  }

  & .form-container {
    min-width: 34.3rem;
    max-width: 44.5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 48em) {
    }
    @media (min-width: 90em) {
      /* min-width: 140rem; */
      /* margin: 0 auto; */
      max-width: 100%;
      flex-direction: row;
      align-items: start;
      justify-content: center;
      gap: 22rem;
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
        min-width: 44.5rem;
      }
      @media (min-width: 90em) {
        width: 44.5rem;
        gap: 3.6rem;
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
          font-size: 8.8rem;
          line-height: 8.8rem;
          letter-spacing: -2.5px;
        }
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
  /* align-items: center; */
  margin: 0 auto;
  min-width: 34.3rem;
  gap: 3.2rem;

  @media (min-width: 48em) {
    min-width: 44.5rem;
  }
  @media (min-width: 90em) {
    min-width: 44.5rem;
    margin: 0;
  }

  & button {
    align-self: end;
  }
`;

const StyledErrorMessage = styled.p`
  position: absolute;
  right: 0rem;
  bottom: -2rem;

  color: var(--color-error);
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: -0.167px;
`;

const StyledInputWrapper = styled.div`
  position: relative;
`;

// *                                 Types                                |
// interface InvalidInput {
//   nameError: string;
//   emailError: string;
//   messageError: string;
// }

//* COMPONENT: ContactForm
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidMessage, setIsValidMessage] = useState(true);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    if (!name && !email && !message) return;

    // Validating Name
    if (!name || name.length < 4 || !name.trim()) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }

    // Validating Message
    if (!message || message.length < 2 || !message.trim()) {
      setIsValidMessage(false);
    } else {
      setIsValidMessage(true);
    }

    // TODO: Come back to finish the submission process
  };

  // getRateLimit();
  // getRepos();
  // getUserLanguages();

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

        <StyledForm onSubmit={handleSubmit}>
          <StyledInputWrapper>
            <Input
              minLength={2}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              isInvalid={!isValidName}
              required
            />
            {!isValidName && (
              <>
                <WrongIcon />
                <StyledErrorMessage>
                  Sorry, invalid format here!
                </StyledErrorMessage>
              </>
            )}
          </StyledInputWrapper>

          <StyledInputWrapper>
            <Input
              placeholder="Email"
              onChange={(e) => {
                const newEmail = e.target.value;
                setEmail(newEmail);
                // validate the email format
                setIsValidEmail(validator.isEmail(newEmail));
              }}
              value={email}
              isInvalid={!isValidEmail}
              required
            />
            {!isValidEmail && (
              <>
                <WrongIcon />
                <StyledErrorMessage>
                  Sorry, invalid format here!
                </StyledErrorMessage>
              </>
            )}
          </StyledInputWrapper>

          <StyledInputWrapper>
            <Textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              isInvalid={!isValidMessage}
              required
            />
            {!isValidMessage && (
              <>
                <WrongIcon />
                <StyledErrorMessage>
                  Sorry, invalid format here!
                </StyledErrorMessage>
              </>
            )}
          </StyledInputWrapper>

          <Button type="submit">Send Message</Button>
        </StyledForm>
      </div>
    </StyledContactForm>
  );
}
