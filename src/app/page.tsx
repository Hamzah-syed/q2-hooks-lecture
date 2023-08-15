"use client";

import Image from "next/image";
import Button from "@/app/Button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const handleCount = (c: number) => {
    setCount(c + 1);
  };
  const handleDecrement = (c: number) => {
    setCount(c - 1);
  };
  return (
    <>
      <Button
        handleCount={handleCount}
        accessKey="asds"
        count={count}
        name={"Increment"}
      />
      <Button handleCount={handleDecrement} count={count} name="Decrement" />
      <br />
      {/* <Button name={"Subscribe"} /> */}
    </>
  );
}
