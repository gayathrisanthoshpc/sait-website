"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Filter, Search, UsersRound } from "lucide-react";

import AlumniCard from "@/components/alumni/AlumniCard";
import AlumniSpotlight from "@/components/alumni/AlumniSpotlight";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { alumni, alumniBatches, alumniIndustries } from "@/data/alumni";

const contributions = [
  {
    title: "Career talk",
    description: "An alumni-led talk unpacking pathways from classroom projects to job interviews.",
  },
  {
    title: "Mentorship",
    description: "One-to-one guidance for students refining goals, portfolios and decision-making.",
  },
  {
    title: "Workshop",
    description: "Hands-on sessions on tools, workflows and industry expectations.",
  },
  {
    title: "Project guidance",
    description: "Alumni review student ideas and help turn concepts into practically relevant deliverables.",
  },
  {
    title: "Industry session",
    description: "A short session on career readiness, design thinking and team collaboration.",
  },
];

const generations = [
  {
    step: "Students",
    text: "Students bring curiosity, questions and fresh ideas to the SAIT community.",
  },
  {
    step: "Seniors",
    text: "Seniors translate experience into mentorship, project guidance and practical advice.",
  },
  {
    step: "Alumni",
    text: "Alumni share field insight, industry context and long-term connection back to the community.",
  },
];

export default function AlumniPage() {
  const [search, setSearch] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("All batches");
  const [selectedIndustry, setSelectedIndustry] = useState("All industries");

  const filteredAlumni = useMemo(() => {
    return alumni.filter((person) => {
      const matchesBatch = selectedBatch === "All batches" || person.batch === selectedBatch;
      const matchesIndustry =
        selectedIndustry === "All industries" || person.industry === selectedIndustry;

      const query = search.toLowerCase();
      const matchesSearch =
        !query ||
        person.name.toLowerCase().includes(query) ||
        person.role.toLowerCase().includes(query) ||
        person.industry.toLowerCase().includes(query);

      return matchesBatch && matchesIndustry && matchesSearch;
    });
  }, [search, selectedBatch, selectedIndustry]);

  const featuredAlumni = alumni.find((person) => person.isFeatured) ?? alumni[0];

  const clearFilters = () => {
    setSearch("");
    setSelectedBatch("All batches");
    setSelectedIndustry("All industries");
  };

  return (
    <main className="min-h-screen bg-[#F7F3EB] text-[#1F2A44]">
      <Navbar />

      <PageWrapper className="border-b border-[#1F2A44]/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F2A44]/45">
                06 — Alumni
              </p>

              <h1 className="mt-4 max-w-4xl text-[clamp(3rem,6vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[#1F2A44]">
                The community doesn&apos;t end at graduation.
              </h1>
            </div>

            <div className="md:justify-self-end">
              <p className="max-w-md text-lg leading-relaxed text-[#1F2A44]/65">
                SAIT brings students and alumni across generations together through
                shared experience, guidance, opportunities, and a continuing
                relationship with the student community.
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>

      <AlumniSpotlight alumni={featuredAlumni} />

      <section className="border-b border-[#1F2A44]/10 bg-[#F7F3EB] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Alumni directory"
            title="A living network of builders, mentors and former members."
          />

          <div className="mt-8 grid gap-4 rounded-[2rem] border border-[#1F2A44]/10 bg-white/30 p-4 md:grid-cols-[1.3fr_0.8fr_0.8fr]">
            <label className="flex items-center gap-3 rounded-full border border-[#1F2A44]/10 bg-white/50 px-4 py-3 text-sm text-[#1F2A44]/70 focus-within:border-[#1F2A44] focus-within:ring-2 focus-within:ring-black/10">
              <Search size={16} className="text-[#1F2A44]/45" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search alumni by name, role or industry"
                aria-label="Search alumni by name, role or industry"
                className="w-full bg-transparent text-sm text-[#1F2A44] placeholder:text-[#1F2A44]/35 focus:outline-none"
              />
            </label>

            <label className="flex items-center gap-3 rounded-full border border-[#1F2A44]/10 bg-white/50 px-4 py-3 text-sm text-[#1F2A44]/70 focus-within:border-[#1F2A44] focus-within:ring-2 focus-within:ring-black/10">
              <Filter size={16} className="text-[#1F2A44]/45" />
              <select
                aria-label="Filter by batch"
                value={selectedBatch}
                onChange={(event) => setSelectedBatch(event.target.value)}
                className="w-full bg-transparent text-sm text-[#1F2A44] focus:outline-none"
              >
                {alumniBatches.map((batch) => (
                  <option key={batch} value={batch}>
                    {batch}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-3 rounded-full border border-[#1F2A44]/10 bg-white/50 px-4 py-3 text-sm text-[#1F2A44]/70 focus-within:border-[#1F2A44] focus-within:ring-2 focus-within:ring-black/10">
              <UsersRound size={16} className="text-[#1F2A44]/45" />
              <select
                aria-label="Filter by industry"
                value={selectedIndustry}
                onChange={(event) => setSelectedIndustry(event.target.value)}
                className="w-full bg-transparent text-sm text-[#1F2A44] focus:outline-none"
              >
                {alumniIndustries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filteredAlumni.length === 0 ? (
            <div className="mt-10 rounded-[2rem] border border-dashed border-[#1F2A44]/15 bg-white/30 p-10 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#1F2A44]/45">
                No matching alumni
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#1F2A44]">
                No results for the current search and filters.
              </h3>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1F2A44] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44]"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredAlumni.map((person) => (
                <AlumniCard key={person.id} alumni={person} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-[#1F2A44]/10 bg-[#F7F3EB] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Across generations"
            title="Students → seniors → alumni. A continuing cycle of learning."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {generations.map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] border border-[#1F2A44]/10 bg-white/30 p-6"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#1F2A44]/45">
                  {item.step}
                </p>
                <h3 className="mt-4 text-3xl font-medium tracking-tight text-[#1F2A44]">
                  {item.step}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#1F2A44]/65">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-[#1F2A44]/10 bg-[#1F2A44] p-6 text-white md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/55">
              How experience flows back
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {[
                "Mentorship",
                "Career guidance",
                "Talks",
                "Project collaboration",
                "Industry insights",
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-sm text-white/75"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#1F2A44]/10 bg-[#F7F3EB] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Alumni contributions"
            title="Illustrative ways alumni still shape the community."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {contributions.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[#1F2A44]/10 bg-white/30 p-5"
              >
                <h3 className="mt-4 text-2xl font-medium tracking-tight text-[#1F2A44]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#1F2A44]/65">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2rem] border border-[#1F2A44]/10 bg-white/30 p-8 md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F2A44]/45">
              Stay connected
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Stay connected to where it started.
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/achievements"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1F2A44] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E]"
              >
                Explore Achievements
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/activity-logger"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#1F2A44]/15 bg-transparent px-6 py-3 text-sm font-medium text-[#1F2A44] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F2A44]/25 hover:bg-white"
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
