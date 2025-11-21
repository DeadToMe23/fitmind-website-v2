"use client";

import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import PricingCards from "@/components/PricingCards";
import AppScreenshots from "@/components/AppScreenshots";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNewsletterStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setNewsletterStatus({
          type: "success",
          message: "Thank you for subscribing!",
        });
        setEmail("");
      } else {
        setNewsletterStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setNewsletterStatus({
        type: "error",
        message: "Failed to subscribe. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FitMind",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS",
    offers: {
      "@type": "Offer",
      price: "7.99",
      priceCurrency: "GBP",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1250",
    },
    description: "AI-powered fitness and mental wellbeing app with daily workouts, step tracking, and personalized plans.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <AppScreenshots />
        <PricingCards />
        <Testimonials />
        <FAQ />

      {/* Newsletter Section */}
      <section id="newsletter" className="relative py-32 overflow-hidden">
        {/* Premium Gradient Background */}
        <div className="absolute inset-0 gradient-premium opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
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
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-6"
            >
              Newsletter
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join our newsletter to get the latest updates, fitness tips, and exclusive content
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-white/50 outline-none text-gray-900 shadow-xl backdrop-blur-md bg-white/95"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 shadow-xl"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </motion.button>
              </div>
              {newsletterStatus.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 text-lg ${
                    newsletterStatus.type === "success"
                      ? "text-green-200"
                      : "text-red-200"
                  }`}
                >
                  {newsletterStatus.message}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 text-sm font-semibold mb-6"
            >
              Download Now
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Ready to Transform</span>
              <br />
              <span className="text-gray-900">Your Fitness?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Download FitMind today and start your journey to a healthier, happier you
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center"
            >
              <a
                href="#"
                className="inline-block"
                aria-label="Download on the App Store"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative px-8 py-4 bg-black rounded-2xl flex items-center justify-center hover:bg-gray-900 transition-colors shadow-2xl">
                    <svg className="w-6 h-6 mr-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-1.02.65.03 2.47.26 3.64 1.98-3.09 1.73-2.59 5.99 1.15 7.65-.89 2.28-2.03 4.51-3.46 6.14zm-1.12-17.51c-2.03-1.24-3.38-3.36-3.18-5.99.18-2.5 2.02-4.52 4.01-5.75 1.98-1.21 4.39-1.23 5.95-.96 1.56.27 2.85 1.15 3.75 2.15-3.59 2.17-3.07 6.55.47 10.55-3.54 3.99-2.95 5.55-6.5 3.55z"/>
                    </svg>
                    <span className="text-white font-semibold text-lg">
                      Download on App Store
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
}

