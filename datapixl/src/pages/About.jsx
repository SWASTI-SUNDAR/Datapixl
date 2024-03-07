import React from "react";
import { AboutData } from "../data/AboutData";
import { motion, useAnimation, useInView } from "framer-motion";
import Container from "../components/Container";
const About = () => {
  return (
    <section id="about">
      <Container>
        <div className="min-h-screen container mx-auto mb-5 p-2 ">
          <h1 className="text-center mt-12 lg:mt-20 lg:mb-12 font-semibold text-secondary text-[36px] lg:text-[40px] ">
            Your AI growth partner
          </h1>
          <div className="flex gap-3 lg:gap-16 flex-col-reverse lg:flex-row ">
            <div className="flex-1">
              <div className="flex flex-col gap-4 lg:gap-10">
                <span className="font-normal text-xl leading-8 lg:text-[20px] text-[#0A0A0A]">
                  We're a team of strategists, data scientists and engineers who
                  unlock data's transformative power through predictive and
                  generative AI to solve your critical business challenges
                </span>

                <div className="flex flex-col lg:gap-5">
                  <span className="text-[#0A0A0A] font-medium text-[20px] ">
                    We empower you to:
                  </span>
                  {AboutData.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-start  lg:items-center gap-3 mt-4"
                      >
                        <div className="flex justify-center items-start lg:items-center">
                          <img
                            src="/About/correct.svg"
                            className="object-contain mt-1 lg:mt-0 object-center  w-[24px] h-[24px]"
                            alt=""
                          />
                        </div>
                        <div className="flex gap-1 text-[20px] flex-wrap font-normal lg:flex-row lg:justify-between lg:items-center">
                          <span className="text-secondary">
                            {data.title}
                            <b className="font-normal ml-1 text-tertiary ">
                              {data.subtext}
                            </b>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-12 lg:mt-0 ">
              <img
                src="/About/aboutimg.webp"
                className="object-contain   lg:p-0 mdp-0 rounded-lg md:object-cover lg:object-cover lg:w-[388px] lg:h-[388px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
