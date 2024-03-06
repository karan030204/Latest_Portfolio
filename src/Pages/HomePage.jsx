import React,{useEffect} from 'react'
import About from '../Components/About'
import Experience from '../Components/Experience'
import Hero from '../Components/Hero'
import Projects from '../Components/Works'
import Tech from '../Components/Tech'
import Navbar1 from '../Components/Navbar1'
import More_About_me from '../Components/More_About_me'
import Works from '../Components/Works'
import Contact from '../Components/Contact'
import Resume from '../Components/Resume'
import PreLoader from '../Components/PreLoader'
import ReactGA from "react-ga4"


const HomePage = () => {
useEffect(() => {
  // ReactGA.pageview(window.location.pathname);

 
}, [])


  return (
    <div>
      <PreLoader/>
        <Navbar1/>
        {/* <Hero/> */}
        <About/>
        <More_About_me/>
        <Works/>
        {/* <Tech/> */}
        <Experience/>
        <Resume/>
        {/* <Contact />  */}
        {/* <Tech /> */}
        {/* <Projects/> */}
    </div>
  )
}

export default HomePage