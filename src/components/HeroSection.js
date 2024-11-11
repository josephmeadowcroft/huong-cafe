"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PopButton from "./PopButton";

const HeroSection = () => {
  return (
    <div className="relative min-h-[60vh] bg-primary flex items-center justify-center">
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-3xl mx-auto">
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
          <PopButton title="View menu" href="/menu" />
          <PopButton
            title="Find us"
            btnStyles="bg-primary border-2 border-white hover:bg-white"
            textStyles="text-white hover:text-black"
            href="/contact"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
