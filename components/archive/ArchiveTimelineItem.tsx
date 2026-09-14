"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { ArchiveItem } from "@/data/archive";

type ArchiveTimelineItemProps = {
  item: ArchiveItem;
};

export default function ArchiveTimelineItem({ item }: ArchiveTimelineItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, ease: "easeOut" }}
      className="relative grid gap-5 md:grid-cols-[120px_1fr]"
    >
      <div className="relative pb-5 md:pb-0">
        <div className="flex items-center gap-3 md:block">
          <motion.span
            initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.7 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, ease: "easeOut" }}
            className="relative z-10 inline-flex h-4 w-4 rounded-full border-2 border-[#F7F3EB] bg-[#C6A75E] shadow-[0_0_0_4px_rgba(198,167,94,0.16)]"
          />
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F2A44]/55 md:mt-4">
            {item.year}
          </p>
        </div>
      </div>

      <div className="relative rounded-[1.5rem] border border-[#1F2A44]/10 bg-[#F7F3EB] p-5 md:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#667085]">
          <span>{item.category}</span>
          {item.meta ? (
            <>
              <span className="h-1 w-1 rounded-full bg-[#C6A75E]" />
              <span>{item.meta}</span>
            </>
          ) : null}
        </div>

        <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#1F2A44] md:text-[2rem]">
          {item.title}
        </h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#1F2A44]/70">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}
