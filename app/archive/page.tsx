import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ArchiveClosing from "@/components/archive/ArchiveClosing";
import ArchiveHero from "@/components/archive/ArchiveHero";
import ArchiveTimeline from "@/components/archive/ArchiveTimeline";
import CommunityStrip from "@/components/archive/CommunityStrip";
import MagazineFeature from "@/components/archive/MagazineFeature";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { archiveItems } from "@/data/archive";

const featuredArchive = archiveItems[0];

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-[#F7F3EB] text-[#1F2A44]">
      <Navbar />

      <ArchiveHero />

      <section className="px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2rem] border border-[#1F2A44]/10 bg-[#E8DCC8]/40 p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F2A44]/55">
                  SAIT memory
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#1F2A44] md:text-5xl">
                  {featuredArchive.title}
                </h2>
              </div>

              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F2A44]/60">
                <span>{featuredArchive.year}</span>
                <span className="text-[#C6A75E]">•</span>
                <span>{featuredArchive.category}</span>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#1F2A44]/70">
              {featuredArchive.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Student writing",
                "Creative culture",
                "Department history",
                "Community memory",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-[#1F2A44]/10 bg-white/60 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F2A44]"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ArchiveTimeline />
      <MagazineFeature />
      <CommunityStrip />
      <ArchiveClosing />

      <section className="px-6 py-6 md:px-10 md:py-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full bg-[#1F2A44] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44]"
            >
              Back to home
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
