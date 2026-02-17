"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const screens = [
  {
    src: "/screenshots/home.png",
    label: "Dashboard",
    description: "Balance, services, and recent activity in one view",
  },
  {
    src: "/screenshots/airtime.png",
    label: "Buy Airtime",
    description: "Pick a network, choose an amount, done",
  },
  {
    src: "/screenshots/data.png",
    label: "Data Plans",
    description: "Filter by daily, weekly, or monthly bundles",
  },
  {
    src: "/screenshots/transactions.png",
    label: "Transaction History",
    description: "Every naira accounted for, always",
  },
];

export default function AppShowcase() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-sm font-medium text-primary-500 mb-3">
            Inside the app
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight font-heading max-w-md">
            See It for Yourself
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed max-w-lg">
            Clean screens, zero clutter. Every feature is exactly where you
            expect it to be. No tutorials needed.
          </p>
        </AnimatedSection>

        <div className="mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[9/19.5] rounded-[1.25rem] sm:rounded-[2rem] lg:rounded-[2.5rem] border-[4px] sm:border-[5px] lg:border-[6px] border-gray-900 bg-gray-900 overflow-hidden shadow-xl shadow-gray-900/15 group-hover:shadow-2xl group-hover:shadow-gray-900/20 transition-all duration-300 group-hover:-translate-y-1 ring-1 ring-gray-900/5">
                <Image
                  src={screen.src}
                  alt={screen.description}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-2 sm:mt-4">
                <p className="text-xs sm:text-sm font-semibold text-gray-900 font-heading">
                  {screen.label}
                </p>
                <p className="text-[11px] sm:text-sm text-gray-500 mt-0.5 leading-snug">
                  {screen.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
