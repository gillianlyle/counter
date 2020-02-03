import React, {useState} from 'react';
import './App.css';

const card = {
  width: "152px"
}

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <>

    <div className="card text-center" style={card}>
      <div className="card-body">
        <h5 className="card-title display-3">{count}</h5>
      </div>
      <div className="btn-group" role="group">
          <button type="button" className="btn btn-success" onClick={() => setCount(count + 1)}><i className="material-icons">add</i></button>
          <button type="button" className="btn btn-warning" onClick={() => setCount(count - count)}><i className="material-icons">refresh</i></button>
          <button type="button" className="btn btn-danger" onClick={() => setCount(count - 1)}><i className="material-icons">remove</i></button>
      </div>
    </div>
    </>
  );
}

export default App;
