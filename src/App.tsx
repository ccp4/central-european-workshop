import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Add 1</button>
    </>
  );
}

export default App;
