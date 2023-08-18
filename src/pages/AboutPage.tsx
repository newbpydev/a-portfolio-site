import styled from "@emotion/styled";

type Props = {};

const StyledAboutPage = styled.section`
  & .title {
    font-size: 4rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: -1.136px;
    margin-bottom: 2rem;
  }

  & .description {
    font-size: 1.6rem;
    line-height: 2.6rem;
    margin-bottom: 1.6rem;
  }
`;

//* COMPONENT: AboutPage
export default function AboutPage({}: Props) {
  // output
  return (
    <StyledAboutPage className="container">
      <h1 className="title">About Me</h1>
      <p className="description">
        Hello! I'm Juan Gomez, a dedicated Software Engineer with an unwavering
        commitment to web development and an enduring spirit for learning. My
        journey is a testament to the belief that our experiences, however
        varied, shape our expertise and vision.
      </p>
      <p className="description">
        My foray into the realm of Information Technology began back in 2010
        when I enrolled in the online program at Phoenix University. Over three
        insightful years, I delved deep into the world of IT Networks, laying
        the foundation for my later endeavors in software engineering. While the
        financial constraints nudged me to take a pause in the third year, the
        fire to excel in this domain was ignited and remained undiminished.
      </p>
      <p className="description">
        During these academic pursuits, I also held the significant
        responsibility of ensuring the cleanliness and upkeep of GDM, a bustling
        Gold and Diamond Merchant factory, from 2000 to 2003. Here, I was
        entrusted with the keys to a facility where millions of dollars in
        merchandise exchanged hands daily. This wasn’t merely a janitorial
        role—it was a lesson in trust, integrity, and accountability. Having the
        privilege of such trust made me realize the profound importance of
        responsibility, no matter the nature of the job.
      </p>
      <p className="description">
        Following this, from 2003 to 2011, I ventured into the security sector.
        Working my way up, I concluded this chapter as a Supervisor at Seton
        Hall University for the prestigious Securitas. My tenure here taught me
        leadership, diligence, and an attention to detail—skills I find
        invaluable as a developer.
      </p>
      <p className="description">
        My 12-year journey as an ESL instructor in Brazil then honed my ability
        to communicate effectively and empathize—traits that are crucial when
        collaborating on complex projects or explaining intricate code.
      </p>
      <p className="description">
        Two years ago, I embarked on a dedicated quest into web development,
        committing no less than 6 hours daily to master a diverse array of
        technologies such as Python, JavaScript, and multiple front-end
        frameworks.
      </p>
      <p className="description">
        Each chapter of my life, from safeguarding precious merchandise,
        imparting knowledge, to crafting intricate code, has been an invaluable
        lesson. My diverse experiences have ingrained in me a unique
        perspective, resilience, and a multifaceted skill set that I bring to
        the world of software engineering.
      </p>
      <p className="description">
        Now, as I immerse myself deeper into the software community, the vast
        canvas of possibilities exhilarates me. I am keen to collaborate,
        innovate, and continue this enriching journey. Dive into my portfolio,
        know my story, and let's shape the digital future together, one line of
        code at a time.
      </p>
    </StyledAboutPage>
  );
}
