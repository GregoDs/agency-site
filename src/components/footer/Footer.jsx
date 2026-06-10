import { useEffect, useRef } from "react";
import "./Footer.css";

const quickLinks = [
  ["Home", "/#home"],
  ["About", "/about"],
  ["Work", "/work"],
  ["Services", "/services"],
  ["Contact", "/#contact"],
];

const socials = [
  ["Instagram", "#"],
  ["LinkedIn", "#"],
  ["Behance", "#"],
];

function Footer({ onNavigate }) {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const handleQuickLink = (event, target) => {
    event.preventDefault();
    onNavigate(target);
  };

  return (
    <footer className="site-footer" id="contact" ref={footerRef}>
      <div className="site-footer__ambient" aria-hidden="true">
        <span />
        <span />
      </div>

      <section className="site-footer__cta">
        <p>Need the right mix of capabilities?</p>
        <h2>
          Let&apos;s build
          <br />
          what&apos;s <span>next.</span>
        </h2>
        <a href="mailto:hello@gregzz.studio">
          Start a project <span>↗</span>
        </a>
      </section>

      <div className="site-footer__details">
        <nav className="site-footer__links" aria-label="Footer navigation">
          <p>Quick links/</p>
          {quickLinks.map(([label, target]) => (
            <a
              href={target}
              onClick={(event) => handleQuickLink(event, target)}
              key={label}
            >
              <span>{label}</span>
              <em>↗</em>
            </a>
          ))}
        </nav>

        <div className="site-footer__contact">
          <p>Contact/</p>
          <a href="mailto:hello@gregzz.studio">hello@gregzz.studio</a>
          <span>Nairobi · Working worldwide</span>
        </div>

        <div className="site-footer__socials">
          <p>Social/</p>
          {socials.map(([label, target]) => (
            <a
              href={target}
              onClick={target === "#" ? (event) => event.preventDefault() : undefined}
              key={label}
            >
              {label} <span>↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className="site-footer__bottom">
        <strong>
          RG<span>.</span>
        </strong>
        <p>© 2026 Gregzz Studio. All rights reserved.</p>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;
