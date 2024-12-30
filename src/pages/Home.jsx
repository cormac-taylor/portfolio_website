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
      <section className="full_screen_section">
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
    </>
  );
}

export default Home;
