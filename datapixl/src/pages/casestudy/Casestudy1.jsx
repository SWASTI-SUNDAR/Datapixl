import React from "react";
import CaseStudyCard from "../../components/CaseStudyCard";
import { CaseStudyPAge1 } from "../../data/CaseStudyData";
import Contact from "../Contact";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import SecButton from "../../components/SecButton";

const Casestudy1 = () => {
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
      <div className="flex justify-center mb-16 ">
        <SecButton>
          <Link to={"/"}>Go back to home</Link>
        </SecButton>
      </div>
    </div>
  );
};

export default Casestudy1;
