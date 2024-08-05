import React from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";

const Header = ({ name }) => {
  return (
    <>
     <h1 className="text-xl">Trade</h1>
      <div className="xl flex justify-between">
        <Search />
        <ThemeIcon />
      </div>
      
    </>
  );
};

export default Header;
