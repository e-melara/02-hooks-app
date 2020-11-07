import { useEffect, useState } from "react";

function useFetch(url) {
 const [state, setState] = useState({
  data: null,
  error: null,
  loading: true,
 });

 useEffect(() => {
  setState({ data: null, loading: true, error: null });
  fetch(url)
   .then((res) => res.json())
   .then((response) => {
    setState({
     data: response,
     loading: false,
     error: null,
    });
   });
 }, [url]);

 return state;
}

export default useFetch;
