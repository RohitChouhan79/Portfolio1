import "./Hero.css" 
import React from 'react'
import { motion } from 'framer-motion' 


const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildern:0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
}

const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 20,
      },
    },
  };

export const Hero = () => {
    const downloadResume = () => {
        // Replace 'resume.pdf' with the path to your resume file
        const resumeUrl = '/Resume-Rohit(2)';
        // Create a temporary anchor element
        const anchor = document.createElement('a');
        // Set the href attribute to the resume URL
        anchor.href = resumeUrl;
        // Set the download attribute to force download
        anchor.download = 'Rohit-mern-Resume.pdf';
        // Programmatically trigger a click event on the anchor element
        anchor.click();
    };

  return (
  <div className="hero">
        <div className="wrapper">
            <motion.div variants={textVariants}  initial="initial" animate="animate" className="textContainer">
                <motion.h2 variants={textVariants}>ROHIT CHOUHAN</motion.h2>
                <motion.h1 variants={textVariants}>Junior Software <br /> Engineer</motion.h1>
                <motion.div variants={textVariants} className="buttonsContainer">
                    <motion.button variants={textVariants} onClick={downloadResume} >Download CV</motion.button>
                    <motion.button variants={textVariants} ><a href="https://github.com/RohitChouhan79">See My latest Project</a> </motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
        </div>
        <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
            Devloper Programmer Engineer Innovator
        </motion.div>
        <div className="imagecontainer">
            <img src="/pofile.png" alt="" />

        </div>        
    </div>
  )
}


