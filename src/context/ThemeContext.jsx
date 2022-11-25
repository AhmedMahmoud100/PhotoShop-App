import React, { useState } from 'react'
import { createContext } from "react";

export const ThemeContext = createContext({})

export default function ContextPovider({ children }) {
  const [mainTheme, setMainTheme] = useState({
    offsetX: 0,
    offsetY: 0,
    sourceW: 150,
    sourceH: 150,
    apply: false,
    text: 'text',
    font: "sans-serif",
    weight: "400",
    color: "red",
    size: 20,
  })

  return (
    <ThemeContext.Provider value={[mainTheme, setMainTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}
