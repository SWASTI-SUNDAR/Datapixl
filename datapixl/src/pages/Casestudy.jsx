import React, { useEffect } from "react";
import Container from "../components/Container";
import { CaseStudyPage } from "../data/CaseStudyPage";
import SecButton from "../components/SecButton";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

const Casestudy = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
   };
 
  return (
    <section id="projects">
      <Container>
        <div className="container mx-auto mb-20 mt-10 lg:mt-10">
          <h1 className="repeat text-[36px] text-center lg:mb-5 ">
            Case Studies
          </h1>
          <div className="grid lg:grid-cols-3 lg:gap-16">
            {CaseStudyPage.map((item) => {
              return (
                <div
                  key={item.id}
                  className="mt-12 border shadow-md rounded-xl flex flex-col gap-5 justify-center items-center"
                >
                  <div className="flex w-full h-full ">
                    <img
                      src={item.icon}
                      className="w-full h-full object-center object-cover rounded-t-xl"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2 ">
                    <p className="mx-4 text-[20px] text-center font-semibold ">
                      {item.text}
                    </p>
                    <div className="mb-5 mt-2">
                      <Link
                        to={item.url}
                        onClick={scrollToTop}
                        className="font-semibold border-[blue]  shadow-xl "
                      >
                        <SecButton className="text-[16px]">Read more</SecButton>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Casestudy;
