import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getRandomInt, playRandomKeystroke } from "../utilities/index.js";

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired,
  minTypingSpeed: PropTypes.number,
  maxTypingSpeed: PropTypes.number,
};

function TypingEffect({ text, minTypingSpeed = 300, maxTypingSpeed = 400 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        playRandomKeystroke();
        setDisplayedText((str) => str + text.charAt(index));
        setIndex((idx) => idx + 1);
      }, getRandomInt(minTypingSpeed, maxTypingSpeed));
      return () => clearTimeout(timer);
    }
  }, [text, minTypingSpeed, maxTypingSpeed, index]);

  return (
    <>
      <h1 id="landing_title">{displayedText}</h1>
    </>
  );
}

export default TypingEffect;
