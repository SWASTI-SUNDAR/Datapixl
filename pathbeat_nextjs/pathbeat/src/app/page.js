// src/app/page.js
// "use client"
import Home from "../pages/Home";
import AudioTour from "../pages/AudioTour";
import Bolg from "../pages/Bolg";
import Contact from "../pages/Contact";
import Explore from "../pages/Explore";
import Faq from "../pages/Faq";
import Features from "../pages/Features";
import Partner from "../pages/Partner";
import WhyUs from "../pages/WhyUs";
// import { ToastContainer } from "react-toastify";

export default function HomePage() {
  return (
    <>
      <div className="bg-[#F6F6F6] overflow-hidden">
        <Home />
        <AudioTour/>
        <Features />
        <Explore />
        <WhyUs />
        <Bolg />
        <Partner />
        <Faq />
        <Contact/>
      </div>
    </>
  );
}
