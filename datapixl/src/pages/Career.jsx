import React from "react";
import SecButton from "../components/SecButton";
import Container from "../components/Container";
import { Link } from "react-scroll";

const Career = () => {
  return (
    <Container>
      <div className="container max-w-[1330px] mx-auto mt-16 flex justify-center flex-col ">
        <h1 className="repeat text-center mb-4 text-[36px] ">Careers</h1>
        <div
          className={`bg-[url('/Career/career.webp')] rounded-xl  bg-center
         bg-black  bg-cover bg-no-repeat p-10 flex flex-col min-h-72 justify-center gap-5`}
        >
          <span className="text-[40px] text-white">Join Us</span>
          <span className="text-white text-[20px] leading-8 font-medium ">
            Ready to be part of AI revolution?
            <br />
            Take the first step towards an exciting career in AI{" "}
          </span>
          <div className="pb-5">
            <SecButton>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                to="contact"
              >
                Join our team
              </Link>
            </SecButton>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Career;
