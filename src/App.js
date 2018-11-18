import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add One to {count}</button>
    </div>
  );
};

export default App;
