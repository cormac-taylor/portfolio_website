import "./styles/Landing.css";
import PropTypes from "prop-types";
import { Lava, TypingEffect } from "./index.js";

const NAME = "cormac taylor";

Landing.propTypes = {
  startTyping: PropTypes.bool.isRequired,
  resetTypingEffect: PropTypes.bool.isRequired,
  setResetTypingEffect: PropTypes.func.isRequired,
};

function Landing({ startTyping, resetTypingEffect, setResetTypingEffect }) {
  return (
    <>
      <Lava />
      <div id="landing_container">
        <div>
          <TypingEffect
            text={NAME}
            startTyping={startTyping}
            resetTypingEffect={resetTypingEffect}
            setResetTypingEffect={setResetTypingEffect}
          />
          <p id="landing_description">
            a highly curious kid studying <br />
            computer science
          </p>
        </div>
      </div>
    </>
  );
}

export default Landing;
