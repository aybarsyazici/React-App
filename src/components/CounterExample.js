import React, { useState } from "react";

function CounterExample() {
  const [count, setCount] = useState(0); //Starting value of the state

  //console.log(useState(0)); returns an array of 2 elements. First one is a value that is 0 and the second one is a function.

  return (
    <div>
      <h1>{count}</h1>
      <h1 onClick={() => setCount(count + 1)}>Plus</h1>
      <h1 onClick={() => setCount(count - 1)}>Minus</h1>
    </div>
  );
}

export default CounterExample;
