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
                className="flex justify-center w-full p-5 items-center flex-col "
              >
                <div className="flex justify-center ">
                  <img
                    src={item.icon}
                    className="lg:p-10  object-center md:max-w-[450px] max-w-full rounded-xl lg:max-w-[450px] bordeer  lg:max-h-[300px]"
                    alt=""
                  />
                </div>
                <div className="flex justify-center mt-2 lg:mt-0 lg:items-center flex-col ">
                  <h1 className="lg:text-[32px] text-[20px] font-semibold ">
                    {item.title}
                  </h1>
                  <h1 className="lg:mt-3  lg:text-center font-normal text-[16px] lg:text-[24px]">
                    {item.desc}
                  </h1>
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
