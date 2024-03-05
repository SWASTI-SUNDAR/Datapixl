import React from 'react'
import { CaseStudyPAge3 } from '../../data/CaseStudyData';
import CaseStudyCard from '../../components/CaseStudyCard';
import Contact from '../Contact';
import SecButton from '../../components/SecButton';
import { Link } from 'react-router-dom';

const CaseStudy3 = () => {
   const scrollToTop = () => {
     window.scrollTo(0, 0);
   };
  return (
    <div className="">
      <div>
        {CaseStudyPAge3.map((data, index) => {
          return (
            <>
              <CaseStudyCard data={data} key={index} />
            </>
          );
        })}
      </div>
      <Contact />
      <div className="flex justify-center mt-12 mb-16 ">
        <SecButton>
          <Link onClick={scrollToTop} to={"/"}>
            Go back to home
          </Link>
        </SecButton>
      </div>
    </div>
  );
}

export default CaseStudy3
