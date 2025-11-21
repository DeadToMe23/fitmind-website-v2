"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is FitMind?",
    answer:
      "FitMind is a comprehensive fitness and mental wellbeing app that combines AI-powered workout generation with step and calorie tracking to help you achieve your health goals. Our app provides daily personalized workouts, weekly plans, and mental wellness features all in one beautiful interface.",
  },
  {
    question: "How does the AI workout generation work?",
    answer:
      "Our advanced AI analyzes your fitness level, goals, available equipment, and preferences to generate personalized workout routines. The system learns from your progress and adapts workouts in real-time, ensuring you're always challenged at the right level. Each workout is tailored to your schedule and preferences.",
  },
  {
    question: "Is there a free version?",
    answer:
      "Yes! FitMind offers a free tier with essential features including limited AI workouts (3 per week), basic step tracking, and calorie monitoring. You can upgrade to Premium for unlimited access to all features, or choose our Lifetime plan for a one-time payment.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely! You can cancel your Premium subscription at any time from your account settings. You'll continue to have access to Premium features until the end of your current billing period. There are no cancellation fees or penalties.",
  },
  {
    question: "Does FitMind work offline?",
    answer:
      "Yes, many features work offline including saved workout plans, step tracking, and calorie monitoring. However, AI workout generation requires an internet connection. Once generated, workouts can be accessed offline.",
  },
  {
    question: "What devices are supported?",
    answer:
      "FitMind is currently available for iOS devices (iPhone and iPad). We're actively working on Android support and will announce it soon. The app requires iOS 14.0 or later.",
  },
  {
    question: "What's included in the Lifetime plan?",
    answer:
      "The Lifetime plan includes everything in Premium plus lifetime access to all current and future features. You'll never pay another subscription fee, and you'll receive priority support, exclusive content, and early access to new features forever.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            FAQ
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Frequently Asked</span>
            <br />
            <span className="text-gray-900">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about FitMind
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg pr-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                    {faq.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="w-6 h-6 text-gray-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
