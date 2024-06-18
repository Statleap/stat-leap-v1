import React from "react";
import { motion } from "framer-motion";

const fadeIn = (direction = 'up', duration = 0.3) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : -50
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration
      }
    }
  };
};

const Hero = () => {
  return (
    <div className="max-w-[700] mt-[20px] h-screen mx-auto flex flex-col justify-center bg-[#000300]">
      <div className=" max-w-[1240px] m-auto">
        <div className="mt-[40px]">
          <motion.p variants={(fadeIn('up', 0.3))}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-center uppercase text-[#25d366] md:text-sm sm:text-sm text-xs">
            Analyze Data Effortlessly with Our No-Code ML Tools
          </motion.p>
          <motion.h1
            variants={(fadeIn('up', 0.5))}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-center md:text-8xl sm:text-7xl text-6xl text-[#25d366] sm:mt-2 font-bold"
          >
            Welcome to Stat<span className="text-white">Leap</span>
          </motion.h1>
          <div>
            <motion.p variants={(fadeIn('up', 0.7))}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-lg p-5 text-center text-gray-400 md:p-400 py-4">
              Empowering students and businesses to harness the power of data
              without writing a single line of code.
            </motion.p>
            <motion.form variants={(fadeIn('up', 0.7))}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex p-5 rounded justify-center">
              <input
                type="email"
                className="p-2 w-[300px] border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-[#25d366]"
                placeholder="Enter your email"
                required
              />
              <motion.button
                type="submit"
                whileFocus={{ scale: 0.9 }}
                whileHover={{ backgroundColor: "#000", color: "#fff" }}
                className="w-20 p-2 text-black bg-[#25d366] rounded-r focus:outline-none focus:ring-1 focus:ring-[#25d366]"
              >
                Login
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
