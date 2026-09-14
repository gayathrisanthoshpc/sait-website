import type { ReactNode } from "react";
import { ArrowUpRight, Globe, Mail, ExternalLink } from "lucide-react";

type MemberCardProps = {
  name: string;
  role: string;
  year?: string;
  photo?: string;
  initials?: string;
  bio?: string;
  socialUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  accent?: ReactNode;
};

export default function MemberCard({
  name,
  role,
  year,
  photo,
  initials,
  bio,
  socialUrl,
  githubUrl,
  linkedinUrl,
  accent,
}: MemberCardProps) {
  const displayInitials =
    initials ||
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2);

  return (
    <article className="group rounded-[2rem] border border-black/10 bg-white/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-xl">
      <div className="flex items-center justify-between gap-4">
        {/* Avatar Circle with Initials */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#111111] text-[#f5f4ef] font-bold text-base border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-105">
          <span>{displayInitials}</span>
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#C6A75E]" />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5">
          {githubUrl || linkedinUrl || socialUrl ? (
            <a
              href={githubUrl || linkedinUrl || socialUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${name} profile`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/40 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
            >
              <ArrowUpRight size={14} />
            </a>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold tracking-tight text-[#111111]">{name}</h3>
        <p className="mt-1 text-xs font-semibold text-[#C6A75E]">{role}</p>
        {year ? (
          <p className="mt-1 text-[10px] uppercase font-mono tracking-[0.16em] text-black/50">
            {year}
          </p>
        ) : null}
        {bio ? (
          <p className="mt-3 text-xs leading-relaxed text-black/65 border-t border-black/5 pt-2.5">
            {bio}
          </p>
        ) : null}
      </div>

      {accent ? <div className="mt-4">{accent}</div> : null}
    </article>
  );
}
