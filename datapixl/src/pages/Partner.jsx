import React from "react";
import { PartnerData, extraData } from "../data/PartnerData";
import PartnerCard from "../components/PartnerCard";
import { Link } from "react-scroll";
import Container from "../components/Container";
const Partner = () => {
  return (
    <Container>
      <section className="mi-h-screen max-w-[1330px] mx-auto  flex flex-col gap-16 ">
        <div className="flex flex-col gap-3">
          <h1 className="lg:text-[40px] text-center text-[36px] text-primary font-semibold ">
            Why partner with Datapixl for your AI journey?
          </h1>
          {
            //   <div>
            //   <span className="lg:text-[20px]  text-lg font-normal ">
            //     Unlocking the power of AI shouldn't be complex or costly. <br />
            //   </span>
            //   <span className="lg:text-[20px] text-lg font-normal">
            //     At Datapixl, we simplify your AI journey:
            //   </span>
            // </div>
          }
        </div>
        <div className="grid lg:grid-cols-2 grid-col-1 gap-16">
          {PartnerData.map((data) => {
            return (
              <PartnerCard
                className={``}
                key={data.id}
                id={data.id}
                data={data}
              />
            );
          })}
        </div>
        <div>
          {extraData && (
            <PartnerCard
              className={``}
              key={extraData.id}
              id={extraData.id}
              data={extraData}
            />
          )}
        </div>
        <div className="text-tertiary  lg:text-[20px] flex flex-col gap-4 ">
          <span className="text-[16px]">
            Datapixl is your one-stop shop for all your AI needs. We empower you
            to unlock the full potential of AI and achieve your strategic goals.
          </span>
          <span className="md:flex gap-1">
            <Link
              to={"contact"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-primary font-semibold mr-1 md:mr-0"
            >
              Contact us today
            </Link>
            to discuss your unique requirements and get started on your AI
            journey!
          </span>
        </div>
      </section>
    </Container>
  );
};

export default Partner;
