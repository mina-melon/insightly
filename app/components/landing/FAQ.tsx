"use client";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      question: "How is Insightly different from Google Analytics?",
      answer:
        "Insightly is designed for simplicity. While Google Analytics has 247 different reports and a steep learning curve, Insightly shows you only what matters in one clean dashboard. Think of it as Google Analytics for humans.",
    },
    {
      question: "How long does it take to set up?",
      answer:
        "Less than 5 minutes. Just add one line of code to your website, connect your payment processor (optional), and you're done. No complicated configuration needed.",
    },
    {
      question: "Do I need technical knowledge to use Insightly?",
      answer:
        "Not at all. If you can use email, you can use Insightly. Our dashboard is designed to be intuitive and self-explanatory. No training required.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes! You can download your data as PDF reports or CSV spreadsheets anytime. Perfect for sharing with clients, investors, or your team.",
    },
    {
      question: "What integrations do you support?",
      answer:
        "We integrate with Stripe, PayPal, Google Analytics, and more. You can also connect any platform using our webhook system. New integrations are added regularly based on customer feedback.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption, are GDPR and CCPA compliant, and undergo regular security audits. We never sell your data to third parties.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time with one click. No questions asked, no cancellation fees. You'll still have access until the end of your billing period.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes! All plans come with a 14-day free trial. No credit card required. Try all features risk-free and upgrade when you're ready.",
    },
  ];
  return (
    <section className="section-spacing section-marg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-head">FAQ</h2>
          <p className="section-sub">{`Questions? We've Got Answers`}</p>
          <p className="section-hp">
            Everything you need to know about Insightly
          </p>
        </motion.div>

        {/* features */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full border hover:border-blue-500/50 rounded-xl p-6 text-left transition-all ${
                  openIndex===index
                  ? 'faq-grad'
                  : 'card-grad'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </h4>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-blue-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </motion.div>
                </div>

                 <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 mt-4 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-btn"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
