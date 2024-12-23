import { getRandomInt } from "./index.js";

const MAX_KEYSTROKE_IDX = 5;

// Sound Effect by <a href="https://pixabay.com/users/sennafoxy-17762344/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=14389">Senna</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=14389">Pixabay</a>
function playRandomKeystroke() {
  const audio = new Audio(`/sounds/key${getRandomInt(0, MAX_KEYSTROKE_IDX)}.mp3`);
  audio.play();
}

export default playRandomKeystroke;
