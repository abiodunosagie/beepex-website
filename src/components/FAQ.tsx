"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "How do I sell a gift card?",
    answer:
      "Open the Gift Cards section, pick your card type (Amazon, iTunes, Google Play, Steam, and more), enter the card details, and submit. We verify the card and credit your wallet. Most redemptions take 5 to 10 minutes.",
  },
  {
    question: "Is my money safe on Beepex?",
    answer:
      "Every transaction requires your 4-digit PIN or biometric confirmation. Your data is encrypted end-to-end, and wallet funding is secured by Paystack. No one can move your money without your authorization.",
  },
  {
    question: "How long do transactions take?",
    answer:
      "Airtime and data purchases are instant. Bill payments process within a few seconds. Gift card redemptions take 5 to 10 minutes depending on the card type and verification.",
  },
  {
    question: "Which gift cards do you accept?",
    answer:
      "We accept Amazon, iTunes, Google Play, Steam, Walmart, Sephora, and several others. Open the app to see the full list with current rates. Rates update regularly based on market conditions.",
  },
  {
    question: "What bills can I pay?",
    answer:
      "Electricity (all DisCos including EKEDC, IKEDC, AEDC), cable TV (DStv, GOtv, StarTimes), and internet subscriptions. We add new billers regularly.",
  },
  {
    question: "How do I add money to my wallet?",
    answer:
      "You can fund your wallet through bank transfer or debit card. Card payments are processed by Paystack, and the funds show up in your balance immediately. You can also earn balance by redeeming gift cards.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border-b border-gray-200 dark:border-gray-800"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 sm:py-8 flex items-start justify-between gap-4 text-left cursor-pointer"
      >
        <div className="flex items-start gap-3 sm:gap-6">
          <span className="text-xs font-medium text-gray-400 dark:text-gray-500 pt-0.5 sm:pt-1 tabular-nums shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white font-heading">
            {faq.question}
          </h3>
        </div>
        <span className="shrink-0 mt-1 text-gray-400 dark:text-gray-500">
          {open ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 sm:pb-8 pl-7 sm:pl-14 text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-8 lg:gap-20">
          <AnimatedSection>
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-medium text-primary-500 mb-3">
                Common questions
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight font-heading">
                The Stuff You Actually Want to Know
              </h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
                Straight answers to the questions people ask before they
                download. Still curious? Hit us up directly.
              </p>
              <a
                href="mailto:supportbeepex@gmail.com"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
              >
                Contact support
                <span className="text-xs">&#8594;</span>
              </a>
            </div>
          </AnimatedSection>

          <div className="border-t border-gray-200 dark:border-gray-800">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
