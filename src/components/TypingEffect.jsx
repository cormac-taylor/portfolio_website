import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getRandomInt, playRandomKeystroke } from "../utilities/index.js";

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired,
  startTyping: PropTypes.bool.isRequired,
  resetTypingEffect: PropTypes.bool.isRequired,
  setResetTypingEffect: PropTypes.func.isRequired,
  minTypingSpeed: PropTypes.number,
  maxTypingSpeed: PropTypes.number,
};
function TypingEffect({
  text,
  startTyping,
  resetTypingEffect,
  setResetTypingEffect,
  minTypingSpeed = 300,
  maxTypingSpeed = 400,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (resetTypingEffect) {
      setDisplayedText("");
      setIndex(0);
      setClassName("");
      setResetTypingEffect(false);
    } else if (startTyping && index < text.length) {
      setClassName(() => "");
      const timer = setTimeout(() => {
        playRandomKeystroke();
        setDisplayedText((str) => str + text.charAt(index));
        setIndex((idx) => idx + 1);
      }, getRandomInt(minTypingSpeed, maxTypingSpeed));
      return () => clearTimeout(timer);
    } else {
      setClassName(() => "animate_caret");
    }
  }, [
    text,
    startTyping,
    resetTypingEffect,
    setResetTypingEffect,
    minTypingSpeed,
    maxTypingSpeed,
    index,
    className
  ]);

  return (
    <>
      <h1
        id="landing_title"
        className={
          index === 0 ? "empty_title animate_caret" : `title ${className}`
        }
      >
        {index === 0 ? " " : ""}
        {displayedText}
      </h1>
    </>
  );
}

export default TypingEffect;
