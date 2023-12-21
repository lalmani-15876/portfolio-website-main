import React from "react";
import "./Intro.css";
import LinkedIn from "../img/linkedin.png";
import Instagram from "../img/instagram.png";
import Hackerrank from "../img/hackerrank.png";
import Resume from './resume.pdf';
import Photo from "../img/dp12.png";
const Intro = () => {
  return (
    <div className="intro">
      <div className="ileft">
        <div className="iname">
          <span>Hi There,</span>
          <span>I am Lalmani Kumar</span>
          <span>I am into Web Development</span>
        </div>
        <div>
          <a href={Resume} download>
            <button className="button sbutton">Download CV</button>
          </a>
        </div>
        <div className="iicons">

          <a href="https://www.linkedin.com/in/lalmani-bhardwaj-344969224/">
            {" "}
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/lalmanibhardwaj/">
            {" "}
            <img src={Instagram} alt="" />
          </a>
          <a href="https://www.hackerrank.com/profile/lalmanikumar1581">
            {" "}
            <img src={Hackerrank} alt="" />
          </a>
        </div>
      </div>
      <div className="iright dp">
        <img src={Photo} alt="" />
      </div>
    </div>
  );
};

export default Intro;
