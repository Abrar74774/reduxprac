import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'


let container = {
  height: '80%',
  width: '800px',
  margin: '10% auto',
  padding: '100px',
  borderRadius: '10px',
  backgroundColor: 'white',
  boxShadow: '0 26px 30px -10px #00000088'
}

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (

    <div style={container}>
      Counter {counter}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged && <h3> Gopon tottho </h3>}
    </div>

  );
}

export default App;
