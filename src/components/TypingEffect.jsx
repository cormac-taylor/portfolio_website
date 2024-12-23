import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getRandomInt, playRandomKeystroke } from "../utilities/index.js";

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired,
  class_name: PropTypes.string,
  minTypingSpeed: PropTypes.number,
  maxTypingSpeed: PropTypes.number,
};

function TypingEffect({
  text,
  class_name,
  minTypingSpeed = 300,
  maxTypingSpeed = 400,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        playRandomKeystroke();
        setDisplayedText((str) => str + text.charAt(index));
        setIndex((idx) => idx + 1);
      }, getRandomInt(minTypingSpeed, maxTypingSpeed));
      return () => clearTimeout(timer);
    } else {
      setClassName(() => class_name);
    }
  }, [text, class_name, minTypingSpeed, maxTypingSpeed, index, className]);

  return (
    <>
      <h1 id="landing_title" className={className}>
        {displayedText}
      </h1>
    </>
  );
}

export default TypingEffect;
