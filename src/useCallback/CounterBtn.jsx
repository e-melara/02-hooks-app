import React from "react";

const CounterBtn = React.memo(({ increment }) => {
 return (
  <button onClick={increment} className="btn btn-primary">
   Incrementar
  </button>
 );
});

export default CounterBtn;
