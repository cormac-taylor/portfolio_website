import "./styles/Landing.css";
import PropTypes from "prop-types";
import { Info, Lava, TypingEffect } from "./index.js";
// import { useState } from "react";

const NAME = "cormac taylor";

Landing.propTypes = {
  startTyping: PropTypes.bool.isRequired,
  resetTypingEffect: PropTypes.bool.isRequired,
  setResetTypingEffect: PropTypes.func.isRequired,
};

function Landing({ startTyping, resetTypingEffect, setResetTypingEffect }) {
  // const [isLandingPopupOpen, setIsLandingPopupOpen] = useState(false);

  // const handleOpenLandingPopup = () => setIsLandingPopupOpen(true);
  // const handleCloseLandingPopup = () => setIsLandingPopupOpen(false);

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
            I’m a computer science student at Stevens Institute of Technology. I
            love solving hard problems beautifully.
          </p>
          <Info />
        </div>
      </div>
    </>
  );
}

export default Landing;
