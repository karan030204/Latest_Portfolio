import React, { useState, useEffect } from "react";

const SecondPage = ({ myData, setMyData }) => {


 

  const [isButtonActive, setIsButtonActive] = React.useState(1);

  const handleButtonClicked = (id, data) => {
    if (id == 1) {
      setIsButtonActive(id);
      setMyData({ ...myData, Topic: data });
    } else if (id == 2) {
      setIsButtonActive(id);
      setMyData({ ...myData, Topic: data });
    } else {
      setIsButtonActive(0);
    }
  };

  const button_Content = [
    {
      button_id: "1",
      button_title: "Website Design",
    },
    {
      button_id: "2",
      button_title: "Website Development",
    },
  ];

  return (
    <>
      <div className="secondPage">
        <div className="title">
          <span className="project_title">
            What kind of project would you like me to craft for you?
          </span>
        </div>
        <div className="buttons">
          <div className="web_design_wrapper" id={1}>
            <button
              id="1"
              onClick={() =>
                handleButtonClicked(
                  button_Content[0].button_id,
                  button_Content[0].button_title
                )
              }
              className={
                isButtonActive == "1" ? "web_design active" : "web_design"
              }
              value="Website Design"
            >
              {button_Content[0].button_title}
            </button>
          </div>
          <div className="web_design_develop_wrapper" id={2}>
            <button
              id="2"
              onClick={() =>
                handleButtonClicked(
                  button_Content[1].button_id,
                  button_Content[1].button_title
                )
              }
              className={
                isButtonActive == "2"
                  ? "web_design_develop active"
                  : "web_design_develop"
              }
              value="Website Development"
            >
              {button_Content[1].button_title}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
