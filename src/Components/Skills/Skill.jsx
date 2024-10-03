import React, { useState, useEffect } from 'react'
import { FaHtml5, FaNodeJs, FaReact, FaPython, FaBootstrap } from "react-icons/fa"
import { IoLogoCss3, IoLogoJavascript, IoLogoFirebase } from "react-icons/io5"
import { SiExpress, SiMongodb, SiTypescript, SiTailwindcss, SiFramer, SiJest,SiNextdotjs } from "react-icons/si"
import { motion, AnimatePresence } from "framer-motion"

const Card = ({ children }) => (
  <div className="bg-blue-500 rounded-lg shadow-md">
    {children}
  </div>
)

const CardContent = ({ children }) => (
  <div className="p-4">
    {children}
  </div>
)

const skills = [
    {icon:SiNextdotjs,name:"Next JS"},
  { icon: FaHtml5, name: "HTML" },
  { icon: IoLogoCss3, name: "CSS" },
  { icon: IoLogoJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: FaReact, name: "React" },
  { icon: FaPython, name: "Python" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiFramer, name: "Framer Motion" },
  { icon: FaBootstrap, name: "Bootstrap" },
  { icon: IoLogoFirebase, name: "Firebase" },
  { icon: SiJest, name: "Jest" }
]

export const  Skill=()=> {
  const [currentPage, setCurrentPage] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)
  const skillsPerPage = 6
  const totalPages = Math.ceil(skills.length / skillsPerPage)

  useEffect(() => {
    let timer
    if (autoRotate) {
      timer = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages)
      }, 5000) // Change page every 5 seconds
    }
    return () => clearInterval(timer)
  }, [autoRotate, totalPages])

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
    setAutoRotate(false)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
    setAutoRotate(false)
  }

  const currentSkills = skills.slice(
    currentPage * skillsPerPage,
    (currentPage + 1) * skillsPerPage
  )

  return (
    <div className="bg-[#0C0C1E] min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">My <span className=" text-blue-500">Skills</span></h1>
          <h2 className="text-3xl text-white">Technical Skills</h2>
        </div>
        <div className="flex items-center justify-center space-x-10">
          <button
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors"
            onClick={prevPage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {currentSkills.map((skill, index) => (
                <Card key={index}>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                      >
                        <skill.icon className="text-4xl text-white mb-2" />
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="text-sm font-medium text-white"
                      >
                        {skill.name}
                      </motion.p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
          <button
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors"
            onClick={nextPage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="text-center mt-4 text-white">
          Page {currentPage + 1} of {totalPages}
        </div>
        <div className="text-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            onClick={() => setAutoRotate(!autoRotate)}
          >
            {autoRotate ? "Pause Auto-Rotate" : "Resume Auto-Rotate"}
          </button>
        </div>
      </div>
    </div>
  )
}