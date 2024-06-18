import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free';
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import WhyStatLeap from "./Components/WhyStatLeap";
import Plans from "./Components/Plans";
import Footer from "./Components/Footer";
import MLKits from './Components/MLKits'; 
import Blogs from './Components/Blogs';
import Resources from './Components/Resources';
import Flowchart from "./Components/Flowchart";
import HowItWorks from "./Components/HowItWorks";
import Benefits from "./Components/Benefits";
import FAQ from "./Components/FAQ";
import Support from "./Components/Support";
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <motion.div >
              <Hero />
              <HowItWorks />
              <Flowchart />
              <Benefits/>
              <WhyStatLeap />
            </motion.div>
          } />
          <Route path="/tools" element={<MLKits />} />
          <Route path="/case-studies" element={<Blogs />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element = {<FAQ />}/>
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
