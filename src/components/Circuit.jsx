import "./styles/Circuit.css";
import { useEffect, useRef } from "react";

// https://codepen.io/WindOso/pen/PoXBYdb
function Circuit() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const can = canvasRef.current;
    var ctx = can.getContext("2d");
    can.width = window.innerWidth;
    can.height = window.innerHeight;
    can.style.background = "black";
    var p = [];
    function Clear() {
      ctx.fillStyle = "rgba(0,0,0,0.07)";
      ctx.fillRect(0, 0, can.width, can.height);
    }
    function particle(x, y, speed, c) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.upd = function () {
        ctx.strokeStyle = c;
        ctx.lineWidth = 1;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        this.x += this.speed.x;
        this.y += this.speed.y;
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        this.ang = Math.atan2(this.speed.y, this.speed.x);
        this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
        var op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
        var ch = Math.floor(Math.random() * op.length);
        if (Math.random() < 0.05) {
          this.speed.x = Math.cos(op[ch]) * this.mag;
          this.speed.y = Math.sin(op[ch]) * this.mag;
        }
      };
    }
    var speed = 5;
    var period = 1000;
    function pulse() {
      setTimeout(pulse, period);
      var h = Math.random() * (210 - 150) + 150;
      for (var i = 0; i < 56; i++) {
        p.push(
          new particle(
            can.width / 2,
            can.height / 2,
            {
              x: Math.cos((i / 8) * 2 * Math.PI) * speed,
              y: Math.sin((i / 8) * 2 * Math.PI) * speed,
            },
            "hsl(" + h + ",100%,50%)"
          )
        );
      }
    }
    function gameMove() {
      requestAnimationFrame(gameMove);
      Clear();
      for (var i = 0; i < p.length; i++) {
        p[i].upd();
        if (
          p[i].x < 0 ||
          p[i].x > can.width ||
          p[i].y < 0 ||
          p[i].y > can.height
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
