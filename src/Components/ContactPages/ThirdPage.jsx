import React, { useState, useEffect } from "react";

let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let count = 0;
const ThirdPage = ({ myData, setMyData, isDataFilled, setIsDataFilled, isNextClicked }) => {
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e) => {
   const newData = { ...myData };
    newData[e.target.id] = e.target.value;
    setMyData(newData);
  };

  useEffect(() => {
    validate_Email_input();
  }, [myData,isNextClicked]);


  const validate_Email_input = () => {
    if (myData.Email.trim() === "" && count == 0) {
      if(isNextClicked){
        setIsValidEmail(false);
      }
    } else {
      if (email_regex.test(myData.Email) && myData.Email.trim() != "") {
        count = 1;
        setIsValidEmail(true);
        setIsDataFilled(true);
      } else {
        setIsDataFilled(false);
        setIsValidEmail(false);
      }
    }
  };

  return (
    <>
      <div className="thirdPage">
        <div className="get_in_touch">
          <span className="get_in_touch_title" data-aos="fade-right"

data-aos-duration="2000"
data-aos-easing="ease-in-out">
            Awesome, How should I get in touch with you?
          </span>
        </div>
        <div className="get_in_touch_input">
          <input
            type="text"
            placeholder="Your Email"
            id="Email"
            className={isValidEmail ? "" : "error"}
            onChange={handleChange}
            required
            autoComplete="off"
            value={myData.Email}

          />
          {isNextClicked && 
          <div className={isValidEmail ? "email-text" : "error-text"}>
            <span>Please Correct!</span>
          </div>
}
          <input
            type="hidden"
            placeholder="Your Email"
            id="_Email"
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
