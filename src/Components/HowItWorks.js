//Update title, description
import React from "react";
import teachImg from "../img/Facilities.jpg";
import appAccess from "../img/App-access.jpg";
import codeFree from "../img/Teach.jpg";
import businessSolution from "../img/Business-solutions.jpg";
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, 
  transition: { duration: 0.5 } },
};

const data = [
  {
    title: "Facilitates Instruction",
    imgSrc: teachImg,
    description: "Enhances the teaching process with interactive tools."
  },
  {
    title: "Instant App Access",
    imgSrc: appAccess,
    description: "Provides quick access to applications from anywhere."
  },
  {
    title: "Code-Free Operation",
    imgSrc: codeFree,
    description: "Allows you to operate without needing to code."
  },
  {
    title: "Business Solutions",
    imgSrc: businessSolution,
    description: "Offers tailored solutions for business needs."
  },
];

const HowItWorks = () => {
  return (
    <div className="flex mt-12 items-center justify-center">
    <motion.div
      className="px-24 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
          variants={fadeIn}
        >
          <div className="h-80 w-72">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={item.imgSrc}
              alt={item.title}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-4 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="text-2xl font-bold text-[#25d366]">
              {item.title}
            </h1>
            <p className="mb-6 mt-2 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);
};

export default HowItWorks;
