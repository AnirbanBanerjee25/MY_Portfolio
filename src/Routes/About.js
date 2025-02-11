import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero2 from "../Components/Hero2";
import AboutContent from "../Components/AboutContent";
const About = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="ABOUT." text="I am a MERN STACK Developer." />
      <AboutContent/>
      <Footer />
    </div>
  );
};

export default About;
