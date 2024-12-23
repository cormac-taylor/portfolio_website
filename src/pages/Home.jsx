import "./styles/Home.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import TypingEffect from "../components/TypingEffect.jsx";

const NAME = "cormac taylor";

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
        <div id="landing_container">
          <div>
            <TypingEffect
              text={NAME}
              startTyping={startTyping}
              resetTypingEffect={resetTypingEffect}
              setResetTypingEffect={setResetTypingEffect}
            />
            <p id="landing_description">a highly curious problem solver</p>
          </div>
        </div>
      </section>
      <div className="full_screen_divider"></div>
      <section className="full_screen_section section"></section>
      <div className="full_screen_divider"></div>
      <section className="section">
        <h2>Projects</h2>
      </section>
    </>
  );
}

export default Home;
