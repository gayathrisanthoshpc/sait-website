"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock3, MapPin, UserCheck } from "lucide-react";

import type { EventItem } from "@/data/events";

type EventCardProps = {
  event: EventItem;
  expanded: boolean;
  onToggle: (id: string) => void;
  onRegister?: (event: EventItem) => void;
};

function getDateParts(date: string) {
  const match = date.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);

  if (!match) {
    return { month: "Event", day: date.slice(0, 2) || "" };
  }

  return {
    month: match[1].slice(0, 3).toUpperCase(),
    day: match[2],
  };
}

export default function EventCard({ event, expanded, onToggle, onRegister }: EventCardProps) {
  const { month, day } = getDateParts(event.date);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ x: 4 }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-[#1F2A44]/10 bg-[#F7F3EB] p-4 text-[#1F2A44] shadow-[0_0_0_0_rgba(0,0,0,0)] transition-all duration-300 hover:border-[#C6A75E]/60 hover:shadow-[0_12px_30px_rgba(31,42,68,0.06)] md:p-5"
    >
      <div className="absolute inset-y-0 left-0 w-[2px] bg-[#C6A75E]/0 transition-colors duration-300 group-hover:bg-[#C6A75E]" />

      <div className="grid gap-5 md:grid-cols-[128px_1fr_auto] md:items-start">
        <div className="flex items-center gap-3 md:flex-col md:items-start">
          <div className="min-w-[82px] rounded-[1.1rem] border border-[#1F2A44]/10 bg-white/70 p-3 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#667085]">{month}</p>
            <p className="mt-1 text-3xl font-semibold tracking-[-0.06em] text-[#1F2A44]">{day}</p>
          </div>

          {event.featured ? (
            <span className="rounded-full border border-[#C6A75E]/30 bg-[#C6A75E]/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#1F2A44]">
              Featured
            </span>
          ) : null}
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#667085]">
            <span>{event.category}</span>
            <span className="h-1 w-1 rounded-full bg-[#C6A75E]" />
            <span>{event.time}</span>
            <span className="h-1 w-1 rounded-full bg-[#C6A75E]" />
            <span>{event.venue}</span>
          </div>

          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#1F2A44] transition-colors duration-300 group-hover:text-[#1F2A44] md:text-[2rem]">
            {event.name}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#1F2A44]/70">
            {event.description}
          </p>

          <AnimatePresence initial={false}>
            {expanded ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="mt-4 overflow-hidden"
              >
                <div className="rounded-[1.15rem] border border-[#1F2A44]/10 bg-white/60 p-4">
                  <div className="grid gap-3 text-xs text-[#1F2A44]/70 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={13} className="text-[#C6A75E]" />
                      <span className="font-semibold uppercase tracking-[0.18em] text-[#1F2A44]/55">Date</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock3 size={13} className="text-[#C6A75E]" />
                      <span className="font-semibold uppercase tracking-[0.18em] text-[#1F2A44]/55">Time</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:col-span-2">
                      <MapPin size={13} className="text-[#C6A75E]" />
                      <span className="font-semibold uppercase tracking-[0.18em] text-[#1F2A44]/55">Venue</span>
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-3 md:flex-col md:items-end md:pt-1">
          {onRegister ? (
            <button
              type="button"
              onClick={() => onRegister(event)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F2A44] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#C6A75E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44]"
            >
              {event.registrationLabel || "Register"}
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          ) : null}

          <button
            type="button"
            onClick={() => onToggle(event.id)}
            className="inline-flex items-center gap-2 rounded-full border border-[#1F2A44]/10 bg-transparent px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F2A44] transition-colors duration-200 hover:border-[#1F2A44]/20 hover:bg-white"
          >
            {expanded ? "Less" : "Details"}
          </button>

          {!event.isPast ? (
            <span className="inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[#667085]">
              <UserCheck size={12} className="text-[#C6A75E]" />
              Open
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
