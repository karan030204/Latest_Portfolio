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
import emailjs from "@emailjs/browser";
import Thanks from "./ContactPages/Thanks";

let discuss_btn_count = 0;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDataFilled, setIsDataFilled] = useState(false);
  const [myData, setMyData] = useState({
    Name: "",
    Topic: "Website Design",
    Email: "",
    _Email: "",
    Content: "",
  });

  const [circle] = useState(4);
  const arr = [];
  const [active, setActive] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [isIntro, setIsIntro] = React.useState(false);
  const [isDiscussClicked, setIsDiscussClicked] = React.useState(false);
  const [isNextClicked, setIsNextClicked] = useState(false);

  const handleDiscuss = () => {
    discuss_btn_count++;
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
    if (page == 2 || page == 4) {
      setIsNextClicked(false);
    }
  }, [page]);

  useEffect(() => {
    if(discuss_btn_count == 1){
    const introPage = setTimeout(() => {
      setIsIntro(true);
      const intro = setTimeout(() => {
        setIsIntro(false);
      }, 3900);
    }, 1000);
  }

  if(!isIntro && discuss_btn_count == 1){
    const pageIncrement = setTimeout(() => {
      setPage(1);
    }, 5800);}


  }, [isDiscussClicked]);

  const handleNextPage = () => {
    if (page == 3 || page == 1) {
      setIsNextClicked(true);
    }
    if (page === 4) {
      setIsNextClicked(true)
      if (isDataFilled) {
        emailjs
          .send(
            "service_email",
            "service_template",
            myData,
            "Gqo5InPEtHWRjexmI"
          )
          .then((result) => {
            console.log(result.text);
            if (result.text === "OK") {
              setIsSubmitted(true);
            }
          });
      }
    } else {
      if (isDataFilled) {
        if (page >= 1) {
          if (active >= circle) {
            setActive(active);
          } else {
            setActive(active + 1);
          }
        }
        if (isIntro == false) {
          setPage(page + 1);
          if (page == 2 || page == 4 || page == 3) {
            setIsDataFilled(false);
          }
        }
      }
    }
  };
  const handlePrevPage = () => {
    setIsNextClicked(false);

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
    console.log(myData);
    console.log(isNextClicked);
    console.log(page);
  }, [myData, isNextClicked]);

  useEffect(() => {
    setWidth((99.35 / (circle - 1)) * active);
  }, [circle, active, myData]);

  return (
    <>
      <section className="contact-wrapper" id="contact">
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

            <div className="close-icon">
              󠁘{" "}
              <div className="icon" onClick={handleDiscuss}>
                x
              </div>
            </div>

            {isIntro && <Intro />}
            {!isSubmitted &&
              (() => {
                switch (page) {
                  case 1:
                    return (
                      <FirstPage
                        myData={myData}
                        setMyData={setMyData}
                        isDataFilled={isDataFilled}
                        setIsDataFilled={setIsDataFilled}
                        isNextClicked={isNextClicked}
                      />
                    );
                  case 2:
                    return (
                      <SecondPage
                        myData={myData}
                        setMyData={setMyData}
                        isDataFilled={isDataFilled}
                        setIsDataFilled={setIsDataFilled}
                      />
                    );
                  case 3:
                    return (
                      <ThirdPage
                        myData={myData}
                        setMyData={setMyData}
                        isDataFilled={isDataFilled}
                        setIsDataFilled={setIsDataFilled}
                        isNextClicked={isNextClicked}
                      />
                    );
                  case 4:
                    return (
                      <FourthPage
                        myData={myData}
                        setMyData={setMyData}
                        isDataFilled={isDataFilled}
                        setIsDataFilled={setIsDataFilled}
                        isNextClicked={isNextClicked}
                      />
                    );
                  default:
                    return null;
                }
              })()}

            {isSubmitted && <Thanks isSubmitted={isSubmitted} />}

            {!isSubmitted && (
              <>
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
              </>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;
