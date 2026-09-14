"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";

import AnnouncementCard from "@/components/announcements/AnnouncementCard";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  announcementCategories,
  announcements,
  type AnnouncementCategory,
} from "@/data/announcements";

export default function AnnouncementsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | AnnouncementCategory>("All");
  const [items, setItems] = useState(announcements);

  const featuredAnnouncement = items.find((item) => item.featured) ?? items[0];

  const filteredAnnouncements = useMemo(() => {
    const query = search.toLowerCase();

    return items.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [items, search, selectedCategory]);

  const handleToggleRead = (id: string) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, read: !item.read } : item,
      ),
    );
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("All");
  };

  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#111111]">
      <Navbar />

      <PageWrapper className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
                09 — Announcements
              </p>

              <h1 className="mt-4 max-w-4xl text-[clamp(3rem,6vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[#111111]">
                Stay in the loop.
              </h1>
            </div>

            <div className="md:justify-self-end">
              <p className="max-w-md text-lg leading-relaxed text-black/65">
                Keep students informed about events, registrations, deadlines,
                opportunities and the latest department and community updates.
              </p>
              <span className="mt-5 inline-flex rounded-full border border-black/10 bg-white/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-black/60">
                DEMO DATA
              </span>
            </div>
          </div>
        </div>
      </PageWrapper>

      <section className="border-b border-black/10 bg-[#111111] px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/55">
                Featured announcement
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                {featuredAnnouncement.title}
              </h2>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-white/60">
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5">
                  {featuredAnnouncement.category}
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5">
                  {featuredAnnouncement.date}
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5">
                  {featuredAnnouncement.priority}
                </span>
              </div>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
                {featuredAnnouncement.description}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#f5f4ef] p-6 text-[#111111]">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
                Status
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-2 text-sm font-medium text-[#111111]">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#C6A75E]" aria-hidden="true" />
                {featuredAnnouncement.priority} priority
              </div>

              {featuredAnnouncement.deadline ? (
                <div className="mt-6 rounded-[1.5rem] border border-black/10 bg-white/60 p-4">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
                    Demo deadline
                  </p>
                  <p className="mt-2 text-xl font-medium text-[#111111]">
                    {featuredAnnouncement.deadline}
                  </p>
                </div>
              ) : null}

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
              >
                Read more
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f5f4ef] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Announcements feed"
            title="The latest updates from the SAIT community."
          />

          <div className="mt-8 grid gap-4 rounded-[2rem] border border-black/10 bg-white/30 p-4 md:grid-cols-[1.5fr_1fr]">
            <label className="flex items-center gap-3 rounded-full border border-black/10 bg-[#f5f4ef] px-4 py-3 text-sm text-black/70 focus-within:border-[#111111] focus-within:ring-2 focus-within:ring-black/10">
              <Search size={16} className="text-black/45" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search announcements"
                aria-label="Search announcements"
                className="w-full bg-transparent text-sm text-[#111111] placeholder:text-black/35 focus:outline-none"
              />
            </label>

            <label className="rounded-full border border-black/10 bg-[#f5f4ef] px-4 py-3 text-sm text-black/70 focus-within:border-[#111111] focus-within:ring-2 focus-within:ring-black/10">
              <span className="sr-only">Filter announcements</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value as "All" | AnnouncementCategory)}
                className="w-full bg-transparent text-sm text-[#111111] focus:outline-none"
                aria-label="Filter announcements by category"
              >
                {announcementCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filteredAnnouncements.length === 0 ? (
            <div className="mt-10 rounded-[2rem] border border-dashed border-black/15 bg-white/30 p-10 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                Nothing found
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#111111]">
                No announcements match the current filters.
              </h3>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredAnnouncements.map((item) => (
                <AnnouncementCard key={item.id} item={item} onToggleRead={handleToggleRead} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2rem] border border-black/10 bg-white/30 p-8 md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
              Keep informed
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Don&apos;t miss what&apos;s next.
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E]"
              >
                Explore Events
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/activity-logger"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-black/15 bg-transparent px-6 py-3 text-sm font-medium text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:border-black/25 hover:bg-white"
              >
                Track My SAIT Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
