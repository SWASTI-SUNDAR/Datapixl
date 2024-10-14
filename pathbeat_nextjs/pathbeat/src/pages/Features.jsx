import React from 'react';
import { FeaturesData } from '../data/Features';

const Features = () => {
  return (
    <div id="about" className="min-h-screen px-5 lg:px-28">
      <h1 className="mt-32 text-center heading font-bold lg:text-4xl text-2xl ">
        Pathbeat:
        <span className="text-[#1863B8] heading ml-1">
          Your Audio Adventure Awaits
        </span>
      </h1>
      <div className={`mt-16 flex flex-col gap-16`}>
        {FeaturesData.map((data, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col ${
                index === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }  gap-5`}
            >
              {/* Image Container */}
              <div className="lg:w-1/2 p-2">
                <img
                  src={data.icon}
                  alt="icon"
                  className=""
                  loading="lazy"
                  width="500"
                  height="400"
                />
              </div>

              {/* Text Content */}
              <div className="flex lg:w-1/2 flex-col justify-center gap-7">
                <h1 className="lg:text-2xl heading font-semibold">
                  {data.title}
                </h1>
                <p className="lg:text-xl">{data.description1}</p>
                <p className="lg:text-xl hidden lg:block">
                  {data.description2}
                </p>
                <p className="lg:text-xl">{data.description3}</p>
                <p className="lg:text-xl hidden lg:block">
                  {data.description4}
                </p>
                <p className="lg:text-xl hidden lg:block">
                  {data.description5}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
