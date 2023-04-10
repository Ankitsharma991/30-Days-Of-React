import { React, useState } from "react";
const Event = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const changePosition = () => {
    const xComponent = Math.floor(Math.random() * 350);
    const yComponent = Math.floor(Math.random() * 350);
    console.log(position.x, position.y);
    setPosition({ x: xComponent, y: yComponent });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ height: "50vh", width: "80vh", backgroundColor: "red" }}>
        <h1
          style={{
            backgroundColor: "cyan",
            height: "auto",
            width: "fit-content",
            padding: "10px",
            borderRadius: "50px",
            position: "relative",
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          onMouseEnter={changePosition}
        >
          This is Event
        </h1>
      </div>
    </div>
  );
};

export default Event;
