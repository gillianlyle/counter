import React, {useState} from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - count)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}

export default App;
