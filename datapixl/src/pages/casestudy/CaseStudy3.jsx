import React from "react";
import { CaseStudyPAge3 } from "../../data/CaseStudyData";
import CaseStudyCard from "../../components/CaseStudyCard";
import Contact from "../Contact";
import SecButton from "../../components/SecButton";
import { Link } from "react-router-dom";
import CaseNav from "../../components/CaseNav";
import Footer from "../../components/Footer";
import CaseFooter from "../../components/CaseFooter";

const CaseStudy3 = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="">
      <CaseNav />
      <div>
        {CaseStudyPAge3.map((data, index) => {
          return (
            <>
              <CaseStudyCard data={data} key={index} />
            </>
          );
        })}
      </div>

      <div className="flex justify-center mt-12 mb-16 ">
        <SecButton>
          <Link onClick={scrollToTop} to={"/"}>
            Go back to home
          </Link>
        </SecButton>
      </div>
      <CaseFooter />
    </div>
  );
};

export default CaseStudy3;
