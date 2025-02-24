import Navbar from "./components/Navbar";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Casestudy1 from "./pages/casestudy/Casestudy1";
import Casestudy2 from "./pages/casestudy/Casestudy2";
import CaseStudy3 from "./pages/casestudy/CaseStudy3";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Helmet } from "react-helmet-async";
function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Helmet>
          <title>
            AI Engineering Services and Product Advisory Consultancy | Datapixl
          </title>
          <meta
            name="description"
            content="AI engineering services and product advisory consultancy helping adopt predictive and generative AI across industries for adding business value."
          />
          <meta
            name="keywords"
            content="Generative AI Consultancy, AI Consultancy, GenAI Consultancy, AI Engineering Services, Generative AI Engineering Services, AI Advisory, GenAI Advisory, GenAI Roadmap, Generative AI Roadmap, AI Roadmap, AI use cases, GenAI use cases, Generative AI use cases"
          />
        </Helmet>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route path="/casestudy-1" element={<Casestudy1 />} />
          <Route path="/casestudy-2" element={<Casestudy2 />} />
          <Route path="/casestudy-3" element={<CaseStudy3 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
