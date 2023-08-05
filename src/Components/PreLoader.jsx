import React from "react";
import { useState, useEffect } from "react";
import "../Elements/PreLoader.css";

let words = [
  "Hello",
  "नमस्ते",
  "नमस्कारम्",
  "હેલો",
  "Bonjour",
  "你好",
  "Hola",
  "హలో",
  "Ciao",
  "Hallo",
  "হ্যালো",
];
let count = 0;
const PreLoader = () => {
  const [activeWord, setActiveWord] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const changeWord = setInterval(() => {
      if (count < words.length) {
        setActiveWord(words[count]);
        count = count + 1;
        console.log(count);
      }
      if (count == words.length - 1) {
        setIsFinished(true);
      }
    }, 380);

    return () => {
      clearInterval(changeWord);
    };
  }, []);

  useEffect(() => {
    if (isFinished) {
      const loaderOff = setTimeout(() => {
        setIsActive(false);
      }, 500);
    }

    return () => {};
  }, [isFinished]);

  return (
    <div className={isActive ? "preloader" : "preloader close"}>
      <div className="center-text">
        <span>{activeWord}</span>
      </div>
    </div>
  );
};

export default PreLoader;
