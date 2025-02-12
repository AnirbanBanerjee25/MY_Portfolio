import "./Hero.css";
import React from "react";
import introimg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="introimg" src={introimg} alt="Intro Image" />
      </div>
      <div className="content">
        <p>HI, I'M ANIRBAN BANERJEE.</p>
        <h1>MERN STACK Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
