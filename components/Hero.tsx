"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 gradient-premium opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(118,75,162,0.3),transparent_50%)]" />
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-6">
                ✨ AI-Powered Fitness
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Transform Your</span>
              <br />
              <span className="text-gradient bg-white bg-clip-text text-transparent">
                Body & Mind
              </span>
              <br />
              <span className="text-white">with FitMind</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0 font-light"
            >
              Daily AI workouts, step tracking, and mental wellness in one app.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button href="#download" variant="primary" className="bg-white text-purple-600 hover:bg-gray-100 shadow-2xl">
                  Download FitMind
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button href="#pricing" variant="secondary" className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20">
                  Try Free
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Animated iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative" style={{ perspective: '1000px' }}>
              <motion.div
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* iPhone Frame */}
                <div className="w-72 h-[580px] md:w-80 md:h-[640px] relative">
                  {/* Phone Shadow */}
                  <div className="absolute inset-0 bg-black/20 rounded-[3.5rem] blur-2xl transform translate-y-8" />
                  
                  {/* Phone Body */}
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-[3.5rem] p-3 shadow-2xl">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
                    
                    {/* Screen */}
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-[3rem] overflow-hidden relative">
                      {/* Screen Content */}
                      <div className="absolute inset-0 p-6 flex flex-col">
                        <div className="flex-1 flex items-center justify-center">
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.8, 1, 0.8],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="text-center"
                          >
                            <div className="w-24 h-24 mx-auto mb-4 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-xl">
                              <span className="text-4xl font-bold text-white">FM</span>
                            </div>
                            <p className="text-white/80 text-sm font-medium">FitMind</p>
                          </motion.div>
                        </div>
                        
                        {/* Bottom Navigation */}
                        <div className="flex justify-around items-center bg-white/10 backdrop-blur-md rounded-2xl p-4">
                          {[1, 2, 3, 4].map((i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.2 }}
                              className="w-2 h-2 bg-white rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Shine Effect */}
                      <motion.div
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl"
              >
                <span className="text-2xl">💪</span>
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl"
              >
                <span className="text-2xl">🧘</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-3 bg-white/70 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
