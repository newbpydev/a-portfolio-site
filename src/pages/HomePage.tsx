import styled from "@emotion/styled";
import Button from "../components/buttons/Button";
import SkillsList from "../components/sections/SkillsList";
import ProjectsList from "../components/sections/ProjectsList";
import ContactForm from "../components/sections/ContactForm";

const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  z-index: 0;
  border-bottom: 1px solid white;

  @media (min-width: 48em) {
    flex-direction: row;
  }
  @media (min-width: 90em) {
  }

  &::before {
    position: absolute;
    top: 2rem;
    left: -37rem;
    content: "";
    width: 530px;
    height: 129px;
    background: url("images/patterns/pattern-rings.svg") no-repeat center
      center/cover;
    z-index: -11;

    @media (min-width: 48em) {
      top: -6rem;
      left: -30rem;
    }
    @media (min-width: 90em) {
    }
  }

  &::after {
    position: absolute;
    content: "";
    top: 15.5rem;
    right: -7.25rem;
    width: 129px;
    height: 129px;
    background: url("images/patterns/pattern-circle.svg") no-repeat center
      center/cover;
    z-index: -10;

    @media (min-width: 48em) {
      z-index: 0;
      top: 28rem;
      right: -9rem;
    }
    @media (min-width: 90em) {
      right: 38rem;
      top: 30rem;
    }
  }

  & .hero-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    margin-bottom: 8rem;

    @media (min-width: 48em) {
      order: 0;
      max-width: 65.75%;
      gap: 0rem;
      align-items: start;
      margin-bottom: 6rem;
    }
    @media (min-width: 90em) {
      margin-bottom: 21.9rem;
    }

    & h1 {
      font-size: 4rem;
      font-weight: 700;
      color: var(--color-graylight-0);
      line-height: 4rem;
      letter-spacing: -1.136px;
      /* margin-bottom: 2.4rem; */

      @media (min-width: 48em) {
        font-size: 7.2rem;
        line-height: 7.2rem;
        letter-spacing: -2.045px;
        margin-bottom: 6rem;
      }
      @media (min-width: 90em) {
        font-size: 8.8rem;
        line-height: 8.8rem;
        letter-spacing: -2.5px;
        margin-bottom: 4.3rem;
      }

      & span {
        display: inline-block;
        border-bottom: 4px solid var(--color-green-500);

        @media (min-width: 48em) {
        }
        @media (min-width: 90em) {
          border-bottom: 6px solid var(--color-green-500);
        }
      }
    }

    & p {
      /* margin-bottom: 2.4rem; */

      @media (min-width: 48em) {
        margin-bottom: 3.4rem;
      }
      @media (min-width: 90em) {
        width: 44.5rem;
        margin-bottom: 6.6rem;
      }
    }
  }

  & .img-wrapper {
    margin: 0 auto;
    z-index: -1;

    @media (min-width: 48em) {
      order: 1;
      /* width: 35rem; */
    }
    @media (min-width: 90em) {
      height: 72rem;
      width: 44.5rem;
    }
  }
`;

const StyledHeroImg = styled.img`
  display: block;
  margin-top: -10rem;
  width: 17.5rem;
  height: 38.3rem;
  /* height: auto; */

  @media (min-width: 48em) {
    margin-top: 0rem;
    position: absolute;
    top: -19rem;
    right: -3rem;
    width: 32.2rem;
    /* width: 35rem; */
    min-height: 60rem;
    z-index: -20;
  }
  @media (min-width: 90em) {
    right: 0rem;
    top: -23rem;
    width: 44.5rem;
    height: 72rem;
  }
`;

const SkillsSection = styled.section`
  position: relative;
  padding: 4rem 0rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  border-top: 1px solid var(--color-graylight-0);
  border-bottom: 1px solid var(--color-graylight-0);

  @media (min-width: 38em) {
    grid-template-columns: repeat(2, 1fr);
    gap: 5.2rem;
    border-bottom: none;
    padding: 4.5rem 0;
  }

  @media (min-width: 80em) {
    grid-template-columns: repeat(3, 1fr);
    padding: 7.2rem 0rem;
  }

  &::before {
    position: absolute;
    background: url("images/patterns/pattern-rings.svg") no-repeat center
      center/cover;
    right: -37rem;
    bottom: -6.4rem;
    content: "";
    width: 53rem;
    height: 12.9rem;

    @media (min-width: 48em) {
      bottom: -3rem;
    }
  }
`;

const ProjectsSection = styled.section`
  padding: 8rem 0rem;

  @media (min-width: 48em) {
    padding: 7rem 0rem 10rem;
  }
  @media (min-width: 90em) {
    padding: 8rem 0rem 14rem;
  }

  & .projects-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;

    @media (min-width: 48em) {
      margin-bottom: 6rem;
    }
    @media (min-width: 90em) {
      margin-bottom: 8rem;
    }

    & h2 {
      color: white;
      font-size: 4rem;
      font-weight: 700;
      line-height: 4rem;
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

  /* & h2 {
    font-size: var(--text);

    @media (min-width: 48em) {
    }
    @media (min-width: 90em) {
    }
  } */
`;

const BlogsSection = styled.section`
  background-color: lightsalmon;
`;

const ContactSection = styled.section`
  width: 100vw;
  background-color: var(--color-graydark-500);

  @media (min-width: 48em) {
    text-align: center;
  }
  @media (min-width: 90em) {
    text-align: left;
    /* width: 100%; */
  }
`;

//* COMPONENT: HomePage
export default function HomePage() {
  // output
  return (
    <>
      {/* Hero Section */}
      <HeroSection id="hero-section" className="container">
        <div className="img-wrapper">
          <picture>
            <source
              media="(min-width: 90em)"
              srcSet="images/profile/image-profile-desktop.webp"
            />
            <source
              media="(min-width: 48em)"
              srcSet="images/profile/image-profile-tablet.webp"
            />

            <StyledHeroImg
              src="images/profile/image-profile-mobile.webp"
              title="A portrait of Juan Gomez"
              alt="A portrait image of Juan Gomez"
            />
          </picture>
        </div>

        <div className="hero-description">
          <h1>
            Nice to meet you! I'm <span>Juan Gomez</span>.
          </h1>

          <p>
            Based in Linhares, Brazil, I'm a Software Engineer and Web Developer
            with a flair for crafting web solutions that resonate. My journey
            spans from teaching English to diving deep into the realms of web
            development. Let's create something impactful together!
          </p>

          <Button>Contact Me</Button>
        </div>
      </HeroSection>

      {/* Skills Section */}
      <SkillsSection id="skills-section" className="container">
        <SkillsList />
      </SkillsSection>

      {/* Projects Section */}
      <ProjectsSection id="projects-section" className="container">
        <div className="projects-heading">
          <h2>Projects</h2>
          <Button>Contact Me</Button>
        </div>
        <ProjectsList />
      </ProjectsSection>

      {/* Blogs Section */}
      {/* <BlogsSection id="blogs-section">Blogs</BlogsSection> */}

      {/* Contact Section */}
      <ContactSection id="contact-section" className="container-bottom">
        <ContactForm />
      </ContactSection>
    </>
  );
}
