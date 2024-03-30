import { useRef } from "react";
import "./Services.css";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
//   const ref = useRef();

  return (
    <div
      className="services"
      

      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Application Development</h2>
          <br />
          <p className="para">
          Crafting bespoke web applications tailored to your specific business needs and requirements. Our custom web development services encompass comprehensive planning, design, and implementation, ensuring seamless integration of features and functionalities aligned with your unique objectives and goals.
          </p>
          <br />
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>API Development</h2>
          <p>
          Designing and implementing RESTful or GraphQL APIs to facilitate seamless communication between the frontend and backend components of your application, ensuring efficient data exchange and interaction.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend Development</h2>
          <p>
          build robust server-side architecture, implementing scalable APIs, handling data persistence with MongoDB, and ensuring seamless communication between the frontend and backend components of your application.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend Development</h2>
          <p>
          Crafting dynamic and interactive user interfaces using React.js library, ensuring seamless user experiences and high performance for modern web applications.
          </p>
          <button>Learn More</button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;