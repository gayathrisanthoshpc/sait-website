"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function JourneyHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-b border-[#1F2A44]/10 bg-[#F7F3EB] px-6 py-12 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1F2A44]/55">
              YOUR SAIT JOURNEY
            </p>
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.15 : 0.7, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.08 }}
              className="mt-4 max-w-4xl text-[clamp(3.25rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#1F2A44]"
            >
              Make your mark.
            </motion.h1>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.15 : 0.7, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.12 }}
              className="mt-5 max-w-2xl text-lg leading-relaxed text-[#1F2A44]/70"
            >
              From your first workshop to your biggest achievement, every experience becomes part of your SAIT story.
            </motion.p>
          </div>

          <div className="flex justify-start md:justify-end">
            <div className="border-l border-[#C6A75E] pl-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F2A44]/60">
              YEAR 2 · 4 OF 7 MILESTONES
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
