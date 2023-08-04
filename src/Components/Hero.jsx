import React, { useState, useEffect } from "react";
import "../Elements/Hero.css";
import { TfiGithub, TfiTwitter, TfiLinkedin } from "react-icons/tfi";
import HorizontalScrollText from "../HorizontalScrollText";
import MovingText from "../HorizontalScrollText";
import Mouse from "../MouseMove";

const Hero = () => {


  return (
    <>
      <div className="hero-section" id="hero">
        <div className="hero-content">
          {/* <div className="hero-bg-content"> */}
            {/* <p className="hero-description">
              DESIGNER WITH A PASSION <br /> FOR CREATING INTUITIVE <br />{" "}
              DIGITAL EXPERIENCES
            </p> */}
            {/* <p className="hero-description1">
              DESIGNER WITH A PASSION <br /> FOR CREATING INTUITIVE <br />{" "}
              DIGITAL EXPERIENCES
            </p> */}
          {/* </div> */}
        <div className="images"> 
          <div className="image">
            <img src="99.jpg" alt="" />
          </div>
          
          {/* <div className="image3">
            <img src="16.jpg" alt="" />
          </div> */}
          {/* <div className="image1">
            <img src="95.jpg" alt="" />
          </div> */}
            {/* <div className="vignitte"></div> */}
            </div>

         <div className="hero-moving-text1">
          <MovingText direction="right" pixelsToMove={2}>
            <p
              className="scrolling-text1"
              
              >
              WebSite
            </p>
            </MovingText>
              
          </div>
          <div className="hero-moving-text">
            <MovingText direction="left" pixelsToMove={2} >
            <p
              className="scrolling-text"
              
            >
              Developer
            </p>
            </MovingText>
          </div>
        </div>
      </div>

      <div className="right_navbar_body">
        <nav className="right_navbar">
          <ul className="right_navbar_ul">
            <li className="icons">
              <a href="">
                <TfiTwitter color="rgba(255,255,255,0.7)" size={20} />
              </a>
            </li>
            <li>
              <a href="">
                <TfiGithub color="rgba(255,255,255,0.7)" size={20} />
              </a>
            </li>
            <li>
              <a href="">
                <TfiLinkedin color="rgba(255,255,255,0.7)" size={20} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Hero;
