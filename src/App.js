import React from "react";
import { useMousePosition } from "./useMousePosition";

const App = () => {
  const position = useMousePosition();

  return (
    <div>
      {position.x}:{position.y}
    </div>
  );
};

export default App;
