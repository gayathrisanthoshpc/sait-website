import { useState } from "react";
import { ArrowRight, Medal, Sparkles } from "lucide-react";

import type { AchievementItem } from "@/data/achievements";

type AchievementCardProps = {
  item: AchievementItem;
};

export default function AchievementCard({ item }: AchievementCardProps) {
  const [open, setOpen] = useState(false);

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

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-[#f5f4ef]">
          <Medal size={16} />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-black/55">
        <span className="rounded-full border border-black/10 bg-[#f5f4ef] px-2.5 py-1.5">{item.year}</span>
        <span className="rounded-full border border-black/10 bg-[#f5f4ef] px-2.5 py-1.5">{item.result}</span>
      </div>

      <p className="mt-5 text-base leading-relaxed text-black/70">{item.description}</p>

      <div className="mt-6 rounded-[1.4rem] border border-black/10 bg-[#f5f4ef] p-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
          Student / team
        </p>
        <p className="mt-2 text-sm font-medium text-[#111111]">{item.team}</p>
      </div>

      <button
        type="button"
        onClick={() => setOpen((state) => !state)}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#111111] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
        aria-expanded={open}
        aria-controls={`achievement-details-${item.id}`}
      >
        {open ? "Hide details" : "View details"}
        <ArrowRight size={15} className={open ? "rotate-90" : ""} />
      </button>

      {open && (
        <div
          id={`achievement-details-${item.id}`}
          className="mt-5 rounded-[1.4rem] border border-black/10 bg-[#111111] p-4 text-white"
        >
          <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/60">
            <Sparkles size={14} className="text-[#e4572e]" />
            Demo detail
          </div>
          <p className="text-sm leading-relaxed text-white/80">{item.details}</p>
        </div>
      )}
    </article>
  );
}
