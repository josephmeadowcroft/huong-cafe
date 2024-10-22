import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="min-h-[65vh] bg-primary flex items-center justify-center">
      <div className="text-center px-4 md:px-8 max-w-3xl mx-auto">
        {/* Logo Container */}
        <motion.div
          className="mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        >
          <motion.div
            className="w-full h-full mx-auto flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/huong-logo-rect.png"
              width={400}
              height={150}
              draggable={false}
              alt="Logo"
            />
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          className="text-lg md:text-xl lg:text-2xl text-white font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          - Contemporary Vietnamese Café -
        </motion.h2>

        {/* Buttons Container */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <motion.button
            className="bg-white text-black px-6 py-3 rounded-md font-semibold 
                     hover:bg-green-50 transition-colors duration-200 
                     flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View menu
          </motion.button>
          <motion.button
            className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold 
                     hover:bg-white hover:text-black transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Find us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
