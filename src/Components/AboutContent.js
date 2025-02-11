import { Link } from "react-router-dom";
import "./AboutContent.css";
import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.png";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I am a Full Stack Developer. I create responsive secure websites for
          my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} className="img" alt="image"></img>
          </div>
          <div className="img-stack bottom">
            <img src={react2} className="img" alt="image"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
