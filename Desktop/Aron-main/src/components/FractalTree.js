import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../styles/FractalTree.css";

let angleX = 0;
let angleY = 0;
let side = 100;

const Sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(400, 400, "webgl"); // Use webgl for 3D rendering
    p5.stroke(255);
  };

  p5.draw = () => {
    p5.background(10, 25, 47); // Set background color to Navy (#0a192f)

    p5.rotateX(angleX);
    p5.rotateY(angleY);

    drawCube();
    
    angleX += 0.01;
    angleY += 0.01;
  };
  // comment test

  const drawCube = () => {
    p5.fill(255, 255, 0); // Set cube color to yellow
    p5.box(side); // Draw a cube with the specified side length
  };
};

const FractalTree = () => (
  <div id="fractal-tree">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default FractalTree;
