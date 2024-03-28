import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { Parallax } from './Components/Parallax/Parallax'
import { About } from './Components/About/About'
import { Skill } from './Components/Skills/Skill'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'

export default function App() {
  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='About'>
        <About/>
      </section>
      <section id='Service'><Parallax type="service"/></section>
      <section id='Skill'><Skill /></section>
      <section id='Services'><Services/></section>
      <section id='Portfolio'><Parallax type="Portfolio"/></section>
      <section><Portfolio /></section>
      {/* <section id='Contact'>Contact</section> */}
    </div>
  )
}
