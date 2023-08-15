"use client";
import Panel from "@/app/use-effect/panel";
import { useState } from "react";

export default function page() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <Panel />}
      <br />
      <button onClick={() => setShow(!show)}>Show</button>
    </>
  );
}
