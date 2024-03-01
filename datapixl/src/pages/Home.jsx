import React from "react";
import Button from "../components/Button";
const Home = () => {
  return (
    <>
      <section className="bg-white">
        <section
          className={`mt-24 bg-[#d3def4] bg-no-repeat bg-cover bg-blend-multiply overflow-hidden pt-10 h-[88vh] flex w-screen justify-between `}
        >
          <div className="hidden lg:block">
            <img src="/Home/left.svg" alt="" />
          </div>
          <div className="flex flex-col lg:mt-12 mt-2 gap-3 lg:gap-10  font-bold">
            <div className="flex flex-col lg:gap-14">
              <div className="flex justify-center ">
                <span className="lg:text-[64px] text-lg fon">
                  AI Advisory and
                </span>
              </div>
              <div className="flex justify-center">
                <span className="fon text-lg lg:text-[64px] ">
                  Engineering Services
                </span>
              </div>
            </div>
            <div className="flex justify-center text-center lg:text-xl text-sm items-center text-[#323232] flex-col">
              <span>
                Your strategic partner in harnessing the power of <br />{" "}
              </span>
              <span>
                Predictive and Generative AI for unlocking sustainable <br />{" "}
              </span>
              <span>business growth.</span>
            </div>
            <div className="  flex justify-center items-center gap-4 ml-2 lg:gap-7 w-full">
              <Button>Book free consultation</Button>
              <Button bgColor="white" textColor="black">
                Learn more
              </Button>
            </div>
          </div>
          <div>
            <img src="/Home/right.svg" alt="" />
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
