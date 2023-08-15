"use client";
import { useContext } from "react";
import { CountContext, ThemeContext } from "@/app/layout";

export default function page() {
  const theme = useContext(ThemeContext);
  return <>{theme}</>;
}
