//Update Blogs/Case Studies with name,description, details

import React, { useState } from "react";
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';
import pdfIcon from '../pdfs/folder.gif';

const studies = [
  {
    name: "Data Preprocessing",
    description: "Clean and prepare your data for analysis and modeling.",
    details: "Detailed information about Data Preprocessing including techniques and tools."
  },
  {
    name: "Data Exploration",
    description: "Understand and visualize your data with various tools.",
    details: "Detailed information about Data Exploration including visualization techniques and tools."
  },
  {
    name: "Self Organizing Map",
    description: "Unsupervised neural network for data visualization.",
    details: "Detailed information about Self Organizing Maps and their applications."
  },
  {
    name: "Data Preprocessing",
    description: "Clean and prepare your data for analysis and modeling.",
    details: "Detailed information about Data Preprocessing including techniques and tools."
  },
  {
    name: "Data Exploration",
    description: "Understand and visualize your data with various tools.",
    details: "Detailed information about Data Exploration including visualization techniques and tools."
  },
  {
    name: "Self Organizing Map",
    description: "Unsupervised neural network for data visualization.",
    details: "Detailed information about Self Organizing Maps and their applications."
  }
];

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl w-[600px] shadow-2xl p-4 text-center sm:p-12 relative">
        <button
          className="absolute top-2 right-2 text-2xl font-bold text-gray-700 hover:text-gray-900" onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-[#25d366]">{content.name}</h2>
        <p className="text-gray-600">{content.details}</p>
      </div>
    </div>
  );
};

const Blogs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleReadMore = (study) => {
    setModalContent(study);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  return (
    <div className="mt-[90px] max-w-[1240px] mx-auto px-4 py-16">
      <h1 className="text-center text-4xl font-bold mb-8 text-[#25d366]">Case Studies</h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        Explore a variety of tools that enable you to analyze data using Machine Learning without any coding required.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 gap-x-4">
        {studies.map((study, index) => (
          <motion.div
            key={index}
            className="flex gap-5 border shadow-md rounded-md p-4 hover:scale-105 duration-300 cursor-pointer w-[440px] md:w-[400px] lg:w-[380px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}>
            <img className="w-12 h-12" src={pdfIcon} alt="" />
            <div>
              <h2 className="mt-2 font-bold text-xl text-[#25d366]">{study.name}</h2>
              <p className="mt-2 text-gray-600">{study.description}</p>
              <p className="mt-2 rounded-md font-medium inline-block text-black underline cursor-pointer" onClick={() => handleReadMore(study)}>Read more..</p>
            </div>
          </motion.div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
};

export default Blogs;
