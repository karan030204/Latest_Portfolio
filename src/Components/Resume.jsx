import React from "react";
import resume from "../images/resume.png";
import "../Elements/Resume.css";
import Mouse from "../MouseMove";
import MovingText from "../HorizontalScrollText";

const Resume = () => {
  return (
    <>
      <div className="resume-wrapper" id="resume">
        <div className="resume-content">
          <div className="resume-title">
            <span>Resume</span>
          </div>
          <div className="resume-btn">
            <Mouse>
              <a href="/resume.pdf" target="_blank">
                <button>Download Resume</button>
              </a>
            </Mouse>
          </div>
          <div className="resume">
            <a href="/resume.pdf" target="_blank">
              <div className="ImgWrapper">
                <img src={resume} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
