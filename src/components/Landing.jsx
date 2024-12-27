import "./styles/Landing.css";
import PropTypes from "prop-types";
import { Info, Lava, TypingEffect } from "./index.js";
// import { useState } from "react";

const NAME = "Cormac Taylor";
// CORMAC TAYLOR
// Cormac Taylor
// cormac taylor
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
            minTypingSpeed={150}
            maxTypingSpeed={250}
          />
          <p id="landing_description">
            I’m a computer science student at Stevens Institute of Technology. I
            love solving hard problems beautifully.
          </p>
          <Info
            infoTitle="Understanding the Background"
            infoDesc={
              "It's the sum of two 2D trig curves from a moving perspective. One resembles ripples in a still pond, the other rolling hills. Combining them, coloring the heights, and moving the viewpoint, a beautifully organic background emerges."
            }
          />
        </div>
      </div>
    </>
  );
}

export default Landing;
