import "./styles/Lava.css";
import { euclideanDistance } from "../utilities";

const IMG_SIZE = 512;
const MAP_SIZE = 1024;

// https://towardsdatascience.com/fun-with-html-canvas-lets-make-lava-lamp-plasma-e4b0d89fe778
function Lava() {
  const canvas = document.getElementById("canvas");
  const c = canvas.getContext("2d");

  canvas.width = IMG_SIZE;
  canvas.height = IMG_SIZE;

  // RBGA vector
  const image = c.createImageData(IMG_SIZE, IMG_SIZE);
  for (let i = 0; i < image.data.length; i += 4) {
    image.data[i] = 0;
    image.data[i + 1] = 0;
    image.data[i + 2] = 0;
    image.data[i + 3] = 255;
  }

  // First height map
  const heightMap1 = [];
  for (let u = 0; u < MAP_SIZE; u++) {
    for (let v = 0; v < MAP_SIZE; v++) {
      const i = u * MAP_SIZE + v;

      // center coords & distance
      const center_x = u - MAP_SIZE / 2;
      const center_y = v - MAP_SIZE / 2;
      const center_distance = euclideanDistance(center_x, center_y);

      // stretching for ripple frequency
      const stretch = (3 * Math.PI) / (MAP_SIZE / 2);

      // from [-1,1] to [0, 1]
      const ripple = Math.sin(center_distance * stretch);
      const normalized = (ripple + 1) / 2;

      // height int [0, 128]
      heightMap1[i] = Math.floor(normalized * 128);
    }
  }

  // Second height map
  const heightMap2 = [];
  for (let u = 0; u < MAP_SIZE; u++) {
    for (let v = 0; v < MAP_SIZE; v++) {
      const i = u * MAP_SIZE + v;

      // center coords & distance
      const center_x = u - MAP_SIZE / 2;
      const center_y = v - MAP_SIZE / 2;
      const distance1 =
        euclideanDistance(0.8 * center_x, 1.3 * center_y) * 0.022;
      const distance2 =
        euclideanDistance(1.35 * center_x, 0.45 * center_y) * 0.022;

      const sin_val = Math.sin(distance1);
      const cos_val = Math.cos(distance2);

      // from [-2,2] to [0, 1]
      const h = sin_val + cos_val;
      const normalized = (h + 2) / 4;

      // height int [0, 127]
      heightMap2[i] = Math.floor(normalized * 127);
    }
  }

  return (
    <>
      <div id="lava_frame">
        <canvas id="canvas"></canvas>
      </div>
    </>
  );
}

export default Lava;
