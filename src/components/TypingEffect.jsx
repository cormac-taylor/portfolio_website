import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import getRandomInt from "../utilities/getRandomInt.jsx";

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired,
  minTypingSpeed: PropTypes.number,
  maxTypingSpeed: PropTypes.number,
};

// Sound Effect by <a href="https://pixabay.com/users/sennafoxy-17762344/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=14389">Senna</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=14389">Pixabay</a>
function TypingEffect({ text, minTypingSpeed = 50, maxTypingSpeed = 400 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
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
