import React, { useState, useEffect } from "react";
import "./styles.css";

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
      <div className="info">
        There are two hooks here =&gt;
        <p>1. To update the color of the phone color</p>
        <p>2. To update the color of the headset</p>
      </div>
      <div className="container">
        <h3 style={{ color: phoneColor }}>
          I am planning to buy a {phoneColor} colored iPhone
        </h3>
        <h3 style={{ color: headsetColor }}>
          I am planning to buy a {headsetColor} colored headset
        </h3>
      </div>
    </div>
  );
}
