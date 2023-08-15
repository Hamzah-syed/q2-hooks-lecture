"use client";
import "./globals.css";
import { createContext, useState } from "react";

export const ThemeContext = createContext<string | null>(null);

export const CountContext = createContext<number | null>(null);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");

  return (
    <html lang="en">
      <body>
        {/* <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Set Count
        </button> */}
        {/* <CountContext.Provider value={count}>
          {children}
          </CountContext.Provider> */}
        <ThemeContext.Provider value={theme}>
          <>
          {/* <label>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => {
                console.dir(e.target.checked)
                setTheme(e.target.checked ? "dark" : "light");
              }}
            />
            Use dark mode
          </label> */}
          {children}
          </>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
