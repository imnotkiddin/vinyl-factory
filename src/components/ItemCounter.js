import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState(new Date());
  const addClick = () => {
    setCounter(counter + 1);
    setDate(new Date());
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={addClick}>CONTADOR {Date}</button>
      <p>{date.toString()}</p>
    </div>
  );
}
