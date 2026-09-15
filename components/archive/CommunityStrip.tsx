"use client";

import { motion, useReducedMotion } from "framer-motion";

const archiveLabels = [
  "WORKSHOPS",
  "PROJECTS",
  "ALUMNI MEETS",
  "STUDENT VOICES",
  "TECHNOLOGY",
  "COMMUNITY",
];

export default function CommunityStrip() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-y border-[#1F2A44]/10 bg-[#E8DCC8]/40 px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-[1440px]">
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, ease: "easeOut" }}
          className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F2A44]/55"
        >
          From the community
        </motion.p>

        <div className="mt-6 overflow-x-auto pb-1">
          <div className="flex min-w-max gap-3">
            {archiveLabels.map((label, index) => (
              <motion.div
                key={label}
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-full border border-[#1F2A44]/10 bg-white/60 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F2A44]"
              >
                {label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
