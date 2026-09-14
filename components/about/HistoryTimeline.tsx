"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    title: "Learning beyond the classroom",
    text: "Workshops, seminars, and introductory classes on current IT trends and career outlook help students connect ideas with the wider world.",
  },
  {
    title: "Building together",
    text: "Projects and activities bring students and teachers together in practical learning, experimentation, and collaboration.",
  },
  {
    title: "Stories worth keeping",
    text: "The annual department magazine captures student writing, poems, drawings, and technical contributions as part of the department's culture.",
  },
  {
    title: "Across generations",
    text: "Annual alumni interaction helps current students hear from seniors, share experiences, and understand the journey beyond graduation.",
  },
  {
    title: "An informed community",
    text: "The department information board and student feedback/suggestions forum keep communication open and support a more engaged association.",
  },
];

export default function HistoryTimeline() {
  return (
    <section className="border-b border-black/10 bg-[#f5f4ef] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
            History
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            A timeline shaped by learning, exchange, and community.
          </h2>
        </div>

        <div className="space-y-5">
          {milestones.map((milestone, index) => (
            <motion.article
              key={milestone.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="grid gap-6 rounded-[2rem] border border-black/10 bg-white/30 p-6 md:grid-cols-[120px_1fr] md:items-start md:p-8"
            >
              <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-black/45 md:block">
                <span className="inline-block h-2 w-2 rounded-full bg-[#C6A75E]" />
                <span>Milestone</span>
              </div>

              <div>
                <h3 className="text-2xl font-medium tracking-tight text-[#111111] md:text-3xl">
                  {milestone.title}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/65">
                  {milestone.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
