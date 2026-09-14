"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function NextStep() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-6 py-10 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, ease: "easeOut" }}
          className="rounded-[2rem] border border-[#1F2A44]/10 bg-[#F7F3EB] p-6 md:p-8"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F2A44]/55">
            WHAT&apos;S NEXT?
          </p>
          <h3 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-[#1F2A44] md:text-5xl">
            Complete your next activity and move your journey forward.
          </h3>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1F2A44] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44]"
            >
              Explore Events
              <ArrowRight size={14} />
            </Link>

            <Link
              href="/activity-logger"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#1F2A44]/15 bg-white/60 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F2A44] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F2A44]/25 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44]"
            >
              Log an Activity
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
