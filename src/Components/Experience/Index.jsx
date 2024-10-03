import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Sample data structure for experiences
const experiences = [
  {
    company: "Flourishers Edge Pvt Ltd.",
    location: "Bhopal",
    position: "Junior Software Engineer",
    startDate: "september 2024",
    endDate: "Present",
    projects: [
      { name: "Railway Twitter app", description: "Built and tested RESTful APIs for a social media application designed for railway enthusiasts, ensuring seamless integration and functionality." },
      { name: "Bartan bhandar POS", description: "Led the development of a custom POS system for real-time inventory and sales tracking. Handled frontend design, backend API creation, and testing to deliver a fully functional solution." },
      { name: "Bartan bhandar Website", description: "Spearheaded the complete redesign and implementation of the UX/UI for the tracking bartan Bhandar offline pos, enhancing user experience and improving performance across devices." },
      { name: "Tulip Website", description: "Resolved critical backend issues and optimized server-side performance. Worked on API development and database management for smooth data handling." },
      { name: "Flourisher Edge Website", description: "Designed and implemented a secure and scalable API gateway for microservices architecture, enhancing system performance and security." },
    ]
  },
  {
    company: "Flourishers Edge Pvt Ltd.",
    location: "Bhopal",
    position: "Intern",
    startDate: "july 2024",
    endDate: "september 2024",
    projects: [
      { name: "Railway Twitter app", description: "Built and tested RESTful APIs for a social media application designed for railway enthusiasts, ensuring seamless integration and functionality." },
      { name: "Bartan bhandar POS", description: "Led the development of a custom POS system for real-time inventory and sales tracking. Handled frontend design, backend API creation, and testing to deliver a fully functional solution." },
      { name: "Bartan bhandar Website", description: "Spearheaded the complete redesign and implementation of the UX/UI for the tracking bartan Bhandar offline pos, enhancing user experience and improving performance across devices." },
      { name: "Tulip Website", description: "Resolved critical backend issues and optimized server-side performance. Worked on API development and database management for smooth data handling." },
      { name: "Flourisher Edge Website", description: "Designed and implemented a secure and scalable API gateway for microservices architecture, enhancing system performance and security." },
    ]
  },
  // Add more experiences as needed
]

export default function EnhancedExperiencePage() {
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0)
  const [currentProjectPage, setCurrentProjectPage] = useState(0)
  const projectsPerPage = 2

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentExperienceIndex((prevIndex) => (prevIndex + 1) % experiences.length)
      setCurrentProjectPage(0) // Reset project page when changing experience
    }, 10000) // Auto-rotate every 10 seconds

    return () => clearInterval(timer)
  }, [])

  const nextExperience = () => {
    setCurrentExperienceIndex((prevIndex) => (prevIndex + 1) % experiences.length)
    setCurrentProjectPage(0)
  }

  const prevExperience = () => {
    setCurrentExperienceIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length)
    setCurrentProjectPage(0)
  }

  const nextProjectPage = () => {
    setCurrentProjectPage((prevPage) => 
      Math.min(prevPage + 1, Math.ceil(experiences[currentExperienceIndex].projects.length / projectsPerPage) - 1)
    )
  }

  const prevProjectPage = () => {
    setCurrentProjectPage((prevPage) => Math.max(prevPage - 1, 0))
  }

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate)
    const end = endDate === "Present" ? new Date() : new Date(endDate)
    const years = end.getFullYear() - start.getFullYear()
    const months = end.getMonth() - start.getMonth()
    
    if (months < 0) {
      return `${years - 1} year${years - 1 !== 1 ? 's' : ''} ${12 + months} month${12 + months !== 1 ? 's' : ''}`
    } else {
      return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`
    }
  }

  const currentExperience = experiences[currentExperienceIndex]
  const currentProjects = currentExperience.projects.slice(
    currentProjectPage * projectsPerPage,
    (currentProjectPage + 1) * projectsPerPage
  )

  return (
    <div className=" min-h-full bg-[#0C0C1E] flex  justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-5 text-center">My Experience</h1>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentExperienceIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-500 rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-white mb-2">{currentExperience.company}</h2>
              <p className="text-white mb-1">{currentExperience.location}</p>
              <p className="text-white mb-1">{currentExperience.position}</p>
              <p className="text-white mb-1">
                {currentExperience.startDate} - {currentExperience.endDate}
              </p>
              <p className="text-white mb-4">
                Duration: {calculateDuration(currentExperience.startDate, currentExperience.endDate)}
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Projects</h3>
              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  {currentProjects.map((project, index) => (
                    <motion.div
                      key={`${currentProjectPage}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-blue-600 rounded p-4"
                    >
                      <h4 className="text-lg font-medium text-white mb-2">{project.name}</h4>
                      <p className="text-white text-sm">{project.description}</p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={prevProjectPage}
                  disabled={currentProjectPage === 0}
                  className="bg-blue-700 text-white px-3 py-1 rounded disabled:opacity-50"
                >
                  Previous Projects
                </button>
                <button
                  onClick={nextProjectPage}
                  disabled={currentProjectPage === Math.ceil(currentExperience.projects.length / projectsPerPage) - 1}
                  className="bg-blue-700 text-white px-3 py-1 rounded disabled:opacity-50"
                >
                  Next Projects
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button
            onClick={prevExperience}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextExperience}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}