import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Crown,
  FolderKanban,
} from "lucide-react";

const quickLinks = [
  {
    number: "01",
    title: "Events",
    description: "Explore workshops, seminars, and community gatherings.",
    href: "/events",
    icon: CalendarDays,
  },
  {
    number: "02",
    title: "Activities",
    description: "Track workshops, projects, competitions, and achievements.",
    href: "/activity-logger",
    icon: FolderKanban,
  },
  {
    number: "03",
    title: "Achievements",
    description: "Celebrate SAIT milestones, participation, and contributions.",
    href: "/achievements",
    icon: Crown,
  },
  {
    number: "04",
    title: "Archive",
    description: "Browse magazine issues, student writing, and past activity memories.",
    href: "/about",
    icon: BookOpen,
  },
];

export default function QuickLinks() {
  return (
    <section className="border-b border-[#1F2A44]/10 bg-[#F7F3EB] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1F2A44]/50">
              Quick access
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[#1F2A44] md:text-6xl">
              Navigate SAIT.
            </h2>
          </div>
          <div className="h-px flex-1 bg-[#1F2A44]/10 md:max-w-[35rem]" />
        </div>

        <div className="space-y-3">
          {quickLinks.map(({ number, title, description, href, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              className="group flex flex-col gap-4 rounded-[1.5rem] border border-[#1F2A44]/10 bg-white/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F2A44]/20 hover:bg-white md:flex-row md:items-center md:justify-between md:p-5"
            >
              <div className="flex items-center gap-4 md:min-w-[20rem]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F2A44] text-sm font-semibold text-[#F7F3EB]">
                  {number}
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1F2A44]/10 bg-[#E8DCC8] text-[#1F2A44]">
                    <Icon size={16} />
                  </div>
                  <span className="text-xl font-semibold tracking-tight text-[#1F2A44] md:text-2xl">
                    {title}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 items-center justify-between gap-4 md:pl-4">
                <p className="max-w-xl text-sm leading-relaxed text-[#1F2A44]/65">
                  {description}
                </p>

                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F2A44]">
                  View
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
