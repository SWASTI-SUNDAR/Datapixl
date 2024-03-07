import React from "react";

const PartnerCard = ({ data, id }) => {
  return (
    <div
      className={`${
        data.id == 3 ? "lg:w-[50%] mx-auto" : ""
      } border-primary rounded-xl border-[3px] flex justify-center items-center gap-5 p-5 `}
    >
      <div className="lg:w-20 lg:h-20  w-16 flex-shrink-0 overflow-hidden">
        {/* Adjust width and height as needed */}
        <img className="w-full h-full object-cover" src={data.icon} alt="" />
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-semibold text-[20px]">
          {data.title}
        </span>
        <span className="text-tertiary text-[16px] ">{data.description}</span>
      </div>
    </div>
  );
};

export default PartnerCard;
