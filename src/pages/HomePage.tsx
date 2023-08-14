import styled from "@emotion/styled";
import Button from "../components/buttons/Button";

const HeroSection = styled.section`
  background-color: gray;
`;

const SkillsSection = styled.section`
  background-color: yellow;
`;

const ProjectsSection = styled.section`
  background-color: pink;
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

      <SkillsSection>Skills</SkillsSection>

      <ProjectsSection>Projects</ProjectsSection>

      <BlogsSection>Blogs</BlogsSection>

      <ContactSection>Contact</ContactSection>
    </>
  );
}
