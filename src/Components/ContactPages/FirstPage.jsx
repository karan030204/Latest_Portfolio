import React, { useState, useEffect } from "react";


//For allowing space in between the words just leave the space after the characters you want
const name_regex = /^[a-zA-Z ]+$/;
let count = 0;
let hasErrors = false;
const FirstPage = ({ myData, setMyData, isDataFilled, setIsDataFilled , isNextClicked}) => {
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
  }, [myData,isNextClicked]);
  console.log(isNextClicked);

  const validate_inputs = () => {
    if (nameData.Name.trim() === "" && count == 0) {
      if(isNextClicked && !isDataFilled){
        setIsValid(false)
      }
    } else {
      count = 1;
      if (name_regex.test(nameData.Name)) {
        setIsValid(true);
        hasErrors = false;
        setIsDataFilled(true)
        
      } else {
        setIsValid(false);
        hasErrors = true;
        setIsDataFilled(false)
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
        {isNextClicked && 
          <div className={isValid? "text" : "error-text"}>
            <span>Please Correct!</span>
          </div>
}
      </div>
    </>
  );
};

export default FirstPage;
