import React, { useEffect, useRef } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { Parallax } from './Components/Parallax/Parallax'
import { About } from './Components/About/About'
import { Skill } from './Components/Skills/Skill'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Cursor from './Components/Cursor/Cursor'
import { useInView, motion } from 'framer-motion'

export default function App() {
  const container = useRef(null)
  const isInView = useInView(container);
  useEffect(()=>{
    console.log('is in view',isInView);
  },[isInView])
  return (
    <div>
      <Cursor />
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='About'>
        <About/>
      </section>
      <section  id='Service'><Parallax type="service"/></section>
      <section ref={container} id='Skill'>
      <motion.div 
        style={{
          transform: isInView ? "none" : "translateX(-500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        >
        <Skill />
        </motion.div></section>
      <section ref={container} id='Services'>
        <motion.div 
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        >
        <Services/>
        </motion.div>
        </section>
      <section id='Portfolio'><Parallax type="Portfolio"/></section>
      <section id='Project'><Portfolio />
      <section id='Contact'><Contact /></section>
      
      </section>
      
    </div>
  )
}
