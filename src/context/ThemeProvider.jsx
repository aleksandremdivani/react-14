import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    return setMode(prevMode => prevMode === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
