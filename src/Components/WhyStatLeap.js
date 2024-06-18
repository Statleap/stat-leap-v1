//Update description-p tag
import React from "react";
import aboutImg from "../img/Growth analytics.gif";
import { motion } from "framer-motion";

const WhyStatLeap = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  return (
    <div className="py-14 px-4 max-w-[1240px] mt-20 md:mt-12 lg:mt-4 h-screen mx-auto flex flex-col justify-center">
      <div className="text-center">
        <p className="uppercase text-[#25d366] text-xs lg:text-md py-2">
          Define the Power of Data Analytics
        </p>
        <h1 className="text-4xl lg:text-5xl text-[#25d366] font-extrabold">
          Why Stat<span className="navbar-span text-black ">Leap</span>?
        </h1>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 max-w-[1240px] m-auto">
        <motion.div 
          variants={fadeIn} 
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center w-full px-14 py-2 mt-6"
        >
          <img src={aboutImg} alt="img" className="h-auto" />
        </motion.div>

        <div className="flex flex-col justify-center">
          <h1 className="text-2xl text-center font-bold py-2">
            No Code with Stat<span className="text-[#25d366]">Leap</span>
          </h1>
          <p className="text-gray-600 text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fuga
            at nostrum ut? Reiciendis deleniti iure modi aliquam dolorum quidem.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            sunt libero iure debitis laboriosam aliquam!
          </p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff"}}
            className="bg-[#25d366] w-[200px] rounded-lg text-lg my-6 mx-auto py-2"
            type="submit"
          >
            Sign Up
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default WhyStatLeap;
