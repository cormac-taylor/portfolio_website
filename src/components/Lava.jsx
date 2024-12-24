import "./styles/Lava.css";
import { euclideanDistance } from "../utilities";
import { useEffect, useRef } from "react";

const IMG_SIZE = 512;
const MAP_SIZE = 1024;

// https://towardsdatascience.com/fun-with-html-canvas-lets-make-lava-lamp-plasma-e4b0d89fe778
function Lava() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    if (!canvas) {
      console.error("Canvas element is not ready");
      return;
    }

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

    // color helpers

    const interpolate = (c1, c2, f) => {
      return {
        r: Math.floor(c1.r + (c2.r - c1.r) * f),
        g: Math.floor(c1.g + (c2.g - c1.g) * f),
        b: Math.floor(c1.b + (c2.b - c1.b) * f),
      };
    };

    // packages rgb values
    const color = (r, g, b) => {
      return { r, g, b };
    };

    // returns my palete with blue
    const makeBluePalette = () => {
      const c1 = color(16, 16, 16);
      const c2 = color(239, 239, 239);
      const c3 = color(57, 152, 252);

      return makeThreeColorGradient(c1, c2, c3);
    };

    // returns my palete with gray
    const makeGrayPalette = () => {
      const c1 = color(16, 16, 16);
      const c2 = color(239, 239, 239);
      const c3 = color(191, 191, 191);

      return makeThreeColorGradient(c1, c2, c3);
    };

    const makeThreeColorGradient = (c1, c2, c3) => {
      const g = [];

      for (let i = 0; i < 128; i++) {
        const f = i / 64;
        g[i] = interpolate(c1, c2, f);
      }

      for (let i = 128; i < 256; i++) {
        const f = (i - 64) / 64;
        g[i] = interpolate(c2, c3, f);
      }

      return g;
    };

    // offsets for moving height maps
    let dx1 = 0;
    let dy1 = 0;

    let dx2 = 0;
    let dy2 = 0;

    // adjust height maps offsets
    const moveHeightMaps = (t) => {
      dx1 = Math.floor(
        (((Math.cos(t * 0.0002 + 0.4 + Math.PI) + 1) / 2) * MAP_SIZE) / 2
      );
      dy1 = Math.floor((((Math.cos(t * 0.0003 - 0.1) + 1) / 2) * MAP_SIZE) / 2);
      dx2 = Math.floor(
        (((Math.cos(t * -0.0002 + 1.2) + 1) / 2) * MAP_SIZE) / 2
      );
      dy2 = Math.floor(
        (((Math.cos(t * -0.0003 - 0.8 + Math.PI) + 1) / 2) * MAP_SIZE) / 2
      );
    };

    // two palettes we interpolate between
    const palettes = [makeBluePalette(), makeGrayPalette()];

    // current palette is edstablished durting animation
    let palette = [];

    // stores whether we're interpolating colors
    // from palette 0 -> 1 (1) or 1 -> 0 (-1)
    let prevDirection = 1;

    const updatePalette = (t) => {
      const timeScale = 0.0005;
      const x = t * timeScale;

      // normalized value 0..1 used to interpolate palette colors
      const inter = (Math.cos(x) + 1) / 2;

      // did we switch direction, and should ergo pick a new palette
      // random palette to interpolate towards?

      const direction = -Math.sin(x) >= 0 ? 1 : -1;
      if (prevDirection != direction) {
        prevDirection = direction;
        if (direction == -1) {
          palettes[0] = makeBluePalette();
        } else {
          palettes[1] = makeGrayPalette();
        }
      }

      // create interpolated palette for current frame
      for (let i = 0; i < 256; i++) {
        palette[i] = interpolate(palettes[0][i], palettes[1][i], inter);
      }
    };

    const updateImageData = () => {
      for (let u = 0; u < IMG_SIZE; u++) {
        for (let v = 0; v < IMG_SIZE; v++) {
          // indexes into height maps for pixel
          const i = (u + dy1) * MAP_SIZE + (v + dx1);
          const k = (u + dy2) * MAP_SIZE + (v + dx2);

          // index for pixel in image data
          // remember it's 4 bytes per pixel
          const j = u * IMG_SIZE * 4 + v * 4;

          // height value of 0..255
          let h = heightMap1[i] + heightMap2[k];
          // get color value from current palette
          let c = palette[h];

          // set pixel data
          image.data[j] = c.r;
          image.data[j + 1] = c.g;
          image.data[j + 2] = c.b;
        }
      }
    };

    const tick = (time) => {
      moveHeightMaps(time);
      updatePalette(time);
      updateImageData();

      c.putImageData(image, 0, 0);

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, []);

  return (
    <>
      <div id="lava_frame">
        <canvas ref={canvasRef} id="canvas"></canvas>
      </div>
    </>
  );
}

export default Lava;
