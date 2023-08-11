"use client";
import { useState, HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  name: string;
  count: number;
  handleCount: (count: number) => void;
}

const Button = ({ count, name, handleCount, ...props }: IProps) => {
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
