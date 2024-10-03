import React from 'react'
import "./Navbar.css"
import { FaFacebook,FaInstagram,FaLinkedinIn,FaGithub } from "react-icons/fa";
import {motion} from "framer-motion"
import Sidebar from '../Sidebar/Sidebar';

export default function Navbar() {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <Sidebar />
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0,scale:0.3}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}
             >
              <img className='logoimage' src="ICON.png"  alt="" />KU.ROHITBANNA</motion.span>
            <div className="social">
                <a className='facebook' target="_blank" href="https://www.facebook.com/smartboy.rohit.5602"><FaFacebook /></a>
                <a className='instagram' target="_blank" href="https://www.instagram.com/ku.rohitbanna"><FaInstagram /></a>
                <a className='Linklndn' target="_blank" href="https://www.linkedin.com/in/rohit-chouhan-"><FaLinkedinIn /></a>
                <a className='git' target="_blank" href="https://github.com/RohitChouhan79"><FaGithub /></a>
            </div>
        </div>
    </div>
  )
}
