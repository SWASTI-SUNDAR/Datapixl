import React from "react";
import Container from "./Container";
import { Link } from "react-scroll";
import { FooterData } from "../data/FooterData";
const Footer = () => {
  return (
    <div className=" bg-gradient-to-b from-[#f8f8f8] to-transparent relative overflow-hidden border-2">
      <Container>
        <div className="flex flex-col lg:flex-row justify-start lg:justify-center">
          {FooterrData.map((item) => {
            return (
              <div
                key={item.id}
                className="flex  items-center mt-3 pb-2 gap-5 lg:p-5"
              >
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  // onSetActive={handleSetActive}
                  to={item.link}
                  className="text-primary font-semibold lg:text-[20px] "
                >
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          {
            <div className="flex flex-col lg:flex-row  items-center gap-5 p-5">
              {FooterData.map((data, index) => {
                return (
                  <div key={index} className="flex items-center gap-5 p-5">
                    <img src={data.icon} className="  " alt="icon" />

                    <div className="">
                      <h1 className="text-[black]">{data.description}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          }
        </div>
      </Container>
      <div className="bg-[#1A2AEA] flex justify-center p-3">
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
    title: "Service",
    link: "services",
  },
  {
    id: 2,
    title: "Case Study",
    link: "projects",
  },
  {
    id: 3,
    title: "Career",
    link: "career",
  },
  {
    id: 4,
    title: "Partner",
    link: "partners",
  },
  {
    id: 5,
    title: "Contact us",
    link: "contact",
  },
];
