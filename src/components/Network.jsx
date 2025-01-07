import "./styles/Network.css";
import { useEffect, useRef } from "react";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";
const VIEW_WIDTH = 7 / 12;

function Network() {
  const graphRef = useRef();

  useEffect(() => {
    if (graphRef.current) {
      graphRef.current.d3Force("link").distance(60); // Adjust link length
    }
  }, []);

  // https://github.com/vasturiano/react-force-graph/blob/master/example/camera-auto-orbit/index.html
  const DISTANCE = 625;
  const SPEED = 0.002;
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

  // https://github.com/vasturiano/react-force-graph/blob/master/example/img-nodes/index.html
  const setNodeToImage = ({ id }) => {
    const imgTexture = new THREE.TextureLoader().load(
      `/images/skills_logos/${id}.svg`
    );
    imgTexture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map: imgTexture });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(32, 32);

    return sprite;
  };

  const web_dev = [
    {
      source: "git",
      target: "javascript",
    },
    {
      source: "javascript",
      target: "html5",
    },
    {
      source: "javascript",
      target: "css3",
    },
    {
      source: "javascript",
      target: "mongodb",
    },
    {
      source: "javascript",
      target: "typescript",
    },
    {
      source: "javascript",
      target: "react",
    },
    {
      source: "html5",
      target: "css3",
    },
    {
      source: "mongodb",
      target: "postgresql",
    },
  ];

  const systems = [
    {
      source: "c",
      target: "bash",
    },
    {
      source: "c",
      target: "cplusplus",
    },
    {
      source: "c",
      target: "debian",
    },
  ];

  const java_and_concurrency = [
    {
      source: "java",
      target: "spring",
    },
    {
      source: "java",
      target: "groovy",
    },
    {
      source: "groovy",
      target: "erlang",
    },
    {
      source: "erlang",
      target: "ocaml",
    },
  ];

  const ml = [
    {
      source: "python",
      target: "jupyter",
    },
    {
      source: "jupyter",
      target: "pandas",
    },
    {
      source: "jupyter",
      target: "numpy",
    },
  ];

  const graphData = {
    nodes: [
      {
        id: "bash",
      },
      {
        id: "c",
      },
      {
        id: "cplusplus",
      },
      {
        id: "css3",
      },
      {
        id: "debian",
      },
      {
        id: "erlang",
      },
      {
        id: "git",
      },
      {
        id: "groovy",
      },
      {
        id: "html5",
      },
      {
        id: "java",
      },
      {
        id: "javascript",
      },
      {
        id: "jupyter",
      },
      {
        id: "mongodb",
      },
      {
        id: "numpy",
      },
      {
        id: "ocaml",
      },
      {
        id: "pandas",
      },
      {
        id: "postgresql",
      },
      {
        id: "python",
      },
      {
        id: "react",
      },
      {
        id: "spring",
      },
      {
        id: "typescript",
      },
    ],
    links: [web_dev, systems, java_and_concurrency, ml].flat(),
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
