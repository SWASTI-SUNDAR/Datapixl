"use client";
import React from "react";

const Partner = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div id="partner">
      <div className="px-5 lg:px-28 mt-16">
        <div className="flex bg-[#14345A] rounded-xl justify-between">
          <div className="lg:p-16 flex-1 p-5">
            <h1 className="text-white lg:text-[40px] heading leading-relaxed text-2xl font-semibold">
              Join hands with us and bring
              <br className="hidden lg:block" />
              your expertise to a global audience.
            </h1>
            <button
              className="bg-white btn hover:scale-110 duration-300 rounded-md px-2 py-3 mt-32 font-semibold"
              onClick={scrollToContact}
            >
              Partner with us
            </button>
          </div>
          <div className="w-[45%] hidden lg:block">
            <img src="/partner/main.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
