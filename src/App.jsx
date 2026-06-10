import { useEffect, useState } from "react";
import Home from "./components/home/home";
import Works from "./components/works/Works";
import Services from "./components/services/Services";
import About from "./components/about/About";
import "./App.css";

const transitionCopy = {
  "/work": ["Selected Work", "Making ideas move."],
  "/services": ["Our Capabilities", "Turning ambition into impact."],
  "/about": ["Our Story", "Built around ambition."],
  default: ["Gregzz Studio", "Back to where ideas begin."],
};

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [transition, setTransition] = useState("idle");
  const [destination, setDestination] = useState("/");

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
      window.setTimeout(() => {
        if (window.location.hash) {
          document.querySelector(window.location.hash)?.scrollIntoView();
        } else {
          window.scrollTo(0, 0);
        }
      }, 50);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (target) => {
    if (transition !== "idle") return;

    const destinationUrl = new URL(target, window.location.origin);
    const nextPath = destinationUrl.pathname;
    const nextHash = destinationUrl.hash;

    setDestination(target);
    setTransition("entering");

    window.setTimeout(() => {
      window.history.pushState({}, "", `${nextPath}${nextHash}`);
      setPath(nextPath);

      window.setTimeout(() => {
        if (nextHash) {
          document.querySelector(nextHash)?.scrollIntoView();
        } else {
          window.scrollTo(0, 0);
        }
      }, 50);

      setTransition("leaving");
    }, 700);

    window.setTimeout(() => setTransition("idle"), 1450);
  };

  return (
    <>
      {path === "/work" ? (
        <Works onNavigate={navigate} />
      ) : path === "/services" ? (
        <Services onNavigate={navigate} />
      ) : path === "/about" ? (
        <About onNavigate={navigate} />
      ) : (
        <Home onNavigate={navigate} />
      )}

      {transition !== "idle" && (
        <div
          className={`page-gate page-gate--${transition} ${
            destination.startsWith("/services") ? "page-gate--services" : ""
          }`}
          aria-hidden="true"
        >
          <span>
            Gregzz Studio ·{" "}
            {(transitionCopy[new URL(destination, window.location.origin).pathname] ||
              transitionCopy.default)[0]}
          </span>
          <strong>
            {(transitionCopy[new URL(destination, window.location.origin).pathname] ||
              transitionCopy.default)[1]}
          </strong>
          <div className="page-gate__line" />
        </div>
      )}
    </>
  );
}

export default App;
