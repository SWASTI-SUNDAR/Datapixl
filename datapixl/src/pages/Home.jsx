import React from "react";
import Button from "../components/Button";
const Home = () => {
  return (
    <>
      <section
        className={` bg-[url(Home/background.svg)] bg-black 
        max-w-[1330px] mx-auto min-h-screen bg-cover 
        flex justify-center items-center  w-full
        bg-opacity-50 min-w-screen overflow-hidden `}
        id="home"
      >
        <div className="flex flex-col ">
          <span className="text-white text-[40px]">AI Advisory &</span>
          <span className="text-white text-[40px]">Engineering Services</span>
        </div>
      </section>
    </>
  );
};

export default Home;
