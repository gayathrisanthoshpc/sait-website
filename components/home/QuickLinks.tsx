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
    title: "Upcoming Events",
    description: "Explore workshops, seminars, and community gatherings.",
    href: "/events",
    icon: CalendarDays,
  },
  {
    title: "Activity Logger",
    description: "Track workshops, projects, competitions, and achievements.",
    href: "/activity-logger",
    icon: FolderKanban,
  },
  {
    title: "Achievements",
    description: "Celebrate SAIT milestones, participation, and contributions.",
    href: "/achievements",
    icon: Crown,
  },
  {
    title: "SAIT Archive",
    description: "Browse magazine issues, student writing, and past activity memories.",
    href: "/about",
    icon: BookOpen,
  },
];

export default function QuickLinks() {
  return (
    <section className="border-b border-black/10 bg-[#f5f4ef] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
              Quick access
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
              Navigate SAIT.
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map(({ title, description, href, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              className="group flex h-full flex-col justify-between rounded-[2rem] border border-black/10 bg-[#111111] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:border-black/20"
            >
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#e4572e] text-white">
                  <Icon size={18} />
                </div>

                <h3 className="text-2xl font-medium tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {description}
                </p>
              </div>

              <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                View
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
