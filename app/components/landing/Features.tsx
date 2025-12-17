'use client'
import {
  Users,
  ShoppingCart,
  LineChart,
  FileDown,
  Link2,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";

export default function Features() {
  const features = [
    {
      icon: Users,
      title: "Visitor Tracking",
      description:
        "Know exactly who visits your website, when they visit, and where they come from.",
      details: [
        "Real-time visitor count",
        "Traffic source breakdown",
        "Geographic location data",
        "Session duration tracking",
      ],
      visual: "visitors",
    },
    {
      icon: ShoppingCart,
      title: "Sales Analytics",
      description:
        "Track every sale, understand your conversion funnel, and identify top-performing products.",
      details: [
        "Revenue tracking",
        "Conversion rate analysis",
        "Product performance metrics",
        "Cart abandonment insights",
      ],
      visual: "sales",
    },
    {
      icon: LineChart,
      title: "Beautiful Charts",
      description:
        "Visualize your data with stunning, easy-to-understand charts and graphs.",
      details: [
        "Traffic trend charts",
        "Sales over time graphs",
        "Conversion funnels",
        "Custom date ranges",
      ],
      visual: "charts",
    },
    {
      icon: FileDown,
      title: "Export Reports",
      description:
        "Download professional reports in seconds. Perfect for clients, investors, or your team.",
      details: [
        "PDF report generation",
        "CSV data exports",
        "Scheduled reports",
        "Branded templates",
      ],
      visual: "export",
    },
    {
      icon: Link2,
      title: "Integrations",
      description:
        "Connect with the tools you already use. Setup takes less than 5 minutes.",
      details: [
        "Stripe integration",
        "PayPal support",
        "Google Analytics sync",
        "Webhook support",
      ],
      visual: "integrations",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "Your data is secure. GDPR compliant. No data selling. Ever.",
      details: [
        "Enterprise-grade security",
        "GDPR & CCPA compliant",
        "Data encryption",
        "Regular security audits",
      ],
      visual: "security",
    },
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
        <h2 className="section-head">FEATURES</h2>
        <p className="section-sub">{`Everything You Need, Nothing You Don't`}</p>
        <p className="section-hp">
          Powerful features designed for real businesses. No bloat, no
          confusion.
        </p>
      </motion.div>

      {/* FEATURES */}
      <div className='grid md:grid-cols-2 gap-6 max-w-5xl mx-auto'>
         {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="card-grad border hover:border-blue-500/50 rounded-2xl p-8 h-full transition-all">
                  <div className="w-16 h-16 rounded-xl icon-grad flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>

                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></div>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
      </div>
    </section>
  );
}
