"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

import DotField from "@/components/shared/DotField";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden border-b border-[#1F2A44]/10 bg-[#F7F3EB] px-6 py-12 md:px-10 md:py-16">
      <DotField />

      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(198,167,94,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(31,42,68,0.08),transparent_35%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right, rgba(31,42,68,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,42,68,0.04) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, ease: "easeOut" }}
          className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1F2A44]/55">
            Division of Information Technology
            <span className="mx-2 text-[#1F2A44]/20">/</span>
            School of Engineering
            <span className="mx-2 text-[#1F2A44]/20">/</span>
            CUSAT
          </p>

          <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#1F2A44]/10 bg-white/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#1F2A44]/65">
            <span className="h-2 w-2 rounded-full bg-[#C6A75E]" />
            Student Community
          </div>
        </motion.div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.22fr_0.78fr]">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, delay: shouldReduceMotion ? 0 : 0.06, ease: "easeOut" }}
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#1F2A44]/55">
              SAIT
            </p>
            <p className="mb-6 max-w-xl text-base leading-relaxed text-[#1F2A44]/65 md:text-lg">
              Students Association of Information Technology
            </p>

            <h1 className="text-[clamp(4rem,10vw,10rem)] font-bold leading-[0.78] tracking-[-0.075em] text-[#111827]">
              LEARN.
              <br />
              BUILD.
              <br />
              <span className="text-[#1F2A44]/35">CONNECT</span>
              <span className="text-[#C6A75E]">.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, delay: shouldReduceMotion ? 0 : 0.12, ease: "easeOut" }}
            className="relative rounded-[2rem] border border-[#1F2A44]/10 bg-[#E8DCC8]/70 p-5 backdrop-blur-sm md:p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1F2A44]/55">
                Community
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#C6A75E]" />
            </div>

            <div className="mb-5 h-px w-full bg-[#1F2A44]/12" />

            <p className="text-sm leading-relaxed text-[#1F2A44]/70">
              A long-running student community where ideas become projects,
              experiences become stories, and learning continues beyond the
              classroom.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                ["Many", "Student Community"],
                ["Active", "Workshops & Seminars"],
                ["Growing", "Projects & Activities"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-[#1F2A44]/10 bg-white/60 p-3">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#1F2A44]/45">{value}</p>
                  <p className="mt-1 text-sm font-medium text-[#1F2A44]">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, delay: shouldReduceMotion ? 0 : 0.18, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1F2A44] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E] hover:text-[#1F2A44]"
          >
            Explore SAIT
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/events"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-[#1F2A44]/15 bg-white/60 px-6 py-3 text-sm font-medium text-[#111827] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F2A44]/25 hover:bg-white"
          >
            Upcoming Events
          </Link>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-16 max-w-[1440px] border-t border-[#1F2A44]/10 pt-7 md:grid md:grid-cols-3">
        <div className="flex items-center gap-4 py-4 md:py-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1F2A44]/10 bg-white/60">
            <span className="text-sm font-semibold text-[#1F2A44]">01</span>
          </div>
          <div>
            <p className="text-2xl font-semibold tracking-tight text-[#1F2A44]">Student-led</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#1F2A44]/45">Community</p>
          </div>
        </div>

        <div className="flex items-center gap-4 py-4 md:py-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1F2A44]/10 bg-white/60">
            <span className="text-sm font-semibold text-[#1F2A44]">02</span>
          </div>
          <div>
            <p className="text-2xl font-semibold tracking-tight text-[#1F2A44]">Active</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#1F2A44]/45">Experiences</p>
          </div>
        </div>

        <Link
          href="#about"
          className="group mt-2 flex items-center justify-between gap-4 py-4 text-left md:mt-0 md:justify-end md:py-0"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1F2A44]">
            Discover SAIT
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1F2A44]/15 bg-white/60 transition-all duration-300 group-hover:bg-[#1F2A44] group-hover:text-white">
            <ArrowDown size={16} />
          </span>
        </Link>
      </div>
    </section>
  );
}
