"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import type { EventItem } from "@/data/events";

type PastEventsArchiveProps = {
  events: EventItem[];
};

export default function PastEventsArchive({ events }: PastEventsArchiveProps) {
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const years = useMemo(() => {
    return ["All", ...new Set(events.map((event) => event.year ?? "Unknown"))];
  }, [events]);

  const filteredEvents = useMemo(() => {
    return selectedYear === "All"
      ? events
      : events.filter((event) => event.year === selectedYear);
  }, [events, selectedYear]);

  return (
    <section className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
              Past events archive
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              A record of SAIT activity.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                aria-pressed={selectedYear === year}
                onClick={() => setSelectedYear(year)}
                className={`rounded-full border px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-200 ${
                  selectedYear === year
                    ? "border-[#111111] bg-[#111111] text-white"
                    : "border-black/10 bg-white/30 text-[#111111] hover:border-black/20"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredEvents.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="grid gap-4 rounded-[2rem] border border-black/10 bg-white/30 p-5 md:grid-cols-[160px_1fr_1fr] md:items-center md:p-6"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-black/45">{event.year ?? "Year"}</p>
                <p className="mt-2 text-xl font-medium tracking-tight text-[#111111]">{event.date}</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-black/45">{event.category}</p>
                <h3 className="mt-2 text-2xl font-medium tracking-tight text-[#111111]">{event.name}</h3>
              </div>

              <div>
                <p className="text-sm leading-relaxed text-black/65">{event.outcome ?? event.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
