import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ContextContent() {
  const { theme } = useContext(ThemeContext);
  const [text, setText] = useState("");
  return (
    <div className={`m-4 p-4 font-bold rounded-lg transition duration-300 ${
        theme === "dark"
          ? "bg-gray-800 text-white hover:bg-gray-700"
          : "bg-gray-200 text-black hover:bg-gray-300"
      }`}>
      
    
      <p>This component uses Context API.</p>
      <input
            value={text}
            placeholder="Enter Text..."
            onChange={(e) => setText(e.target.value)}
            className={`px-4 py-2 rounded-md border outline-none transition duration-300 
            ${theme === "dark"
              ? "bg-gray-800 text-white border-gray-600 focus:ring-2 focus:ring-gray-500"
              : "bg-gray-200 text-black border-gray-400 focus:ring-2 focus:ring-gray-300"
            }`}
/>
      <p>Text : {text}</p>
    </div>
  );
}

export default ContextContent;