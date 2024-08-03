// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface themeTypes {
  name: string;
  themeClass: string;
}
// Define the context value type
interface ThemeContextType {
  theme: themeTypes;
  setTheme: (theme: themeTypes) => void;
}

// Create a context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: { name: "Light", themeClass: "light" },
  setTheme: () => {},
});

// Create a provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<themeTypes>({
    name: "Light",
    themeClass: "light",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
