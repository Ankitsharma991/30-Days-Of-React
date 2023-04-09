import React, { useState } from "react";
// import { ReactDOM } from "react-dom";
import "./ToggleState.css";
import Image from "./pic.jpg";
const ToggleState = () => {
  const [Bg, setBg] = useState(true);

  // useEffect(() => {}, [Bg]);

  const changeState = () => {
    setBg(!Bg);
  };
  // render() {
  return (
    <div className={Bg ? "main" : "main-dark"}>
      <div className={Bg ? "div-light" : "div-dark"}>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started</h2>
        <h3>Javascript Library</h3>
        <h4>Apr 9, 2023</h4>
      </div>
      <div className={Bg ? "div-text" : "div-text-dark"}>
        <p className="para">Prerequisite to get started react.js</p>
        <div className="list">
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
        </div>
        <div className="img">
          <img src={Image} alt="me" />
          <p>Ankit Kumar Sharma</p>
        </div>
      </div>
      <div className="btn">
        <button>Greet People</button>
        <button>Show Time</button>
        <button onClick={() => changeState()}>Change Background</button>
      </div>
      <footer>
        <div className={Bg ? "footer" : "footer-dark"}>
          <p>@copyright</p>
        </div>
      </footer>
    </div>
  );
  // }
};

export default ToggleState;
