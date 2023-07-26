import React from "react";
import resume from '../images/resume.png'
import '../Elements/Resume.css'

const Resume = () => {
  return (
    <>
      <div className="resume-wrapper">
        <div className="resume-content">
        <div className="resume-title">
          <span>Resume</span>
        </div>
        <div className="resume-btn">
          <button>Download Resume</button>
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
