import React, { useEffect, useState } from "react";

const logMousePosition = e => {
  console.log({
    x: e.clientX,
    y: e.clientY,
  });
};

const Position = () => {
  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
    console.log("Mounted");
    return () => {
      console.log("Unmounted");
      window.removeEventListener("mousemove", logMousePosition);
    }
  });
  return null;
};

const App = () => {
  const [trigger, setTrigger] = useState(true);
  const [mounted, setMount] = useState(true);
  return (
    <div>
      <button onClick={() => setTrigger(!trigger)}>Trigger Update</button>
      <button onClick={() => setMount(!mounted)}>Toggle Mount</button>
      {mounted ? <Position /> : null}
    </div>
  );
};

export default App;
