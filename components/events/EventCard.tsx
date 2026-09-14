"use client";

import { CalendarDays, MapPin, Clock3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import type { EventItem } from "@/data/events";

type EventCardProps = {
  event: EventItem;
  expanded: boolean;
  onToggle: (id: string) => void;
};

export default function EventCard({ event, expanded, onToggle }: EventCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`rounded-[2rem] border p-5 md:p-6 ${
        event.featured
          ? "border-[#e4572e]/40 bg-[#111111] text-white"
          : "border-black/10 bg-white/30 text-[#111111]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className={`text-[10px] font-medium uppercase tracking-[0.2em] ${
              event.featured ? "text-white/50" : "text-black/45"
            }`}
          >
            {event.category}
          </p>
          <h3 className="mt-3 text-2xl font-medium tracking-tight">{event.name}</h3>
        </div>

        {event.featured ? (
          <span className="rounded-full border border-[#e4572e]/40 bg-[#e4572e]/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[#f7c7b9]">
            Featured
          </span>
        ) : null}
      </div>

      <div className="mt-5 space-y-3 text-sm">
        <div className="flex items-center gap-3 text-current/80">
          <CalendarDays size={15} />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-3 text-current/80">
          <Clock3 size={15} />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-3 text-current/80">
          <MapPin size={15} />
          <span>{event.venue}</span>
        </div>
      </div>

      <p className={`mt-5 text-sm leading-relaxed ${event.featured ? "text-white/75" : "text-black/65"}`}>
        {event.description}
      </p>

      {expanded ? (
        <div className={`mt-6 rounded-[1.25rem] border p-4 text-sm ${event.featured ? "border-white/10 bg-white/5" : "border-black/10 bg-[#f5f4ef]"}`}>
          <p className="text-[10px] uppercase tracking-[0.18em] text-current/50">Event details</p>
          <div className="mt-3 space-y-2">
            <p><span className="text-current/50">Date:</span> {event.date}</p>
            <p><span className="text-current/50">Time:</span> {event.time}</p>
            <p><span className="text-current/50">Venue:</span> {event.venue}</p>
            <p><span className="text-current/50">Category:</span> {event.category}</p>
            <p className="leading-relaxed"><span className="text-current/50">Description:</span> {event.description}</p>
            <p><span className="text-current/50">Registration:</span> {event.registrationLabel ?? "Details placeholder"}</p>
          </div>
        </div>
      ) : null}

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onToggle(event.id)}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
            event.featured
              ? "bg-white text-[#111111] hover:bg-[#f0f0f0]"
              : "bg-[#111111] text-white hover:bg-[#e4572e]"
          }`}
        >
          {expanded ? "Hide details" : "Details"}
          <ArrowRight size={14} />
        </button>

        <span className={`text-[10px] uppercase tracking-[0.18em] ${event.featured ? "text-white/50" : "text-black/45"}`}>
          {event.isDemo ? "Demo data" : "Upcoming"}
        </span>
      </div>
    </motion.article>
  );
}
