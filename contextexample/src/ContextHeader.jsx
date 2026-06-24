import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ContextHeader() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`m-4 p-4 font-bold rounded-lg transition duration-300 
      ${theme === "dark" ? "bg-gray-800 text-white hover:bg-gray-700"
          : "bg-gray-200 text-black hover:bg-gray-300"
      }`}
    >
      <h2 className="text-xl mb-3">React Context API</h2>

      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded-md font-medium ${
          theme === "dark"
            ? "bg-white text-black hover:bg-gray-300"
            : "bg-black text-white hover:bg-gray-700"
        }`}
      >
        Change Theme
      </button>
    </div>
  );
}

export default ContextHeader;