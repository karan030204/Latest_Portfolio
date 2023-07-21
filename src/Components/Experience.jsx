import React,{useEffect} from "react";
import Navbar1 from "./Navbar1";
import "../Elements/Experience.css";

const Experience = () => {
  const [isButtonClicked ,setIsButtonClicked] = React.useState(0);

  const handleClick = (id) => {
    if(isButtonClicked == id){
      setIsButtonClicked(0);
    }else{
    setIsButtonClicked(id);
    }
  }

  useEffect(() => {
    const timeline_wrapper = document.querySelector('.timeline-wrapper');

    const handleMouseMove = (event) => {
      const timeline = document.querySelector('.timeline')
      console.log({
        'timeline_width' : timeline.clientWidth,  //Total Width of the timeline including padding
        'timeline_wrapper_width' : timeline_wrapper.clientWidth, //Total width of the timeline Wrapper
        'Mouse X-coordinate ': event.pageX 
      });
      let scrollWidth  = event.pageX  / timeline_wrapper.clientWidth * (  timeline_wrapper.clientWidth   - timeline.clientWidth)
      console.log(scrollWidth.toFixed(1));
      timeline.style.left = scrollWidth.toFixed(1) + 'px'

    }

    document.addEventListener('mousemove', handleMouseMove);
    return ()=>{
      document.removeEventListener('mousemove', handleMouseMove)
    }

  }, []);
  
  

  return (
    <>
      <div className="timeline-wrapper">
        <ul className="timeline">
          <li data-date="Jan 7, 2022" id="1" onClick={()=>handleClick(1)}>
            <span className="title"> MOther's Birthday</span>
            <div className={isButtonClicked == 1  ? "data show" : "data" }>
              <h3>Day you've been waiting for</h3>
              <small>Jan 7, 2022</small>
              <p>
                Anim deserunt sint esse? Integdolore parturient quam! Nisi ipsum
                proin donec fugit integer vestibulum labore! Euismod nec,
                
                 
              </p>
              <span className="close">Click to close</span>
            </div>
          </li>
          <li data-date="Jan 7, 2022" id="2" onClick={()=>handleClick(2)}>
            <span className="title"> MOther's Birthday</span>
            <div className={isButtonClicked == 2 ? "data show" : "data" }>

              <h3>Day you've been waiting for</h3>
              <small>Jan 7, 2022</small>
              <p></p>
              <span className="close">Click to close</span>
            </div>
          </li>
          <li data-date="Jan 7, 2022" id="3" onClick={()=>handleClick(3)}>
            <span className="title"> MOther's Birthday</span>
            <div className={isButtonClicked == 3 ? "data show" : "data" }>

              <h3>Day you've been waiting for</h3>
              <small>Jan 7, 2022</small>
              <p></p>
              <span className="close">Click to close</span>
            </div>
          </li>
          <li data-date="Jan 7, 2022" id="4" onClick={()=>handleClick(4)}>
            <span className="title"> MOther's Birthday</span>
            <div className={isButtonClicked == 4 ? "data show" : "data" }>

              <h3>Day you've been waiting for</h3>
              <small>Jan 7, 2022</small>
              <p></p>
              <span className="close">Click to close</span>
            </div>
          </li>
          <li data-date="Jan 7, 2022" id="5" onClick={()=>handleClick(5)}>
            <span className="title"> MOther's Birthday</span>
            <div className={isButtonClicked == 5 ? "data show" : "data" }>

              <h3>Day you've been waiting for</h3>
              <small>Jan 7, 2022</small>
              <p></p>
              <span className="close">Click to close</span>
            </div>
          </li>
          <li data-date="Jan 7, 2022" id="6" onClick={()=>handleClick(6)}>
            <span className="title"> MOther's Birthday</span>
            <div className={isButtonClicked == 6 ? "data show" : "data" }>

              <h3>Day you've been waiting for</h3>
              <small>Jan 7, 2022</small>
              <p></p>
              <span className="close">Click to close</span>
            </div>
          </li>
          <li data-date="Jan 7, 2022" id="7" onClick={()=>handleClick(7)}>
            <span className="title"> MOther's Birthday</span>
            <div className={isButtonClicked == 7 ? "data show" : "data" }>

              <h3>Day you've been waiting for</h3>
              <small>Jan 7, 2022</small>
              <p></p>
              <span className="close">Click to close</span>
            </div>
          </li>
          <li data-date="Jan 7, 2022" id="8" onClick={()=>handleClick(8)}>
            <span className="title"> MOther's Birthday</span>
            <div className={isButtonClicked == 8 ? "data show" : "data" }>

              <h3>Day you've been waiting for</h3>
              <small>Jan 7, 2022</small>
              <p></p>
              <span className="close">Click to close</span>
            </div>
          </li>
          <li data-date="Jan 7, 2022" id="9" onClick={()=>handleClick(9)}>
            <span className="title"> MOther's Birthday</span>
            <div className={isButtonClicked == 9 ? "data show" : "data" }>

              <h3>Day you've been waiting for</h3>
              <small>Jan 7, 2022</small>
              <p></p>
              <span className="close">Click to close</span>
            </div>
          </li>
          <li data-date="Jan 7, 2022" id="10" onClick={()=>handleClick(10)}>
            <span className="title"> MOther's Birthday</span>
            <div className={isButtonClicked == 10 ? "data show" : "data" }>

              <h3>Day you've been waiting for</h3>
              <small>Jan 7, 2022</small>
              <p></p>
              <span className="close">Click to close</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Experience;
