import React from "react";
import { CaseStudyPAge2 } from "../../data/CaseStudyData";
import SecButton from "../../components/SecButton";
import Contact from "../Contact";
import CaseStudyCard from "../../components/CaseStudyCard";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import CaseNav from "../../components/CaseNav";
import Footer from "../../components/Footer";
import CaseFooter from "../../components/CaseFooter";

const Casestudy2 = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="">
     <CaseNav/>
      <div>
        {CaseStudyPAge2.map((data, index) => {
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
      <CaseFooter/>
    </div>
  );
};

export default Casestudy2;
