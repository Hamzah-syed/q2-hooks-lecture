"use client";
import { useState, HTMLAttributes, useContext } from "react";
import { CountContext } from "./layout";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  name: string;
  count: number;
  handleCount: (count: number) => void;
}

const Button = ({ count, name, handleCount, ...props }: IProps) => {
 
  const countt = useContext(CountContext);


  return (
    <>
      <button
        {...props}
        className="bg-blue-600 py-4 px-8 rounded-lg text-white font-bold"
        onClick={() => handleCount(count)}
      >
        {name} {countt}
      </button>
    </>
  );
};
const ButtonText = ({ count, name, handleCount, ...props }: IProps) => {
  return (
    <>
      <button
        {...props}
        className="bg-blue-600 py-4 px-8 rounded-lg text-white font-bold"
        onClick={() => handleCount(count)}
      >
        {name} {count}
      </button>
    </>
  );
};

export default Button;
