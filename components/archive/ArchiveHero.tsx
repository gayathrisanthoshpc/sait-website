"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ArchiveHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-b border-[#1F2A44]/10 bg-[#F7F3EB] px-6 py-12 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.6, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1F2A44]/55">
              THE SAIT ARCHIVE
            </p>
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.15 : 0.7, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.08 }}
              className="mt-4 max-w-4xl text-[clamp(3rem,6vw,6.25rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#1F2A44]"
            >
              Years of students.
              <br />
              One continuing story.
            </motion.h1>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.15 : 0.7, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.12 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1F2A44]/70"
            >
              Explore the workshops, magazines, projects, events and moments that have shaped the Information Technology student community.
            </motion.p>
          </div>

          <div className="flex justify-start md:justify-end">
            <div className="border-l border-[#C6A75E] pl-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F2A44]/60">
              A living record
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
