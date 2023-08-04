import React, { useEffect } from "react";
import Navbar1 from "./Navbar1";
import "../Elements/Works.css";
import TextHover from "../TextHover";
import { works } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../utils/motion";
import "aos/dist/aos.css";
import AOS from "aos";

const Works = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when it first becomes visible
    threshold: 0.1, // Percentage of element visibility required to trigger the animation
  });
  return (
    <>
      <div className="works aos-init" id="work">
        <div className="works-content">
          <div className="works-left">
            <div className="works-left-title">Work.</div>
            {/* <motion.div
      ref={ref}
      variants={fadeIn("left", "text", 1, 2)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="works-left-title"
    > */}
            {/* </motion.div> */}
            <div className="works-left-description">
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="10"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                // data-aos-anchor-placement="top-center"
              >
                Officia error nonummy vulputate cupidatat illum diamlorem iure
                earum id curae! Excepturi iaculis, recusandae! Anim, consectetur
                et a odit placerat, vero, dolor ullamcorper dolorum sagittis
                fuga iste habitasse, esse sapiente, commodi torquent porta, id.
                .
              </p>
            </div>
            <div className="works-more-btn">
              <button>Read More</button>
            </div>
          </div>
          <div className="works-right">
            <div className="works-list">
              {/* <TextHover> */}
              {works.map((item) => {
                return (
                  <a>
                    <div className="work-item">
                      <div className="work-image">
                        <img src={item.Image_link} alt="" />
                      </div>
                      <div className="work-inner-detail">
                        <span className="work-title">
                          <TextHover
                            text={item.title}
                            imageSrc={item.Image_link}
                            onClick={() => (window.location.href = item.link)}
                          >
                            {item.title}
                          </TextHover>
                        </span>
                        <h6 className="work-small-desc">{item.small_text}</h6>
                      </div>

                      <p className="work-desc">{item.description}</p>
                    </div>
                  </a>
                );
              })}
              {/* </TextHover> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
