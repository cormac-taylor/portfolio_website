import "./styles/Home.css";
import TypingEffect from "../components/TypingEffect.jsx";
import PropTypes from "prop-types";

const NAME = "Cormac Taylor";

Home.propTypes = {
  startTyping: PropTypes.bool.isRequired,
  setStartTyping: PropTypes.func.isRequired,
};

function Home({ startTyping, setStartTyping }) {
  return (
    <>
      <section className="full_screen_section section">
        <div id="landing_container">
          <div>
            <TypingEffect
              text={NAME}
              startTyping={startTyping}
              setStartTyping={setStartTyping}
            />
            <p id="landing_description">a highly curious problem solver.</p>
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
