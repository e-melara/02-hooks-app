import React from "react";

import useFetch from "../hooks/useFetch";
import useCounter from "../hooks/useCounter";

import "../useEffect/useEffect.css";

function MultipleCustom() {
 const { counter, increment } = useCounter(1);
 const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
 const { loading, data } = useFetch(url);
 const { quote, author } = !!data && data[0];

 return (
  <div>
   <h2>BreakingBad Quotes</h2>
   <hr />
   {loading ? (
    <div className="alert alert-info text-center">Loading ....</div>
   ) : (
    <blockquote className="blockquote text-right">
     <p className="mb-0">{quote}</p>
     <footer className="blockquote-footer">{author}</footer>
    </blockquote>
   )}

   <button className="btn btn-primary" onClick={increment}>
    Siguiente
   </button>
  </div>
 );
}

export default MultipleCustom;
