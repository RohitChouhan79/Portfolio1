import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';

export const About = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity,
            },
        },
    };

    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "15%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,
            },
        },
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='About'>
            <div className='wrapper'>
                <motion.div variants={textVariants} initial="initial" animate={scrollPosition > 100 ? "animate" : "initial"} className='textcontainer'>
                    <motion.h1 variants={textVariants}>About &nbsp; <span>Me</span> </motion.h1>
                    <motion.h2 variants={sliderVariants} initial="initial" animate="animate">Full Stack Web Devloper</motion.h2>
                    <motion.p variants={textVariants}>Experienced engineer proficient in ReactJS, Node.js, MongoDB, and more, with a strong portfolio. Excels in front-end technologies like ReactJS, HTML, CSS, and JavaScript, as well as backend development using Node.js, Express.js, and MongoDB. Committed to innovation and excellence in web development.</motion.p>

                    <motion.div variants={textVariants} className='buttoncontainer'>
                        <motion.button variants={textVariants}>More About Me</motion.button>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div variants={textVariants} initial="initial" animate={scrollPosition > 100 ? "animate" : "initial"} className="imagecontainer1">
                <motion.img variants={textVariants} src="/pofile1.png" alt="" />
            </motion.div>
        </div>
    );
};
