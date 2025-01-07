import "./styles/Network.css";
import { useEffect, useRef } from "react";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";
const VIEW_WIDTH = 7 / 12;

function Network() {
  const graphRef = useRef();

  const DISTANCE = 300;
  const SPEED = 0.004;
  useEffect(() => {
    graphRef.current.cameraPosition({ z: DISTANCE });

    // camera orbit
    let angle = 0;
    setInterval(() => {
      graphRef.current.cameraPosition({
        x: DISTANCE * Math.sin(angle),
        z: DISTANCE * Math.cos(angle),
      });
      angle += SPEED;
    }, 10);
  }, []);

  const setNodeToImage = ({ img }) => {
    const imgTexture = new THREE.TextureLoader().load(img);
    imgTexture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map: imgTexture });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(12, 12);

    return sprite;
  };

  const graphData = {
    nodes: [
      {
        id: "id1",
        img: "/images/logo.svg",
      },
      {
        id: "id2",
        img: "/images/logo.svg",
      },
      {
        id: "id3",
        img: "/images/logo.svg",
      },
      {
        id: "id4",
        img: "/images/logo.svg",
      },
      {
        id: "id5",
        img: "/images/logo.svg",
      },
    ],
    links: [
      {
        source: "id1",
        target: "id2",
      },
      {
        source: "id5",
        target: "id3",
      },
      {
        source: "id3",
        target: "id4",
      },
    ],
  };
  return (
    <>
      <div id="skills_network">
        <ForceGraph3D
          ref={graphRef}
          graphData={graphData}
          width={window.innerWidth * VIEW_WIDTH}
          height={window.innerHeight}
          backgroundColor={"#101010"}
          showNavInfo={false}
          nodeThreeObject={setNodeToImage}
          linkColor={() => "#efefef"}
          linkOpacity={1}
        />
      </div>
    </>
  );
}

export default Network;
