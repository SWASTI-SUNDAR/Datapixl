import React from "react";
// import { WhyUsData } from "../data/WhyUs"; // Ensure this file exists in the appropriate directory
import Link from "next/link"; // Import Link from Next.js

const WhyUs = () => {
  return (
    <div className="bg-[#F6F6F6] px-5 md:px-28">
      <h1 className="mt-32 text-center heading font-bold text-2xl lg:text-4xl">
        Why Pathbeat is
        <span className="text-[#1A4E8A] heading ml-1">Your Best Guide?</span>
      </h1>

      <div className="mt-16 rounded-2xl bg-[#14345A] flex lg:flex-row flex-col justify-between">
        <div className="p-10 lg:w-1/2 flex flex-col gap-6">
          <span className="text-white font-medium lg:text-5xl leading-normal heading text-3xl text-center">
            Explore India with Pathbeat
          </span>
          <span className="text-gray-400 text-center">
            Explore India's rich heritage with our immersive digital audio
            guides. Discover hidden gems, learn fascinating stories, and enhance
            your travel experience. Available for popular destinations across
            India.
          </span>
          <div style={{ margin: "auto" }}>
            <img src="/whyus/qr-code.png" alt="QR Code" />
          </div>
          <div
            className="lg:flex gap-5 hidden mt-16"
            style={{ margin: "auto" }}
          >
            <Link href="">
              <img
                src="/whyus/play-store.png"
                className="w-[35%] hover:scale-95 duration-200 lg:w-auto"
                alt="Play Store"
              />
            </Link>
            <Link href="">
              <img
                src="/whyus/app-store.png"
                className="w-[35%] hover:scale-95 duration-200 lg:w-auto"
                alt="App Store"
              />
            </Link>
          </div>
        </div>
        <div>
          <img src="/whyus/side.webp" alt="Side Image" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
