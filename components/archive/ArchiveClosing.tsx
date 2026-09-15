"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function ArchiveClosing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-6 py-12 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.6, ease: "easeOut" }}
          className="rounded-[2rem] border border-[#1F2A44]/10 bg-[#1F2A44] p-8 text-[#F7F3EB] md:p-12"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C6A75E]">
            THE STORY CONTINUES.
          </p>
          <h3 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
            Every workshop, project, idea and contribution becomes part of what SAIT carries forward.
          </h3>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[#F7F3EB] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F2A44] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8DCC8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F3EB]"
            >
              Explore current SAIT
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
