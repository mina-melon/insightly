"use client";
import { motion } from "motion/react";
import RotatingButton from "@/components/RotatingButton";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="bg-transparent px=[26px] section-spacing section-marg">
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center gap-2 mb-16"
      >
        <div className="bg-zinc-700/40 flex flex-row w-fit text-white px-4 py-2 rounded-full text-sm font-semibold items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Start Your Free Trial Today
        </div>
        <p className="section-sub text-center">{`Ready to Understand Your Business?`}</p>
        <p className="section-hp text-center">
          Join thousands of businesses using Insightly to make smarter
          decisions. Setup takes less than 5 minutes. No credit card required.
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col justify-center mb-5  sm:w-"
        >
          <RotatingButton
            buttonClass="p-btn"
            arrowColor="white"
            label="Start Free Trial"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col justify-center mb-6 "
        >
          <button className="s-btn">Schedule Demo</button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 mt-6"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span>14-day free trial</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span>No credit card required</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span>Cancel anytime</span>
        </div>
      </motion.div>

      <div className="border border-gray-400/20 mb-20 mt-20" />

      <div className="flex flex-col gap-7 justify-center items-center">
        <div className="logo-container">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <p className="logo">Insightly</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Blog
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Support
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
        </div>

        <div className="text-gray-500 text-sm">
          © 2024 Insightly. All rights reserved.
        </div>
      </div>
    </section>
  );
}
