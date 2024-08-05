import React from "react";

// Loader component
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader ease-linear rounded-full border-t-8 border-blue-500 h-20 w-20 animate-spin"></div>
    </div>
  );
};

export default Loader;
