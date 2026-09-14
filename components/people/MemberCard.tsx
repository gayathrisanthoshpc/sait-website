import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type MemberCardProps = {
  name: string;
  role: string;
  year?: string;
  photo: string;
  socialUrl?: string;
  accent?: ReactNode;
};

export default function MemberCard({
  name,
  role,
  year,
  photo,
  socialUrl,
  accent,
}: MemberCardProps) {
  return (
    <article className="group rounded-[2rem] border border-black/10 bg-white/30 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-black/20">
      <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#f5f4ef] p-3">
        <div className="flex h-52 items-center justify-center rounded-[1.2rem] border border-dashed border-black/15 bg-white/30 text-center text-sm uppercase tracking-[0.18em] text-black/40">
          {photo}
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl font-medium tracking-tight text-[#111111]">{name}</h3>
          <p className="mt-2 text-sm text-black/60">{role}</p>
          {year ? <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-black/45">{year}</p> : null}
        </div>

        {socialUrl ? (
          <a
            href={socialUrl}
            aria-label={`View ${name} profile`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/40 text-[#111111] transition-colors duration-200 hover:border-black/20 hover:bg-white"
          >
            <ArrowUpRight size={14} />
          </a>
        ) : null}
      </div>

      {accent ? <div className="mt-4">{accent}</div> : null}
    </article>
  );
}
