import { useEffect, useRef } from "react";
import Navbar from "../navbar/Navbar";
import Hero from "./hero/Hero";
import WhoWeAre from "./whoweare/WhoWeAre";
import WhatWeDo from "./whatwedo/WhatWeDo";
import ServicesHome from "./home_service/ServicesHome";
import Footer from "../footer/Footer";
import "./Home.css";

function Home({ onNavigate }) {
  const transitionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = transitionRef.current;
    const track = trackRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const mobile = window.matchMedia("(max-width: 760px)");
    let frame;

    const updateTransition = () => {
      frame = undefined;

      if (mobile.matches || prefersReducedMotion.matches) {
        track.style.transform = "";
        return;
      }

      const scrollDistance = section.offsetHeight - window.innerHeight;
      const progress = Math.min(
        Math.max(-section.getBoundingClientRect().top / scrollDistance, 0),
        1,
      );

      track.style.transform = `translate3d(${-progress * window.innerWidth}px, 0, 0)`;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateTransition);
    };

    updateTransition();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="home-transition" ref={transitionRef}>
        <div className="home-transition__sticky">
          <div className="home-transition__track" ref={trackRef}>
            <Hero />
            <WhoWeAre />
          </div>
        </div>
      </div>
      <ServicesHome onNavigate={onNavigate} />
      <WhatWeDo onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </>
  );
}

export default Home;
