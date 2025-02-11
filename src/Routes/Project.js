import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero2 from "../Components/Hero2";
import Pricing from "../Components/Pricing";
import Work from "../Components/Work";
const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="PROJECTS." text="Some of my most recent works" />
      <Work/>
      <Pricing />
      <Footer />
    </div>
  );
};

export default Project;
