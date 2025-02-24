import React from "react";
import CaseStudyCard from "../../components/CaseStudyCard";
import { CaseStudyPAge1 } from "../../data/CaseStudyData";
import Contact from "../Contact";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import SecButton from "../../components/SecButton";
import CaseNav from "../../components/CaseNav";
import Footer from "../../components/Footer";
import CaseFooter from "../../components/CaseFooter";

const Casestudy1 = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="">
      <CaseNav />
      <div>
        {CaseStudyPAge1.map((data, index) => {
          return (
            <>
              <CaseStudyCard data={data} key={index} />
            </>
          );
        })}
      </div>
      <div className="flex justify-center mt-12 mb-16 ">
        <Link onClick={scrollToTop} to={"/"}>
          <SecButton>Go back to home</SecButton>
        </Link>
      </div>
      <CaseFooter/>
    </div>
  );
};

export default Casestudy1;
