import Link from "next/link";
import { ArrowRight, BookOpenText, BriefcaseBusiness, FileText, UsersRound } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import VisionMission from "@/components/about/VisionMission";
import HistoryTimeline from "@/components/about/HistoryTimeline";
import FacultyDirectory from "@/components/about/FacultyDirectory";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionReveal from "@/components/shared/SectionReveal";

const resources = [
  {
    title: "Department information",
    description: "Official department information and updates for students and visitors.",
    href: "#",
    icon: FileText,
  },
  {
    title: "Academic resources",
    description: "Course-related materials, information, and learning support.",
    href: "#",
    icon: BookOpenText,
  },
  {
    title: "Course information",
    description: "Academic details and pathways relevant to the Information Technology department.",
    href: "#",
    icon: BriefcaseBusiness,
  },
  {
    title: "Student resources",
    description: "Guidance, community information, and support for student participation.",
    href: "#",
    icon: UsersRound,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EB] text-[#1F2A44]">
      <Navbar />

      <PageWrapper className="border-b border-[#1F2A44]/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F2A44]/45">
                About SAIT
              </p>

              <h1 className="mt-4 max-w-4xl text-[clamp(3rem,6vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[#1F2A44]">
                More than a department.
                <br />
                <span className="text-[#1F2A44]/35">A community with a history.</span>
              </h1>
            </div>

            <div className="md:justify-self-end">
              <p className="max-w-md text-lg leading-relaxed text-[#1F2A44]/65">
                The Students Association of Information Technology is a student-led
                community under the Division of Information Technology, School of
                Engineering, CUSAT, bringing together learning, participation,
                information sharing, and connection.
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>

      <VisionMission />
      <HistoryTimeline />
      <FacultyDirectory />

      <SectionReveal className="border-b border-[#1F2A44]/10 bg-[#F7F3EB] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Academic resources"
            title="Support for students and the wider community."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {resources.map(({ title, description, href, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="group rounded-[2rem] border border-[#1F2A44]/10 bg-white/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F2A44]/20"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#C6A75E] text-white">
                  <Icon size={18} />
                </div>

                <h3 className="text-2xl font-medium tracking-tight text-[#1F2A44]">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#1F2A44]/65">
                  {description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1F2A44]/60">
                  View resource
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2rem] border border-[#1F2A44]/10 bg-white/30 p-8 md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F2A44]/45">
              Continue exploring
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Explore the people, projects and experiences that make SAIT.
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/people"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1F2A44] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E]"
              >
                Meet the People
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#1F2A44]/15 bg-transparent px-6 py-3 text-sm font-medium text-[#1F2A44] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F2A44]/25 hover:bg-white"
              >
                Explore Events
              </Link>
            </div>
          </div>
        </div>
      </SectionReveal>

      <Footer />
    </main>
  );
}
