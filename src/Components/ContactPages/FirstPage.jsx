import React, { useState, useEffect } from "react";

const name_regex = /^[a-zA-Z]+$/;
let count = 0;
let hasErrors = false;
const FirstPage = ({ myData, setMyData, isDataFilled, setIsDataFilled }) => {
  const nameData = { ...myData };

  const [isValid, setIsValid] = useState(true);

  const handleNameChange = (e) => {
    nameData[e.target.id] = e.target.value;
    setMyData(nameData);
    // validate_inputs();
  };

  useEffect(() => {
    // const typed_character = (e) => {
    //   // If you want a key that user has pressed which key then you can use e.key to display the key which is pressed
    //   console.log(e.key);
    //   if(!name_regex.test(e.key)){
    //       setIsValid(false);
    //   }else{
    //     setIsValid(true);
    //   }
    // }
    // window.addEventListener('keydown', typed_character);
    // return () => {
    //   window.removeEventListener('keyup', typed_character)
    // }
  }, []);

  useEffect(() => {
    validate_inputs();
  }, [myData]);

  const validate_inputs = () => {
    // console.log(nameData.Name);
    if (nameData.Name.trim() === "" && count == 0) {
    } else {
      count = 1;
      if (name_regex.test(nameData.Name)) {
        setIsValid(true);
        hasErrors = false;
      } else {
        setIsValid(false);
        hasErrors = true;
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
          />
        </div>
      </div>
    </>
  );
};

export default FirstPage;
