import React from "react";
import Container from "./Container";
import { Link } from "react-scroll";
import { FooterData } from "../data/FooterData";
const Footer = () => {
  return (
    <div className=" bg-gradient-to-b from-[#f8f8f8] to-transparent relative overflow-hidden mt-12 border-t-2">
      <Container>
        <div className="flex flex-col lg:flex-row justify-start lg:justify-center">
          {FooterrData.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col lg:items-center mt-3 pb-2  lg:p-5"
              >
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  // onSetActive={handleSetActive}
                  to={item.link}
                  className="text-black  font-semibold lg:text-[20px] "
                >
                  {item.title}
                </Link>
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
                      <h1 className="text-[black] font-semibold ">{data.description}</h1>
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

export default Footer;

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
