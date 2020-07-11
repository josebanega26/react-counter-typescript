import React, { useState, FunctionComponent } from "react";
import Counter from "./Counter";
import { render } from "react-dom";
import "./style.scss";

const App: FunctionComponent<{ counter?: number }> = () => {
  const [counter, setCounter] = useState(0);
  const handlerAdd = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };
  const handlerSubtract = () => {
    const newCounter = counter - 1;
    setCounter(newCounter > 0 ? newCounter : 0);
  };
  const handlerReset = () => {
    setCounter(0);
  };
  return (
    <div className="App">
      <Counter value={counter} />
      <button onClick={handlerAdd} className="button">
        +1
      </button>
      <button onClick={handlerSubtract} className="button">
        -1
      </button>
      <button onClick={handlerReset} className="button">
        reset
      </button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
