import React from "react";
import Container from "../components/Container";
import { CaseStudyPage } from "../data/CaseStudyPage";
import SecButton from "../components/SecButton";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
const Casestudy = () => {
  return (
    <Element className="projects">
      <Container>
        <div className="container mx-auto  px-5 mb-20 mt-10">
          <h1 className="repeat text-center ">Case Study</h1>
          <div className="grid lg:grid-cols-3 gap-16">
            {CaseStudyPage.map((item) => {
              return (
                <div
                  key={item.id}
                  className="mt-12 border rounded-xl flex flex-col gap-5 justify-center items-center"
                >
                  <img src={item.icon} className="w-full" alt="" />
                  <div className="flex flex-col justify-center items-center gap-2 ">
                    <p className="mx-4">{item.text}</p>
                    <div className="mb-5">
                      <Link to={item.url} className="font-semibold ">
                        <SecButton className="">view</SecButton>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Element>
  );
};

export default Casestudy;
