import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ContextSidebar() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`m-4 p-4 font-bold rounded-lg transition duration-300 ${
        theme === "dark"
          ? "bg-gray-800 text-white hover:bg-gray-700"
          : "bg-gray-200 text-black hover:bg-gray-300"
      }`}>
      <h3>Sidebar</h3>
      <p>Current Theme: {theme}</p>
      <nav className="flex flex-row gap-4 mx-auto">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Settings</a>
      </nav>
    </div>
  );
}

export default ContextSidebar;