"use client";
import { motion } from "motion/react";
import { Sparkles, Check } from "lucide-react";
import RotatingButton from '@/components/RotatingButton'

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for small businesses and freelancers",
      features: [
        "Up to 10,000 monthly visitors",
        "Basic analytics dashboard",
        "Sales tracking",
        "Email support",
        "PDF exports",
        "30-day data retention",
      ],
      cta: "Start Free Trial",
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "For growing businesses with serious goals",
      features: [
        "Up to 100,000 monthly visitors",
        "Advanced analytics & reports",
        "Sales tracking & funnels",
        "Priority email support",
        "Unlimited PDF & CSV exports",
        "1-year data retention",
        "Custom integrations",
        "Team collaboration (5 users)",
      ],
      cta: "Start Free Trial",
      popular: true,
      gradient: "from-emerald-500 to-green-500",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited monthly visitors",
        "White-label reports",
        "Dedicated account manager",
        "24/7 phone & email support",
        "Custom integrations",
        "Unlimited data retention",
        "Advanced security features",
        "SLA guarantee",
        "Unlimited team members",
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-purple-500 to-pink-500",
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
        <h2 className="section-head">PRICING</h2>
        <p className="section-sub">{` Simple, Transparent Pricing`}</p>
        <p className="section-hp">
          {`Start free, upgrade when you're ready. No hidden fees. Cancel anytime.`}
        </p>
      </motion.div>

      {/* features */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="relative"
          >
            {plan.popular ? (
              <div className="popular-grad flex flex-col justify-between">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row gap-4 items-center">
                    <h4 className="text-xl font-bold">Pro</h4>
                    <div className="bg-zinc-700/40 rounded-full px-3 py-1 w-fit flex flex-row items-center gap-2 ">
                      <Sparkles className="w-3 h-3 text-zinc-500/70" />
                      <p className="text-xs font-medium">Popular</p>
                    </div>
                  </div>
                  <p className="text-[15px]">{plan.description}</p>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-medium">{plan.price}</h3>
                    <p className="text-white/70">{plan.period}</p>
                  </div>
                  <div className="border border-white/10"></div>
                  <div>
                    <ul className="flex flex-col gap-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="bg-white/5 rounded-[6px] w-fit h-fit px-1.5 py-1">
                            <Check className="text-[#571BF2] w-4 h-4 mt-1" />
                          </div>

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <RotatingButton
                arrowColor='white'
                buttonClass='s-pbtn'
                label='Sign up with Pro'
                />
              </div>
            ) : (
              <div className="pricing-grad flex flex-col gap-7 justify-between">
                <div className="flex flex-col gap-6">
                  <h4 className="text-xl font-bold">{plan.name}</h4>
                  <p className="text-[15px]">{plan.description}</p>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-medium">{plan.price}</h3>
                    <p className="text-white/70">{plan.period}</p>
                  </div>
                  <div className="border border-white/10"></div>
                  <div>
                    <ul className="flex flex-col gap-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="bg-white/5 rounded-[6px] w-fit h-fit px-1.5 py-1">
                            <Check className="text-[#571BF2] w-4 h-4 mt-1" />
                          </div>

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <RotatingButton label='Sign up for free' buttonClass ='s-btn' arrowColor='black' />
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <motion.div
       initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
      >
         <p className="text-gray-400 mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <p className="text-sm text-gray-500">Questions? Contact us at my@insightly.com</p>
      </motion.div>
    </section>
  );
}
