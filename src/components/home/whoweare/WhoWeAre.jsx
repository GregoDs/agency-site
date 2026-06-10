import "./WhoWeAre.css";

function WhoWeAre() {
  return (
    <section className="who-we-are" id="about">
      <div className="who-we-are__index">
        <span>02/</span>
        <p>
          Who we are
          <br />
          Built for impact
        </p>
      </div>

      <div className="who-we-are__headline" aria-label="Strategy, design, growth">
        <span>Strategy</span>
        <span className="who-we-are__headline-accent">Design</span>
        <span>Growth</span>
      </div>

      <div className="who-we-are__intro">
        <p className="who-we-are__lead">
          We are an independent digital agency turning ambitious ideas into
          experiences people choose.
        </p>
        <p>
          Data shows us where to move. Creativity makes the move matter.
          Human-centered design keeps every decision useful, intuitive, and
          memorable.
        </p>
      </div>

      <div className="who-we-are__orb" aria-hidden="true">
        <span>Think</span>
        <strong>+</strong>
        <span>Make</span>
      </div>

      {/* <ul className="who-we-are__capabilities" aria-label="Agency capabilities">
        {capabilities.map((capability, index) => (
          <li key={capability}>
            <span>0{index + 1}</span>
            {capability}
          </li>
        ))}
      </ul> */}

      <p className="who-we-are__closing">
        Everything we create is designed to earn attention and drive measurable
        progress.
      </p>

      <div className="who-we-are__progress" aria-hidden="true">
        <span />
        Continue
      </div>
    </section>
  );
}

export default WhoWeAre;
