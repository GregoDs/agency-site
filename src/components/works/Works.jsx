import "./Works.css";
import leerand from "../../assets/whatwedo/leerand.png";
import brabusOne from "../../assets/whatwedo/brabus1.png";
import brabusTwo from "../../assets/whatwedo/brabus2.png";
import logoOne from "../../assets/logo_brands/Smith-WebArtboard-1.png";
import logoThree from "../../assets/logo_brands/Smith-WebArtboard-3.png";
import logoFive from "../../assets/logo_brands/Smith-WebArtboard-5.png";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const projects = [
  {
    title: "Leerand Schools",
    category: "Education platform · Web development · UI/UX",
    year: "2026",
    description:
      "A complete digital presence that helps families understand the school, discover its programs, and take the next step with confidence.",
    url: "https://leerandschools.vercel.app",
    image: leerand,
    tone: "light",
  },
  {
    title: "Brabus Digital",
    category: "Automotive experience · Creative development",
    year: "2026",
    description:
      "A cinematic automotive experience pairing decisive interaction design with an interface built around performance and movement.",
    url: "https://benzbygreg.vercel.app",
    image: brabusOne,
    tone: "dark",
  },
  {
    title: "Beyond Boundaries",
    category: "Campaign concept · Digital advertising",
    year: "2026",
    description:
      "An expressive campaign direction designed to turn a product story into a memorable, high-energy digital moment.",
    url: "https://benzbygreg.vercel.app",
    image: brabusTwo,
    tone: "dark",
  },
  {
    title: "Signal Identity",
    category: "Brand strategy · Graphic design",
    year: "2026",
    description:
      "A flexible identity system shaped to remain unmistakable across campaigns, products, and everyday brand communication.",
    url: "https://vercel.app",
    image: logoOne,
    tone: "brand",
  },
  {
    title: "Human Interface",
    category: "Product strategy · UI/UX design",
    year: "2026",
    description:
      "A human-centered product concept that turns complex information into focused journeys and useful decisions.",
    url: "https://vercel.app",
    image: logoThree,
    tone: "paper",
  },
  {
    title: "Forward",
    category: "Marketing strategy · Digital advertising",
    year: "2026",
    description:
      "A performance-led campaign system built to connect creative experimentation with measurable business growth.",
    url: "https://vercel.app",
    image: logoFive,
    tone: "signal",
  },
];

const approach = [
  ["01", "Discover", "We find the opportunity beneath the brief."],
  ["02", "Define", "We align strategy, audience, and ambition."],
  ["03", "Create", "We turn the direction into a distinct experience."],
  ["04", "Improve", "We learn from performance and sharpen the work."],
];

function Works({ onNavigate }) {
  return (
    <main className="works-page">
      <Navbar onNavigate={onNavigate} />

      <header className="works-intro">
        <div className="works-intro__index">
          <span>Works/</span>
          <p>Nairobi · Worldwide</p>
        </div>
        <h1>
          Ideas made
          <br />
          <span>visible.</span>
        </h1>
        <p className="works-intro__statement">
          We build identities, platforms, and campaigns designed to move people
          and businesses forward.
        </p>
      </header>

      <section className="works-projects" aria-label="Featured projects">
        {projects.map((project, index) => (
          <article className="works-project" key={project.title}>
            <a
              className={`works-project__visual works-project__visual--${project.tone}`}
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              <span>0{index + 1}</span>
              <img src={project.image} alt={`${project.title} project preview`} />
              <em>Explore project ↗</em>
            </a>
            <div className="works-project__meta">
              <p>{project.category}</p>
              <span>{project.year}</span>
            </div>
            <h2>{project.title}</h2>
            <p className="works-project__description">{project.description}</p>
          </article>
        ))}
      </section>

      <section className="works-approach">
        <div className="works-approach__heading">
          <span>Approach/</span>
          <h2>
            Clear thinking.
            <br />
            <strong>Bold execution.</strong>
          </h2>
        </div>
        <ol>
          {approach.map(([number, title, description]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <Footer onNavigate={onNavigate} />
    </main>
  );
}

export default Works;
