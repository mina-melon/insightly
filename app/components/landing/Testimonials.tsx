'use client'
import { motion } from "motion/react";
import {Star} from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Founder, Bloom Studios',
      content: 'Finally, analytics that makes sense! I can see everything I need without getting lost in complicated dashboards.',
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'E-commerce Manager',
      content: 'Insightly helped us increase conversions by 43% in just 2 months. The insights are clear and actionable.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Thompson',
      role: 'Marketing Director',
      content: 'The export feature is a game-changer. I can send beautiful reports to clients in seconds.',
      avatar: '👩‍🎨'
    }
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mt-45 mb-45"
    >
      <h2 className="text-sm font-semibold text-blue-400 mb-3">
        TRUSTED BY THOUSANDS
      </h2>
      <p className="text-gray-400">Join businesses already growing with Insightly</p>
      <div className="flex flex-row gap-6 bg-transparent p-7 ">

       <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-linear-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-left">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-white text-left">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
       
      </div>
    </motion.div>
  );
}
