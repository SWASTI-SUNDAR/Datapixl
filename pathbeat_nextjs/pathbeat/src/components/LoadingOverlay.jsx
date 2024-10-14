import React from 'react';

const LoadingOverlay = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#12273F]">
        <div className="relative w-40 h-40 flex justify-center items-center">
          <div className="absolute inset-0 border-4 border-t-brandColor border-b-transparent border-l-transparent border-r-brandColor rounded-full animate-spin"></div>

          <img
            src="/logo/pathbeat-logo.png"
            alt="Loading..."
            className="w-3/4 h-3/4 object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default LoadingOverlay;
