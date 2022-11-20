import React, { useState } from 'react'
import { createContext } from "react";

export const ThemeContext = createContext({})

export default function ContextPovider({children}) {
    const [mainTheme,setMainTheme] = useState({})

  return (
    <ThemeContext.Provider value={[mainTheme,setMainTheme]}>
        {children}
    </ThemeContext.Provider>
  )
}