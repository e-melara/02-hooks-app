import React, { useLayoutEffect, useRef, useState } from "react";

import useFetch from "../hooks/useFetch";
import useCounter from "../hooks/useCounter";

import "./useLayout.css";

function Layout() {
 const { counter, increment } = useCounter(1);
 const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
 const { data } = useFetch(url);
 const { quote } = !!data && data[0];

 const pTag = useRef();
 const [boxSize, setBoxSize] = useState({});
 useLayoutEffect(() => {
  setBoxSize(pTag.current.getBoundingClientRect());
 }, [quote]);

 return (
  <div>
   <h2>Layout</h2>
   <hr />
   <blockquote className="blockquote text-right">
    <p ref={pTag} className="mb-0">
     {quote}
    </p>
   </blockquote>

   <button className="btn btn-primary" onClick={increment}>
    Siguiente
   </button>
   <hr />

   <pre>{JSON.stringify(boxSize, null, 3)}</pre>
  </div>
 );
}

export default Layout;
