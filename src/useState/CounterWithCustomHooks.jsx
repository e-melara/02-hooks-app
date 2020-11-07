import React from "react";
import useCounter from "../hooks/useCounter";

import "./useState.css";

function CounterWithCustomHooks() {
 const { decrement, increment, reset, state } = useCounter();

 return (
  <div>
   <h1>Counter With Customn Hooks</h1>
   <h3>{state}</h3>
   <hr />
   <button onClick={() => increment(2)} className="btn btn-primary">
    +1
   </button>
   <button onClick={reset} className="btn btn-primary">
    reset
   </button>
   <button onClick={() => decrement(3)} className="btn btn-primary">
    -1
   </button>
  </div>
 );
}

export default CounterWithCustomHooks;
