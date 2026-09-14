"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import PastEventsArchive from "@/components/events/PastEventsArchive";
import SectionReveal from "@/components/shared/SectionReveal";
import { events } from "@/data/events";

const pastEvents = events.filter((event) => event.isPast);

export default function EventsPage() {
  const [activeView, setActiveView] = useState<"upcoming" | "past">("upcoming");

  return (
    <main className="min-h-screen bg-[#F7F3EB] text-[#1F2A44]">
      <Navbar />

      <PageWrapper className="border-b border-[#1F2A44]/10 bg-[#F7F3EB]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-8 md:grid-cols-[1.5fr_0.5fr] md:items-end"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1F2A44]/55">
                EVENTS & ACTIVITIES
              </p>
              <h1 className="mt-4 text-[clamp(3rem,6vw,6.2rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#1F2A44]">
                Something is always happening.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#1F2A44]/70">
                Workshops, seminars, competitions and community moments — explore what is happening across SAIT.
              </p>
            </div>

            <div className="flex justify-start md:justify-end">
              <div className="inline-flex items-center gap-3 border-l border-[#C6A75E] pl-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F2A44]/65">
                <span className="h-2.5 w-2.5 rounded-full bg-[#C6A75E]" aria-hidden="true" />
                Upcoming activity
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="mt-10 flex gap-6 border-b border-[#1F2A44]/10"
          >
            {[
              { key: "upcoming", label: "Upcoming" },
              { key: "past", label: "Past" },
            ].map((tab) => {
              const isActive = activeView === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveView(tab.key as "upcoming" | "past")}
                  className={[
                    "relative pb-3 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200",
                    isActive ? "text-[#1F2A44]" : "text-[#667085] hover:text-[#1F2A44]",
                  ].join(" ")}
                >
                  {tab.label}
                  {isActive ? <span className="absolute inset-x-0 -bottom-px h-[2px] bg-[#C6A75E]" /> : null}
                </button>
              );
            })}
          </motion.div>
        </div>
      </PageWrapper>

      <AnimatePresence mode="wait">
        {activeView === "upcoming" ? (
          <motion.div
            key="upcoming-tab"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <UpcomingEvents events={events.filter((event) => !event.isPast)} />
          </motion.div>
        ) : (
          <motion.div
            key="past-tab"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <PastEventsArchive events={pastEvents} />
          </motion.div>
        )}
      </AnimatePresence>

      <SectionReveal className="px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2rem] border border-[#1F2A44]/10 bg-white/60 p-8 md:p-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F2A44]/55">
              Stay close to the community
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-[#1F2A44] md:text-6xl">
              Find your place in SAIT.
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/activity-logger"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1F2A44] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E]"
              >
                Track my activities
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#1F2A44]/15 bg-transparent px-6 py-3 text-sm font-medium text-[#1F2A44] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F2A44]/25 hover:bg-white"
              >
                Learn about SAIT
              </Link>
            </div>
          </div>
        </div>
      </SectionReveal>

      <Footer />
    </main>
  );
}
