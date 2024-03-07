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
function App() {
  return (
    <>
      <div className="overflow-hidden">
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
