import React, { useEffect } from "react"; 
import { useState } from "react";


let Content_Count = 0;
let Content_regex = /^[a-zA-Z]+$/
const FourthPage = ({myData, setMyData, isNextClicked, isDataFilled, setIsDataFilled}) => {
  const [isContentValid, setIsContentValid] = useState(true);
  const [isFalse,setIsFalse] = useState(false);

const handleContentChange = (e) => {
    const ContentData = {...myData} 
    ContentData[e.target.id] = e.target.value;
    setMyData(ContentData);
  }

  useEffect(() => {
  
    validate_textarea();

  }, [myData,isNextClicked])

  useEffect(()=>{
    if(isNextClicked == false){
        setIsFalse(true);
    }
  },[isNextClicked])

  console.log("I am in 4th page : ",isDataFilled);
  console.log("I am in 4th page : ",isNextClicked);


  const validate_textarea = () => {

    if(myData.Content.trim() == "" && Content_Count == 0){
      if(isNextClicked && isFalse){
        setIsContentValid(false)  
      }
    }
   
    else{
      Content_Count = 1;
      if(Content_regex.test(myData.Content)){
        setIsContentValid(true)
        setIsDataFilled(true);
      }else{
        setIsContentValid(false)
        setIsDataFilled(false);
      }
    }

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
          <textarea name="" className={isContentValid ? "" : "error"} value={myData.Content} autoComplete="off" id="Content" cols="22" rows="5" onChange={handleContentChange} placeholder="More details about your Project"></textarea>
          {isNextClicked && 
          <div className={isContentValid ? "content-text" : "error-text"}>
              <span>Please Correct! Only Alphabets</span>
            </div>}
        </div>
      </div>
    </>
  );
};

export default FourthPage;
