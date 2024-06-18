//Update title and description for the tools
//Update Modal with title, description and individual URL links
import React, { useState } from "react";
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';

const toolkits = [
  {
    color: "text-red-600",
    bgColor: "bg-red-100",
    svgPath: "M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z",
    title: "Data Preprocessing",
    description: "Clean and prepare your data for analysis and modeling."
  },
  {
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    svgPath: "M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",
    title: "Data Exploration",
    description: "Understand and visualize your data with various tools."
  },
  {
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    svgPath: "M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z",
    title: "Self Organizing Map",
    description: "Unsupervised neural network for data visualization."
  },
  {
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    svgPath: "M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z",
    title: "Data Preprocessing",
    description: "Clean and prepare your data for analysis and modeling."
  },
  {
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    svgPath: "M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",
    title: "Data Exploration",
    description: "Understand and visualize your data with various tools."
  },
  {
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    svgPath: "M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z",
    title: "Self Organizing Map",
    description: "Unsupervised neural network for data visualization."
  },
  {
    color: "text-green-600",
    bgColor: "bg-green-100",
    svgPath: "M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z",
    title: "Data Security",
    description: "Implement robust measures to protect your data."
  },
  {
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    svgPath: "M9 2a7 7 0 00-7 7v5a4 4 0 004 4h6a4 4 0 004-4V9a7 7 0 00-7-7zM8 6a2 2 0 114 0v3h2.5a.5.5 0 110 1h-9a.5.5 0 110-1H8V6z",
    title: "Predictive Modeling",
    description: "Build models to predict future data trends and patterns."
  }
];

const ModalDesc = [
  {
    title: "Data Preprocessing",
    description: "Clean and prepare your data for analysis and modeling.",
    directLink:"https://en.wikipedia.org/wiki/Data_preprocessing"
  },
  {
    title: "Data Exploration",
    description: "Understand and visualize your data with various tools.",
    directLink:"https://en.wikipedia.org/wiki/Exploratory_data_analysis"
  },
  {
    title: "Self Organizing Map",
    description: "Unsupervised neural network for data visualization.",
    directLink: "https://en.wikipedia.org/wiki/Self-organizing_map"
  },
  {
    title: "Data Security",
    description: "Implement robust measures to protect your data.",
    directLink: "https://en.wikipedia.org/wiki/Data_security"
  },
  {
    title: "Predictive Modeling",
    description: "Build models to predict future data trends and patterns.",
    directLink: "https://en.wikipedia.org/wiki/Predictive_modelling"
  }
];

const Modal = ({ isOpen, onClose, title, description, directLink }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl w-[400px] lg:w-[600px] shadow-2xl p-8 text-center sm:p-8 relative">
        <button className="absolute top-2 right-2 p-1 text-2xl font-bold text-gray-400 hover:text-gray-900" onClick={onClose}>
          &times;
        </button>
        <p className="text-sm font-semibold tracking-widest text-[#25d366]">{title}</p>
        <h2 className="mt-6 text-md">{description}</h2>
        <a href={directLink} target="_blank" rel="noreferrer" className="inline-block rounded-md mt-8 py-2 font-medium underline">Click here..</a>
      </div>
    </div>
  );
};

const ToolkitCards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '', directLink: '' });

  const onClick = (title) => {
    const content = ModalDesc.find((item) => item.title === title);
    if (content) {
      setModalContent(content);
      setIsOpen(true);
    }
  };

  return (
    <section className="max-w-[1240px] mx-auto mt-[90px] px-3 py-16">
      <h1 className="text-center text-4xl font-extrabold leading-tight mb-1 text-[#25d366]">ML Toolkits</h1>
      <p className="text-center text-lg text-gray-500 mb-6">
        Explore a variety of tools that enable you to analyze data using Machine Learning without any coding required.
      </p>
      <div className="px-12 lg:px-2 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 lg:gap-x-18 gap-y-10">
        {toolkits.map((toolkit, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 shadow-md hover:scale-110 duration-300 p-5 rounded-xl w-[420px] md:w-[350px] lg:w-[280px] flex flex-col items-center text-center lg:flex-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={`w-10 h-10 mx-auto ${toolkit.bgColor} ${toolkit.color} flex items-center justify-center rounded-full mb-4`}>
              <svg className={`w-5 h-5 ${toolkit.color}`} fill="currentColor" viewBox="0 0 20 20">
                <path d={toolkit.svgPath} />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 leading-tight text-gray-900">{toolkit.title}</h3>
            <p className="text-sm text-gray-600">{toolkit.description}</p>
            <motion.button 
              whileFocus={{ scale: 0.9 }}
              className={`mt-3 p-2 border ${toolkit.bgColor} rounded-md ${toolkit.color} text-sm`} 
              onClick={() => onClick(toolkit.title)}
            >
              Launch
            </motion.button>
          </motion.div>
        ))}
      </div>
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        title={modalContent.title} 
        description={modalContent.description} 
        directLink={modalContent.directLink} 
      />
    </section>
  );
};

export default ToolkitCards;
