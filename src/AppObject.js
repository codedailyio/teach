import React, { useState } from "react";

const AppObject = () => {
  const [position, setPosition] = useState({
    left: 100,
    top: 100,
  });

  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: `${position.left}px`,
          top: `${position.top}px`,
        }}
      >
        <button onClick={() => setPosition({ ...position, top: position.top + 10 })}>
          Move Down
        </button>
        <button onClick={() => setPosition({ ...position, left: position.left + 10 })}>
          Move Right
        </button>
      </div>
    </div>
  );
};

export default AppObject;
