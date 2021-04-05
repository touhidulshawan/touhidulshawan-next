import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeTogglerContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useToggleTheme = () => {
  return useContext(ThemeTogglerContext);
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeTogglerContext.Provider value={toggleTheme}>
        {children}
      </ThemeTogglerContext.Provider>
    </ThemeContext.Provider>
  );
};
