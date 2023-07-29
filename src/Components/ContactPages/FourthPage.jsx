import React from "react";

const FourthPage = ({myData, setMyData}) => {

  const handleContentChange = (e) => {
    const ContentData = {...myData} 
    ContentData[e.target.id] = e.target.value;
    setMyData(ContentData);
  }


  return (
    <>
      <div className="fourthPage">
        <div className="anything_else">
          <span className="anything_else_title">
            Lastly, Anything else you would like to mention?
          </span>
        </div>  
        <div className="textarea">
          <textarea name="" id="Content" cols="22" rows="5" onChange={handleContentChange} placeholder="More details about your Project"></textarea>
        </div>
      </div>
    </>
  );
};

export default FourthPage;
