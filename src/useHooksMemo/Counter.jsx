import React, { memo } from "react";

const Counter = memo(({ value }) => {
 console.log("Me voy a llamar :(");
 return <small>{value}</small>;
});

export default Counter;
