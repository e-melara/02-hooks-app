import React from "react";

import "./useEffect.css";
import useForm from "../hooks/useForm";

function FormWithCustomHooks() {
 const [formValues, handleChangeInput] = useForm({
  email: "",
  name: "",
  password: "",
 });

 const { name, email, password } = formValues;

 const onSubmit = (e) => {
  e.preventDefault();
  console.log(formValues);
 };

 return (
  <form onSubmit={onSubmit}>
   <h2>Form With Custom Hooks</h2>
   <hr />

   <div className="form-group">
    <input
     autoComplete="off"
     value={name}
     onChange={handleChangeInput}
     type="text"
     name="name"
     id="name"
     placeholder="Tu nombre"
     className="form-control"
    />
   </div>
   <div className="form-group">
    <input
     autoComplete="off"
     value={email}
     onChange={handleChangeInput}
     type="email"
     name="email"
     id="email"
     placeholder="example@example.com"
     className="form-control"
    />
   </div>

   <div className="form-group">
    <input
     value={password}
     onChange={handleChangeInput}
     type="password"
     name="password"
     placeholder="****"
     className="form-control"
    />
   </div>
   <button type="submit" className="btn btn-primary">
    Guardar
   </button>
  </form>
 );
}

export default FormWithCustomHooks;
