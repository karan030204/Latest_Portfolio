import React from "react";

const ThirdPage = ({myData, setMyData}) => {

  const handleChange = (e) => {
      const newData = {...myData}
      newData[e.target.id] = e.target.value;
      setMyData(newData);

  }

  return (
    <>
      <div className="thirdPage">
        <div className="get_in_touch">
          <span className="get_in_touch_title">
            Awesome, How should I get in touch with you?
          </span>
        </div>
        <div className="get_in_touch_input">
          <input type="text" placeholder="Your Email"  id="Email" onChange={handleChange} required/>
          <input type="hidden" placeholder="Your Email"  id="_Email" onChange={handleChange} required/>
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
