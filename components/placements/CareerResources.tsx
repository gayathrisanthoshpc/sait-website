"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { careerResources } from "@/data/placements";

export default function CareerResources() {
  return (
    <section className="border-b border-black/10 bg-[#f5f4ef] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
            Career resources
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Tools for a stronger next step.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {careerResources.map((resource, index) => (
            <motion.article
              key={resource.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-[2rem] border border-black/10 bg-white/30 p-6"
            >
              <h3 className="text-2xl font-medium tracking-tight text-[#111111]">
                {resource.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-black/65">
                {resource.description}
              </p>

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111] transition-opacity hover:opacity-60"
              >
                {resource.cta}
                <ArrowRight size={14} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
