"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Student-led learning",
    text: "SAIT grows through a student-first approach to learning, participation, and peer exchange.",
  },
  {
    title: "Workshops and seminars",
    text: "The community creates space for learning beyond the classroom through technical sessions and discussions.",
  },
  {
    title: "Course-related engagement",
    text: "Learning is connected to academic life through classes, resources, and shared understanding.",
  },
  {
    title: "Projects and collaboration",
    text: "Students build together through practical work, ideas, and ongoing teamwork.",
  },
  {
    title: "Student publications",
    text: "The department magazine and student contributions help preserve writing, creativity, and technical work.",
  },
  {
    title: "Connected community",
    text: "Interaction between students, teachers, staff, and alumni strengthens the department community.",
  },
];

export default function VisionMission() {
  return (
    <section className="border-b border-black/10 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
            What SAIT is about
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            A student community built around learning, sharing, and doing.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-[2rem] border border-black/10 bg-white/30 p-6"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#C6A75E] text-sm font-semibold text-white">
                0{index + 1}
              </div>

              <h3 className="text-2xl font-medium tracking-tight text-[#111111]">
                {pillar.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-black/65">
                {pillar.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
