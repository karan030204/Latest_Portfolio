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
      <motion.div variants={textVariant()} className="tech-content">
        {/* <h2>Technologies.</h2> */}
        <p>My skills</p>
      </motion.div>

      <div className="skills" style={{ display: "flex" }}>
        <Marquee
          autoFill={true}
          pauseOnHover={false}
          speed={50}
          gradient={true}
          gradientColor={[236, 231, 225, 1]}
        >
          {" "}
          {technologies.map((technology) => (
            <div className="skills-content" key={technology.name}>
              <div className="skill-text">
                <h1>{technology.name}</h1>
              </div>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
