import React from "react";
import { CaseStudyPAge2 } from "../../data/CaseStudyData";
import SecButton from "../../components/SecButton";
import Contact from "../Contact";
import CaseStudyCard from "../../components/CaseStudyCard";
import { Link } from "react-router-dom";

const Casestudy2 = () => {
  return (
    <div className="">
      <div>
        {CaseStudyPAge2.map((data, index) => {
          return (
            <>
              <CaseStudyCard data={data} key={index} />
            </>
          );
        })}
      </div>
      <Contact />
      <div className="flex justify-center mb-16 ">
        <SecButton>
          <Link to={"/"}>Go back to home</Link>
        </SecButton>
      </div>
    </div>
  );
};

export default Casestudy2;
