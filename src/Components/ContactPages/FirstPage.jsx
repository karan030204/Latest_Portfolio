import React from "react";

const FirstPage = ({myData, setMyData , isDataFilled, setIsDataFilled}) => {

  const handleNameChange = (e) => {
    const nameData = {...myData}
    nameData[e.target.id] = e.target.value;
    setMyData(nameData);
  }

  const validateInputs = () => {
      if(myData.Name.trim() == ""){
          
      }
  }

  return (
    <>
      <div className="name-details">
        <div className="name">
          <span>May I please have your name ? </span>
        </div>
        <div className="input-field">
          <input type="text" name="Name" onChange={handleNameChange} placeholder="Enter Your Name" id="Name" required/>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
