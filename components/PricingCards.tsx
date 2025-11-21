"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const plans = [
  {
    name: "Free",
    price: "£0",
    yearlyPrice: "£0",
    period: "forever",
    features: [
      "Basic workout plans",
      "Limited AI workouts (3 per week)",
      "Step tracking",
      "Basic calorie tracking",
      "Community support",
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-gray-100 to-gray-200",
  },
  {
    name: "Premium",
    price: "£7.99",
    yearlyPrice: "£79.99",
    period: "month",
    yearlyPeriod: "year",
    features: [
      "Unlimited AI-generated workouts",
      "Personal weekly plans",
      "Advanced step & calorie tracking",
      "Priority support",
      "Exclusive content",
      "Ad-free experience",
      "Early access to new features",
    ],
    cta: "Start Now",
    popular: true,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Lifetime",
    price: "£59.99",
    yearlyPrice: "£59.99",
    period: "one-time",
    features: [
      "Everything in Premium",
      "Lifetime access",
      "All future features included",
      "No recurring charges",
      "Priority support forever",
      "Exclusive lifetime member badge",
    ],
    cta: "Get Lifetime",
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
  },
];

export default function PricingCards() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-32 bg-gradient-to-b from-white via-purple-50/30 to-white">
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
            Pricing
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Simple, Transparent</span>
            <br />
            <span className="text-gray-900">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Choose the plan that works best for you
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-lg font-medium transition-colors ${
                !isYearly ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-9 rounded-full transition-colors ${
                isYearly ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-gray-300"
              }`}
            >
              <motion.div
                animate={{
                  x: isYearly ? 32 : 4,
                }}
                className="absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-lg"
              />
            </button>
            <span
              className={`text-lg font-medium transition-colors ${
                isYearly ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Yearly
            </span>
            {isYearly && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="ml-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold"
              >
                Save 17%
              </motion.span>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const displayPrice = isYearly && plan.yearlyPrice ? plan.yearlyPrice : plan.price;
            const displayPeriod = isYearly && plan.yearlyPeriod ? plan.yearlyPeriod : plan.period;
            const isLifetime = plan.name === "Lifetime";
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative ${
                  plan.popular
                    ? "md:scale-110 z-10"
                    : ""
                }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </motion.div>
                )}
                {isLifetime && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Best Value
                    </span>
                  </motion.div>
                )}
                
                <div className={`relative bg-white rounded-3xl shadow-xl p-8 border-2 ${
                  plan.popular
                    ? "border-purple-500"
                    : isLifetime
                    ? "border-blue-500"
                    : "border-gray-200"
                } overflow-hidden h-full flex flex-col`}>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5`} />
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-6xl font-bold text-gray-900">
                          {displayPrice}
                        </span>
                        {!isLifetime && (
                          <span className="text-gray-600 ml-2">/{displayPeriod}</span>
                        )}
                      </div>
                      {isYearly && plan.yearlyPrice && !isLifetime && (
                        <p className="text-sm text-gray-500">
                          Billed annually (save 17%)
                        </p>
                      )}
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg
                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center">
                      <Button
                        variant={plan.popular || isLifetime ? "primary" : "secondary"}
                        href="/pricing"
                        className={`w-full ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                            : isLifetime
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                            : ""
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
