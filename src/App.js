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

    return () => window.removeEventListener("mousemove", logMousePosition);
  }, []);
  return null;
};

const App = () => {
  const [mounted, setMount] = useState(true);
  return (
    <div>
      <button onClick={() => setMount(!mounted)}>Toggle Mount</button>
      {mounted ? <Position /> : null}
    </div>
  );
};

export default App;
