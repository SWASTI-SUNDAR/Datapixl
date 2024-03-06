import React, { useEffect } from "react";
import { Element, Link } from "react-scroll";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import WhyUs from "./WhyUs";
import Partner from "./Partner";
import Projects from "./Projects";
import Footer from "../components/Footer";
import Career from "./Career";
import PartnerReal from "./PartnerReal";
import Casestudy from "./Casestudy";
import Contact from "./Contact";

const Layout = () => {
  return (
    <div>
      <Element name="Home">
        <Home />
      </Element>
      <Element className="about">
        <About />
      </Element>
      <Element className="services">
        <Services />
      </Element>
      <Element className="workshop">
        <WhyUs />
      </Element>
      <Element className="projects">
        <Casestudy />
      </Element>
      <Partner />

      <Element className="partners">
        <PartnerReal />
      </Element>
      <Element className="career">
        <Career />
      </Element>
      <Element className="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Layout;
