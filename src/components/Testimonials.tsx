"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Sold my Amazon gift card and had the cash in my wallet in under 10 minutes. No back and forth, no stories. Just money.",
    name: "Daniel A.",
    detail: "Lagos, Nigeria",
  },
  {
    quote:
      "I used to open three different apps just to buy data and pay my DStv. Now it's all Beepex. Genuinely saves me time every week.",
    name: "Fola O.",
    detail: "Abuja, Nigeria",
  },
  {
    quote:
      "Paying my electricity bill used to mean finding a vendor or fighting with USSD codes. Two taps on Beepex and it's sorted.",
    name: "Chidera M.",
    detail: "Port Harcourt, Nigeria",
  },
  {
    quote:
      "The interface is clean and everything just works. I've introduced it to my siblings and they all use it now.",
    name: "Tolu D.",
    detail: "Ibadan, Nigeria",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-28 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-8 lg:gap-20">
          <AnimatedSection>
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-medium text-accent-400 mb-3">
                From real users
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-heading">
                Don&apos;t Take Our Word for It
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed max-w-sm">
                Hear from people who actually use Beepex for their daily
                transactions. No scripts, no actors.
              </p>
            </div>
          </AnimatedSection>

          {/* Right: quotes with dividers */}
          <div className="border-t border-gray-800">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="py-6 sm:py-8 lg:py-10 border-b border-gray-800"
              >
                <blockquote className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 max-w-[40px] bg-accent-400/50" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.detail}
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
