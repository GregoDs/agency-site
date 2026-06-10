import "./WhatWeDo.css";
import logoOne from "../../../assets/logo_brands/Smith-WebArtboard-1.png";
import logoTwo from "../../../assets/logo_brands/Smith-WebArtboard-2.png";
import logoThree from "../../../assets/logo_brands/Smith-WebArtboard-3.png";
import logoFour from "../../../assets/logo_brands/Smith-WebArtboard-4.png";
import logoFive from "../../../assets/logo_brands/Smith-WebArtboard-5.png";
import logoSix from "../../../assets/logo_brands/Smith-WebArtboard-8.png";
import work1 from "../../../assets/whatwedo/leerand.png";
import work2 from "../../../assets/whatwedo/brabus1.png";

const logos = [logoOne, logoTwo, logoThree, logoFour, logoFive, logoSix];

const projects = [
  {
    title: "Leerand Schools",
    category: "Education platform · Web development",
    description:
      "A clear, welcoming digital home built to connect families with a modern learning community.",
    url: "https://leerandschools.vercel.app",
    logo: work1,
    theme: "violet",
  },
  {
    title: "Form & Function",
    category: "Identity system · Graphic design",
    description:
      "A bold visual identity shaped for consistency across digital, print, and campaign touchpoints.",
    url: "https://benzbygreg.vercel.app",
    logo: work2,
    theme: "ink",
  },
  {
    title: "Forward Campaign",
    category: "Digital advertising · Strategy",
    description:
      "A performance-led campaign system designed to earn attention and convert it into measurable growth.",
    url: "https://vercel.app",
    logo: logoSix,
    theme: "signal",
  },
];

function ProjectCard({ project, index }) {
  return (
    <article className="work-card">
      <a
        className={`work-card__visual work-card__visual--${project.theme}`}
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title} project`}
      >
        <span className="work-card__number">0{index + 1}</span>
        <img src={project.logo} alt="" />
        <span className="work-card__view">View project ↗</span>
      </a>

      <div className="work-card__content">
        <p>{project.category}</p>
        <h3>
          <a href={project.url} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h3>
        <p className="work-card__description">{project.description}</p>
      </div>
    </article>
  );
}

function WhatWeDo({ onNavigate }) {
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="what-we-do" id="work">
      <header className="what-we-do__header">
        <div className="what-we-do__index">
          <span>03/</span>
          <p>
            Selected work
            <br />
            Made to perform
          </p>
        </div>

        <h2>
          Our<br></br> Work
          <br />
          <span>moves<br></br></span> brands.
        </h2>

        {/* <p className="what-we-do__statement">
          We combine strategy, identity, and technology to create work that
          earns attention and delivers lasting value.
        </p> */}
      </header>

      <div className="what-we-do__marquee" aria-label="Selected brand partners">
        <div className="what-we-do__marquee-track">
          {marqueeLogos.map((logo, index) => (
            <img src={logo} alt="" key={`${logo}-${index}`} />
          ))}
        </div>
      </div>

      <div className="what-we-do__grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}

        <div className="what-we-do__more">
          <svg
            className="what-we-do__arrow what-we-do__arrow--one"
            viewBox="0 0 360 190"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="work-arrow-head-one"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" />
              </marker>
            </defs>
            <path
              d="M8 25 C125 8 83 158 210 119 C262 103 295 116 340 155"
              markerEnd="url(#work-arrow-head-one)"
            />
          </svg>

          <svg
            className="what-we-do__arrow what-we-do__arrow--two"
            viewBox="0 0 300 180"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="work-arrow-head-two"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" />
              </marker>
            </defs>
            <path
              d="M18 160 C46 68 125 183 173 91 C199 42 244 54 281 85"
              markerEnd="url(#work-arrow-head-two)"
            />
          </svg>

          <p>
            There is more
            <br />
            behind the work.
          </p>

          <button type="button" onClick={() => onNavigate("/work")}>
            More Work From Us <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
