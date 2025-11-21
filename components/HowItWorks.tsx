"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Download & Sign Up",
    description:
      "Download FitMind from the App Store and create your free account in seconds. No credit card required.",
    icon: "📱",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    number: "02",
    title: "Set Your Goals",
    description:
      "Tell us about your fitness level, goals, and preferences. Our AI will create a personalized plan just for you.",
    icon: "🎯",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "03",
    title: "Get AI Workouts",
    description:
      "Receive daily AI-generated workouts tailored to your schedule and progress. Each workout adapts to your needs.",
    icon: "🤖",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    number: "04",
    title: "Track & Transform",
    description:
      "Monitor your steps, calories, and progress. Watch as you transform your body and mind with consistent use.",
    icon: "📊",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white">
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
            How It Works
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Get Started in</span>
            <br />
            <span className="text-gray-900">4 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your fitness journey today with our easy-to-follow process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              {/* Connecting Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 via-pink-200 to-transparent z-0" style={{ width: 'calc(100% - 2rem)' }} />
              )}
              
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-4xl mb-6 mt-4 shadow-lg`}
                >
                  {step.icon}
                </motion.div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

