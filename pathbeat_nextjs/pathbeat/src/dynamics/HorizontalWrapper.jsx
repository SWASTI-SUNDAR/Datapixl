import React from 'react';

const HorizontalWrapper = ({ children, name, handleNavigate }) => {
  return (
    <div className="sm:mx-5 mt-6">
      <div className="flex flex-row justify-between items-center mb-4 px-1">
        <h2 className="text-lg sm:text-2xl font-ibm font-medium text-[#000] tracking-wide-custom">
          {name}
        </h2>
        <button
          onClick={handleNavigate}
          className="text-[#12273F] font-ibm font-medium tracking-wide"
        >
          See all
        </button>
      </div>
      {children}
    </div>
  );
};

export default HorizontalWrapper;
