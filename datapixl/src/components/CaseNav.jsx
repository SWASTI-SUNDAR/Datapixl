import React, { useEffect, useState } from "react";
import { NavbarData } from "../data/NavConstants";
import Button from "./Button";
import { Link } from "react-scroll";
import { NavLink, Link as Goto } from "react-router-dom";
const CaseNav = () => {
  const [show, setShow] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = (sectionId) => {
    setShow(false); // Close the menu

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // After a short delay, scroll to the desired section
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); // Adjust this timeout if needed
  };

  const handelgo = (path) => {};
  return (
    <>
      <nav
        className={`fixed bg-white w-screen border h-[76px] z-[100] ${
          show ? "show-menu" : ""
        } `}
      >
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
                  <span
                    onClick={() => handleClick(item.sectionId)}
                    className={`text-[#5E5E5E]  font-semibold text-xl`}
                  >
                    <NavLink
                      //   spy={true}
                      smooth={true}
                      offset={-100}
                      duration={item.id > 2 ? 1000 : 500}
                      to={"/"}
                    >
                      {item.title}
                    </NavLink>
                  </span>
                  <span
                    className={` h-[3px] bg-[#0F62FE] w-0 transition-all duration-300 group-hover:w-full`}
                  ></span>
                </div>
              );
            })}
          </div>
          <div className="hidden lg:flex">
            <Button>
              <span
                onClick={() => handleClick("contact")}
                className={`text-black  font-semibold text-xl`}
              >
                <NavLink
                  //   spy={true}
                  smooth={true}
                  offset={-100}
                  // duration={item.id > 2 ? 1000 : 500}
                  to={"/"}
                >
                  Contact Us
                </NavLink>
              </span>
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
          <div
            onClick={() => {
              setShow(!show);
            }}
            className="lg:hidden -mt-4 flex bg-white  flex-col justify-center items-start w-screen absolut "
          >
            {show && (
              <div className="">
                <div className="flex flex-col justify-center items-start  lg:items-end p-10  gap-2">
                  {NavbarData.map((item, index) => {
                    return (
                      <div key={index}>
                        <span
                          onClick={() => handleClick(item.sectionId)}
                          className={`text-black  font-semibold text-xl`}
                        >
                          <NavLink
                            // spy={true}
                            smooth={true}
                            offset={-70}
                            duration={item.id > 2 ? 1000 : 500}
                            to={"/"}
                          >
                            {item.title}
                          </NavLink>
                        </span>
                      </div>
                    );
                  })}
                  <button className="bg-blue-600 text-xl mt-4 hover:bg-blue-700 focus:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                    <span
                      onClick={() => handleClick("contact")}
                      className={`text-black  font-semibold text-xl`}
                    >
                      <NavLink
                        // spy={true}
                        smooth={true}
                        offset={-100}
                        // duration={item.id > 2 ? 1000 : 500}
                        to={"/"}
                      >
                        Contact Us
                      </NavLink>
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default CaseNav;
