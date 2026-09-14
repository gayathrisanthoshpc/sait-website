import Link from "next/link";
import { ArrowRight, BookText, CalendarDays, Sparkles } from "lucide-react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import StatsHighlight from "@/components/home/StatsHighlight";
import QuickLinks from "@/components/home/QuickLinks";
import SectionReveal from "@/components/shared/SectionReveal";

const eventMock = {
  name: "Mock Event: SAIT Design Studio",
  date: "September 18, 2026",
  time: "4:00 PM – 6:00 PM",
  venue: "Department Seminar Hall",
};

const archiveItems = [
  "Department magazine",
  "Student writing",
  "Poems and sketches",
  "Technical contributions",
  "Past SAIT activities",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#111111]">
      <Navbar />
      <Hero />
      <StatsHighlight />
      <QuickLinks />

      <SectionReveal id="about" className="border-b border-black/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[1.05fr_1.35fr] md:items-start">
          <div className="md:pt-4">
            <p className="saint-eyebrow">01 — Know SAIT</p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#111111] md:text-6xl">
              More than an association.
              <br />
              <span className="text-black/35">A community with a history.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/60">
              SAIT is a student-led association that brings together students,
              teachers, staff, and alumni of Information Technology through
              workshops, seminars, course-related classes, projects, department
              publications, and shared experiences. It is a space for learning,
              information sharing, student feedback, and ideas from across the
              community.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-black/70">
              {[
                "Workshops",
                "Seminars",
                "Projects",
                "Department magazine",
                "Alumni interaction",
                "Student feedback",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-white/30 px-3 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal
        id="events"
        className="border-b border-black/10 bg-[#1F2A44] px-6 py-20 text-white md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
                02 — What&apos;s happening
              </p>

              <h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
                Events<span className="text-[#C6A75E]">.</span>
              </h2>
            </div>

            <Link
              href="/events"
              className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/80 transition-opacity hover:opacity-60"
            >
              View all events
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 rounded-[2rem] border border-white/15 bg-white/5 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/50">
                <CalendarDays size={14} />
                Mock event listing
              </div>

              <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
                {eventMock.name}
              </h3>

              <div className="space-y-3 text-sm text-white/70">
                <p>
                  <span className="mr-2 text-white/45">Date</span>
                  {eventMock.date}
                </p>
                <p>
                  <span className="mr-2 text-white/45">Time</span>
                  {eventMock.time}
                </p>
                <p>
                  <span className="mr-2 text-white/45">Venue</span>
                  {eventMock.venue}
                </p>
              </div>
            </div>

            <div className="flex items-end justify-start md:justify-end">
              <Link
                href="/events"
                className="inline-flex items-center gap-3 rounded-full bg-[#C6A75E] px-5 py-3 text-sm font-medium text-[#1F2A44] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8DCC8]"
              >
                Register / Details
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="border-b border-black/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 max-w-3xl">
            <p className="saint-eyebrow">03 — The SAIT archive</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111111] md:text-6xl">
              A community with institutional memory.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-black/10 bg-white/30 p-6 md:p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F2A44] text-[#F7F3EB]">
                <BookText size={20} />
              </div>

              <p className="max-w-xl text-lg leading-relaxed text-black/65">
                SAIT has long carried the energy of the department through student
                writing, creative work, technical contributions, and documentation
                of activities that shaped the culture of the community.
              </p>
            </div>

            <ul className="space-y-3">
              {archiveItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between rounded-full border border-black/10 bg-white/30 px-4 py-3 text-sm text-black/70 transition-colors duration-200 hover:bg-white/50"
                >
                  <span>{item}</span>
                  <ArrowRight size={15} className="text-black/45" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="activity" className="border-b border-black/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="saint-eyebrow">04 — My SAIT journey</p>
            <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F2A44] text-[#F7F3EB]">
              <Sparkles size={20} />
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#111111] md:text-8xl">
              Learn something.
              <br />
              Build something.
              <br />
              <span className="text-black/30">Leave your mark.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/60">
              Students can track the workshops they attend, projects they build,
              competitions they enter, events they join, and achievements they
              earn throughout their time with SAIT.
            </p>

            <Link href="/activity-logger" className="saint-button-primary mt-8">
              My Activity
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="border-b border-black/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="saint-eyebrow">05 — Across generations</p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#111111] md:text-6xl">
                The community doesn&apos;t end at graduation.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/60">
                SAIT creates space for alumni interaction, shared experience, and
                continuing conversations between students, teachers, and former
                members of the community.
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>

      <Footer />
    </main>
  );
}