import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import ContextHeader from "./ContextHeader";
import ContextContent from "./ContextContent";
import ContextSidebar from "./ContextSidebar";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      
      <div className="bg-green-300 p-5 m-3 mx-auto">
      <ContextHeader />
      <ContextSidebar />
      <ContextContent />
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeSwitcher;