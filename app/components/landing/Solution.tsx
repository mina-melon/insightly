"use client";
import SpotlightCard from "@/components/SpotlightCard";
import { Eye, TrendingUp, FileDown, Zap } from "lucide-react";
import { motion } from "motion/react";
import {forwardRef} from 'react';

const Solution = forwardRef<HTMLDivElement>((props, ref) => {
  const features = [
    {
      icon: Eye,
      title: "See Everything at a Glance",
      description:
        "One dashboard. All your key metrics. No hunting through dozens of reports.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Track What Matters",
      description:
        "Visitors, sales, conversion rates, and revenue—all in simple, beautiful charts.",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: FileDown,
      title: "Export & Share Instantly",
      description:
        "Download professional reports as PDFs or CSVs for clients and stakeholders.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Setup in Minutes",
      description:
        "One line of code. Connect Stripe, PayPal, or any platform. Start tracking immediately.",
      color: "from-yellow-500 to-orange-500",
    },
  ];
  return (
    <section className="section-spacing section-marg"
    ref={ref}
    >
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-head">THE SOLUTION</h2>
        <p className="section-sub">{`Analytics That Actually Makes Sense`}</p>
        <p className="section-hp">
          Insightly gives you the power of analytics without the complexity.
          Focus on growth, not data confusion.
        </p>
      </motion.div>
      {/* the features */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-linear-to-r opacity-0 group-hover:opacity-10 transition-opacity rounded-xl blur-xl -z-10"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgb(8, 8, 15) 0%, rgb(18, 18, 30) 100%)`,
                }}
              ></div>
              <SpotlightCard className="card-grad relative rounded-xl p-8 transition-all"
              spotlightColor="#462e7c"
              >
                <div
                  className={`w-14 h-14 rounded-xl icon-grad flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </SpotlightCard>
            </motion.div>
          );
        })}

        
      </div>
       <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-linear-to-r from-[#571BF2] to-[#1C0653] p-1 rounded-2xl">
            <div className="bg-gray-900 rounded-2xl px-8 py-6">
              <p className="text-2xl font-semibold text-white">
                Simple. Powerful. Built for humans.
              </p>
            </div>
          </div>
        </motion.div>
    </section>
  );
}) 

Solution.displayName = 'Solution';
export default Solution;
