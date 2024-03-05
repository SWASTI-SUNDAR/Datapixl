import React from "react";
import CaseStudyCard from "../../components/CaseStudyCard";
import { CaseStudyPAge1 } from "../../data/CaseStudyData";
import Contact from "../Contact";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import SecButton from "../../components/SecButton";

const Casestudy1 = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="">
      <div>
        {CaseStudyPAge1.map((data, index) => {
          return (
            <>
              <CaseStudyCard data={data} key={index} />
            </>
          );
        })}
      </div>
      <Contact />
      <div className="flex justify-center mt-12 mb-16 ">
        <Link onClick={scrollToTop} to={"/"}>
          <SecButton>Go back to home</SecButton>
        </Link>
      </div>
    </div>
  );
};

export default Casestudy1;
