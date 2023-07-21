import React from "react";

const SecondPage = () => {
  return (
    <>
      <div className="secondPage">
        <div className="title">
          <span className="project_title">
            What kind of project would you like me to craft for you?
          </span>
        </div>
        <div className="buttons">
            <div className="web_design">
                <button>Website Design</button>
            </div>
            <div className="web_design_develop">
                <button>Website Development</button>
            </div>
           
        </div>
      </div>
    </>
  );
};

export default SecondPage;
