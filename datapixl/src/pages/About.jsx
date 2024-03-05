import React from "react";
import { AboutData } from "../data/AboutData";
import { motion, useAnimation, useInView } from "framer-motion";
import Container from "../components/Container";
const About = () => {
  return (
    <Container>
      <div className="min-h-screen container mx-auto mb-5 p-2 ">
        <h1 className="text-center mt-12 lg:mt-20 lg:mb-12 font-semibold text-secondary text-[26px] lg:text-[40px] ">
          Your AI growth partner
        </h1>
        <div className="flex gap-3 lg:gap-16 flex-col-reverse lg:flex-row ">
          <div className="flex-1">
            <div className="flex flex-col gap-4 lg:gap-10">
              <span className="font-medium text-xl leading-8 lg:text-[20px] text-[#0A0A0A]">
                We're a team of strategists, data scientists, and engineers who
                unlock data's transformative power through predictive and
                generative AI to solve your critical business challenges
              </span>

              <div className="flex flex-col gap-5">
                <span className="text-[#00153E] font-medium text-[24px] ">
                  We empower you to:
                </span>
                {AboutData.map((data, index) => {
                  return (
                    <div key={index} className="flex items-center gap-3 mt-4">
                      <div className="flex justify-center items-center">
                        <img
                          src="/About/correct.svg"
                          className="object-contain object-center  w-[24px] h-[24px]"
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
          <div>
            <img
              src="/About/aboutimg.svg"
              className="object-contain  lg:p-0 mdp-0 rounded-lg md:object-cover lg:object-center w-[388px] h-[388px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
