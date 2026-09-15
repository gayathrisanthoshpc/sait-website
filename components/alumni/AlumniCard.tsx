import { ArrowUpRight, MapPin } from "lucide-react";

import type { AlumniRecord } from "@/data/alumni";

type AlumniCardProps = {
  alumni: AlumniRecord;
};

export default function AlumniCard({ alumni }: AlumniCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-black/10 bg-white/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-black/20">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-sm font-semibold text-white">
            {alumni.initials}
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
              {alumni.batch}
            </p>
            <h3 className="mt-1 text-2xl font-medium tracking-tight text-[#111111]">
              {alumni.name}
            </h3>
          </div>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/50 text-[#111111]">
          <ArrowUpRight size={15} />
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#C6A75E]">
          {alumni.industry}
        </p>
        <p className="mt-2 text-lg text-black/80">{alumni.role}</p>
        <p className="mt-1 text-sm text-black/55">{alumni.company}</p>
      </div>

      <div className="mt-5 rounded-[1.4rem] border border-black/10 bg-[#f5f4ef] p-4">
        <p className="mt-2 text-sm leading-relaxed text-black/70">{alumni.achievement}</p>
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm text-black/60">
        <MapPin size={14} className="text-black/45" />
        <span>{alumni.location}</span>
      </div>
    </article>
  );
}
