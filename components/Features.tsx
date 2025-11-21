"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🤖",
    title: "AI-Generated Workouts",
    description:
      "Get personalized workout routines powered by AI that adapt to your fitness level and goals in real-time.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "📅",
    title: "Personal Weekly Plans",
    description:
      "Receive comprehensive weekly workout plans tailored to your schedule, preferences, and progress.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "👣",
    title: "Step & Calories Tracking",
    description:
      "Track your daily steps and calories burned with accurate, real-time monitoring and insights.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: "✨",
    title: "Clean Minimal Design",
    description:
      "Enjoy a beautiful, intuitive interface inspired by Apple Fitness for a seamless experience.",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white">
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 text-sm font-semibold mb-6"
          >
            Powerful Features
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Everything You Need</span>
            <br />
            <span className="text-gray-900">To Transform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium features designed to help you achieve your fitness goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative mb-6"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl transition-shadow`}>
                    {feature.icon}
                  </div>
                </motion.div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Decorative Element */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-tl-full transform translate-x-1/2 translate-y-1/2`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
