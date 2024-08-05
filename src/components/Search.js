import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";

import { SearchIcon, XIcon } from "@heroicons/react/solid";

const Search = () => {
  const { darkMode } = useContext(ThemeContext);

  const [input, setInput] = useState("");

  const [bestMatches, setBestMatches] = useState([]);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  return (
    <div
      className={`flex p-0.5 my-3 border-2 rounded-md relative w-32 ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
      }`}
    >
      <input
        type="text"
        value={input}
        className={`w-full px-0.2 focus:outline-none rounded-md text-sm ${
          darkMode ? "bg-gray-900" : null
        }`}
        placeholder="Ticker"
        onChange={(event) => setInput(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            
          }
        }}
      />
      {input && (
        <button onClick={clear} className="m-0.9">
          <XIcon className="h-2.7 w-2.7 fill-gray-500" />
        </button>
      )}
      <button
        className="h-5 w-5 bg-indigo-600 rounded-md flex justify-center items-center m-auto p-1 transition duration-300 hover:ring-2 ring-indigo-400"
      >
         <SearchIcon className="h-3 w-4 fill-gray-100" />
      </button>
    </div>
  );
};

export default Search;
