"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Filter, Search, Trophy } from "lucide-react";

import AchievementCard from "@/components/achievements/AchievementCard";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  achievements,
  achievementCategories,
  achievementYears,
  type AchievementCategory,
} from "@/data/achievements";

const timeline = [
  { year: "2021", label: "Peer learning and community recognition" },
  { year: "2022", label: "Prototype and project momentum" },
  { year: "2023", label: "Publication and academic contribution" },
  { year: "2024", label: "Technical competition growth" },
  { year: "2025", label: "Research recognition" },
  { year: "2026", label: "Civic tech and community impact" },
];

const moreThanWinning = [
  "Competitions",
  "Publications",
  "Projects",
  "Academic excellence",
  "Community contributions",
  "Peer learning",
];

export default function AchievementsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All categories" | AchievementCategory>(
    "All categories",
  );
  const [selectedYear, setSelectedYear] = useState("All years");

  const filteredAchievements = useMemo(() => {
    return achievements.filter((achievement) => {
      const matchesCategory =
        selectedCategory === "All categories" || achievement.category === selectedCategory;
      const matchesYear = selectedYear === "All years" || achievement.year === selectedYear;
      const query = search.toLowerCase();
      const matchesSearch =
        !query ||
        achievement.title.toLowerCase().includes(query) ||
        achievement.team.toLowerCase().includes(query) ||
        achievement.category.toLowerCase().includes(query) ||
        achievement.result.toLowerCase().includes(query);

      return matchesCategory && matchesYear && matchesSearch;
    });
  }, [search, selectedCategory, selectedYear]);

  const featuredAchievement = achievements.find((achievement) => achievement.featured) ?? achievements[0];

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("All categories");
    setSelectedYear("All years");
  };

  return (
    <main className="min-h-screen bg-[#f5f4ef] text-[#111111]">
      <Navbar />

      <PageWrapper className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
                07 — Hall of Fame
              </p>

              <h1 className="mt-4 max-w-4xl text-[clamp(3rem,6vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[#111111]">
                Proof of what students can build.
              </h1>
            </div>

            <div className="md:justify-self-end">
              <p className="max-w-md text-lg leading-relaxed text-black/65">
                SAIT celebrates student achievement across technology, academics,
                competitions, research, projects and shared community contribution.
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
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/55">
                Featured achievement
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                {featuredAchievement.title}
              </h2>

              <div className="mt-6 flex flex-wrap gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/65">
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5">
                  {featuredAchievement.category}
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5">
                  {featuredAchievement.year}
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5">
                  {featuredAchievement.result}
                </span>
              </div>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
                {featuredAchievement.description}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#f5f4ef] p-6 text-[#111111]">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-[#f5f4ef]">
                  <Trophy size={18} />
                </div>
                <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-black/60">
                  DEMO
                </span>
              </div>

              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
                Team / student
              </p>
              <p className="mt-3 text-2xl font-medium tracking-tight text-[#111111]">
                {featuredAchievement.team}
              </p>

              <div className="mt-6 rounded-[1.5rem] border border-black/10 bg-white/60 p-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
                  Result
                </p>
                <p className="mt-2 text-xl font-medium text-[#111111]">
                  {featuredAchievement.badge}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f5f4ef] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Achievement wall"
            title="Student work that deserves to be seen."
          />

          <div className="mt-8 grid gap-4 rounded-[2rem] border border-black/10 bg-white/30 p-4 md:grid-cols-[1.5fr_0.75fr_0.75fr]">
            <label className="flex items-center gap-3 rounded-full border border-black/10 bg-white/50 px-4 py-3 text-sm text-black/70 focus-within:border-[#111111] focus-within:ring-2 focus-within:ring-black/10">
              <Search size={16} className="text-black/45" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search achievements, teams or results"
                aria-label="Search achievements"
                className="w-full bg-transparent text-sm text-[#111111] placeholder:text-black/35 focus:outline-none"
              />
            </label>

            <label className="flex items-center gap-3 rounded-full border border-black/10 bg-white/50 px-4 py-3 text-sm text-black/70 focus-within:border-[#111111] focus-within:ring-2 focus-within:ring-black/10">
              <Filter size={16} className="text-black/45" />
              <select
                aria-label="Filter by category"
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value as "All categories" | AchievementCategory)}
                className="w-full bg-transparent text-sm text-[#111111] focus:outline-none"
              >
                {achievementCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-3 rounded-full border border-black/10 bg-white/50 px-4 py-3 text-sm text-black/70 focus-within:border-[#111111] focus-within:ring-2 focus-within:ring-black/10">
              <Trophy size={16} className="text-black/45" />
              <select
                aria-label="Filter by year"
                value={selectedYear}
                onChange={(event) => setSelectedYear(event.target.value)}
                className="w-full bg-transparent text-sm text-[#111111] focus:outline-none"
              >
                {achievementYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filteredAchievements.length === 0 ? (
            <div className="mt-10 rounded-[2rem] border border-dashed border-black/15 bg-white/30 p-10 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                No matches found
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#111111]">
                Nothing matches the current filter combination.
              </h3>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e4572e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredAchievements.map((achievement) => (
                <AchievementCard key={achievement.id} item={achievement} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f5f4ef] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Visual timeline"
            title="How achievement builds across years."
          />

          <div className="mt-10 space-y-4">
            {timeline.map((entry, index) => (
              <div key={entry.year} className="grid gap-4 md:grid-cols-[140px_1fr] md:items-center">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  {entry.year}
                </div>

                <div className="relative flex items-center gap-4 rounded-[1.5rem] border border-black/10 bg-white/30 p-5">
                  <div className="h-3 w-3 rounded-full bg-[#e4572e]" />
                  <span className="text-lg text-black/75">{entry.label}</span>
                  {index < timeline.length - 1 && (
                    <div className="absolute left-6 top-full h-5 w-px bg-black/15" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f5f4ef] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="More than winning"
            title="Recognition is broader than prizes."
          />

          <div className="mt-10 rounded-[2rem] border border-black/10 bg-[#111111] p-8 text-white md:p-10">
            <p className="max-w-3xl text-lg leading-relaxed text-white/80">
              SAIT achievement includes competitions, publications, research, projects,
              academic excellence, community contributions and peer learning. The Hall of
              Fame celebrates momentum, effort and contribution as much as outcomes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {moreThanWinning.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2rem] border border-black/10 bg-white/30 p-8 md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
              Your turn
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Your name could be next.
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/activity-logger"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e4572e]"
              >
                Track My SAIT Journey
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-black/15 bg-transparent px-6 py-3 text-sm font-medium text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:border-black/25 hover:bg-white"
              >
                Explore Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
