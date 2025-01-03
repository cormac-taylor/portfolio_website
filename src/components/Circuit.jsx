import "./styles/Circuit.css";
import { useEffect, useRef } from "react";
import { euclideanDistance, getAngleRange } from "../utilities/index.js";

const SPEED = 1.75;
const NUM_PARTICLES = 32;
const DELTA = Math.PI / 4;
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

        const velocity = partical.velocity;
        const magnitude = euclideanDistance(velocity.x, velocity.y);

        if (velocity.idx !== 1) {
          velocity.idx = 1;
        } else {
          velocity.idx = Math.floor(Math.random() * 2) * 2;
        }

        // apply change at random
        // some how the modulous condition breaks it
        if (Math.random() < 0.128 && partical.num_updates % 16 === 0) {
          velocity.x = Math.cos(velocity.angles[velocity.idx]) * magnitude;
          velocity.y = Math.sin(velocity.angles[velocity.idx]) * magnitude;
        }
      };
      return partical;
    }

    // create particles
    function pulse() {
      for (var i = 0; i < NUM_PARTICLES; i++) {
        const init_x = Math.cos(((i % 4) / 2) * Math.PI) * SPEED;
        const init_y = Math.sin(((i % 4) / 2) * Math.PI) * SPEED;
        const init_angle = getAngleRange(Math.atan2(init_y, init_x));
        p.push(
          getParticle(
            canvas.width / 2, // spawn x point
            canvas.height / 2, // spawn y point
            {
              x: init_x,
              y: init_y,
              angles: [init_angle - DELTA, init_angle, init_angle + DELTA],
              idx: 1,
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
