import React, { useEffect, useState } from "react";
import { NavbarData } from "../data/NavConstants";
import Button from "./Button";
import { Link } from "react-scroll";
import { Link as Goto } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [homePageHeight, setHomePageHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    setHomePageHeight(window.innerHeight); // Get the initial height of the viewport

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update homePageHeight if viewport is resized
    const handleResize = () => {
      setHomePageHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isHomePage = scrollPosition < homePageHeight;
  const navColor = isHomePage ? "white" : "black";

  return (
    <>
      <nav className="fixed bg-white w-screen border h-[76px] z-[100] ">
        <div className="flex justify-between  items-center  mx-8 my-6 lg:mx-32 lg:my-3">
          <div className="text-xl font-bold">
            <Goto onClick={scrollToTop} to={"/"}>
              <img src="/Footer/logooption2.svg" className="w-44 " alt="logo" />
            </Goto>
          </div>
          <div className=" hidden lg:flex gap-[26px] ">
            {NavbarData.map((item, index) => {
              return (
                <div key={index} className="flex group flex-col">
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={(item.id = 1 ? -70 : -100)}
                    duration={500}
                    // onSetActive={handleSetActive}
                    to={item.path}
                  >
                    <span className="font-semibold cursor-pointer text-[#5E5E5E] text-[18px] ">
                      {item.title}
                    </span>
                  </Link>
                  <span
                    className={` h-[3px] bg-[#0F62FE] w-0 transition-all duration-300 group-hover:w-full`}
                  ></span>
                </div>
              );
            })}
          </div>
          <div className="hidden lg:flex">
            <Button>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                // onSetActive={handleSetActive}
                to="contact"
              >
                Contact Us
              </Link>
            </Button>
          </div>
          <div className="lg:hidden flex h-8 w-8">
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
          <div className="lg:hidden -mt-4 flex flex-col justify-center items-center ">
            {show && (
              <>
                {/* Apply backdrop blur effect */}
                <div className="bg-white">
                  <div
                    onClick={() => {
                      setShow(!show);
                    }}
                    className="flex flex-col justify-center  items-center h-screen w-screen gap-10"
                  >
                    {NavbarData.map((item, index) => {
                      return (
                        <div key={index}>
                          <Link
                            onClick={() => {
                              setShow(!show);
                            }}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={item.id > 2 ? 1000 : 500}
                            to={item.path}
                          >
                            <span
                              className={` text-black font-semibold text-3xl`}
                            >
                              {item.title}
                            </span>
                          </Link>
                        </div>
                      );
                    })}
                    <button className="bg-blue-600 text-xl mt-12 hover:bg-blue-700 focus:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                      <Link
                        onClick={() => {
                          setShow(!show);
                        }}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        to="contact"
                      >
                        Contact Us
                      </Link>
                    </button>
                  </div>
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
