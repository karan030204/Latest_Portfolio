import React from "react";
import { ReactComponent as WorkIcon } from "../images/work.svg";
import { ReactComponent as SchoolIcon } from "../images/school.svg";
import { timeline_data } from "../data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import '../Elements/Experience.css'

const Experience = () => {
  //this is style for work icon
  let workIconStyles = {
    background: "#ece7e1",
  };

  //this is style for school icon
  let schoolIconStyles = {
    background: "#ece7e1",
  };

  return (
    <>
      <div className="exp-wrapper" id="exp">
        <div className="exp-title">
        <h1 className="title">Work Experience</h1>
        </div>
        <div className="exp-subtitle">
        <h6 className="subtitle">What I'hve done so far</h6></div>
        <VerticalTimeline>
          {timeline_data.map((elem) => {
            let isWorkIcon = elem.icon === "work";
            let showButton = elem.buttonText !=  undefined && elem.buttonText != null && elem.buttonText != "";
            return (
              <VerticalTimelineElement
              className="sub_element"
              // className="vertical-timeline-element--work"
                key={elem.id} // key props for uniquely identify the card
                date={elem.date} // date props because we want to show date on the other side of the card
                dateClassName="date" // because we want to style the date
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              >
              <h3 className="vertical-timeline-element-title" style={{fontFamily:"Gilroy-semibold"}}>Creative Director</h3>
              <h5 className="vertical-timeline-element-subtitle" style={{fontFamily:"Gilroy-regular "}}>{elem.location}</h5>
              <p id="description">{elem.description}</p>
              {showButton && (
                <a href="/" className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}>{elem.buttonText}</a>
              )}

              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
