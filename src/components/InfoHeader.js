import React, { useContext } from 'react';
import ThemeContext from "../context/ThemeContext";

export const InfoHeader = ({ticker}) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`flex flex-col rounded-md sm:flex-col md:flex-row justify-between p-1 border-0.5 ${
      darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
    }`} style={{ border: `0.5px solid ${darkMode ? '#374140' : '#e5e7eb'}` }}>
      <div className="flex flex-wrap md:flex-nowrap mb-1 md:mb-0">
        <span className="block md:inline-block text-sm md:text-sm pr-1 md:pr-2 font-bold">{ticker}</span>
        <span className="block md:inline-block text-xs md:text-xs pr-1 md:pr-2 font-bold italic mt-0.5">3.38$</span>
        <span className="block md:inline-block text-xs md:text-xs pr-2 md:pr-2 font-bold italic mt-0.5">0.75$</span>
        <span className="block md:inline-block text-xs md:text-xs pr-1 md:pr-3 font-bold text-red-500 mt-0.5">-0.5%</span>
      </div>
      <div className="flex flex-wrap md:flex-nowrap mb-1 md:mb-0">
        <span className="block md:inline-block text-xs md:text-xs pr-0.5 md:pr-1 font-bold mt-0.5">Earnings:</span>
        <span className="block md:inline-block text-xs md:text-xs pr-1 md:pr-1 mt-0.5">1213</span>
        <span className="block md:inline-block text-xs md:text-xs pr-0.5 md:pr-1 font-bold mt-0.5">Market Cap:</span>
        <span className="block md:inline-block text-xs md:text-xs pr-1 md:pr-1 mt-0.5">1213</span>
        <span className="block md:inline-block text-xs md:text-xs pr-0.5 md:pr-1 font-bold mt-0.5">Sector:</span>
        <span className="block md:inline-block text-xs md:text-xs pr-1 md:pr-1 mt-0.5">1213</span>
      </div>
    </div>
  );
};

export default InfoHeader;
