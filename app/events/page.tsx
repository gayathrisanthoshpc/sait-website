import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import PastEventsArchive from "@/components/events/PastEventsArchive";
import { events } from "@/data/events";

const featuredEvents = events.filter((event) => event.featured);
const pastEvents = events.filter((event) => event.isPast);

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#111111]">
      <Navbar />

      <PageWrapper className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
                04 — Events & Activities
              </p>
              <h1 className="mt-4 text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[#111111]">
                Something is always happening.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/65">
                Workshops, seminars, projects, competitions and community moments —
                explore what&apos;s happening across SAIT.
              </p>
            </div>

            <div className="flex justify-start md:justify-end">
              <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/30 px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-black/60">
                <span className="h-2.5 w-2.5 rounded-full bg-[#e4572e]" />
                Upcoming activity
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>

      <UpcomingEvents events={events.filter((event) => !event.isPast)} />

      <section className="border-b border-black/10 bg-[#111111] px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">
              Flagship moments
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              SAIT moments worth showing up for.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {featuredEvents.map((event) => (
              <article
                key={event.id}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e4572e] text-white">
                  <Sparkles size={18} />
                </div>

                <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                  {event.category}
                </p>
                <h3 className="mt-3 text-3xl font-medium tracking-tight text-white">
                  {event.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/70">
                  {event.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.time}</span>
                  <span>•</span>
                  <span>{event.venue}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PastEventsArchive events={pastEvents} />

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2rem] border border-black/10 bg-white/30 p-8 md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
              Stay close to the community
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Find your place in SAIT.
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/activity-logger"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e4572e]"
              >
                Track my activities
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-black/15 bg-transparent px-6 py-3 text-sm font-medium text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:border-black/25 hover:bg-white"
              >
                Learn about SAIT
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
