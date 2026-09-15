import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import PlacementStats from "@/components/placements/PlacementStats";
import RecruiterShowcase from "@/components/placements/RecruiterShowcase";
import CareerResources from "@/components/placements/CareerResources";
import { alumniProfiles } from "@/data/placements";

const journey = [
  {
    title: "Learn",
    text: "Build a strong technical and academic foundation through classes, projects, and community learning.",
  },
  {
    title: "Build",
    text: "Create projects, participate in activities, and turn academic learning into practical experience.",
  },
  {
    title: "Prepare",
    text: "Practice interviewing, build portfolios, and understand how to present your strengths clearly.",
  },
  {
    title: "Apply",
    text: "Explore opportunities, connect with seniors, and identify internships and career pathways.",
  },
  {
    title: "Launch",
    text: "Take the next step with greater confidence, informed by experience and community support.",
  },
];

export default function PlacementsPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EB] text-[#1F2A44]">
      <Navbar />

      <PageWrapper className="border-b border-[#1F2A44]/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F2A44]/45">
                05 — Placements & Careers
              </p>
              <h1 className="mt-4 text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                From classroom to career.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1F2A44]/65">
                SAIT helps students discover career paths, prepare for opportunities,
                learn from seniors and alumni, and build readiness for the next stage of their journey.
              </p>
            </div>

            <div className="flex justify-start md:justify-end">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#1F2A44]/10 bg-white/30 px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#1F2A44]/60">
                <span className="h-2.5 w-2.5 rounded-full bg-[#C6A75E]" />
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>

      <PlacementStats />

      <section className="border-b border-[#1F2A44]/10 bg-[#F7F3EB] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Career journey"
            title="A path shaped by experience, preparation, and opportunity."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {journey.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-[#1F2A44]/10 bg-white/30 p-5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C6A75E] text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-[#1F2A44]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#1F2A44]/65">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RecruiterShowcase />
      <CareerResources />

      <section className="border-b border-[#1F2A44]/10 bg-[#1F2A44] px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">
              Alumni & senior connection
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Guidance from those who have already walked the path.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {alumniProfiles.map((profile) => (
              <article key={profile.name} className="rounded-[2rem] border border-white/15 bg-white/5 p-6">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg font-semibold text-white/90">
                  <BriefcaseBusiness size={20} />
                </div>

                <h3 className="mt-3 text-2xl font-medium tracking-tight text-white">{profile.name}</h3>
                <p className="mt-2 text-sm text-white/65">{profile.role}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/45">{profile.field}</p>
                <p className="mt-5 text-sm leading-relaxed text-white/70">{profile.message}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2rem] border border-[#1F2A44]/10 bg-white/30 p-8 md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F2A44]/45">
              Keep moving forward
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Your career starts long before your first offer.
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/alumni"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1F2A44] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E]"
              >
                Explore Alumni
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
