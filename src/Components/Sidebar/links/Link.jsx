import React from 'react';
import '../Sidebar.css';
import { motion } from 'framer-motion';

const Link = () => {
  const parentVariants = {
    open: {
      transition: {
        delay:0.5,
        staggerChildren: 0.1,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const childVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    close: {
      opacity: 0,
      y: 50,
    },
  };

  const items = ["Home","About", "Skill","Experience","Services","Project", "Contact"];

  return (
    <motion.div className="links" variants={parentVariants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          whileHover={{scale:1.2}}
          variants={childVariants} // Apply variants to motion component
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Link;
