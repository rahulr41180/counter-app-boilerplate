
import "./App.css";

import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2 data-testid="counter-value">count : {count}</h2>
      <button disabled={count === 0} data-testid="counter-decrement-button" onClick={() => {
        setCount(count-1);
      }}>Decrement</button>
      <button data-testid="counter-increment-button" onClick={() => {
        setCount(count+1);
      }}>Increment</button>
    </div>
  );
}

export default App;
