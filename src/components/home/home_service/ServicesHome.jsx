import { useEffect, useRef } from "react";
import "./ServicesHome.css";
import leerand from "../../../assets/whatwedo/leerand.png";
import brabusOne from "../../../assets/whatwedo/brabus1.png";
import brabusTwo from "../../../assets/whatwedo/brabus2.png";
import logoOne from "../../../assets/logo_brands/Smith-WebArtboard-1.png";
import logoThree from "../../../assets/logo_brands/Smith-WebArtboard-3.png";
import logoFive from "../../../assets/logo_brands/Smith-WebArtboard-5.png";

const services = [
  {
    title: "UI/UX Design",
    description: "Useful, intuitive product experiences shaped around people.",
    image: leerand,
    tone: "violet",
  },
  {
    title: "Web Design & Development",
    description: "Distinct digital platforms engineered to perform and scale.",
    image: brabusOne,
    tone: "red",
  },
  {
    title: "Photography & Video Production",
    description: "Cinematic visual stories created to hold attention.",
    image: brabusTwo,
    tone: "amber",
  },
  {
    title: "Digital Marketing",
    description: "Data-led campaigns that turn attention into measurable growth.",
    image: logoFive,
    tone: "red",
  },
  {
    title: "Branding",
    description: "Memorable identity systems built for consistency and change.",
    image: logoOne,
    tone: "violet",
  },
  {
    title: "Print & Graphic Design",
    description: "Clear, expressive communication across physical touchpoints.",
    image: logoThree,
    tone: "amber",
  },
];

function ServicesHome({ onNavigate }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const reveals = section.querySelectorAll("[data-service-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    reveals.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-home" id="services" ref={sectionRef}>
      <header className="services-home__header" data-service-reveal>
        <div className="services-home__index">
          <span>03/</span>
          <p>
            What we do
            <br />
            Built around ambition
          </p>
        </div>
        <h2>
          From idea
          <br />
          to <span>impact.</span>
        </h2>
        <p className="services-home__statement">
          This are some of the perks and services we offer to our clients.
        </p>
      </header>

      <div className="services-home__grid">
        {services.map((service, index) => (
          <article
            className={`service-home-card service-home-card--${service.tone}`}
            data-service-reveal
            style={{ "--service-delay": `${index * 70}ms` }}
            key={service.title}
          >
            <div className="service-home-card__visual">
              <span>0{index + 1}</span>
              <img src={service.image} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      <div className="services-home__cta" data-service-reveal>
        <svg viewBox="0 0 360 190" aria-hidden="true">
          <defs>
            <marker
              id="services-arrow-head"
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
            d="M10 28 C110 4 92 151 215 110 C273 91 310 119 344 154"
            markerEnd="url(#services-arrow-head)"
          />
        </svg>
        <p>See how every capability connects.</p>
        <button type="button" onClick={() => onNavigate("/services")}>
          View All Services <span>↗</span>
        </button>
      </div>
    </section>
  );
}

export default ServicesHome;
