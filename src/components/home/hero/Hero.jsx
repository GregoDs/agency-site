import { useEffect, useRef, useState } from "react";
import heroVisual from "../../../assets/hero.png";
import "./Hero.css";

const services = ["Strategy", "Design", "Development", "Growth"];

function Hero() {

    //check if user has visited page before via the browser storage
  const [showIntro, setShowIntro] = useState(
    () => !sessionStorage.getItem("gregzz-studio-entered"),
  );
  const [position, setPosition] = useState({ x: 0, y: 0 });

//Use Ref will store data silently and not trigger re render
  const dragState = useRef(null);

  useEffect(() => {
    if (!showIntro) return undefined;

    sessionStorage.setItem("gregzz-studio-entered", "true");
    const timer = window.setTimeout(() => setShowIntro(false), 2700);
    return () => window.clearTimeout(timer);
  }, [showIntro]);

  const startDrag = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragState.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };
  };

  const drag = (event) => {
    if (!dragState.current) return;

    setPosition({
      x: event.clientX - dragState.current.x,
      y: event.clientY - dragState.current.y,
    });
  };

  const stopDrag = () => {
    dragState.current = null;
  };

  return (
    <>
      {showIntro && (
        <div className="hero-intro" aria-label="Entering Gregzz Studio">
          <p>Building digital impact · 2026</p>
          <div className="hero-intro__letters" aria-hidden="true">
            {"R&G".split("").map((letter, index) => (
              <span key={letter + index} style={{ "--letter-index": index }}>
                {letter}
              </span>
            ))}
          </div>
        </div>
      )}

      <main className={`hero${showIntro ? " hero--entering" : ""}`} id="home">
        <div className="hero__eyebrow hero-reveal">
          <span>01/</span>
          <p>
            Independent digital agency
            <br />
            Nairobi · Worldwide
          </p>
        </div>

        <h1 className="hero__headline hero-reveal">
          Creative minds.
          <br />
          Digital results.
        </h1>

        <div
          className="hero__visual hero-reveal"
          style={{ "--drag-x": `${position.x}px`, "--drag-y": `${position.y}px` }}
          onPointerDown={startDrag}
          onPointerMove={drag}
          onPointerUp={stopDrag}
          onPointerCancel={stopDrag}
        >
          <span className="hero__drag-label">
            Dr<span>a</span>g me
          </span>
          <div className="hero__visual-stage">
            <img
              src={heroVisual}
              alt="Abstract layered Gregzz Studio design system"
            />
            <p>Ideas engineered for attention.</p>
            <span>©26</span>
          </div>
        </div>

        <div className="hero__brand hero-reveal">
          <p>Digital agency</p>
          <h2>
            Gregzzz
            <br />
            Studio
          </h2>
        </div>

        <div className="hero__statement hero-reveal">
          <span aria-hidden="true">→</span>
          <p>
            We build bold brands and digital experiences that turn attention
            into growth.
          </p>
        </div>

        <ul className="hero__services hero-reveal" aria-label="Our services">
          {services.map((service, index) => (
            <li key={service}>
              <span>0{index + 1}</span>
              {service}
            </li>
          ))}
        </ul>

        <div className="hero__scroll" aria-hidden="true">
          <span />
          Scroll to explore
        </div>
      </main>
    </>
  );
}

export default Hero;
