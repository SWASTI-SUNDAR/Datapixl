import React from "react";
import { RealPartnerData } from "../data/RaealPartnerData";
import Container from "../components/Container";

const PartnerReal = () => {
  return (
    <Container>
      <div className="container max-w-[1330px] mx-auto  mt-20 px-6  ">
        <h1 className="text-center text-2xl lg:text-[40px]  font-semibold text-primary  mt-5 text-md ">
          Unlock AI Success Together
        </h1>
        <h1 className="text-center mt-5 mb-8 lg:text-[20px] ">
          Empower your clients and grow your business through strategic AI
          partnerships.
        </h1>
        <div className="flex bg-blac flex-col lg:flex-row justify-center items-center">
          {RealPartnerData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center w-full items-center flex-col "
              >
                <div className="flex">
                  <img src={item.icon} className="lg:p-10 h-[400px]" alt="" />
                </div>
                <div className="flex justify-center lg:items-center flex-col ">
                  <h1 className="lg:text-[32px] text-[20px] font-semibold ">
                    {item.title}
                  </h1>
                  <p className="lg:mt-3 font-normal text-[16px] lg:text-[20px]">
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
