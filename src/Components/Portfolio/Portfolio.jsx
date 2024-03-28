import { useRef } from "react";
import "./Portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Coding Blog App",
    img: "BlogApp.png",
    desc: "Developed blog application using MERN stack. Implemented user friendly features. Leveraged React for an intuitive front-end ,MongoDB for efficient data management, Express for robust server-side functionality, and Node.js for scalable performance.",
    Link:"https://github.com/RohitChouhan79/Mern-Blog-App"
  },
  {
    id: 2,
    title: "Keep Notes",
    img: "KeepNotes.png",
    desc: "Crafted a React project for users to effortlessly capture and organize notes, akin to Google Keep. Offering a seamless experience, it facilitates efficient note-taking and organization.",
    Link:"https://github.com/RohitChouhan79/KeepNotes"
  },
  {
    id: 3,
    title: "Task Manager",
    img: "Task Manager.png",
    desc: "Developed a Task Manager utilizing Node.js, Express.js, and JavaScript. Users can easily manage tasks by adding, updating, or deleting details. The application provides a seamless experience for efficient task management, enhancing productivity and organization for users.",
    Link:"https://github.com/RohitChouhan79/taskmanger"
 },
  {
    id: 4,
    title: "CYNTHIAUGWU",
    img: "Cyn.png",
    desc: "Developed a branding website clone inspired by the award-winning Cynthiaugwu website, using HTML, CSS, and JS.Meticulously crafted to mirror the original's aesthetic and functionality, the project showcases a commitment to high-quality design and user experience.",
    Link:"https://github.com/RohitChouhan79/cynthiaugwu-Awwwards.com"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.Link}>See Resporatry</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;