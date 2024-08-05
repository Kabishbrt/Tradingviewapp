import React, { useState, useContext } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import ThemeContext from "../context/ThemeContext";

export const Select = () => {
    const { darkMode } = useContext(ThemeContext);
    const [selectedOption, setSelectedOption] = useState('BreakingOut');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const isMobile = window.innerWidth <= 768;

    return (
        <div className="relative">
            <div className="flex items-center">
                <select
                    className={`appearance-none bg-transparent rounded py-1 pl-1 pr-6 leading-tight focus:outline-none cursor-pointer ${isMobile ? 'text-xs' : ''} ${darkMode ? 'text-gray-300' : ''}`}
                    value={selectedOption}
                    onChange={handleSelectChange}
                    style={{ fontSize: isMobile ? '0.7rem' : '0.8rem' }} // Adjust text size for mobile
                >
                    <option value="BreakingOut" className={`${darkMode ? 'text-white bg-gray-800 hover:bg-gray-700' : ''}`} style={{ color: darkMode ? 'white' : 'inherit' }}>Breaking Out</option>
                    <option value="Breaking Down" className={`${darkMode ? 'text-white bg-gray-800 hover:bg-gray-700' : ''}`} style={{ color: darkMode ? 'white' : 'inherit' }}>Breaking Down</option>
                </select>
                <div className="-ml-6 pointer-events-none">
                    <IoIosArrowDown className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`} />
                </div>
            </div>
        </div>
    );
};

export default Select;
