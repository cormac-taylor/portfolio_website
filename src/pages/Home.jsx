import "./styles/Home.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Landing, About, Projects, Skills } from "../components/index.js";

Home.propTypes = {
  startTyping: PropTypes.bool.isRequired,
  setStartTyping: PropTypes.func.isRequired,
};

function Home({ startTyping, setStartTyping }) {
  const [resetTypingEffect, setResetTypingEffect] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const state = location.state || {};
    if (state.redirected) {
      window.scrollTo(0, 0);
      setResetTypingEffect(true);
      setStartTyping(true);
    }
  }, [setStartTyping, location]);

  return (
    <>
      <section className="full_screen_section section">
        <Landing
          startTyping={startTyping}
          resetTypingEffect={resetTypingEffect}
          setResetTypingEffect={setResetTypingEffect}
        />
      </section>
      <div className="full_screen_divider"></div>
      <section className="full_screen_section section">
        <About />
      </section>
      <div className="full_screen_divider"></div>
      <section className="full_screen_section section">
        <Skills />
      </section>
      <section className="section">
        <Projects />
      </section>
    </>
  );
}

export default Home;
