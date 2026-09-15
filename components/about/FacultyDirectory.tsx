"use client";

import { motion } from "framer-motion";

const directory = [
  {
    title: "Head of Department",
    name: "Dr. Ananya Menon",
    details: "Faculty profile",
  },
  {
    title: "Faculty Coordinator",
    name: "Dr. Rahul Nair",
    details: "Faculty profile",
  },
  {
    title: "Faculty Member",
    name: "Dr. Meera Thomas",
    details: "Faculty profile",
  },
  {
    title: "Student Support",
    name: "Prof. Nikhil Varghese",
    details: "Faculty profile",
  },
];

export default function FacultyDirectory() {
  return (
    <section className="border-b border-[#1F2A44]/10 bg-[#1F2A44] px-6 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">
            Faculty and administration
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            The people who support the community.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Faculty profiles supporting the SAIT community.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {directory.map((person, index) => (
            <motion.article
              key={person.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-[2rem] border border-white/15 bg-white/5 p-6"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl font-semibold text-white/90">
                {person.title.charAt(0)}
              </div>

              <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                {person.title}
              </p>
              <h3 className="mt-4 text-2xl font-medium tracking-tight text-white">
                {person.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {person.details}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
