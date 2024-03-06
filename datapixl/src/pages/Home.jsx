import React from "react";
import Button from "../components/Button";
import SecButton from "../components/SecButton";
import { Link } from "react-scroll";
import background from "../assets/background.svg";
const Home = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
        className={` mx-auto min-h-screen bg-cover bg-center justify-center items-center  w-full  min-w-screen overflow-hidden flex flex-col `}
        id="home"
      >
        <div className="flex flex-col  gap-4 text-white font-bold p-5 ">
          <div className="lg:text-[64px] text-[30px] ">
            <h1 className=" text-center ">AI Advisory &</h1>
            <h1 className=" text-center ">Engineering Services</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-center text-md">
              Your strategic partner in harnessing the power of <br />{" "}
              predictive and generative AI for unlocking sustainable <br />{" "}
              business growth.
            </h1>
          </div>
        </div>
        <div className="mt-10 flex lg:flex-row flex-col justify-start lg:justify-center gap-16">
          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            to="workshop"
          >
            <Button>Book free consultation</Button>
          </Link>

          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            to="services"
          >
            <SecButton>Learn more</SecButton>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
