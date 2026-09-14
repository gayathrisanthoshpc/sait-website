import { motion } from "framer-motion";
import { ArrowRight, Quote, Sparkles } from "lucide-react";

import type { AlumniRecord } from "@/data/alumni";

type AlumniSpotlightProps = {
  alumni: AlumniRecord;
};

export default function AlumniSpotlight({ alumni }: AlumniSpotlightProps) {
  return (
    <section className="border-b border-black/10 bg-[#111111] px-6 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-center justify-between gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/55">
            Featured alumni
          </p>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
            DEMO DATA
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid gap-8 rounded-[2.25rem] border border-white/10 bg-white/5 p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/55">
              <Sparkles size={14} className="text-[#C6A75E]" />
              {alumni.batch} graduate
            </div>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
              {alumni.name}
            </h2>

            <div className="mt-6 space-y-2 text-sm uppercase tracking-[0.12em] text-white/65">
              <p>{alumni.role}</p>
              <p>{alumni.company}</p>
              <p>{alumni.industry}</p>
            </div>

            <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-[#f5f4ef] p-5 text-[#111111]">
              <div className="flex items-center gap-3 text-[#C6A75E]">
                <Quote size={18} />
                <span className="text-[10px] font-medium uppercase tracking-[0.18em]">
                  Demo story
                </span>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-black/75">“{alumni.story}”</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-[1.8rem] border border-white/10 bg-[#f5f4ef] p-5 text-[#111111]">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
                Achievement highlight
              </p>
              <p className="mt-4 text-3xl font-semibold tracking-tight">{alumni.highlight}</p>
            </div>

            <div className="rounded-[1.5rem] border border-black/10 bg-white/60 p-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
                Demo signal
              </p>
              <p className="mt-2 text-base leading-relaxed text-black/70">{alumni.achievement}</p>
            </div>

            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#111111]">
              Learn from the community
              <ArrowRight size={16} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
