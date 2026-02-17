"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    title: "Download the App",
    description:
      "Grab Beepex from the App Store or Play Store. The whole setup takes about two minutes. No lengthy verification, no paperwork.",
  },
  {
    title: "Create Your Account",
    description:
      "Enter your details and set a 4-digit transaction PIN. That PIN protects every payment you make, so pick something you'll remember.",
  },
  {
    title: "Fund Your Wallet",
    description:
      "Add money via bank transfer or card payment. It hits your wallet instantly. You can also earn balance by selling gift cards.",
  },
  {
    title: "Start Transacting",
    description:
      "Buy airtime, grab data, pay bills, or redeem gift cards. Everything happens from one screen. You'll get a receipt for every transaction.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-28 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-8 lg:gap-20">
          <AnimatedSection>
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-medium text-accent-400 mb-3">
                Getting started
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-heading">
                Two Minutes to Your First Transaction
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed max-w-sm">
                No bank visits. No long forms. Download, set up, and you&apos;re
                making payments before your next cup of coffee.
              </p>
            </div>
          </AnimatedSection>

          <div className="border-t border-gray-800">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group py-6 sm:py-8 border-b border-gray-800"
              >
                <div className="flex items-start gap-3 sm:gap-6">
                  <span className="text-xs font-medium text-accent-400 pt-1.5 tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 font-heading">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
