import React from 'react'
import { CaseStudyPAge3 } from '../../data/CaseStudyData';
import CaseStudyCard from '../../components/CaseStudyCard';
import Contact from '../Contact';
import SecButton from '../../components/SecButton';
import { Link } from 'react-router-dom';

const CaseStudy3 = () => {
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
      <div className="flex justify-center mb-16 ">
        <SecButton>
          <Link to={"/"}>Go back to home</Link>
        </SecButton>
      </div>
    </div>
  );
}

export default CaseStudy3
