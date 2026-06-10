import "./Navbar.css";

const navigation = [
  ["Home", "/#home"],
  ["About", "/about"],
  ["Work", "/work"],
  ["Services", "/services"],
  ["Contact", "/#contact"],
];

function Navbar({ onNavigate }) {
  const handleNavigate = (event, target) => {
    event.preventDefault();
    onNavigate(target);
  };

  return (
    <nav className="navbar">
      <a
        className="navbar__logo"
        href="/#home"
        onClick={(event) => handleNavigate(event, "/#home")}
        aria-label="Gregzz Studio home"
      >
        RG<span>.</span>
      </a>

      <div className="navbar__links">
        <span />
        {navigation.map(([label, target]) => (
          <a
            href={target}
            onClick={(event) => handleNavigate(event, target)}
            key={label}
          >
            {label}
          </a>
        ))}
      </div>

      <a className="navbar__contact" href="mailto:hello@gregzz.studio">
        Start a project <span>↗</span>
      </a>
    </nav>
  );
}

export default Navbar;
