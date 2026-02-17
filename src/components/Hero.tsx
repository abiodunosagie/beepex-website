"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import StoreButtons from "./StoreButtons";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [showVideo]);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Soft line grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(67,97,238,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(67,97,238,0.045) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_30%,white_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-22 pb-10 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-8 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-semibold text-primary-500 uppercase tracking-wider mb-3 sm:mb-4"
            >
              Built for how Nigerians move
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[1.75rem] leading-[1.1] sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight sm:leading-[1.08] font-heading"
            >
              Airtime. Bills.{" "}
              <br className="hidden sm:block" />
              Gift Cards.{" "}
              <span className="text-primary-500">One App.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl"
            >
              Stop switching between five apps for your daily transactions. Buy
              airtime, grab data, pay your light bill, and turn gift cards into
              real cash. All from one dashboard, in seconds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 sm:mt-8"
            >
              <StoreButtons variant="light" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 sm:mt-12 flex gap-4 sm:gap-8 lg:gap-12"
            >
              <div>
                <p className="text-lg sm:text-3xl font-bold text-gray-900 font-heading">
                  50K+
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1">
                  Monthly transactions
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-3xl font-bold text-gray-900 font-heading">
                  &lt;30s
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1">
                  Most transactions
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-3xl font-bold text-gray-900 font-heading">
                  4.8
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1">App Store rating</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-[220px] sm:w-[280px] md:w-[300px] aspect-[9/19.5] rounded-[1.75rem] sm:rounded-[2.5rem] md:rounded-[3rem] border-[4px] sm:border-[5px] md:border-[6px] border-gray-900 bg-gray-900 shadow-2xl shadow-gray-900/20 overflow-hidden ring-1 ring-gray-900/5">
                <div
                  className={`absolute inset-0 z-10 transition-opacity duration-700 ${
                    showVideo ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <Image
                    src="/screenshots/home.png"
                    alt="Beepex home screen"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <video
                  ref={videoRef}
                  src="/beepex-demo.mov"
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
                    showVideo ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              {/*
                Floating cards use pure CSS animations.
                No framer-motion here so React re-renders can never
                touch their opacity. They fade in once via CSS,
                then float forever.
              */}
              <div
                className="absolute -left-16 top-1/3 hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-lg shadow-gray-200/60 border border-gray-100 animate-[floatUp_4s_ease-in-out_infinite,fadeIn_0.6s_ease-out_0.8s_both]"
              >
                <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center">
                  <span className="text-accent-700 text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-medium">
                    Airtime sent
                  </p>
                  <p className="text-gray-400 text-xs">Just now</p>
                </div>
              </div>

              <div
                className="absolute -right-12 top-2/3 hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-lg shadow-gray-200/60 border border-gray-100 animate-[floatDown_5s_ease-in-out_infinite,fadeIn_0.6s_ease-out_1s_both]"
              >
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                  <span className="text-primary-600 text-sm font-bold">₦</span>
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-medium">
                    Gift card sold
                  </p>
                  <p className="text-gray-400 text-xs">+₦15,000</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
