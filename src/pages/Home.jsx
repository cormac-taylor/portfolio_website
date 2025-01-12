import "./styles/Home.css";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Landing,
  About,
  Skills,
  Experiences,
  Projects,
  RotatingGraph,
} from "../components/index.js";

Home.propTypes = {
  startTyping: PropTypes.bool.isRequired,
  setStartTyping: PropTypes.func.isRequired,
};

function Home({ startTyping, setStartTyping }) {
  const [resetTypingEffect, setResetTypingEffect] = useState(false);
  const [skillSubset, setSkillSubset] = useState(null);
  const [renderGraph, setRenderGraph] = useState(null);
  const divRef = useRef(null);

  const location = useLocation();
  useEffect(() => {
    const state = location.state || {};
    if (state.redirected) {
      window.scrollTo(0, 0);
      setResetTypingEffect(true);
      setStartTyping(true);
    }
  }, [setStartTyping, location]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRenderGraph(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect();
  }, [setRenderGraph]);

  return (
    <>
      <RotatingGraph skillSubset={skillSubset} renderGraph={renderGraph} />
      <section className="full_screen_section">
        <Landing
          startTyping={startTyping}
          resetTypingEffect={resetTypingEffect}
          setResetTypingEffect={setResetTypingEffect}
        />
      </section>
      <div className="full_screen_divider"></div>
      <section className="full_screen_section">
        <About />
      </section>
      <div className="full_screen_divider"></div>
      <div ref={divRef}>
        <section className="full_screen_section">
          <Skills />
        </section>
        <section>
          <Experiences setSkillSubset={setSkillSubset} />
          <Projects setSkillSubset={setSkillSubset} />
        </section>
      </div>
    </>
  );
}

export default Home;
