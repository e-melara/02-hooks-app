import React, { useState } from "react";

import "./useState.css";

function UseState() {
 const [state, setState] = useState({
  counter1: 10,
  counter2: 10,
  counter3: 0,
 });

 const { counter1, counter2 } = state;

 return (
  <div>
   <h2>Counter 1: {counter1}</h2>
   <h3>Counter 2: {counter2}</h3>
   <hr />
   <button
    className="btn btn-primary"
    onClick={() =>
     setState({
      ...state,
      counter1: counter1 + 1,
     })
    }
   >
    Counter 1 (+1)
   </button>
  </div>
 );
}

export default UseState;
