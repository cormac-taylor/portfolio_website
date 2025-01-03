import "./styles/Circuit.css";
import { useEffect, useRef } from "react";
import { euclideanDistance, getAngle } from "../utilities/index.js";

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

        // change angle randomly
        if (Math.random() < 0.128 && partical.num_updates % 16 === 0) {
          let validAngles;
          if (partical.velocity.cur_angle === partical.velocity.init_angle) {
            validAngles = [
              partical.velocity.init_angle - 1,
              partical.velocity.init_angle + 1,
            ];
          } else {
            validAngles = [partical.velocity.init_angle];
          }

          const i = Math.floor(Math.random() * validAngles.length);

          const magnitude = euclideanDistance(
            partical.velocity.x,
            partical.velocity.y
          );

          const angle = getAngle(validAngles[i]);
          partical.velocity.x = Math.cos(angle) * magnitude;
          partical.velocity.y = Math.sin(angle) * magnitude;
          partical.velocity.cur_angle = validAngles[i];
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
              x: Math.cos(((i % 4) / 2) * Math.PI) * SPEED,
              y: Math.sin(((i % 4) / 2) * Math.PI) * SPEED,
              init_angle: (i % 4) * 2,
              cur_angle: (i % 4) * 2,
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
