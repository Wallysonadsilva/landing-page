import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";

const PerspectiveGrid = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

    renderer.domElement.style.display = "block";
    renderer.domElement.style.margin = "0 auto";

    mountRef.current.appendChild(renderer.domElement);

    const size = 10;
    const divisions = 11;
    const thickness = 0.05; // Thickness of the lines
    const color = new THREE.Color(0xffffff);

    const gridLines = new THREE.Group();
    const step = size / divisions;
    const halfSize = size / 2;

    for (let i = 0; i <= divisions; i++) {
      const offset = -halfSize + i * step;

      // Vertical lines
      const verticalLineGeometry = new LineGeometry();
      verticalLineGeometry.setPositions([
        offset,
        0,
        -halfSize,
        offset,
        0,
        halfSize,
      ]);
      const verticalLineMaterial = new LineMaterial({
        color,
        linewidth: thickness * 50,
        dashed: false,
      });
      const verticalLine = new Line2(
        verticalLineGeometry,
        verticalLineMaterial
      );
      gridLines.add(verticalLine);

      // Horizontal lines
      const horizontalLineGeometry = new LineGeometry();
      horizontalLineGeometry.setPositions([
        -halfSize,
        0,
        offset,
        halfSize,
        0,
        offset,
      ]);
      const horizontalLineMaterial = new LineMaterial({
        color,
        linewidth: thickness * 50,
        dashed: false,
      });
      const horizontalLine = new Line2(
        horizontalLineGeometry,
        horizontalLineMaterial
      );
      gridLines.add(horizontalLine);
    }

    scene.add(gridLines);

    camera.position.z = 10;
    camera.position.y = 5;
    camera.lookAt(0, 0, 0);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default PerspectiveGrid;
