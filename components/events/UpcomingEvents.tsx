"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import EventCard from "@/components/events/EventCard";
import EventFilterBar from "@/components/events/EventFilterBar";
import type { EventCategory, EventItem } from "@/data/events";

const defaultCategory: "All" | EventCategory = "All";

type UpcomingEventsProps = {
  events: EventItem[];
};

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | EventCategory>(defaultCategory);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesCategory =
        selectedCategory === "All" || event.category === selectedCategory;

      const searchValue = searchTerm.trim().toLowerCase();
      const matchesSearch =
        searchValue.length === 0 ||
        event.name.toLowerCase().includes(searchValue) ||
        event.description.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [events, searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchTerm("");
  };

  return (
    <section className="border-b border-black/10 bg-[#f5f4ef] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
              Upcoming events
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Find what fits your week.
            </h2>
          </div>
        </div>

        <EventFilterBar
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          onSelectCategory={setSelectedCategory}
          onSearchChange={setSearchTerm}
          onClearFilters={clearFilters}
        />

        {filteredEvents.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 rounded-[2rem] border border-dashed border-black/15 bg-white/30 p-10 text-center"
          >
            <p className="text-2xl font-medium tracking-tight">No events found</p>
            <p className="mt-3 text-black/60">Try adjusting your filters or search term.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-[#e4572e]"
            >
              Clear filters
            </button>
          </motion.div>
        ) : (
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                expanded={expandedId === event.id}
                onToggle={(id) => setExpandedId((current) => (current === id ? null : id))}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
