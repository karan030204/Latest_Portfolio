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
            <div className={isToggleClicked ? "navbar-hamburger active" : "navbar-hamburger"}>
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
        
            <div className={`menu ${isToggleClicked ? "show" : "close"}`}>
              <div className="inner_menu">
                <div className="left-menu">
                  <div className="left-menu-left">
                    <Mouse>
                      <NavLink to="/" end className="menu-title">
                        <number>01</number> Home
                      </NavLink>
                    </Mouse>
                    <Mouse>
                      <NavLink to="/about" end className="menu-title">
                        <number>02</number>
                        About
                      </NavLink>
                    </Mouse>
                    <Mouse>
                      <NavLink to="/skills" end className="menu-title">
                        <number>03</number>
                        Resume
                      </NavLink>
                    </Mouse>
                  </div>
                  <div className="left-menu-right">
                    <Mouse>
                      <NavLink to="/projects" end className="menu-title">
                        <number>04</number>
                        Work
                      </NavLink>
                    </Mouse>
                    <Mouse>
                      <NavLink to="/resume" end className="menu-title">
                        <number>05</number>
                        Tech
                      </NavLink>
                    </Mouse>
                    <Mouse>
                      <NavLink to="/contact" end className="menu-title">
                        <number>06</number>
                        Contact
                      </NavLink>
                    </Mouse>
                  </div>
                  {/* <div className="center-big-text">MENU</div> */}
                </div>

                <div className="right-menu">
                  <div className="social-media">
                    <div className="social-media-title">Don't be an Stranger</div>
                    <div className="social-media-icons">
                      <div className="github"> <span>Gi</span> <FaGithub/></div> 
                      <div className="linkedin"><span>Li</span> <FaLinkedin/></div> 
                      <div className="twitter"><span>Tw</span> <FaTwitter/></div> 
                      <div className="instagram"><span>In</span> <FaInstagram/></div> 
                    </div>
            
                  </div>
                  <div className="contact-details">
                      <div className="contact-content">
                          <span>Have an Idea ? </span>
                          <Mouse><h1 className="contact-btn">Tell me about it!</h1></Mouse>
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
