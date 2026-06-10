import "./Services.css";
import leerand from "../../assets/whatwedo/leerand.png";
import brabusOne from "../../assets/whatwedo/brabus1.png";
import brabusTwo from "../../assets/whatwedo/brabus2.png";
import logoOne from "../../assets/logo_brands/Smith-WebArtboard-1.png";
import logoThree from "../../assets/logo_brands/Smith-WebArtboard-3.png";
import logoFive from "../../assets/logo_brands/Smith-WebArtboard-5.png";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const services = [
  {
    number: "01",
    title: "UI/UX Design",
    statement: "Digital products people understand, trust, and choose.",
    description:
      "We turn research and product goals into focused journeys, clear interfaces, and design systems built for consistency.",
    highlights: ["Research", "Product strategy", "Prototyping", "Design systems"],
    image: leerand,
    tone: "violet",
  },
  {
    number: "02",
    title: "Web Design & Development",
    statement: "High-performing websites with a distinct point of view.",
    description:
      "From structure to launch, we combine expressive design with maintainable development and purposeful interaction.",
    highlights: ["Creative direction", "Responsive design", "Development", "Optimization"],
    image: brabusOne,
    tone: "red",
  },
  {
    number: "03",
    title: "Photography & Video Production",
    statement: "Visual stories made to hold attention and build feeling.",
    description:
      "We shape concepts, art direction, and production into strong visual narratives for brands, products, and campaigns.",
    highlights: ["Concepting", "Art direction", "Production", "Post-production"],
    image: brabusTwo,
    tone: "amber",
  },
  {
    number: "04",
    title: "Digital Marketing",
    statement: "Creative campaigns connected to measurable growth.",
    description:
      "We use audience insight, experimentation, and performance data to build marketing systems that improve over time.",
    highlights: ["Campaign strategy", "Paid media", "Content", "Performance"],
    image: logoFive,
    tone: "red",
  },
  {
    number: "05",
    title: "Branding",
    statement: "Identity systems that remain clear as brands evolve.",
    description:
      "We define positioning, voice, and visual language, then turn them into practical systems teams can use confidently.",
    highlights: ["Positioning", "Identity", "Brand systems", "Guidelines"],
    image: logoOne,
    tone: "violet",
  },
  {
    number: "06",
    title: "Print & Graphic Design",
    statement: "Physical communication with clarity, character, and craft.",
    description:
      "We create expressive print and graphic systems that extend a brand beyond the screen without losing consistency.",
    highlights: ["Campaign design", "Editorial", "Packaging", "Print production"],
    image: logoThree,
    tone: "amber",
  },
];

const process = [
  ["01", "Listen", "Understand the ambition, audience, and real challenge."],
  ["02", "Shape", "Build the strategy and define the creative direction."],
  ["03", "Make", "Design, produce, and develop the experience."],
  ["04", "Move", "Launch, measure, learn, and improve performance."],
];

function Services({ onNavigate }) {
  return (
    <main className="services-page">
     
        
        {/* <p>Capabilities · 2026</p> */}
        <Navbar onNavigate={onNavigate} />
    

      <header className="services-page__hero">
        <div className="services-page__index">
          <span>Services/</span>
          <p>Nairobi · Worldwide</p>
        </div>
        <h1>
          Built to
          <br />
          <span>move.</span>
        </h1>
        <p className="services-page__hero-copy">
          One studio connecting strategy, design, content, and technology to
          create meaningful business momentum.
        </p>
      </header>

      <section className="services-list" aria-label="Detailed services">
        {services.map((service) => (
          <article
            className={`services-detail services-detail--${service.tone}`}
            key={service.number}
          >
            <div className="services-detail__visual">
              <span>{service.number}</span>
              <img src={service.image} alt="" />
            </div>
            <div className="services-detail__content">
              <span>{service.number}/</span>
              <h2>{service.title}</h2>
              <h3>{service.statement}</h3>
              <p>{service.description}</p>
              <ul>
                {service.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="services-process">
        <header>
          <span>Process/</span>
          <h2>
            Direction before
            <br />
            <strong>decoration.</strong>
          </h2>
          <p>
            Every engagement is structured around clear decisions, close
            collaboration, and measurable progress.
          </p>
        </header>
        <ol>
          {process.map(([number, title, description]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="services-highlights">
        <p>Designed for ambitious teams</p>
        <div>
          <span>Strategy-led</span>
          <span>Human-centered</span>
          <span>Performance-minded</span>
          <span>Built to scale</span>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </main>
  );
}

export default Services;
