import styled from "@emotion/styled";

import img001Desktop from "../assets/images/about-page/about-001-desktop.webp";
import img001Tablet from "../assets/images/about-page/about-001-tablet.webp";
import img001Mobile from "../assets/images/about-page/about-001-mobile.webp";

import img002Desktop from "../assets/images/about-page/about-002-desktop.webp";
import img002Tablet from "../assets/images/about-page/about-002-tablet.webp";
import img002Mobile from "../assets/images/about-page/about-002-mobile.webp";

import img003Desktop from "../assets/images/about-page/about-003-desktop.webp";
import img003Tablet from "../assets/images/about-page/about-003-tablet.webp";
import img003Mobile from "../assets/images/about-page/about-003-mobile.webp";

import img004Desktop from "../assets/images/about-page/about-004-desktop.webp";
import img004Tablet from "../assets/images/about-page/about-004-tablet.webp";
import img004Mobile from "../assets/images/about-page/about-004-mobile.webp";

import img005Desktop from "../assets/images/about-page/about-005-desktop.webp";
import img005Tablet from "../assets/images/about-page/about-005-tablet.webp";
import img005Mobile from "../assets/images/about-page/about-005-mobile.webp";

import img006Desktop from "../assets/images/about-page/about-006-desktop.webp";
import img006Tablet from "../assets/images/about-page/about-006-tablet.webp";
import img006Mobile from "../assets/images/about-page/about-006-mobile.webp";

import img007Desktop from "../assets/images/about-page/about-007-desktop.webp";
import img007Tablet from "../assets/images/about-page/about-007-tablet.webp";
import img007Mobile from "../assets/images/about-page/about-007-mobile.webp";

const StyledAboutPage = styled.section`
  @media (min-width: 48em) {
  }
  @media (min-width: 90em) {
  }
  & .about-title {
    color: white;
    font-size: 4rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: -1.136px;

    padding-bottom: 2.4rem;
    margin-bottom: 8rem;
    border-bottom: 1px solid white;
    @media (min-width: 48em) {
      font-size: 7.2rem;
      line-height: 7.2rem;
      letter-spacing: -2.045px;
      padding-bottom: 4.7rem;
    }
    @media (min-width: 90em) {
      font-size: 8.8rem;
      line-height: 8.8rem;
      letter-spacing: -2.5px;
    }
  }

  & .about-section {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 4rem;

    /* &:nth-child(odd) {
    } */

    @media (min-width: 48em) {
      flex-direction: row;
      margin-bottom: 5.2rem;

      &:nth-of-type(odd) {
        flex-direction: row-reverse;
        & .about-text-wrapper {
          padding-left: 2rem;
        }
      }
      &:nth-of-type(even) {
        & .about-text-wrapper {
          padding-right: 2rem;
        }
      }
    }
    @media (min-width: 90em) {
      margin-bottom: 7.2rem;
    }

    & .about-text-wrapper {
      @media (min-width: 48em) {
      }
      @media (min-width: 90em) {
      }
      & .about-section-title {
        color: white;
        font-weight: 700;
        /* font-size: 2.4rem;
        line-height: 3.2rem; */
        margin-bottom: 0.7rem;
        font-size: 3.2rem;
        line-height: 4rem;
        letter-spacing: -1px;
        /* letter-spacing: -1px; */
        @media (min-width: 48em) {
          /* font-size: 3.2rem;
          line-height: 4rem;
          letter-spacing: -1px; */
          margin-bottom: 1.4rem;
          font-size: 4.8rem;
          line-height: 5.6rem;
          letter-spacing: -1.5px;
        }
        @media (min-width: 90em) {
          font-size: 4.8rem;
          line-height: 5.6rem;
          letter-spacing: -1.5px;
        }
      }

      & .about-description {
        font-size: 1.6rem;
        line-height: 2.6rem;
        margin-bottom: 1.6rem;
        @media (min-width: 48em) {
          font-size: 1.8rem;
          line-height: 2.8rem;
        }
        @media (min-width: 90em) {
        }
      }
    }

    & .about-img {
      display: inline-block;
      min-width: 17.4rem;
      /* height: auto; */
      margin-bottom: 2.4rem;
      @media (min-width: 48em) {
        min-width: 24rem;
        margin-bottom: 0rem;
        /* margin-left: 2rem; */
      }
      @media (min-width: 80em) {
        min-width: 40rem;
        height: 40rem;
      }
    }
  }
`;

//* COMPONENT: AboutPage
export default function AboutPage() {
  // output
  return (
    <StyledAboutPage className="container">
      <h1 className="about-title">About Me</h1>

      <section className="about-section">
        <div className="about-text-wrapper">
          <h2 className="about-section-title">Embarking on the IT Pathway</h2>
          <p className="about-description">
            Hello! I'm Juan Gomez, a dedicated Software Engineer with an
            unwavering commitment to web development and an enduring spirit for
            learning. My journey is a testament to the belief that our
            experiences, however varied, shape our expertise and vision.
          </p>
        </div>

        <picture>
          <source media="(min-width: 90em)" srcSet={img001Desktop} />
          <source media="(min-width: 48em)" srcSet={img001Tablet} />
          <img
            src={img001Mobile}
            alt="illustration of a man looking ahead facing his challenges on a mountain"
            className="about-img"
          />
        </picture>
      </section>

      <section className="about-section">
        <div className="about-text-wrapper">
          <h2 className="about-section-title">
            Academic Pursuits: Laying the Groundwork
          </h2>
          <p className="description">
            My foray into the realm of Information Technology began back in 2010
            when I enrolled in the online program at Phoenix University. Over
            three insightful years, I delved deep into the world of IT Networks,
            laying the foundation for my later endeavors in software
            engineering. While the financial constraints nudged me to take a
            pause in the third year, the fire to excel in this domain was
            ignited and remained undiminished.
          </p>
        </div>

        <picture>
          <source media="(min-width: 90em)" srcSet={img002Desktop} />
          <source media="(min-width: 48em)" srcSet={img002Tablet} />
          <img
            src={img002Mobile}
            alt="Virtual classroom with computer screens showing Phoenix University logo and background network nodes symbolizing IT studies."
            className="about-img"
          />
        </picture>
      </section>

      <section className="about-section">
        <div className="about-text-wrapper">
          <h2 className="about-section-title">
            Trust and Responsibility at GDM
          </h2>
          <p className="description">
            During these academic pursuits, I also held the significant
            responsibility of ensuring the cleanliness and upkeep of GDM, a
            bustling Gold and Diamond Merchant factory, from 2000 to 2003. Here,
            I was entrusted with the keys to a facility where millions of
            dollars in merchandise exchanged hands daily. This wasn’t merely a
            janitorial role—it was a lesson in trust, integrity, and
            accountability. Having the privilege of such trust made me realize
            the profound importance of responsibility, no matter the nature of
            the job.
          </p>
        </div>

        <picture>
          <source media="(min-width: 90em)" srcSet={img003Desktop} />
          <source media="(min-width: 48em)" srcSet={img003Tablet} />
          <img
            src={img003Mobile}
            alt="Exterior of GDM factory with Juan Gomez holding a key, shimmering glimpses of gold and diamonds in the backdrop, signifying trust and responsibility."
            className="about-img"
          />
        </picture>
      </section>

      <section className="about-section">
        <div className="about-text-wrapper">
          <h2 className="about-section-title">
            Guarding and Leading: My Tenure at Securitas
          </h2>
          <p className="description">
            Following this, from 2003 to 2011, I ventured into the security
            sector. Working my way up, I concluded this chapter as a Supervisor
            at Seton Hall University for the prestigious Securitas. My tenure
            here taught me leadership, diligence, and an attention to
            detail—skills I find invaluable as a developer.
          </p>
        </div>

        <picture>
          <source media="(min-width: 90em)" srcSet={img004Desktop} />
          <source media="(min-width: 48em)" srcSet={img004Tablet} />
          <img
            src={img004Mobile}
            alt="Seton Hall University grounds with Juan Gomez in a supervisory uniform leading a team of security personnel."
            className="about-img"
          />
        </picture>
      </section>

      <section className="about-section">
        <div className="about-text-wrapper">
          <h2 className="about-section-title">
            Empathy and Communication: The ESL Chapter
          </h2>
          <p className="description">
            My 12-year journey as an ESL instructor in Brazil then honed my
            ability to communicate effectively and empathize—traits that are
            crucial when collaborating on complex projects or explaining
            intricate code.
          </p>
        </div>

        <picture>
          <source media="(min-width: 90em)" srcSet={img005Desktop} />
          <source media="(min-width: 48em)" srcSet={img005Tablet} />
          <img
            src={img005Mobile}
            alt="Brazilian classroom with Juan Gomez instructing diverse students, chalkboard displaying English words and Brazilian symbols."
            className="about-img"
          />
        </picture>
      </section>

      <section className="about-section">
        <div className="about-text-wrapper">
          <h2 className="about-section-title">
            Diving Deep into Web Development
          </h2>
          <p className="description">
            Two years ago, I embarked on a dedicated quest into web development,
            committing no less than 6 hours daily to master a diverse array of
            technologies such as Python, JavaScript, and multiple front-end
            frameworks.
          </p>
        </div>

        <picture>
          <source media="(min-width: 90em)" srcSet={img006Desktop} />
          <source media="(min-width: 48em)" srcSet={img006Tablet} />
          <img
            src={img006Mobile}
            alt="An image of desk, with a monitor, keyboard and mouse on it. The computer is on, the monitor is on a coding app."
            className="about-img"
          />
        </picture>
      </section>

      <section className="about-section">
        <div className="about-text-wrapper">
          <h2 className="about-section-title">
            Embracing the Future of Software
          </h2>
          <p className="description">
            Each chapter of my life, from safeguarding precious merchandise,
            imparting knowledge, to crafting intricate code, has been an
            invaluable lesson. My diverse experiences have ingrained in me a
            unique perspective, resilience, and a multifaceted skill set that I
            bring to the world of software engineering.
          </p>
        </div>

        <picture>
          <source media="(min-width: 90em)" srcSet={img007Desktop} />
          <source media="(min-width: 48em)" srcSet={img007Tablet} />
          <img
            src={img007Mobile}
            alt="Convergence of a key, security badge, chalkboard, and code lines leading to a digital horizon, symbolizing [Your Name]'s journey in software engineering."
            className="about-img"
          />
        </picture>
      </section>

      <section className="about-section">
        <div className="about-text-wrapper">
          <h2 className="about-section-title"></h2>
          <p className="description">
            Now, as I immerse myself deeper into the software community, the
            vast canvas of possibilities exhilarates me. I am keen to
            collaborate, innovate, and continue this enriching journey. Dive
            into my portfolio, know my story, and let's shape the digital future
            together, one line of code at a time.
          </p>
        </div>

        {/* <picture>
          <source media="(min-width: 90em)" srcSet={img001Desktop} />
          <source media="(min-width: 48em)" srcSet={img001Tablet} />
          <img
            src={img001Mobile}
            alt="illustration of a man looking ahead facing his challenges on a mountain"
            className="about-img"
          />
        </picture> */}
      </section>
    </StyledAboutPage>
  );
}
