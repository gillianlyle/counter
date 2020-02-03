import React, {useState} from 'react';
import {Button, Icon} from './components/Button.jsx'
import './App.css';

const card = {width: "152px"}

const App = () => {

  const [count, setCount] = useState(0);

  const incrementCount = event => {setCount(count + 1)}
  const resetCount = event => {setCount(0)}
  const decrementCount = event => {setCount(count - 1)}

  return (
    <div className="card text-center" style={card}>
      <div className="card-body">
        <h5 className="card-title display-3">{count}</h5>
      </div>
      <div className="btn-group" role="group">
          <Button onClick={incrementCount} alert="success"><Icon name="add" /></Button>
          <Button onClick={resetCount} alert="warning"><Icon name="refresh" /></Button>
          <Button onClick={decrementCount} alert="danger"><Icon name="remove" /></Button>
      </div>
    </div>
  );
}

export default App;
