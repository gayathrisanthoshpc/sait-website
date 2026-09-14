"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-black/10 bg-[#f5f4ef] px-6 py-12 md:px-10 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">
            Division of Information Technology
            <span className="mx-2 text-black/20">/</span>
            School of Engineering
            <span className="mx-2 text-black/20">/</span>
            CUSAT
          </p>

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-black/40">
            <span className="h-2 w-2 rounded-full bg-[#e4572e]" />
            Student Community
          </div>
        </motion.div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease: "easeOut" }}
          >
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.24em] text-black/45">
              SAIT
            </p>
            <p className="mb-6 max-w-xl text-base leading-relaxed text-black/65 md:text-lg">
              Students Association of Information Technology
            </p>

            <h1 className="text-[clamp(4rem,10vw,10rem)] font-bold leading-[0.78] tracking-[-0.075em] text-[#111111]">
              LEARN.
              <br />
              BUILD.
              <br />
              <span className="text-black/30">CONNECT</span>
              <span className="text-[#e4572e]">.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="hidden pb-3 lg:block"
          >
            <div className="mb-5 h-px w-full bg-black/15" />

            <p className="text-sm leading-relaxed text-black/60">
              A long-running student community where ideas become projects,
              experiences become stories, and learning continues beyond the
              classroom.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e4572e]"
          >
            Explore SAIT
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/events"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-black/15 bg-white/30 px-6 py-3 text-sm font-medium text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:border-black/25 hover:bg-white"
          >
            Upcoming Events
          </Link>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -right-24 top-[30%] hidden h-72 w-72 rounded-full bg-[#e4572e] md:block" />
      <div className="pointer-events-none absolute -right-8 top-[34%] hidden h-40 w-40 rounded-full border border-black/10 md:block" />

      <div className="relative z-10 mx-auto mt-16 max-w-[1440px] border-t border-black/10 pt-7 md:grid md:grid-cols-3">
        <div className="flex items-center gap-4 py-4 md:py-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/20">
            <span className="text-sm font-semibold text-[#111111]">01</span>
          </div>
          <div>
            <p className="text-2xl font-semibold tracking-tight">Student-led</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-black/40">
              Community
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 py-4 md:py-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/20">
            <span className="text-sm font-semibold text-[#111111]">02</span>
          </div>
          <div>
            <p className="text-2xl font-semibold tracking-tight">Active</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-black/40">
              Experiences
            </p>
          </div>
        </div>

        <Link
          href="#about"
          className="group mt-2 flex items-center justify-between gap-4 py-4 text-left md:mt-0 md:justify-end md:py-0"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#111111]">
            Discover SAIT
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black transition-all duration-300 group-hover:bg-black group-hover:text-white">
            <ArrowDown size={16} />
          </span>
        </Link>
      </div>
    </section>
  );
}
