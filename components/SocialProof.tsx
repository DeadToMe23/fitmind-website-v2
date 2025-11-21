"use client";

import { motion } from "framer-motion";

const badges = [
  {
    text: "100K+ Active Users",
    icon: "👥",
    color: "from-blue-500 to-cyan-500",
  },
  {
    text: "4.9★ App Store Rating",
    icon: "⭐",
    color: "from-yellow-400 to-orange-500",
  },
  {
    text: "50K+ Workouts Generated",
    icon: "💪",
    color: "from-purple-500 to-pink-500",
  },
  {
    text: "Trusted by Professionals",
    icon: "🏆",
    color: "from-green-500 to-emerald-500",
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Trusted by Thousands
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${badge.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}
                >
                  {badge.icon}
                </motion.div>
                <p className="text-lg font-semibold text-gray-900">
                  {badge.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

