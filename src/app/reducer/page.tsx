"use client";
import { useReducer } from "react";

function reducer(state: number, action: { type: "incremented_count" | "decremented_count" }) {
  // state = 0;

  if (action.type === "incremented_count") {
    return state + 1;
  } else if (action.type === "decremented_count") {
    return state - 1;
  }

  //   if (action.type === 'incremented_age') {
  //     return {
  //       age: state.age + 1
  //     };
  //   }
  //   throw Error('Unknown action.');
  return state;
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  const handleCount = () => {
    dispatch({ type: "decremented_count" });
  };

  return (
    <>
      <button onClick={handleCount}>Increment age {count}</button>
    </>
  );
}
