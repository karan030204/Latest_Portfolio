import React from "react";
import resume from '../images/resume.png'
import '../Elements/Resume.css'
import Mouse from "../MouseMove";
import MovingText from "../HorizontalScrollText";

const Resume = () => {
  return (
    <>
      <div className="resume-wrapper">
        <div className="resume-content">
        <div className="resume-title">
          <MovingText direction="left" pixelsToMove={2}>
          <span>Resume</span></MovingText>
        </div>
        <div className="resume-btn">
          <MovingText direction="right" pixelsToMove={2}>
        <Mouse>
          <a href="/resume.pdf" target="_blank"><button>Download Resume</button></a>
          </Mouse>
          </MovingText>
        </div>
        <div className="resume">
          <div className="ImgWrapper">
            <img src={resume} alt="" />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
