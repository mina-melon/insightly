"use client";
import { AlertCircle, Brain, Clock, DollarSign } from "lucide-react";
import { motion } from "motion/react";
import SpotlightCard from "@/components/SpotlightCard";

export default function Problem() {
  const problems = [
    {
      icon: Brain,
      title: "Overwhelming Complexity",
      description:
        "Google Analytics has 247 different reports. You just want to know if your site is working.",
    },
    {
      icon: Clock,
      title: "Wasted Hours",
      description:
        "Spending more time trying to understand data than actually using it to grow your business.",
    },
    {
      icon: DollarSign,
      title: "Missing Revenue Insights",
      description:
        "You know people visit your site, but have no idea which pages actually drive sales.",
    },
    {
      icon: AlertCircle,
      title: "No Actionable Data",
      description:
        "Mountains of metrics, but zero clarity on what to do next to improve your results.",
    },
  ];
  return (
    <section className="bg-transparent px=[26px] section-spacing section-marg">
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-head">THE PROBLEM</h2>
        <p className="section-sub">{`Analytics shouldn't be this hard`}</p>
        <p className="section-hp">
          You started a business to serve customers, not to become a data
          analyst. But here you are...
        </p>
      </motion.div>

      {/* the features */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-linear-to-r opacity-0 group-hover:opacity-10 transition-opacity rounded-xl blur-xl -z-10"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgb(8, 8, 15) 0%, rgb(18, 18, 30) 100%)`,
                }}
              ></div>
              <SpotlightCard
                className="card-grad border-2 rounded-xl p-6 transition-colors"
                spotlightColor="#462e7c"
              >
                <div
                  className={`w-12 h-12 rounded-lg icon-grad  flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {problem.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {problem.description}
                </p>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>

      {/* the final problem card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <div className="inline-block card-grad border  rounded-2xl p-8 max-w-2xl">
          <p className="text-2xl text-gray-300 italic leading-relaxed">
            I just want to know if my marketing is working. Why is this so
            complicated?
          </p>
          <p className="text-gray-500 mt-4">— Every small business owner</p>
        </div>
      </motion.div>
    </section>
  );
}
