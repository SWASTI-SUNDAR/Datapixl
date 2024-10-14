import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="bg-[#12273F] btn hover:bg-[#1d3f66] hover:scale-110 ease-in-out duration-100 text-white font-semibold py-3 px-4 rounded">
      {children}
    </button>
  );
};

export default Button;
