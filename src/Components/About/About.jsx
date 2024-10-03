import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button'; // Update the import path for your Button component
import { FileText, Github, Linkedin,ArrowDownCircle } from 'lucide-react';
// import { FileText, GitHub, Linkedin } from 'react-icons'; // Import the necessary icons

export const About = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const downloadResume = () => {
        const resumeUrl = '/Rohit-mern-Resume.pdf';
        const anchor = document.createElement('a');
        anchor.href = resumeUrl;
        anchor.download = 'Rohit-mern-Resume.pdf';
        anchor.click();
    };

    // Calculate background and text Y positions based on scroll position
    const backgroundY = `${scrollPosition * 0.1}%`; // Adjust the multiplier as needed
    const textY = `${scrollPosition * 0.05}%`; // Adjust the multiplier as needed

    return (
        <div className=' bg-blue-100 h-full w-full'>
            <div className="relative min-h-screen bg-gradient-to-b from-black overflow-hidden ">
            <motion.div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    y: backgroundY
                }}
            />
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="mb-6 text-5xl font-bold">About <span className="text-blue-400">Me</span></h1>
                    <motion.h2 
                        className="mb-8 text-3xl font-semibold"
                        animate={{ 
                            x: [0, 10, 0],
                            transition: { 
                                duration: 2, 
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }}
                    >
                        Full Stack Web Developer
                    </motion.h2>
                </motion.div>

                <motion.p 
                    className="max-w-2xl mb-8 text-lg text-center"
                    // initial={{ opacity: 1 }}
                    // animate={{ opacity: 1, y: textY }}
                    // transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Experienced engineer proficient in ReactJS, Node.js, MongoDB, and more, with a strong portfolio. 
                    Excels in front-end technologies like ReactJS, HTML, CSS, and JavaScript, as well as backend 
                    development using Node.js, Express.js, and MongoDB. Committed to innovation and excellence in web development.
                </motion.p>

                <div className="flex space-x-4">
                    <Button onClick={downloadResume} variant="outline">
                        <FileText className="w-4 h-4 mr-5" />
                        Download Resume
                    </Button>
                    <Button variant="outline">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                    </Button>
                    <Button variant="outline">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                    </Button>
                </div>

                <motion.div
                    className="absolute bottom-8"
                    animate={{ 
                        y: [0, 10, 0],
                        transition: { 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <ArrowDownCircle className="w-10 h-10 text-white opacity-75" />
                </motion.div>
            </div>
        </div>
        </div>
    );
};
