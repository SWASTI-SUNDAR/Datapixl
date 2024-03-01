import React from 'react';

const Button = ({ onClick, bgColor = "blue", borderColor = "blue", textColor = "white", hoverColor = "700", children }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${bgColor}-600 border border-${borderColor}-600 text-${textColor} text-sm md:text-xl hover:bg-${bgColor}-${hoverColor} hover:border-${borderColor}-${hoverColor} hover:text-${textColor} focus:bg-${bgColor}-${hoverColor} focus:border-${borderColor}-${hoverColor} focus:text-${textColor} font-medium py-1 px-2 rounded-md focus:outline-none focus:shadow-outline sm:px-6 sm:py-3`}
    >
      {children}
    </button>
  );
};

export default Button;

