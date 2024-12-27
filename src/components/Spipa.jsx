import "./styles/Spipa.css";
import { useRef } from "react";

// https://codepen.io/alexandrix/pen/oQOvYp
function Spipa() {
  const canvasRef = useRef(null);
  return (
    <>
      <div id="spipa_frame">
        <canvas ref={canvasRef} id="spipa_canvas"></canvas>
      </div>
    </>
  );
}

export default Spipa;
