"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { recruiters } from "@/data/placements";

const sectors = ["All", ...new Set(recruiters.map((recruiter) => recruiter.sector))];

export default function RecruiterShowcase() {
  const [selectedSector, setSelectedSector] = useState<string>("All");

  const filteredRecruiters = useMemo(() => {
    return selectedSector === "All"
      ? recruiters
      : recruiters.filter((recruiter) => recruiter.sector === selectedSector);
  }, [selectedSector]);

  return (
    <section className="border-b border-[#1F2A44]/10 bg-[#1F2A44] px-6 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">
              Recruiter showcase
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Opportunities across sectors.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <button
                key={sector}
                type="button"
                aria-pressed={selectedSector === sector}
                onClick={() => setSelectedSector(sector)}
                className={`rounded-full border px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-200 ${
                  selectedSector === sector
                    ? "border-white bg-white text-[#1F2A44]"
                    : "border-white/15 bg-white/5 text-white hover:border-white/25"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredRecruiters.map((company, index) => (
            <motion.article
              key={`${company.name}-${company.sector}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-[2rem] border border-white/15 bg-white/5 p-6"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg font-semibold text-white/90">
                {company.name.slice(0, 2).toUpperCase()}
              </div>

              <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">{company.sector}</p>
              <h3 className="mt-3 text-2xl font-medium tracking-tight text-white">{company.name}</h3>

              <div className="mt-5 space-y-2 text-sm text-white/70">
                {company.roles.map((role) => (
                  <p key={role}>• {role}</p>
                ))}
              </div>

              <div className="mt-6 inline-flex rounded-full border border-[#C6A75E]/40 bg-[#C6A75E]/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#F7F3EB]">
                {company.status}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
