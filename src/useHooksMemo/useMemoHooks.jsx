import React, { useState } from "react";

import "../useEffect/useEffect.css";
import Counter from "./Counter";

function UseMemoHooks() {
 const [counter, setCounter] = useState(10);
 const [show, setShow] = useState(false);

 const handelClick = () => {
  setCounter(counter + 1);
 };
 return (
  <div>
   <h1>
    Use memo: <Counter value={counter} />
   </h1>
   <h4>SHOW: {JSON.stringify(show, null, 2)}</h4>
   <hr />
   <button className="btn btn-primary" onClick={handelClick}>
    +1
   </button>
   <button
    className="btn btn-primary"
    onClick={() => {
     setShow((value) => !value);
    }}
   >
    Show/Hide
   </button>
  </div>
 );
}

export default UseMemoHooks;
