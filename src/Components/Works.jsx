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
            <div
              className="works-left-title"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="10"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              // data-aos-mirror="true"
              data-aos-once="false"
            >
              Work.
            </div>
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
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="10"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                // data-aos-mirror="true"
                data-aos-once="false"
                // data-aos-anchor-placement="top-center"
              >
                I am a seasoned developer with a proven track record of building
                diverse projects spanning various domains. Leveraging my
                expertise in HTML, CSS, JavaScript, React.js, Tailwind CSS,
                Material UI, MongoDB, Express, and Node.js, I have crafted a
                portfolio of innovative applications. Some notable projects
                include Waptab, Todo, and Weather. Each project showcases my
                commitment to crafting efficient solutions and my proficiency in
                utilizing cutting-edge technologies to deliver exceptional user
                experiences.
              </p>
            </div>
            <div className="works-more-btn">
              <a href="#contact">
              <button >Read More</button>
              </a>
            </div>
          </div>
          <div className="works-right">
            <div className="works-list">
              {/* <TextHover> */}
              {works.map((item) => {
                return (
                  <a href={item.link} target="_blank">
                    <div className="work-item" >
                      <div
                        className="work-image"
                        data-aos="fade-up"

                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        // data-aos-mirror="true"
                        data-aos-once="false"
                      >
                        <img src={item.Image_link} alt="" />
                      </div>
                      <div className="work-inner-detail" >
                        <span
                          className="work-title"
                          // data-aos="fade-right"
                          // data-aos-offset="100"
                          // // data-aos-delay="1"
                          // data-aos-duration="2000"
                          // data-aos-easing="ease-in-out"
                          // data-aos-mirror="true"
                          
                        >
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
