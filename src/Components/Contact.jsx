import React, { useEffect, useState } from "react";
import "../Elements/Contact.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import TextHover from "../TextHover";
import MovingText from "../HorizontalScrollText";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import Intro from "./ContactPages/Intro";
import FirstPage from "./ContactPages/FirstPage";
import SecondPage from "./ContactPages/SecondPage";
import ThirdPage from "./ContactPages/ThirdPage";
import FourthPage from "./ContactPages/FourthPage";
import Circle from "./Circle";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [isDataFilled, setIsDataFilled] = useState(false);

  const [myData, setMyData] = useState({
    Name:"",
    Topic:"",
    Email:"",
    _Email:"",
    Content:"",
  })

  const [circle] = useState(4);
  const arr = [];

  const [active, setActive] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [isIntro, setIsIntro] = React.useState(false);
  const [isDiscussClicked, setIsDiscussClicked] = React.useState(false);

  const handleDiscuss = () => {
    setIsDiscussClicked(!isDiscussClicked);
  };

  for (let i = 0; i < circle; i++) {
    arr.push(
      <Circle className={i <= active ? "circle active" : "circle"} key={i}>
        {i}
      </Circle>
    );
  }

  useEffect(() => {
    const introPage = setTimeout(() => {
      setIsIntro(true);
      const intro = setInterval(() => {
        setIsIntro(false);
      }, 4000);
    }, 1500);

    const pageIncrement = setTimeout(() => {
      setPage(1);
    }, 5500);
  }, []);

  const handleNextPage = () => {
    if (page === 4) {
      emailjs.send("service_email","service_template",myData,"Gqo5InPEtHWRjexmI")
      .then(result=>{
        console.log(result.text);
      })
    } else {
      if (page >= 1) {
        if (active >= circle) {
          setActive(active);
        } else {
          setActive(active + 1);
        }
      }
      if (isIntro == false) {
        setPage(page + 1);
      }
    }
  };
  const handlePrevPage = () => {
    if (page === 1) {
    } else {
      if (active <= 0) {
        setActive(0);
      } else {
        setActive(active - 1);
      }

      setPage(page - 1);
    }
  };

  useEffect(() => {
    setWidth((99.35 / (circle - 1)) * active);
    console.log(myData);
  }, [circle, active,myData]);

  return (
    <>
      <section className="contact-wrapper">
        {isDiscussClicked && <div className="overlay" id="overlay"></div>}

        <div className="container">
          <div className="contact-bg-text">
            <MovingText direction="left" pixelsToMove={2}>
              {" "}
              Lets
            </MovingText>
          </div>
          <div className="contact-bg-text2">
            <MovingText direction="right" pixelsToMove={2}>
              {" "}
              Contact
            </MovingText>
          </div>
          <div className="contact-bg-text3">
            <MovingText direction="left" pixelsToMove={2}>
              {" "}
              Now
            </MovingText>
          </div>
          <div className="contact-content">
            <div className="contact-title">Hello.</div>
            <div variants={textVariant()} className="contact-subtitle">
              {/* <TextHover text="Lets discuss about a next big thing" className="big-text" image_link="https://images.pexels.com/photos/16894687/pexels-photo-16894687/free-photo-of-open-neon-sign.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" > */}
              Lets discuss about a next big thing
            </div>
            <div className="contact-desc">
              I can help design and build you next website. Let me know what you
              need by filling in this quick{" "}
            </div>
            <div className="buttons">
              <div className="message-btn">
                <button>Write a Message</button>
              </div>
              <div className="discuss-btn">
                <button onClick={handleDiscuss}>Discuss a Project</button>
              </div>
            </div>
            <div className="contact-social-media">
              <div className="contact-instagram">
                <span>Instagram</span>
                <FaInstagram />
              </div>
              <div className="contact-github">
                <span>Github</span>
                <FaGithub />
              </div>
              <div className="contact-linkedin">
                <span>LinkedIn</span>
                <FaLinkedin />
              </div>
              <div className="contact-twitter">
                <span>Twitter</span>
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
        {isDiscussClicked && (
          <div className={`popup-form ${isDiscussClicked ? "open" : "closed"}`}>
            <div className="new-progress">
              <div
                className="new-progress-bar"
                style={{ width: width + "%" }}
              ></div>
            </div>
            {/* { page >= 1 &&
            <div className="container1">
              <div className="content">
                <div className="progressbar">
                  <div className="progress" style={{width:width+"%"}}></div>
                  {arr}
                </div>
              </div>
            </div>
} */}

            <div className="close-icon">
              󠁘{" "}
              <div className="icon" onClick={handleDiscuss}>
                x
              </div>
            </div>
            {isIntro && <Intro />}
            {(() => {
              switch (page) {
                case 1:
                  return <FirstPage myData={myData} setMyData={setMyData} isDataFilled={isDataFilled} setIsDataFilled={setIsDataFilled}/>;
                case 2:
                  return <SecondPage myData={myData} setMyData={setMyData} isDataFilled={isDataFilled} setIsDataFilled={setIsDataFilled}/>;
                case 3:
                  return <ThirdPage myData={myData} setMyData={setMyData} isDataFilled={isDataFilled} setIsDataFilled={setIsDataFilled}/>;
                case 4:
                  return <FourthPage myData={myData} setMyData={setMyData} isDataFilled={isDataFilled} setIsDataFilled={setIsDataFilled}/>;
                default:
                  return null;
              }
            })()}

            <div
              className="prev-button"
              style={{ display: page >= 2 ? "block" : "none" }}
            >
              <button onClick={handlePrevPage}>
                {page == 1 ? "" : "back"}
              </button>
            </div>
            <div className="next-button">
              <button onClick={handleNextPage}>
                {page == 4 ? "submit" : "next"}
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;
