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
    title: "Book App",
    img: "Book App.png",
    desc: "Created Book App with Node.js, Express.js, and JavaScript. Enables seamless book management: add, update, delete. Enhances productivity, organization, and user experience for Register their books.",
    Link:"https://github.com/RohitChouhan79/Book-App"
  },
  {
    id: 3,
    title: "Keep Notes",
    img: "KeepNotes.png",
    desc: "Crafted a React project for users to effortlessly capture and organize notes, akin to Google Keep. Offering a seamless experience, it facilitates efficient note-taking and organization.",
    Link:"https://github.com/RohitChouhan79/KeepNotes"
  },
  {
    id: 4,
    title: "National Park",
    img: "National PArk.png",
    desc: "Developed a branding website clone  National Park website, using HTML, CSS, and JS.Meticulously crafted to mirror the original's aesthetic and functionality, the project showcases a commitment to high-quality design and user experience.",
    Link:"https://github.com/RohitChouhan79/website/tree/main/national%20park"
  },
  {
    id: 5,
    title: "Task Manager",
    img: "Task Manager.png",
    desc: "Developed a Task Manager utilizing Node.js, Express.js, and JavaScript. Users can easily manage tasks by adding, updating, or deleting details. The application provides a seamless experience for efficient task management, enhancing productivity and organization for users.",
    Link:"https://github.com/RohitChouhan79/taskmanger"
 },
  {
    id: 6,
    title: "CYNTHIAUGWU",
    img: "Cyn.png",
    desc: "Developed a branding website clone inspired by the award-winning Cynthiaugwu website, using HTML, CSS, and JS.Meticulously crafted to mirror the original's aesthetic and functionality, the project showcases a commitment to high-quality design and user experience.",
    Link:"https://github.com/RohitChouhan79/cynthiaugwu-Awwwards.com"
  },
  {
    id: 7,
    title: "Product Selling",
    img: "Item Selling Page.png",
    desc: "Built Product Selling App with Node.js, Express.js, and JavaScript. Integrated Razorpay for secure payments. Empowers users to buy products seamlessly, enhancing their shopping experience with efficient payment processing.",
    Link:"https://github.com/RohitChouhan79/payment-gateway"
 },
  {
    id: 8,
    title: "Iprint",
    img: "Iprint.png",
    desc: "Crafted Iprint clone utilizing HTML, CSS, and JavaScript. Offers similar functionalities for seamless document printing. Enhances user experience through familiar features and intuitive design.",
    Link:"https://github.com/RohitChouhan79/landing-pages/tree/main/iprint"
  },
  {
    id: 9,
    title: "Wecare",
    img: "Doctor.png",
    desc: "Crafted WeCare Doctor clone with HTML, CSS, and JavaScript. Offers seamless functionalities akin to document printing. Enhances user experience with familiar features and an intuitive design.",
    Link:"https://github.com/RohitChouhan79/landing-pages/tree/main/wecare"
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