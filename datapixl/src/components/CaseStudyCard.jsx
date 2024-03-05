import React from "react";
import Button from "./Button";

const CaseStudyCard = ({ data }) => {
  console.log(data.title);
  const backgroundImage = data.image;
  return (
    <div className="">
      <section>
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            height: "300px",
            position: "relative", // Ensure proper positioning for overlay and text
          }}
          className={
            "bg-no-repeat bg-center bg-cover w-screen h-72 bg-[url(`${data.image}`)] "
          }
        >
          {/* Background overlay */}
          <div
            className="absolute inset-0  opacity-50"
            style={{ zIndex: 1 }} // Ensure the overlay is placed behind the text
          ></div>

          {/* Text */}
          <h1 className="text-[32px] text-white z-[100] p-10 pt-32  relative">
            {data.heading}
          </h1>
          <span className="mt-36 text-[14px] py-3 px-5 rounded-full ml-10 bg-[#CEF7F3]">
            Case Study
          </span>
        </div>
      </section>
      <div className="min-h-screen flex flex-col  w-screen opacity-90  object-center p-10 mx-auto ">
        <h1 className="text-[24px] font-medium text-[#1A2AEA] max-w-5xl ">
          {data.title}
        </h1>
        <div className="mt-12 ">
          <div className="flex items-center gap-2">
            <img src="/Casestudy/point.svg" alt="" />
            <span className="text-[#1A2AEA] font-semibold lg:text-[24px] ">
              Our approach
            </span>
          </div>
          <div className="mt-2 ml-5">
            {data.id == 2 ? (
              <span>
                We identified and aligned Generative AI use cases for internal
                and customer applications, conducting workshops to <br />{" "}
                mitigate risks (regulatory, privacy, security). We then
                delivered two solutions:
              </span>
            ) : (
              ""
            )}
            {data.Ourapproach.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-2 mt-4">
                  <img src="/Casestudy/arrow.svg" alt="" />
                  <span className=" font-semibold text-black  ">
                    {item.title}
                    <b className="font-normal ml-1">{item.text}</b>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-2">
            <img src="/Casestudy/point.svg" alt="" />
            <span className="text-[#1A2AEA] font-semibold lg:text-[24px] ">
              Results:
            </span>
          </div>
          <div className="mt-5 ml-5">
            {data.result.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-2 mt-4">
                  <img src="/Casestudy/correct.svg" alt="" />
                  <span className=" font-semibold text-black  ">
                    {item.title}
                    <b className="font-normal ml-1">{item.text}</b>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
