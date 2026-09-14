"use client";

import { Search, X } from "lucide-react";

import type { EventCategory } from "@/data/events";

type EventFilterBarProps = {
  selectedCategory: "All" | EventCategory;
  searchTerm: string;
  onSelectCategory: (category: "All" | EventCategory) => void;
  onSearchChange: (value: string) => void;
  onClearFilters: () => void;
};

const filterOptions: Array<"All" | EventCategory> = [
  "All",
  "Workshop",
  "Seminar",
  "Technical",
  "Cultural",
  "Competition",
  "Community",
];

export default function EventFilterBar({
  selectedCategory,
  searchTerm,
  onSelectCategory,
  onSearchChange,
  onClearFilters,
}: EventFilterBarProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full max-w-md">
          <label htmlFor="event-search" className="sr-only">
            Search events
          </label>
          <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/45" />
          <input
            id="event-search"
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search events"
            className="w-full rounded-full border border-black/10 bg-white/30 py-3 pl-11 pr-4 text-sm text-[#111111] placeholder:text-black/40 focus:border-black/20 focus:outline-none"
          />
        </div>

        <button
          type="button"
          onClick={onClearFilters}
          className="inline-flex items-center gap-2 self-start rounded-full border border-black/10 bg-white/30 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#111111] transition-all duration-200 hover:border-black/20 hover:bg-white"
        >
          <X size={12} />
          Clear filters
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {filterOptions.map((option) => {
          const isActive = selectedCategory === option;

          return (
            <button
              key={option}
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelectCategory(option)}
              className={`rounded-full border px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-200 ${
                isActive
                  ? "border-[#111111] bg-[#111111] text-white"
                  : "border-black/10 bg-white/30 text-[#111111] hover:border-black/20"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
