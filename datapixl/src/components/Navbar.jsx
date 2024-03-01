import React, { useState } from "react";
import { NavbarData } from "../data/NavConstants";
import Button from "./Button";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="fixed  backdrop-blur-sm w-screen border-b-4 ">
        <div className="flex justify-between  items-center mx-8 my-6 lg:mx-32 lg:my-5">
          <div className="text-xl font-bold">DataPixl</div>
          <div className="ml-12 hidden lg:flex gap-[26px] ">
            {NavbarData.map((item, index) => {
              return (
                <div key={index} className="flex group flex-col">
                  <span className="font-semibold text-[#5E5E5E] text-[18px] ">
                    {item.title}
                  </span>
                  <span className="h-[3px] bg-[#0F62FE] w-0 transition-all duration-300 group-hover:w-full"></span>
                </div>
              );
            })}
          </div>
          <div className="hidden md:flex">
            <Button>Contact Us</Button>
          </div>
          <div className="md:hidden flex h-8 w-8">
            <button
              type="button"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? (
                <img src="/Navbar/close.svg" alt="" />
              ) : (
                <img src="/Navbar/open.svg" alt="" />
              )}
            </button>
          </div>
        </div>

        <div className="">
          <div className="lg:hidden flex flex-col justify-center items-center ">
            {show && (
              <>
                <div className="flex flex-col justify-center items-center  h-[80vh] z-[100] backdrop:blur-lg w-screen gap-10">
                  {NavbarData.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setShow(!show);
                        }}
                      >
                        <span className="font-semibold text-3xl ">
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                  <button
                    onClick={() => {
                      setShow(!show);
                    }}
                    class="bg-blue-600 text-xl mt-12 hover:bg-blue-700 focus:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                  >
                    Contact Us
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
