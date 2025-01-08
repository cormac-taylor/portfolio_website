import "./styles/RotatingGraph.css";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";

const VIEW_WIDTH = 7 / 12;
const SKILLS_SUBSETS = {
  stevens: [],
  jostrong: ["react", "typescript", "css", "mongodb", "git"],
  td: ["spring", "java"],
  portfolio_website: ["react", "css", "javascript", "git"],
  variable_neural_network: ["python", "jupyter", "pandas", "numpy"],
  full_stack_web_app: ["html", "css", "javascript", "mongodb", "git"],
  mini_chat_app: ["erlang"],
  crud_api_server: ["javascript", "mongodb"],
};

const web_dev = [
  {
    source: "git",
    target: "javascript",
  },
  {
    source: "javascript",
    target: "html",
  },
  {
    source: "javascript",
    target: "css",
  },
  {
    source: "javascript",
    target: "mongodb",
  },
  {
    source: "react",
    target: "typescript",
  },
  {
    source: "javascript",
    target: "react",
  },
  {
    source: "html",
    target: "css",
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

const initGraphData = {
  nodes: [
    {
      id: "bash",
      color: "#efefef",
    },
    {
      id: "c",
      color: "#efefef",
    },
    {
      id: "cplusplus",
      color: "#efefef",
    },
    {
      id: "css",
      color: "#efefef",
    },
    {
      id: "debian",
      color: "#efefef",
    },
    {
      id: "erlang",
      color: "#efefef",
    },
    {
      id: "git",
      color: "#efefef",
    },
    {
      id: "groovy",
      color: "#efefef",
    },
    {
      id: "html",
      color: "#efefef",
    },
    {
      id: "java",
      color: "#efefef",
    },
    {
      id: "javascript",
      color: "#efefef",
    },
    {
      id: "jupyter",
      color: "#efefef",
    },
    {
      id: "mongodb",
      color: "#efefef",
    },
    {
      id: "numpy",
      color: "#efefef",
    },
    {
      id: "ocaml",
      color: "#efefef",
    },
    {
      id: "pandas",
      color: "#efefef",
    },
    {
      id: "postgresql",
      color: "#efefef",
    },
    {
      id: "python",
      color: "#efefef",
    },
    {
      id: "react",
      color: "#efefef",
    },
    {
      id: "spring",
      color: "#efefef",
    },
    {
      id: "typescript",
      color: "#efefef",
    },
  ],
  links: [web_dev, systems, java_and_concurrency, ml].flat(),
};

RotatingGraph.propTypes = {
  skillSubset: PropTypes.string,
};

function RotatingGraph({ skillSubset }) {
  const graphRef = useRef();
  const [graphData, setGraphData] = useState(initGraphData);

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

  useEffect(() => {
    if (skillSubset) {
      const updatedNodes = graphData.nodes.map((node) => {
        const color = SKILLS_SUBSETS[skillSubset].includes(node.id)
          ? "#3998fc"
          : "#efefef";
        node["color"] = color;
        return node;
      });
      graphData["nodes"] = updatedNodes;
      setGraphData(graphData);
    } else {
      const updatedNodes = graphData.nodes.map((node) => {
        node["color"] = "#efefef";
        return node;
      });
      graphData["nodes"] = updatedNodes;
      setGraphData(graphData);
    }
  }, [skillSubset]);

  // https://github.com/vasturiano/react-force-graph/blob/master/example/img-nodes/index.html
  const setNodeToImage = ({ id, color }) => {
    const imgTexture = new THREE.TextureLoader().load(
      `/images/skills_logos/${id}.svg`
    );
    imgTexture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map: imgTexture, color });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(32, 32);

    return sprite;
  };
  return (
    <>
      <div id="skills_graph">
        <ForceGraph3D
          ref={graphRef}
          graphData={graphData}
          width={window.innerWidth * VIEW_WIDTH}
          height={window.innerHeight}
          backgroundColor={"#101010"}
          showNavInfo={false}
          nodeThreeObject={setNodeToImage}
          nodeColor={(node) => node.color}
          linkColor={() => "#efefef"}
          linkOpacity={1}
        />
      </div>
    </>
  );
}

export default RotatingGraph;
