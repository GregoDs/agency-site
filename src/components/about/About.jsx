import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./About.css";

function About({ onNavigate }) {
  return (
    <main className="about-page">
      <Navbar onNavigate={onNavigate} />

      <section className="about-page__story">
        <div className="about-page__index">
          <span>About/</span>
          <p>
            Independent studio
            <br />
            Nairobi · Worldwide
          </p>
        </div>

        <h1>
          Small studio.
          <br />
          <span>Big intent.</span>
        </h1>

        <div className="about-page__narrative">
          <p>
            Gregzz Studio is an independent digital agency built to help
            ambitious brands become clearer, stronger, and more valuable.
          </p>
          <p>
            Our mission is to connect strategy, creativity, and technology in
            ways that create meaningful progress.
          </p>
        </div>

        <div className="about-page__vision">
          <span>Vision/</span>
          <strong>
            Make useful ideas
            <br />
            impossible to ignore.
          </strong>
        </div>

        <div className="about-page__orb" aria-hidden="true">
          <span>Think</span>
          <strong>+</strong>
          <span>Move</span>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </main>
  );
}

export default About;
