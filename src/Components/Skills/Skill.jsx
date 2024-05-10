import React from 'react'
import { FaHtml5,FaNodeJs,FaReact,FaPython,FaBootstrap  } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript,IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiMongodb, SiTypescript,SiTailwindcss,SiFramer, SiJest } from "react-icons/si";

import "./Skill.css"


export const Skill = () => {
  return (
    <div className='Skill'>
        <div className='Skill-head'>
            <h1>My <span>Skills</span></h1>
            <h2>Technical Skill</h2>
            <div className='skilles'>
                <div className='inskil'>
                    <span className='html'><FaHtml5/></span>
                    <p>HTML</p>
                </div>
                <div className='inskil'>
                    <span className='Css'><IoLogoCss3 /></span>
                    <p>CSS</p>
                </div>
                <div className='inskil'>
                    <span className='Js'><IoLogoJavascript /></span>
                    <p>JAVASCRIPT</p>
                </div>
                <div className='inskil'>
                    <span className='TS'><SiTypescript/></span>
                    <p>TYPESCRIPT</p>
                </div>
                <div className='inskil'>
                    <span className='NJs'><FaNodeJs /></span>
                    <p>NODE JS</p>
                </div>
                <div className='inskil'>
                    <span className='ex'><SiExpress /></span>
                    <p>EXPRESS JS</p>
                </div>
                <div className='inskil'>
                    <span className='MDB'><SiMongodb /></span>
                    <p>MONGO DB</p>
                </div>
                <div className='inskil'>
                    <span className='react'><FaReact/></span>
                    <p>REACT JS</p>
                </div><div className='inskil'>
                    <span className='Python'><FaPython/></span>
                    <p>Python</p>
                </div><div className='inskil'>
                    <span className='TCSS'><SiTailwindcss/></span>
                    <p>TAILWIND CSS</p>
                </div><div className='inskil'>
                    <span className='framer'><SiFramer /></span>
                    <p>Framer Motion</p>
                </div><div className='inskil'>
                    <span className='bootstrap'><FaBootstrap/></span>
                    <p>Bootstrap</p>
                </div><div className='inskil'>
                    <span className='firebase'><IoLogoFirebase/></span>
                    <p>Firebase</p>
                </div>
                <div className='inskil'>
                    <span className='jest'><SiJest /></span>
                    <p>JEST JS</p>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}
