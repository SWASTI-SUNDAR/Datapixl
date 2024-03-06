import React from "react";

const PartnerCard = ({ data, id }) => {
  return (
    <div
      className={`${
        data.id == 3 ? "lg:w-[50%] mx-auto" : ""
      } border-primary rounded-xl border-[3px] flex justify-center items-center gap-5 p-5 `}
    >
      <div>
        <img className="lg:w-24 lg:h-24 size-48 " src={data.icon} alt="" />
      </div>
      <div className="flex flex-col">
        <span className="text-primary font-semibold text-[20px]">
          {data.title}
        </span>
        <span className="text-tertiary">{data.description}</span>
      </div>
    </div>
  );
};

export default PartnerCard;
