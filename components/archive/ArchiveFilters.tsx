"use client";

import { motion } from "framer-motion";

import type { ArchiveCategory } from "@/data/archive";

type ArchiveFiltersProps = {
  selectedCategory: ArchiveCategory;
  onSelect: (value: ArchiveCategory) => void;
  categories: ArchiveCategory[];
};

export default function ArchiveFilters({ selectedCategory, onSelect, categories }: ArchiveFiltersProps) {
  return (
    <div className="overflow-x-auto pb-1">
      <div className="flex min-w-max gap-3 border-b border-[#1F2A44]/10 pb-2">
        {categories.map((category) => {
          const isActive = selectedCategory === category;

          return (
            <motion.button
              key={category}
              type="button"
              layout
              whileTap={{ scale: 0.98 }}
              aria-pressed={isActive}
              onClick={() => onSelect(category)}
              className={[
                "relative shrink-0 px-2 pb-3 pt-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44]",
                isActive ? "text-[#1F2A44]" : "text-[#667085] hover:text-[#1F2A44]",
              ].join(" ")}
            >
              {category}
              {isActive ? <span className="absolute inset-x-0 -bottom-px h-[2px] bg-[#C6A75E]" /> : null}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
