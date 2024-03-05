import React from "react";
import { Workshop } from "../data/Workshop";
import Meet from "../components/Meet";
import Container from "../components/Container";
const WhyUs = () => {
  return (
    <Container>
      <section className="min-h-screen container mx-auto mt-16  lg:mt-12 ">
        <div
          className={`bg-[url("/Workshop/workshop.svg")] rounded-lg lg:px-32 px-7
            bg-no-repeat bg-center lg:bg-contain bg-cover  flex flex-col
             lg:gap-20 gap-12 min-h-screen  mx-auto`}
        >
          <div className="flex text-white  flex-col md:justify-center   ">
            <h1 className="text-[30px] lg:text-[40px] mt-14  lg:mt-24 font-semibold ">
              Don’t know where to start? Discover a free workshop
            </h1>
            <h1 className="lg:text-[20px] font-medium mt-4 ">
              Our free workshop helps you gain clarity, build a roadmap, and
              unlock growth.
            </h1>
          </div>
          <div className=" ">
            <span className="lg:text-[20px] font-semibold text-white ">
              What you get:
            </span>
            <div>
              {Workshop.map((item) => (
                <div
                  key={item.id}
                  className="flex  items-center gap-4 md:gap-5 mt-4"
                >
                  <img
                    src={item.icon}
                    className="object-contain object-center w-[24px] h-[24px]"
                    alt=""
                  />
                  <div className="flex gap-1 md:text-[20px] font-normal flex-col lg:flex-row">
                    <span className="flex lg:gap-2 lg:flex-row flex-col">
                      <span className="text-white md:text-[20px] font-semibold ">
                        {item.title}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 lg:mt-10">
              <span className="text-white">
                Ready to take the first step? Sign up for your free discovery
                workshop today!
              </span>
            </div>
            <div className="lg:mt-16 mt-32 mb-3">
              <Meet />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default WhyUs;
