"use client";
import { motion } from "motion/react";
import { Play, BarChart3, Activity, Calendar } from "lucide-react";
import { useState } from "react";

export default function Demo() {
  const [activeTab, setActiveTab] = useState("traffic");

  const tabs = [
    { id: "traffic", label: "Traffic", icon: Activity },
    { id: "sales", label: "Sales", icon: BarChart3 },
    { id: "reports", label: "Reports", icon: Calendar },
  ];
  return (
    <section className="section-spacing section-marg">
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-head">SEE IT IN ACTION</h2>
        <p className="section-sub">{`Experience Insightly`}</p>
        <p className="section-hp">
          Take a quick tour of the dashboard. See how simple analytics can be.
        </p>
      </motion.div>

      {/* features */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <div className="video-container card-grad border rounded-2xl p-8 shadow-2xl">
          <div className="video-subcontainer1 flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>

            <div className="flex gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setActiveTab(tab.id);
                      console.log(tab.id)
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 border border-blue-100/0 hover:border-blue-500/50
                ${
                  activeTab === tab.id
                    ? "bg-primary2 hover:bg-darker1"
                    : "icon-grad"
                }
                `}
                  >
                    <Icon className="w-4 h-4 " />
                    {tab.label}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="video-subcontainer2 card-grad aspect-video rounded-xl border flex items-center justify-center relative overflow-hidden group">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="icon-grad relative z-10 w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-shadow"
            >
              <Play className="w-10 h-10 text-white ml-1" />
            </motion.button>
          </div>

          <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm mb-4">Watch a 2-minute demo of Insightly in action</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-btn text-white px-6 py-3 rounded-lg font-semibold"
              >
                Watch Full Demo
              </motion.button>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
