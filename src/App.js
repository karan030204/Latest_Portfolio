import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Tech from "./Components/Tech";
import HomePage from "./Pages/HomePage";
import More_About_me from "./Components/More_About_me";
import Resume from "./Components/Resume";
import Mouse from "./MouseMove";
import MovingText from "./HorizontalScrollText";
import TextHover from "./TextHover";
import Contact from "./Components/Contact";
import Works from "./Components/Works";
import PreLoader from "./Components/PreLoader";
import { useState,useEffect } from "react";
import ReactGA from "react-ga"

const TRACKING_ID = "UA-257585865-2"
ReactGA.initialize(TRACKING_ID);

function App() {

  

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
