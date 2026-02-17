"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    title: "Gift Card Redemption",
    description:
      "Got an Amazon, iTunes, or Google Play card you're not using? Convert it to real cash in your wallet. Most redemptions complete in under 10 minutes.",
  },
  {
    title: "Airtime Top-Up",
    description:
      "Buy airtime for MTN, Airtel, Glo, or 9mobile in two taps. Works for your own line or anyone else's. No USSD codes, no waiting.",
  },
  {
    title: "Data Bundles",
    description:
      "Daily, weekly, or monthly plans from every major network. Pick your bundle, confirm, and it's active on your line before you lock your phone.",
  },
  {
    title: "Bill Payments",
    description:
      "Pay electricity, cable TV, and other bills without leaving your couch. All major DisCos and cable providers are supported.",
  },
  {
    title: "Wallet Management",
    description:
      "Fund your wallet via bank transfer or card (secured by Paystack). Track every naira in and out with a clean transaction history.",
  },
  {
    title: "PIN and Biometric Security",
    description:
      "Every transaction requires your 4-digit PIN or fingerprint. Your money doesn't move unless you say so.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-8 lg:gap-20">
          <AnimatedSection>
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-medium text-primary-500 mb-3">
                What Beepex does
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight font-heading">
                Six Things, One Dashboard
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed max-w-sm">
                Every feature you need for daily transactions. Nothing you
                don&apos;t. Each one built to save you time and keep your money
                safe.
              </p>
            </div>
          </AnimatedSection>

          <div className="border-t border-gray-200">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group py-6 sm:py-8 border-b border-gray-200"
              >
                <div className="flex items-start gap-3 sm:gap-6">
                  <span className="text-xs font-medium text-gray-400 pt-1.5 tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 font-heading">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-lg">
                      {feature.description}
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
