import React, { useEffect, useState } from "react";

function Message() {
 const [coords, setCoords] = useState({
  x: 0,
  y: 0,
 });
 useEffect(() => {
  const addMouseLeave = (e) => {
   const { x, y } = e;
   const coords = { x: x, y: y };
   setCoords(coords);
  };
  document.addEventListener("mousemove", addMouseLeave);
  return () => {
   document.removeEventListener("mousemove", addMouseLeave);
  };
 }, []);

 const { x, y } = coords;

 return (
  <div>
   <h2>Excelete!!</h2>
   <p>
    X: {x} Y: {y}
   </p>
  </div>
 );
}

export default Message;
