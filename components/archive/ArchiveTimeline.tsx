"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import ArchiveFilters from "@/components/archive/ArchiveFilters";
import ArchiveTimelineItem from "@/components/archive/ArchiveTimelineItem";
import { archiveCategories, archiveItems, type ArchiveCategory } from "@/data/archive";

export default function ArchiveTimeline() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<ArchiveCategory>("All");

  const filteredItems = useMemo(() => {
    return selectedCategory === "All"
      ? archiveItems
      : archiveItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="bg-[#F7F3EB] px-6 py-12 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, ease: "easeOut" }}
          className="mb-8"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F2A44]/55">
            Archival moments
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[#1F2A44] md:text-6xl">
            What students have built and remembered.
          </h2>
        </motion.div>

        <div className="mb-8">
          <ArchiveFilters
            categories={archiveCategories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        <div className="relative pl-0 md:pl-0">
          <div className="absolute left-1.5 top-0 bottom-0 hidden w-px bg-[#1F2A44]/10 md:block" aria-hidden="true" />
          <div className="space-y-6 md:space-y-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="relative md:pl-7">
                <div className="absolute left-[-2px] top-7 hidden h-4 w-4 rounded-full border-2 border-[#F7F3EB] bg-[#C6A75E] shadow-[0_0_0_8px_rgba(198,167,94,0.12)] md:block" aria-hidden="true" />
                <ArchiveTimelineItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
