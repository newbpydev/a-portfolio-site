import styled from "@emotion/styled";
import Button from "../components/buttons/Button";
import SkillsList from "../components/sections/SkillsList";
import ProjectsList from "../components/sections/ProjectsList";

const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  z-index: -10;

  & .img-wrapper {
    position: relative;

    &::before {
      position: absolute;
      top: 2rem;
      left: -37rem;
      content: "";
      width: 530px;
      height: 129px;
      background: url("images/patterns/pattern-rings.svg") no-repeat center
        center/cover;
      z-index: -10;
    }

    &::after {
      position: absolute;
      content: "";
      bottom: 0rem;
      right: -72.5px;
      width: 129px;
      height: 129px;
      background: url("images/patterns/pattern-circle.svg") no-repeat center
        center/cover;
      z-index: -10;
    }
  }

  & h1 {
    font-size: 4rem;
    font-weight: 700;
    color: var(--color-graylight-0);
    line-height: 4rem;
    letter-spacing: -1.136px;

    & span {
      display: inline-block;
      border-bottom: 4px solid var(--color-green-500);
    }
  }
`;

const StyledHeroImg = styled.img`
  /* display: block; */
  margin-top: -10rem;
  width: 17.5rem;

  &::after {
    content: "monkey";
  }
`;

const SkillsSection = styled.section`
  padding: 4rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  border-top: 1px solid var(--color-graylight-0);
  border-bottom: 1px solid var(--color-graylight-0);
`;

const ProjectsSection = styled.section`
  & h2 {
    font-size: var(--text);
  }
`;

const BlogsSection = styled.section`
  background-color: lightsalmon;
`;

const ContactSection = styled.section`
  background-color: greenyellow;
`;

//* COMPONENT: HomePage
export default function HomePage() {
  // output
  return (
    <>
      {/* Hero Section */}
      <HeroSection id="hero-section">
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
      </HeroSection>

      {/* Skills Section */}
      <SkillsSection id="skills-section">
        <SkillsList />
      </SkillsSection>

      {/* Projects Section */}
      <ProjectsSection id="projects-section">
        <h2>Projects</h2>
        <Button>Contact Me</Button>
        <ProjectsList />
      </ProjectsSection>

      {/* Blogs Section */}
      {/* <BlogsSection id="blogs-section">Blogs</BlogsSection> */}

      {/* Contact Section */}
      {/* <ContactSection id="contact-section">Contact</ContactSection> */}
    </>
  );
}
