import "./styles/RotatingGraph.css";
import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";

const VIEW_WIDTH = window.innerWidth < window.innerHeight ? 1 : 7 / 12;
const SKILLS_SUBSETS = {
  stevens: ["slack"],
  jostrong: [
    "nodejs",
    "npm",
    "react",
    "reactrouter",
    "typescript",
    "materialui",
    "css",
    "mongodb",
    "git",
    "jira",
    "vite",
  ],
  td: ["spring", "java", "junit", "confluence", "jira"],
  portfolio_website: [
    "nodejs",
    "npm",
    "react",
    "css",
    "javascript",
    "git",
    "vite",
    "canva",
  ],
  variable_neural_network: ["python", "jupyter", "scikitlearn", "numpy"],
  full_stack_web_app: [
    "html",
    "css",
    "javascript",
    "mongodb",
    "git",
    "nodejs",
    "npm",
    "axios",
    "express",
    "handlebars",
    "markdown",
  ],
  mini_chat_app: ["erlang"],
  crud_api_server: ["javascript", "mongodb", "nodejs", "npm"],
};

const web_dev = [
  {
    source: "javascript",
    target: "css",
  },
  {
    source: "javascript",
    target: "html",
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
    source: "javascript",
    target: "nodejs",
  },
  {
    source: "typescript",
    target: "react",
  },
  {
    source: "react",
    target: "materialui",
  },
  {
    source: "react",
    target: "reactrouter",
  },
  {
    source: "react",
    target: "vite",
  },
  {
    source: "nodejs",
    target: "npm",
  },
  {
    source: "npm",
    target: "threejs",
  },
  {
    source: "npm",
    target: "express",
  },
  {
    source: "npm",
    target: "axios",
  },
  {
    source: "npm",
    target: "jquery",
  },
  {
    source: "npm",
    target: "handlebars",
  },
];

const machine_learning = [
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
  {
    source: "jupyter",
    target: "scikitlearn",
  },
  {
    source: "jupyter",
    target: "matplotlib",
  },
];

const functional = [
  {
    source: "ocaml",
    target: "erlang",
  },
];

const java = [
  {
    source: "java",
    target: "groovy",
  },
  {
    source: "java",
    target: "spring",
  },
  {
    source: "java",
    target: "junit",
  },
  {
    source: "java",
    target: "maven",
  },
];

const database = [
  {
    source: "aws",
    target: "mongodb",
  },
  {
    source: "aws",
    target: "postgresql",
  },
];

const tools = [
  {
    source: "chrome",
    target: "canva",
  },
  {
    source: "chrome",
    target: "confluence",
  },
  {
    source: "chrome",
    target: "slack",
  },
  {
    source: "chrome",
    target: "jira",
  },
];

const systems = [
  {
    source: "c",
    target: "cplusplus",
  },
  {
    source: "c",
    target: "bash",
  },
  {
    source: "c",
    target: "unix",
  },
  {
    source: "bash",
    target: "homebrew",
  },
  {
    source: "unix",
    target: "debian",
  },
  {
    source: "unix",
    target: "ubuntu",
  },
  {
    source: "unix",
    target: "git",
  },
  {
    source: "git",
    target: "markdown",
  },
];

const initGraphData = {
  nodes: [
    {
      id: "aws",
      color: "#efefef",
    },
    {
      id: "axios",
      color: "#efefef",
    },
    {
      id: "bash",
      color: "#efefef",
    },
    {
      id: "c",
      color: "#efefef",
    },
    {
      id: "canva",
      color: "#efefef",
    },
    {
      id: "chrome",
      color: "#efefef",
    },
    {
      id: "confluence",
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
      id: "express",
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
      id: "handlebars",
      color: "#efefef",
    },
    {
      id: "homebrew",
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
      id: "jira",
      color: "#efefef",
    },
    {
      id: "jquery",
      color: "#efefef",
    },
    {
      id: "junit",
      color: "#efefef",
    },
    {
      id: "jupyter",
      color: "#efefef",
    },
    {
      id: "markdown",
      color: "#efefef",
    },
    {
      id: "materialui",
      color: "#efefef",
    },
    {
      id: "matplotlib",
      color: "#efefef",
    },
    {
      id: "maven",
      color: "#efefef",
    },
    {
      id: "mongodb",
      color: "#efefef",
    },
    {
      id: "nodejs",
      color: "#efefef",
    },
    {
      id: "npm",
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
      id: "reactrouter",
      color: "#efefef",
    },
    {
      id: "scikitlearn",
      color: "#efefef",
    },
    {
      id: "slack",
      color: "#efefef",
    },
    {
      id: "spring",
      color: "#efefef",
    },
    {
      id: "threejs",
      color: "#efefef",
    },
    {
      id: "typescript",
      color: "#efefef",
    },
    {
      id: "ubuntu",
      color: "#efefef",
    },
    {
      id: "unix",
      color: "#efefef",
    },
    {
      id: "vite",
      color: "#efefef",
    },
  ],
  links: [
    web_dev,
    machine_learning,
    functional,
    java,
    database,
    tools,
    systems,
  ].flat(),
};

RotatingGraph.propTypes = {
  skillSubset: PropTypes.string,
  renderGraph: PropTypes.bool,
};

function RotatingGraph({ skillSubset, renderGraph }) {
  const graphRef = useRef();
  const [graphData, setGraphData] = useState(initGraphData);

  useEffect(() => {
    if (renderGraph) {
      graphRef.current.d3Force("link").distance(70); // Adjust link length
    }
  }, [renderGraph]);

  // https://github.com/vasturiano/react-force-graph/blob/master/example/camera-auto-orbit/index.html
  const DISTANCE = 930;
  const SPEED = 0.002;
  useEffect(() => {
    if (renderGraph) {
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
    }
  }, [renderGraph]);

  const getGraphData = useCallback(() => {
    return graphData;
  }, [graphData]);

  useEffect(() => {
    const data = getGraphData();
    if (skillSubset) {
      const updatedNodes = data.nodes.map((node) => {
        const color = SKILLS_SUBSETS[skillSubset].includes(node.id)
          ? "#3998fc"
          : "#efefef";
        node["color"] = color;
        return node;
      });
      data["nodes"] = updatedNodes;
      setGraphData(data);
    } else {
      const updatedNodes = data.nodes.map((node) => {
        node["color"] = "#efefef";
        return node;
      });
      data["nodes"] = updatedNodes;
      setGraphData(data);
    }
  }, [skillSubset, getGraphData]);

  // https://github.com/vasturiano/react-force-graph/blob/master/example/img-nodes/index.html
  const setNodeToImage = ({ id, color }) => {
    const imgTexture = new THREE.TextureLoader().load(
      `/images/skills_logos/${id}.svg`
    );
    imgTexture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({ map: imgTexture, color });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(40, 40);

    return sprite;
  };
  return (
    <>
      <div id="skills_graph">
        {renderGraph && (
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
        )}
      </div>
    </>
  );
}

export default RotatingGraph;
