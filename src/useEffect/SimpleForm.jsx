import React, { useEffect, useState } from "react";

import Message from "./Message";

import "./useEffect.css";

function SimpleForm() {
 const [formSimple, setFormSimple] = useState({
  name: "",
  email: "",
 });
 const { name, email } = formSimple;
 useEffect(() => {
  console.log("hey");
 }, []);

 useEffect(() => {
  console.log("Form change");
 }, [formSimple]);

 const handleChangeInput = ({ target }) => {
  setFormSimple({
   ...formSimple,
   [target.name]: [target.value],
  });
 };

 return (
  <div>
   <h2>Simple Form</h2>
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

   {name == "123" && <Message />}
  </div>
 );
}

export default SimpleForm;
