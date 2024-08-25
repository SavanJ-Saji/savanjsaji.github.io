import React, { createContext, useState } from "react";

// Remove the unused declaration

const defaultContext = {
  isDarkMode: false,
  toggleColorMode: () => {},
};

export const ThemeContext = createContext(defaultContext);

export function ThemeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(defaultContext.isDarkMode);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleColorMode: () => setDarkMode((isDark) => !isDark),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}