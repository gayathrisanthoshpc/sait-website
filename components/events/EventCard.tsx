"use client";

import { CalendarDays, MapPin, Clock3, ArrowRight, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

import type { EventItem } from "@/data/events";

type EventCardProps = {
  event: EventItem;
  expanded: boolean;
  onToggle: (id: string) => void;
  onRegister?: (event: EventItem) => void;
};

export default function EventCard({ event, expanded, onToggle, onRegister }: EventCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`rounded-[2rem] border p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 ${
        event.featured
          ? "border-[#e4572e]/40 bg-[#111111] text-white shadow-xl"
          : "border-black/10 bg-white/30 text-[#111111] hover:border-black/20"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
              event.featured ? "text-[#e4572e]" : "text-black/45"
            }`}
          >
            {event.category}
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight">{event.name}</h3>
        </div>

        {event.featured ? (
          <span className="rounded-full border border-[#e4572e]/40 bg-[#e4572e]/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f7c7b9]">
            Featured
          </span>
        ) : event.isPast ? (
          <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-black/50">
            Completed
          </span>
        ) : null}
      </div>

      <div className="mt-5 space-y-2.5 text-sm">
        <div className="flex items-center gap-3 text-current/80">
          <CalendarDays size={15} className="text-[#e4572e]" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-3 text-current/80">
          <Clock3 size={15} className="text-[#e4572e]" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-3 text-current/80">
          <MapPin size={15} className="text-[#e4572e]" />
          <span>{event.venue}</span>
        </div>
      </div>

      <p className={`mt-4 text-sm leading-relaxed ${event.featured ? "text-white/75" : "text-black/65"}`}>
        {event.description}
      </p>

      {event.speaker ? (
        <div className={`mt-4 rounded-[1.2rem] border p-3 text-xs ${event.featured ? "border-white/15 bg-white/5" : "border-black/10 bg-white/50"}`}>
          <span className="text-[9px] uppercase tracking-[0.18em] text-current/45 block mb-0.5">Speaker</span>
          <span className="font-semibold text-current">{event.speaker.name}</span> · <span className="text-current/60">{event.speaker.company}</span>
        </div>
      ) : null}

      {expanded ? (
        <div className={`mt-5 rounded-[1.25rem] border p-4 text-sm ${event.featured ? "border-white/10 bg-white/5" : "border-black/10 bg-[#f5f4ef]"}`}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-current/50">Full event itinerary & details</p>
          <div className="mt-3 space-y-2 text-xs">
            <p><span className="text-current/50">Venue:</span> {event.venue}</p>
            <p><span className="text-current/50">Category:</span> {event.category}</p>
            <p className="leading-relaxed"><span className="text-current/50">Overview:</span> {event.description}</p>
            {event.outcome ? <p><span className="text-current/50">Outcome:</span> {event.outcome}</p> : null}
          </div>
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2">
          {!event.isPast && onRegister ? (
            <button
              type="button"
              onClick={() => onRegister(event)}
              className="inline-flex items-center gap-2 rounded-full bg-[#e4572e] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:bg-[#f26a42] hover:-translate-y-0.5"
            >
              <UserCheck size={14} />
              Register / Details
            </button>
          ) : null}

          <button
            type="button"
            onClick={() => onToggle(event.id)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
              event.featured
                ? "bg-white/10 text-white hover:bg-white/20"
                : "border border-black/15 bg-transparent text-[#111111] hover:bg-white"
            }`}
          >
            {expanded ? "Less" : "Quick Info"}
            <ArrowRight size={14} />
          </button>
        </div>

        <span className={`text-[10px] font-mono uppercase tracking-[0.18em] ${event.featured ? "text-white/50" : "text-black/45"}`}>
          {event.isPast ? "Past Event" : "Upcoming"}
        </span>
      </div>
    </motion.article>
  );
}
