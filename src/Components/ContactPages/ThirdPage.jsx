import React from "react";

const ThirdPage = () => {
  return (
    <>
      <div className="thirdPage">
        <div className="get_in_touch">
          <span className="get_in_touch_title">
            Awesome, How should I get in touch with you?
          </span>
        </div>
        <div className="get_in_touch_input">
          <input type="text" placeholder="Your Email" required/>
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
