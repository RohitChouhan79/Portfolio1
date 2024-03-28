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
                    <motion.p variants={textVariants}>As a highly skilled engineer specializing in an extensive array of technologies including ReactJS, Node.js, MongoDB, and more, I bring a wealth of experience and expertise to any team. With a strong portfolio showcasing exceptional projects, I am dedicated to delivering seamless user experiences and solving complex problems creatively. <br />

                    My proficiency spans across front-end technologies like ReactJS, HTML, CSS, and JavaScript, enabling me to craft intuitive and visually appealing user interfaces. Additionally, I excel in backend development using Node.js, Express.js, and MongoDB, ensuring robust and scalable server-side solutions. <br />

                    My toolkit extends further with languages like Python, C++, and C, offering versatility and depth to my development capabilities. I am adept at integrating various tools and libraries such as Passport, Socket.io, Multer, and Node-mailer to enhance functionality and performance. <br />

                    Furthermore, I am familiar with modern development practices like TypeScript, Payment Gateways integration, Firebase, and animation libraries like GSAP and FramerMotion, enabling me to stay at the forefront of technological advancements. <br />

                    With a commitment to innovation and a track record of success, I am prepared to elevate your team's projects to new heights. Let's collaborate to drive excellence and achieve unparalleled success in the realm of web development.</motion.p>

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
