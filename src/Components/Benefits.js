//Update title,description, moreContent

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineExpandAlt } from 'react-icons/ai';
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const benefitsData = [
  {
    title: "Instructor-Led Data Analytics",
    description: "A platform that empowers faculty to effectively teach data analytics, making learning engaging and efficient.",
    moreContent: "A platform that empowers faculty to effectively teach data analytics, making learning engaging and efficient. A platform that empowers faculty to effectively teach data analytics, making learning engaging and efficient. A platform that empowers faculty to effectively teach data analytics, making learning engaging and efficient.",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-500",
  },
  {
    title: "Collaboration with Top Institutions",
    description: "Partnered with renowned business schools to provide students with cutting-edge data analytics education.",
    moreContent: "Partnered with renowned business schools to provide students with cutting-edge data analytics education. Partnered with renowned business schools to provide students with cutting-edge data analytics education. Partnered with renowned business schools to provide students with cutting-edge data analytics education.",
    borderColor: "border-purple-500",
    textColor: "text-purple-500"
  },
  {
    title: "Flexible Learning Modes",
    description: "Designed for both online and offline learning environments, ensuring uninterrupted access to tools.",
    moreContent: "Designed for both online and offline learning environments, ensuring uninterrupted access to tools. Designed for both online and offline learning environments, ensuring uninterrupted access to tools. Designed for both online and offline learning environments, ensuring uninterrupted access to tools.",
    borderColor: "border-blue-400",
    textColor: "text-blue-400"
  },
  {
    title: "Scalable for Any Class Size",
    description: "Effortlessly scales to accommodate small to large classes, maintaining performance and accessibility.",
    moreContent: "Effortlessly scales to accommodate small to large classes, maintaining performance and accessibility. Effortlessly scales to accommodate small to large classes, maintaining performance and accessibility. Effortlessly scales to accommodate small to large classes, maintaining performance and accessibility.",
    borderColor: "border-yellow-400",
    textColor: "text-yellow-400"
  },
  {
    title: "Cost-Effective Subscription Model",
    description: "Offers unlimited access to tools with a subscription-based pricing, ensuring affordability and value.",
    moreContent: "Offers unlimited access to tools with a subscription-based pricing, ensuring affordability and value. Offers unlimited access to tools with a subscription-based pricing, ensuring affordability and value. Offers unlimited access to tools with a subscription-based pricing, ensuring affordability and value.",
    borderColor: "border-green-500",
    textColor: "text-green-500"
  },
  {
    title: "No-Code Machine Learning Tools",
    description: "Utilize powerful machine learning tools without the need for any coding, simplifying data analytics for all users.",
    moreContent: "Utilize powerful machine learning tools without the need for any coding, simplifying data analytics for all users. Utilize powerful machine learning tools without the need for any coding, simplifying data analytics for all users. Utilize powerful machine learning tools without the need for any coding, simplifying data analytics for all users.",
    borderColor: "border-red-500",
    textColor: "text-red-500"
  }
];

const Benefits = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container relative flex flex-col justify-between h-full w-max-[1240px] px-10 mx-auto xl:px-0 mt-2">
      <h2 className="mb-1 text-3xl font-extrabold text-center leading-tight text-[#25d366]">Benefits</h2>
      <p className="mb-12 text-lg text-center text-gray-500">Discover the key advantages of using StatLeap for your data analytics needs</p>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={index}
            className={`relative h-full p-5 bg-white border-2 ${benefit.borderColor} rounded-lg transform transition duration-500 
              ${expandedIndex === index ? `lg:col-span-1 lg:row-span-2 z-20` : "hover:scale-110"} 
              ${expandedIndex !== null && expandedIndex !== index ? "blur-sm" : ""}`}
            onClick={() => handleExpand(index)}
            style={{ cursor: 'pointer' }}
            variants={fadeIn}
          >
            <span className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${benefit.bgColor} rounded-lg`}></span>
            <div className="relative h-full">
              <div className="flex items-center justify-between -mt-1">
                <h3 className="my-2 text-lg font-bold text-gray-800">{benefit.title}</h3>
                <div 
                  className="bg-gray-200 p-2 rounded flex items-center justify-center" 
                  onClick={(e) => { e.stopPropagation(); handleExpand(index); }}
                >
                  {expandedIndex === index ? <AiOutlineClose size={20} /> : <AiOutlineExpandAlt size={20} />}
                </div>
              </div>
              <p className={`mt-2 mb-1 text-xs font-medium ${benefit.textColor} uppercase`}>------------</p>
              <p className="mb-2 text-gray-600">{benefit.description}</p>
              {expandedIndex === index && <p className="mt-2 text-gray-600">{benefit.moreContent}</p>}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Benefits;
