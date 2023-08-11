import gitHub from "../../assets/images/icon-github.svg";
import fronendMentor from "../../assets/images/icon-frontend-mentor.svg";
import linkedIn from "../../assets/images/icon-linkedin.svg";
import twitter from "../../assets/images/icon-twitter.svg";

type Props = {};

//* COMPONENT: SocialNav
export default function SocialNav({}: Props) {
  // output
  return (
    <div>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src={gitHub} alt="GitHub Icon" />
      </a>

      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src={fronendMentor} alt="Frontend Mentor Icon" />
      </a>

      <a
        href="https://www.linkedin.com/in/juan-gomez-8b05575b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedIn} alt="LinkedIn Icon" />
      </a>

      <a
        href="https://twitter.com/Newb_PyDev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="Twitter Icon" />
      </a>
    </div>
  );
}
