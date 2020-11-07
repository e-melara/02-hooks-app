import React, { useState, useCallback } from "react";

import "../useEffect/useEffect.css";
import CounterBtn from "./CounterBtn";

function UseCallback() {
 const [counter, setCounter] = useState(10);

 const increment = useCallback(() => {
  setCounter((c) => c + 1);
 }, [setCounter]);

 return (
  <div>
   <h3>use Callback: {counter}</h3>
   <hr />
   <CounterBtn increment={increment} />
  </div>
 );
}

export default UseCallback;
