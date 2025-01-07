import "./styles/Network.css";

import * as THREE from "three";
import { useEffect, useRef } from "react";

const VIEW_WIDTH = 7 / 12;

// https://dev.to/omher/how-to-start-using-react-and-threejs-in-a-few-minutes-2h6g
function Network() {
  const refContainer = useRef(null);
  useEffect(() => {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x101010);
    var camera = new THREE.PerspectiveCamera(
      75,
      (window.innerWidth * VIEW_WIDTH) / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth * VIEW_WIDTH, window.innerHeight);
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x3998fc });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return <div id="skills_network" ref={refContainer}></div>;
}

export default Network;
