"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const screenshots = [
  {
    id: 1,
    title: "AI Workout Generation",
    description: "Get personalized workouts tailored to your goals",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Activity Tracking",
    description: "Monitor your steps and calories in real-time",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Weekly Plans",
    description: "Follow structured weekly workout schedules",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Clean Interface",
    description: "Enjoy a beautiful, intuitive user experience",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Progress Insights",
    description: "Track your fitness journey with detailed analytics",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function AppScreenshots() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section id="screenshots" className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 text-sm font-semibold mb-6"
          >
            App Preview
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">See FitMind</span>
            <br />
            <span className="text-gray-900">In Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the beautiful interface and powerful features
          </p>
        </motion.div>

        {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
          {/* Main Screenshot Display */}
          <div className="relative h-[600px] md:h-[700px]" style={{ perspective: '1000px' }}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  rotateY: { duration: 0.3 },
                }}
                className="absolute inset-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  whileHover={{
                    rotateY: 5,
                    rotateX: 5,
                    scale: 1.05,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative h-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Phone Frame */}
                  <div className="relative w-full h-full max-w-sm mx-auto">
                    <div className="absolute inset-0 bg-black/20 rounded-[3.5rem] blur-2xl transform translate-y-8" />
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-[3.5rem] p-3 shadow-2xl">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
                      <div className={`w-full h-full bg-gradient-to-br ${screenshots[currentIndex].gradient} rounded-[3rem] overflow-hidden relative`}>
                        {/* Screen Content */}
                        <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mb-6"
                          >
                            <div className="w-32 h-32 mx-auto mb-4 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-xl">
                              <span className="text-5xl font-bold text-white">
                                {screenshots[currentIndex].id}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {screenshots[currentIndex].title}
                            </h3>
                            <p className="text-white/80">
                              {screenshots[currentIndex].description}
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <motion.div
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-purple-600 to-pink-600"
                      : "bg-gray-300"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToSlide((currentIndex - 1 + screenshots.length) % screenshots.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
            aria-label="Previous screenshot"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => goToSlide((currentIndex + 1) % screenshots.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
            aria-label="Next screenshot"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
