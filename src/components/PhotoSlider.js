"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const images = [
  "/placeholder.svg?height=400&width=600&text=Cafe+Image+1",
  "/placeholder.svg?height=400&width=600&text=Cafe+Image+2",
  "/placeholder.svg?height=400&width=600&text=Cafe+Image+3",
  "/placeholder.svg?height=400&width=600&text=Cafe+Image+4",
];

export default function PhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const timer = setInterval(handleNext, 5000);
      return () => clearInterval(timer);
    }
  }, [handleNext, isMobile]);

  if (isMobile) {
    return null; // Hide component on mobile
  }

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        {images.map((src, index) => (
          <motion.div
            key={src}
            custom={index}
            className="absolute w-full h-full"
            initial={{ opacity: 0, x: 1000 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              x: index === currentIndex ? 0 : 1000,
            }}
            exit={{ opacity: 0, x: -1000 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={src}
              alt={`Cafe image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            } transition-colors duration-200`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
