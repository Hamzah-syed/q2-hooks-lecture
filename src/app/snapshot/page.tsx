"use client";

import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);

  const handleCount = () => {
    setNumber(number + 1); // 1
    setNumber((num) => num + 1); // 2
    setNumber((num) => num + 1); // 3
  };

  console.log(number);
  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleCount}>+3</button>
    </>
  );
}
