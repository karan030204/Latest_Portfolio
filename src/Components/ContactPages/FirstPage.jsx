import React from "react";

const FirstPage = () => {
  return (
    <>
      <div className="name-details">
        {" "}
        <div className="name">
          <span>May I please have your name ? </span>
        </div>
        <div className="input-field">
          <input type="text" placeholder="Enter Your Name" required/>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
