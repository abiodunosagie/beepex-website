"use client";

import AnimatedSection from "./AnimatedSection";
import StoreButtons from "./StoreButtons";
import Image from "next/image";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-16 sm:py-28 lg:py-36 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/logo-white.png"
              alt="Beepex"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <p className="text-sm font-medium text-accent-400">Get started</p>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.1] font-heading max-w-2xl">
            Try Beepex Today. It&apos;s Free.
          </h2>
          <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
            Join thousands of Nigerians who&apos;ve simplified how they handle
            daily payments. Download now and get 5% cashback on your first
            transaction.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-8">
            <StoreButtons variant="dark" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
