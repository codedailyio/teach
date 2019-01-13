import React, { Component, useState, useRef, useEffect } from "react";
import "./app.css";

const items = [0, 1, 2, 3, 4, 5, 6, 7];

const App = () => {
  const [index, setIndex] = useState(0);
  const increment = useRef(1);
  useEffect(() => {
    let interval = setInterval(() => {
      if (index >= items.length - 1) {
        increment.current = -1;
      } else if (index <= 0) {
        increment.current = 1;
      }

      setIndex(index + increment.current);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <div className="background">
        {items.map(i => {
          return (
            <div className="circle">
              <div
                className="mover"
                style={{
                  transform: `translateX(${(index - i) * 40}px)`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
