import React, { useState, useEffect } from "react";

//For allowing space in between the words just leave the space after the characters you want
const name_regex = /^[a-zA-Z ]+$/;
let count = 0;
let isSet = 0;
let hasErrors = false;
const FirstPage = ({
  myData,
  setMyData,
  isDataFilled,
  setIsDataFilled,
  isNextClicked,
}) => {
  const nameData = { ...myData };

  const [isValid, setIsValid] = useState(true);

  const handleNameChange = (e) => {
    nameData[e.target.id] = e.target.value;
    setMyData(nameData);
    // validate_inputs();
  };

  //Json.stringify is used to convert JSON object to JSON String
  // useEffect(() => {
  //   isSet = 1;
  //   localStorage.setItem(`Name`, JSON.stringify(myData.Name));
  // }, [myData]);

  //JSON.parse is used to convert again the json objec we have converted to json string
  //We want in the form of json objects only thats why we are using JSON.parse()

  // useEffect(() => {
  //   if(isSet == 1){
  //   const Name = JSON.parse(localStorage.getItem("Name"));
  //   setMyName(Name);
  //   console.log(Name);
  //   }
  // }, []);

  useEffect(() => {
    validate_inputs();
  }, [myData, isNextClicked]);

  const validate_inputs = () => {
    if (nameData.Name.trim() === "" && count == 0) {
      if (isNextClicked && !isDataFilled) {
        setIsValid(false);
      }
    } else {
      count = 1;
      if (name_regex.test(nameData.Name)) {
        setIsValid(true);
        hasErrors = false;
        setIsDataFilled(true);
      } else {
        setIsValid(false);
        hasErrors = true;
        setIsDataFilled(false);
      }
    }
  };

  return (
    <>
      <div className="name-details">
        <div className="name">
          <span>May I please have your name ? </span>
        </div>
        <div className="input-field">
          <input
            type="text"
            name="Name"
            onChange={handleNameChange}
            placeholder="Enter Your Name"
            id="Name"
            required
            className={isValid ? "" : "error"}
            autoComplete="off"
            value={myData.Name}
          />
        </div>
        {isNextClicked && (
          <div className={isValid ? "text" : "error-text"}>
            <span>Please Correct!</span>
          </div>
        )}
      </div>
    </>
  );
};

export default FirstPage;
