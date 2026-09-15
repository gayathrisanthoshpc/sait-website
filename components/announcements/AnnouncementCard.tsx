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
    <article className="rounded-[2rem] border border-[#1F2A44]/10 bg-white/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F2A44]/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#1F2A44]/45">
            {item.category}
          </p>
          <h3 className="mt-3 text-2xl font-medium tracking-tight text-[#1F2A44]">
            {item.title}
          </h3>
        </div>

        {!item.read && (
          <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#C6A75E]" aria-label="Unread announcement" />
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#1F2A44]/55">
        <span className="rounded-full border border-[#1F2A44]/10 bg-[#F7F3EB] px-2.5 py-1.5">{item.date}</span>
        <span className="rounded-full border border-[#1F2A44]/10 bg-[#F7F3EB] px-2.5 py-1.5">{item.priority}</span>
      </div>

      <p className="mt-5 text-base leading-relaxed text-[#1F2A44]/70">{item.description}</p>

      {item.deadline ? (
        <div className="mt-5 flex items-center gap-3 rounded-[1.3rem] border border-[#C6A75E]/20 bg-[#F7F3EB] p-3">
          <CalendarClock size={16} className="text-[#C6A75E]" />
          <p className="text-sm text-[#1F2A44]/75">
            Deadline: <span className="font-medium text-[#1F2A44]">{item.deadline}</span>
          </p>
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#1F2A44]/10 pt-4">
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#1F2A44] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44]"
        >
          {expanded ? "Hide details" : "Read more"}
          <ArrowRight size={15} className={expanded ? "rotate-90" : ""} />
        </button>

        <button
          type="button"
          onClick={() => onToggleRead(item.id)}
          className="inline-flex items-center gap-2 rounded-full border border-[#1F2A44]/10 bg-white/60 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#1F2A44]/70 transition-all duration-200 hover:border-[#1F2A44]/20 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44]"
        >
          <BellRing size={12} />
          {item.read ? "Mark unread" : "Mark read"}
        </button>
      </div>

      {expanded ? (
        <div className="mt-5 rounded-[1.5rem] border border-[#1F2A44]/10 bg-[#1F2A44] p-4 text-white">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
            Announcement detail
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Department update, registration window, deadline, or opportunity notice.
          </p>
        </div>
      ) : null}
    </article>
  );
}
