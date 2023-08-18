import React, { useState } from "react";
import "../Elements/Navbar1.css";
import { Pivot as Hamburger, Turn } from "hamburger-react";
import { NavLink } from "react-router-dom";
import Mouse from "../MouseMove";
import HorizontalScrollText from "../HorizontalScrollText";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";
import {
  BiLogoLinkedin,
  BiMailSend,
  BiPhone,
  BiSolidPhone,
} from "react-icons/bi";

const Navbar1 = () => {
  const [isToggleClicked, setIsToggleClicked] = useState(false);

  const handleHamburger = () => {
    setIsToggleClicked(!isToggleClicked);
  };
  return (
    <>
      <nav>
        <div className="top-navbar">
          <div className="inner-top-navbar">
            <div className="navbar-Logo">KD</div>
            <div
              className={
                isToggleClicked ? "navbar-hamburger active" : "navbar-hamburger"
              }
            >
              <Hamburger
                easing="ease-in"
                toggle={handleHamburger}
                label="show menu"
                size={40}
                // className='hamburger'
                rounded
                distance={"sm"}
                toggled={isToggleClicked}
                onToggle={(toggled) => {}}
              />
            </div>
          </div>

          <div className={`menu ${isToggleClicked ? "show" : ""}`}>
            <div className="inner_menu">
              <div className="left-menu">
                <div className="left-menu-left">
                  <Mouse>
                    <a
                      href="#"
                      end
                      className="menu-title"
                      onClick={handleHamburger}
                    >
                      <number>01</number> Home
                    </a>
                  </Mouse>
                  <Mouse>
                    <a
                      href="#about"
                      end
                      className="menu-title"
                      onClick={handleHamburger}
                    >
                      <number>02</number>
                      About
                    </a>
                  </Mouse>
                  <Mouse>
                    <a
                      href="#resume"
                      end
                      className="menu-title"
                      onClick={handleHamburger}
                    >
                      <number>03</number>
                      Resume
                    </a>
                  </Mouse>
                </div>
                <div className="left-menu-right">
                  <Mouse>
                    <a
                      href="#work"
                      end
                      className="menu-title"
                      onClick={handleHamburger}
                    >
                      <number>04</number>
                      Work
                    </a>
                  </Mouse>
                  <Mouse>
                    <a
                      href="#exp"
                      end
                      className="menu-title"
                      onClick={handleHamburger}
                    >
                      <number>05</number>
                      Timeline
                    </a>
                  </Mouse>
                  <Mouse>
                    <a
                      href="#contact"
                      end
                      className="menu-title"
                      onClick={handleHamburger}
                    >
                      <number>06</number>
                      Contact
                    </a>
                  </Mouse>
                </div>
                {/* <div className="center-big-text">MENU</div> */}
              </div>

              <div className="right-menu">
                <div className="social-media">
                  <div className="social-media-title">Don't be an Stranger</div>
                  <div className="social-media-icons">
                    <a href="https://github.com/karan030204">
                      <div className="github">
                        <span>Gi</span> <FaGithub />
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/in/karan-developer/">
                      <div className="linkedin">
                        <span>Li</span> <FaLinkedin />
                      </div>
                    </a>
                    <a href="https://twitter.com/DattaniKaran25">
                      <div className="twitter">
                        <span>Tw</span> <FaTwitter />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/_karan324_/">
                      <div className="instagram">
                        <span>In</span> <FaInstagram />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="contact-details">
                  <div className="contact-content">
                    <span>Have an Idea ? </span>
                    <Mouse>
                      <a
                        href="#contact"
                        style={{ textDecoration: "none" }}
                        onClick={handleHamburger}
                      >
                        <h1 className="contact-btn">Tell me about it!</h1>
                      </a>
                    </Mouse>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
