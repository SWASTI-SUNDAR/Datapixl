import React, { useEffect, useState } from "react";
import { NavbarData } from "../data/NavConstants";
import Button from "./Button";
import { Link } from "react-scroll";
import { Link as Goto } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);

  //   Events.scrollEvent.register("begin", (to, element) => {
  //     console.log("begin", to, element);
  //   });

  //   // Registering the 'end' event and logging it to the console when triggered.
  //   Events.scrollEvent.register("end", (to, element) => {
  //     console.log("end", to, element);
  //   });

  //   // Updating scrollSpy when the component mounts.
  //   scrollSpy.update();

  //   // Returning a cleanup function to remove the registered events when the component unmounts.
  //   return () => {
  //     Events.scrollEvent.remove("begin");
  //     Events.scrollEvent.remove("end");
  //   };
  // }, []);
  // // Defining functions to perform different types of scrolling.
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  // const scrollToBottom = () => {
  //   scroll.scrollToBottom();
  // };

  // const scrollTo = () => {
  //   scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  // };

  // const scrollMore = () => {
  //   scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  // };

  // // Function to handle the activation of a link.
  // const handleSetActive = (to) => {
  //   console.log(to);
  // };
  return (
    <>
      <nav className="fixed bg-white w-screen border h-[76px] z-[100] ">
        <div className="flex justify-between  items-center  mx-8 my-6 lg:mx-32 lg:my-3">
          <div className="text-xl font-bold">
            <Goto to={"/"}>
              <img src="/Footer/logo.svg" alt="logo" />
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
                    offset={-100}
                    duration={item.id > 2 ? 1000 : 500}
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
          <div className="lg:hidden flex flex-col justify-center items-center ">
            {show && (
              <>
                {/* Apply backdrop blur effect */}
                <div className="backdrop-filter backdrop-blur-lg">
                  <div className="flex flex-col justify-center items-center h-[90vh] w-screen gap-10">
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
                            duration={500}
                            to={item.path}
                          >
                            <span className="font-semibold text-3xl">
                              {item.title}
                            </span>
                          </Link>
                        </div>
                      );
                    })}
                    <button
                      onClick={() => {
                        setShow(!show);
                      }}
                      className="bg-blue-600 text-xl mt-12 hover:bg-blue-700 focus:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    >
                      <Link to="contact">Contact Us</Link>
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
