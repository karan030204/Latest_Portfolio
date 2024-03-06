import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import Marquee from "react-fast-marquee";
import "../Elements/Tech.css";

const Tech = () => {
  return (
    <>
      <div className="tech-wrapper">
        <motion.div variants={textVariant()} className="tech-content" id="tech">
          <h2>Technologies.</h2>
          <p>My skills</p>
        </motion.div>

        <div className="skills">
          {/* <Marquee
          autoFill={true}
          pauseOnHover={false}
          speed={50}
          gradient={true}
          gradientColor={[236, 231, 225, 1]}
          gradientWidth={100}
        > */}{" "}
          <div
            className="skills1"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
          >
            {technologies.slice(0, 4).map((technology) => (
              <div className="skills-content" key={technology.name}>
                <div className="skill-text">
                  <h1>{technology.name}</h1>
                </div>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
          <div
            className="skills2"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
          >
            {technologies.slice(4, 9).map((technology) => (
              <div className="skills-content" key={technology.name}>
                <div className="skill-text">
                  <h1>{technology.name}</h1>
                </div>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
          {/* </Marquee> */}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
