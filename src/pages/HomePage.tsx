import styled from "@emotion/styled";
import Button from "../components/buttons/Button";
import SkillsList from "../components/sections/SkillsList";
import ProjectsList from "../components/sections/ProjectsList";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  & h1 {
    font-size: 4rem;
    font-weight: 700;
    color: var(--color-graylight-0);
    line-height: 4rem;
    letter-spacing: -1.136px;

    & span {
      display: inline-block;
      border-bottom: 4px solid var(--color-green-500);
      /* margin-bottom: 1rem; */
      /* line-height: -3rem; */
      /* border-bottom- */
    }
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

const ProjectsSection = styled.section``;

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
      <HeroSection>
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
      <SkillsSection>
        <SkillsList />
      </SkillsSection>

      {/* Projects Section */}
      <ProjectsSection>
        <h2>Projects</h2>
        <Button>Contact Me</Button>
        <ProjectsList />
      </ProjectsSection>

      {/* Blogs Section */}
      <BlogsSection>Blogs</BlogsSection>

      {/* Contact Section */}
      <ContactSection>Contact</ContactSection>
    </>
  );
}
