import React from 'react'
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

const HomePage = () => {
  return (
    <div>
        <Navbar1/>
        {/* <Hero/> */}
        <About/>
        <More_About_me/>
        <Works/>
        <Tech/>
        {/* <Experience/> */}
        <Resume/>
        <Contact /> 
        {/* <Tech /> */}
        {/* <Projects/> */}
    </div>
  )
}

export default HomePage