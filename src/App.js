import React, { useState, useEffect } from "react";
import "./styles.css";
import useffectWithoutDep from "./assets/images/useffectWithoutDep.jpg";
import useEffectWithDep from "./assets/images/useEffectWithDep.jpg";

export default function App() {
  const [phoneColor, setPhoneColor] = useState("black");
  const [headsetColor, setHeadSetColor] = useState("red");

  // add dependencies to prevent eslint warning
  useEffect(() => {
    setPhoneColor("red");
  }, []);

  // Runs the callback only on mount
  useEffect(() => {
    setHeadSetColor("black");
  }, [setHeadSetColor]);

  return (
    <div className="app">
      <h1>Multiple useState Hooks</h1>

      {/* 2 flex containers */}
      <div className="flex-container">
        <div className="flex-child magenta">
          {/* Header */}
          <h3>Update the color of the phone color</h3>

          <div className="images-container">
            <h4>Snapshot of how it is being updated</h4>
            <img src={useffectWithoutDep} alt="Dep" />
          </div>

          {/* Useffect output */}
          <div className="container">
            <h4>Output</h4>
            <p style={{ color: phoneColor }}>
              I am planning to buy a {phoneColor} colored iPhone
            </p>
          </div>
        </div>

        <div className="flex-child green">
          {/* Header */}
          <h3>To update the color of the headset</h3>

          <div className="images-container">
            <h4>Snapshot of how it is being updated</h4>
            <img src={useEffectWithDep} alt="Dep" />
          </div>

          {/* Useffect output */}
          <div className="container">
            <h4>Output</h4>
            <p style={{ color: headsetColor }}>
              I am planning to buy a {headsetColor} colored headset
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
