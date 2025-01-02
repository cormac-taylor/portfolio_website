import "./styles/Circuit.css";
import { useEffect, useRef } from "react";

const SPEED = 1.5;
const NUM_PARTICLES = 16;

// https://codepen.io/WindOso/pen/PoXBYdb
function Circuit() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const p = [];

    function getParticle(x, y, speed, style) {
      const partical = {};
      partical.x = x;
      partical.y = y;
      partical.speed = speed;
      partical.update = () => {
        c.strokeStyle = style;
        c.lineWidth = 1.5;
        c.lineCap = "round";
        c.beginPath();
        c.moveTo(partical.x, partical.y);
        partical.x += partical.speed.x;
        partical.y += partical.speed.y;
        c.lineTo(partical.x, partical.y);
        c.stroke();
        partical.ang = Math.atan2(partical.speed.y, partical.speed.x);
        partical.mag = Math.sqrt(partical.speed.x ** 2 + partical.speed.y ** 2);

        var op = [partical.ang + Math.PI / 4, partical.ang - Math.PI / 4]; // angle change
        var ch = Math.floor(Math.random() * op.length); // randomly choose change
        // apply change at chance

        /* restrict moving angle pi/2 from inital direction */
        if (Math.random() < 0.008) {
          // if (partical.x % 4 === 0 && partical.y % 4 === 0) {
          partical.speed.x = Math.cos(op[ch]) * partical.mag;
          partical.speed.y = Math.sin(op[ch]) * partical.mag;
        }
      };
      return partical;
    }

    // create particles
    function pulse() {
      for (var i = 0; i < NUM_PARTICLES; i++) {
        p.push(
          getParticle(
            canvas.width / 2, // spawn x point
            canvas.height / 2, // spawn y point
            {
              x: Math.cos((i / 4) * 2 * Math.PI) * SPEED,
              y: Math.sin((i / 4) * 2 * Math.PI) * SPEED,
            },
            "rgb(57, 152, 252)" // color of paths
          )
        );
      }
    }

    // update cavas and remove particals once out of bounds
    function gameMove() {
      requestAnimationFrame(gameMove);
      for (var i = 0; i < p.length; i++) {
        p[i].update();
        if (
          p[i].x < canvas.width / 6 ||
          p[i].x > 5 * (canvas.width / 6) ||
          p[i].y < 0 ||
          p[i].y > canvas.height
        ) {
          p.splice(i, 1);
        }
      }
    }

    pulse();
    gameMove();
  }, []);
  return (
    <>
      <div className="frame">
        <canvas ref={canvasRef} className="canvas"></canvas>
      </div>
    </>
  );
}

export default Circuit;
