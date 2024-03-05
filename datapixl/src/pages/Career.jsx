import React from "react";
import SecButton from "../components/SecButton";
import Container from "../components/Container";

const Career = () => {
  return (
    <Container>
      <div className="container max-w-[1330px] mx-auto  flex justify-center flex-col gap-20">
        <h1 className="repeat text-center mt-8 mb-2 ">Career</h1>
        <div
          className={`bg-[url('/Career/career.svg')] rounded-xl  bg-center
         bg-black  bg-cover bg-no-repeat p-10 flex flex-col min-h-72 justify-center gap-5`}
        >
          <span className="text-[40px] text-white">Join Us</span>
          <span className="text-white text-[20px] leading-8 font-medium ">
            Ready to be part of AI revolution?
            <br />
            Take the first step towards an exciting career in AI innovation.{" "}
          </span>
          <div className="pb-5">
            <SecButton>Join our team</SecButton>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Career;
