import React, { useState } from 'react'
import "./Sidebar.css"
import { motion } from 'framer-motion' 
import ToggleButton from './Toggle/Togglebutton'
import Link from './links/Link'





export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const variants={
    open:{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:20,
      }
    },
    close:{
      clipPath:"circle(30px at 50px 50px)",
      transition:{
        delay:0.5,
        type:"spring",
        stiffness:400,
        damping:40,
      }
    },
  }
  return (
    <motion.div className='sidebar' animate={open ? "open":"close"}>
      <motion.div className='bgl' variants={variants}>
        <Link />
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open} />
    </motion.div>
  )
}
