import React, { useState } from 'react';
import Counter from './Counter'
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Counter value={counter}></Counter>
    </div>
  );
};



render(<App />, document.getElementById('root'));
