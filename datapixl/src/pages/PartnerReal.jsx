import React from "react";
import { RealPartnerData } from "../data/RaealPartnerData";
import Container from "../components/Container";

const PartnerReal = () => {
  return (
    <Container>
      <div className="container max-w-[1330px] mx-auto  mt-20 px-6 min-h-screen ">
        <h1 className="text-center text-2xl lg:text-[40px]  font-semibold text-primary  mt-5 text-md ">
          Unlock AI Success Together
        </h1>
        <h1 className="text-center mt-5 mb-8 lg:text-[20px] ">
          Empower your clients and grow your business through strategic AI
          partnerships.
        </h1>
        <div className="flex flex-col">
          {RealPartnerData.map((item) => {
            return (
              <div
                key={item.id}
                className="flex md:flex-row flex-col justify-center items-center "
              >
                <div className="w-full">
                  <img className="" src={item.icon} alt="" />
                </div>
                <div className="flex flex-col p-10 md:p-10 md:justify-start items- md:items-start justify-center w-full bg-blck md:gap-9">
                  <h1 className=" text-[32px] font-medium  ">{item.title}</h1>
                  <p className="font-normal leading-8 md:text-[20px]  text-[#343434] ">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default PartnerReal;
