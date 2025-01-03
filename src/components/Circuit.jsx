import "./styles/Circuit.css";
import { useEffect, useRef } from "react";
import { euclideanDistance, getAngleRange } from "../utilities/index.js";

const SPEED = 1.75;
const NUM_PARTICLES = 32;

// https://codepen.io/WindOso/pen/PoXBYdb
function Circuit() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const p = [];

    function getParticle(origin_x, origin_y, velocity) {
      const partical = {};
      partical.num_updates = 0;
      partical.x = origin_x;
      partical.y = origin_y;
      partical.velocity = velocity;
      partical.update = () => {
        partical.num_updates++;
        c.strokeStyle = "rgb(57, 152, 252)";
        c.lineWidth = 1.5;
        c.lineCap = "round";
        c.beginPath();
        c.moveTo(partical.x, partical.y);
        partical.x += partical.velocity.x;
        partical.y += partical.velocity.y;
        c.lineTo(partical.x, partical.y);
        c.stroke();

        partical.angle = getAngleRange(
          Math.atan2(partical.velocity.y, partical.velocity.x)
        );
        for (let angle = 0; angle < 2 * Math.PI; angle += Math.PI / 4) {
          if (Math.abs(partical.angle - angle) < 0.001) {
            partical.angle = angle;
            break;
          }
        }
        partical.magnitude = euclideanDistance(
          partical.velocity.x,
          partical.velocity.y
        );

        /* fix edge case so left particales follow rules */

        const ccw = Math.min(
          getAngleRange(partical.angle + Math.PI / 4),
          getAngleRange(velocity.init_angle + Math.PI / 4)
        );
        const cw = Math.max(
          getAngleRange(partical.angle - Math.PI / 4),
          getAngleRange(velocity.init_angle - Math.PI / 4)
        );
        const op = [ccw, cw]; // angle change
        const ch = Math.floor(Math.random() * op.length); // randomly choose change

        // apply change at chance
        if (Math.random() < 1) {
          // if (Math.random() < 0.128 && partical.num_updates % 16 === 0) {
          partical.velocity.x = Math.cos(op[ch]) * partical.magnitude;
          partical.velocity.y = Math.sin(op[ch]) * partical.magnitude;
        }
      };
      return partical;
    }

    // create particles
    function pulse() {
      for (var i = 0; i < NUM_PARTICLES; i++) {
        const init_x = Math.cos((i / 4) * 2 * Math.PI) * SPEED;
        const init_y = Math.sin((i / 4) * 2 * Math.PI) * SPEED;
        p.push(
          getParticle(
            canvas.width / 2, // spawn x point
            canvas.height / 2, // spawn y point
            {
              x: init_x,
              y: init_y,
              init_angle: getAngleRange(Math.atan2(init_y, init_x)),
            }
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
          p[i].x < 0 ||
          p[i].x > canvas.width ||
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
