import React from "react";
import Navbar1 from "./Navbar1";
import ReactPlayer from "react-player";
import basketball from "../images/basketball.mp4";
import '../Elements/More_About_me.css'
import Tech from "./Tech";
import thumbnail from '../images/thumbnail.png'

const More_About_me = () => {
  return (
    <>
    <div className="video" id="more-about-me">
      <div className="video-center-big-text"><span>More About me</span></div>
      <div className="video-center-small-text"><span>A video about myself</span></div>
      <div className="video-player">
        <ReactPlayer
          className="react-player"
          url={basketball}
          width="100%"
          height="100%"
          controls
          loop
          playing
          light={<img src={thumbnail} style={{
            width:"100%", height:"auto"
          }} alt='Thumbnail' />}
        />
        
      </div>
      </div>
    </>
  );
};

export default More_About_me;
