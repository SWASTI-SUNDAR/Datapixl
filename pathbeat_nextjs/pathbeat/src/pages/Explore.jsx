import React from 'react';

const Explore = () => {
  return (
    <div
      id="explore"
      className={`flex bg-[url("/explore/explore.webp")] p-5 flex-col gap-5 inset-0 mt-16 justify-center items-center bg-cover bg-center bg-no-repeat `}
      style={{ height: 600 }}
    >
      <span className="lg:text-6xl text-2xl flex flex-wrap text-[#51A1FF] heading font-bold ">
        Explore 100+ <p className="text-white heading ml-1"> Unforgettable</p>
      </span>
      <span className="lg:text-6xl text-2xl heading flex text-white font-bold">
        Destinations with PathBeat
      </span>
    </div>
  );
};

export default Explore;
