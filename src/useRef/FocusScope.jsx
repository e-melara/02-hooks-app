import React, { useRef } from "react";
import "../useEffect/useEffect.css";

function FocusScope() {
 const ref = useRef();

 const handleClick = () => {
  ref.current.select();
 };

 return (
  <div>
   <h2>Focus Scope</h2>
   <hr />
   <div className="form-group">
    <input
     ref={ref}
     type="text"
     name="name"
     className="form-control"
     placeholder="Ingrese el nombre"
    />
   </div>
   <button onClick={handleClick} className="btn btn-primary">
    Seleccionar
   </button>
  </div>
 );
}

export default FocusScope;
