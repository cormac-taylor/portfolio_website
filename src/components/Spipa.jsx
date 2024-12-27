import "./styles/Spipa.css";
import { useRef } from "react";

// https://codepen.io/alexandrix/pen/oQOvYp
function Spipa() {
  const canvasRef = useRef(null);
  return (
    <>
      <div id="spipa_frame" className="frame">
        <canvas ref={canvasRef} id="spipa_canvas" className="canvas"></canvas>
      </div>
    </>
  );
}

export default Spipa;
