import React from "react";
import "../Elements/About.css";
import MovingText from "../HorizontalScrollText";
import Mouse from "../MouseMove";

const About = () => {
  return (
    <>
      <div className="about-section">
         
        <div className="main-about">
          <div className="left-about">
          <div className="about-bg-text">
            {" "}
            {/* <MovingText pixelsToMove={2} direction="right">
              About
            </MovingText> */}
          </div>
          <div className="left-content">
            <div className="ImgWrap1 hover-effect">
              
              <img
                src="16.jpg"
                alt=""
                style={{ width: "100%", display: "block" }}
              />
              <span className="ImgWrap1-text">Self-Motivated</span>
            </div>

            <div className="ImgWrap2 hover-effect">
              {/* Add the 'hover-effect' class */}
              <img
                src="12.jpeg"
                alt=""
                style={{ width: "100%", display: "block" }}
              />
              <span className="ImgWrap2-text">Self-Motivated</span>
            </div>
          </div>

          <div className="right-content ">
            <div className="about-me">
              <span>
                Hello, I'm
                <br />
                <new className="">Karan Dattani</new>
              </span>
            </div>
          </div>
          </div>

          <div className="right-about">
            <p>
              I am Karan Dattani, a passionate web developer specializing in
              creating user-friendly websites that leave a lasting impression.
              With a keen eye for design and a knack for innovative solutions.Let's collaborate and bring your online vision to
              life with my expertise in web development.
            </p>
            <dir className="read-more-btn">
             <Mouse> <button>Read More</button></Mouse>
            </dir>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
