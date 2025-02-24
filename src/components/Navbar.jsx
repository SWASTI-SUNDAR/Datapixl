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

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Check if the middle of the section is in the viewport
      let activeSectionId = null;

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          activeSectionId = sectionId;
        }
      });

      const matchingNavItem = NavbarData.find(
        (item) => item.sectionId === activeSectionId
      );
      setActiveSection(matchingNavItem ? matchingNavItem.id : null);
    };

    // Set initial active section
    const sections = document.querySelectorAll("section");
    if (sections.length > 0) {
      const firstSectionId = sections[0].getAttribute("id");
      const firstNavItem = NavbarData.find(
        (item) => item.sectionId === firstSectionId
      );
      if (firstNavItem) {
        setActiveSection(firstNavItem.id);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed bg-white w-screen border h-[76px] z-[100] ${
          show ? "show-menu" : ""
        } `}
      >
        <div className="flex justify-between items-center mx-8 my-6 lg:mx-32 lg:my-3">
          <div className="text-xl font-bold">
            <Goto onClick={scrollToTop} to={"/"}>
              <img src="/Footer/logooption2.svg" className="w-44" alt="logo" />
            </Goto>
          </div>
          <div className="hidden lg:flex gap-[26px]">
            {NavbarData.map((item) => (
              <div key={item.id} className="flex group flex-col">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust this offset to suit your layout
                  duration={500}
                  to={item.sectionId}
                >
                  <span className="font-semibold cursor-pointer text-[#5E5E5E] text-[18px]">
                    {item.title}
                  </span>
                </Link>
                <span
                  className={`${
                    activeSection === item.id ? "w-full" : ""
                  } h-[3px] bg-[#0F62FE] w-0 transition-all duration-300 group-hover:w-full`}
                ></span>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex">
            <Button>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
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

        <div>
          <div
            onClick={() => {
              setShow(!show);
            }}
            className="lg:hidden -mt-4 flex bg-white  flex-col justify-center items-start w-screen absolut"
          >
            {show && (
              <div>
                <div className="flex flex-col justify-center items-start lg:items-end p-10 gap-2">
                  {NavbarData.map((item) => (
                    <div key={item.id}>
                      <Link
                        onClick={() => {
                          setShow(!show);
                        }}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={item.id > 2 ? 1000 : 500}
                        to={item.sectionId}
                      >
                        <span className="text-black font-semibold text-xl">
                          {item.title}
                        </span>
                      </Link>
                    </div>
                  ))}
                  <button className="bg-blue-600 text-xl mt-4 hover:bg-blue-700 focus:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
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
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
