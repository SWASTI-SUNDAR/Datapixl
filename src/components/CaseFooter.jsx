import React from "react";
import Container from "./Container";
import { Link } from "react-scroll";
import { FooterData } from "../data/FooterData";
import { NavLink, Link as Goto } from "react-router-dom";
import { NavbarData } from "../data/NavConstants";
const CaseFooter = () => {
  const handleClick = (sectionId) => {
    // setShow(false); // Close the menu

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
  return (
    <div className=" bg-gradient-to-b from-[#f8f8f8] to-transparent relative overflow-hidden mt-12 border-t-2">
      <Container>
        <div className="flex flex-col lg:flex-row justify-start lg:justify-center">
          {NavbarData.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col lg:items-center mt-3 pb-2  lg:p-5"
              >
                <span
                  onClick={() => handleClick(item.sectionId)}
                  className={`text-black  font-semibold lg:text-[20px]`}
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
                <span className=" flex lg:hidden bg-black "></span>
              </div>
            );
          })}
        </div>

        <div>
          {
            <div className="flex flex-col mt-10 lg:flex-row justify-center lg:items-center gap-5 lg:p-5">
              {FooterData.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="flex lg:items-center gap-3 lg:gap-5 lg:p-5"
                  >
                    <img
                      src={data.icon}
                      className={`${data.id == 1 ? "w-56" : ""}`}
                      alt="icon"
                    />

                    <div className="">
                      <h1 className="text-[black] font-semibold ">
                        {data.description}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          }
        </div>
      </Container>
      <div className="bg-[#1A2AEA] flex justify-center mt-4 p-3">
        <span className="text-white">
          Copyright © 2024, Datapixl. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default CaseFooter;

const FooterrData = [
  {
    id: 1,
    title: "About",
    path: "about",
  },
  {
    id: 2,
    title: "Services",
    path: "services",
  },
  {
    id: 3,
    title: "Case Studies",
    path: "projects",
  },
  {
    id: 5,
    title: "Partner with us",
    path: "partners",
  },
  {
    id: 4,
    title: "Careers",
    path: "career",
  },
];
