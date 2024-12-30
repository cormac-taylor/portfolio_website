import "./styles/Circuit.css";
import { useEffect, useRef } from "react";

// https://codepen.io/WindOso/pen/PoXBYdb
function Circuit() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const p = [];

    // background bleed
    function clear() {
      c.fillStyle = "rgba(0,0,0,0.07)";
      c.fillRect(0, 0, canvas.width, canvas.height);
    }

    function particle(x, y, speed, style) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.update = () => {
        c.strokeStyle = style;
        c.lineWidth = 1;
        c.lineCap = "round";
        c.beginPath();
        c.moveTo(this.x, this.y);
        this.x += this.speed.x;
        this.y += this.speed.y;
        c.lineTo(this.x, this.y);
        c.stroke();
        this.ang = Math.atan2(this.speed.y, this.speed.x);
        this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
        var op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
        var ch = Math.floor(Math.random() * op.length);
        if (Math.random() < 0.07) {
          this.speed.x = Math.cos(op[ch]) * this.mag;
          this.speed.y = Math.sin(op[ch]) * this.mag;
        }
      };
    }

    var speed = 5;
    var period = 1000;

    function pulse() {
      setTimeout(pulse, period);
      for (var i = 0; i < 56; i++) {
        p.push(
          new particle(
            canvas.width / 2, // spawn x cord
            canvas.height / 2, // spawn y cord
            {
              x: Math.cos((i / 4) * 2 * Math.PI) * speed,
              y: Math.sin((i / 4) * 2 * Math.PI) * speed,
            },
            "rgb(57, 152, 252)"
          )
        );
      }
    }

    // make blank and remove particals out of frame
    function gameMove() {
      requestAnimationFrame(gameMove);
      clear();
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
  });
  return (
    <>
      <div id="circuit_frame" className="frame">
        <canvas ref={canvasRef} id="circuit_canvas" className="canvas"></canvas>
      </div>
    </>
  );
}

export default Circuit;
