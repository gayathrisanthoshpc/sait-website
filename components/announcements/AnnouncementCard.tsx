import { useState } from "react";
import { ArrowRight, BellRing, CalendarClock } from "lucide-react";

import type { AnnouncementItem } from "@/data/announcements";

type AnnouncementCardProps = {
  item: AnnouncementItem;
  onToggleRead: (id: string) => void;
};

export default function AnnouncementCard({ item, onToggleRead }: AnnouncementCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="rounded-[2rem] border border-black/10 bg-white/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-black/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
            {item.category}
          </p>
          <h3 className="mt-3 text-2xl font-medium tracking-tight text-[#111111]">
            {item.title}
          </h3>
        </div>

        {!item.read && (
          <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#e4572e]" aria-label="Unread announcement" />
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-black/55">
        <span className="rounded-full border border-black/10 bg-[#f5f4ef] px-2.5 py-1.5">{item.date}</span>
        <span className="rounded-full border border-black/10 bg-[#f5f4ef] px-2.5 py-1.5">{item.priority}</span>
      </div>

      <p className="mt-5 text-base leading-relaxed text-black/70">{item.description}</p>

      {item.deadline ? (
        <div className="mt-5 flex items-center gap-3 rounded-[1.3rem] border border-[#e4572e]/20 bg-[#fff4ee] p-3">
          <CalendarClock size={16} className="text-[#e4572e]" />
          <p className="text-sm text-black/75">
            Deadline: <span className="font-medium text-[#111111]">{item.deadline}</span>
          </p>
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-4">
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
        >
          {expanded ? "Hide details" : "Read more"}
          <ArrowRight size={15} className={expanded ? "rotate-90" : ""} />
        </button>

        <button
          type="button"
          onClick={() => onToggleRead(item.id)}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-black/70 transition-all duration-200 hover:border-black/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
        >
          <BellRing size={12} />
          {item.read ? "Mark unread" : "Mark read"}
        </button>
      </div>

      {expanded ? (
        <div className="mt-5 rounded-[1.5rem] border border-black/10 bg-[#111111] p-4 text-white">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
            Demo detail
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            This is a mock announcement for the SAIT redesign prototype. It illustrates a
            department update, registration window, deadline, or opportunity notice without
            implying an official institutional notice.
          </p>
        </div>
      ) : null}
    </article>
  );
}
