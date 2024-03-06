import React from "react";
import { RealPartnerData } from "../data/RaealPartnerData";
import Container from "../components/Container";

const PartnerReal = () => {
  return (
    <Container>
      <div className="container max-w-[1330px] mx-auto  px-6 mt-16 ">
        <h1 className="text-center text-[36px] lg:text-[40px]  font-semibold text-primary  mt-5 text-md ">
          Unlock AI success together
        </h1>
        <h1 className="text-center text-[20px] mt-5 mb-8 lg:text-[20px] ">
          Empower your clients and grow your business through strategic
          partnership with Datapixl
        </h1>
        <div className="flex bg-blac flex-col lg:flex-row gap-10 justify-center items-center">
          {RealPartnerData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center w-full lg:items-center flex-col gap-3 "
              >
                <div className="flex justify-center lg:p-10 ">
                  <img
                    src={item.icon}
                    className="  object-center md:max-w-[450px] max-w-full rounded-xl lg:max-w-[450px] bordeer  lg:h-[300px]"
                    alt=""
                  />
                </div>
                <div className="flex justify-center lg:mt-0 lg:items-center flex-col ">
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
