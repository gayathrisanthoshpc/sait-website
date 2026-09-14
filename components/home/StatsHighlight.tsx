"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "Many", label: "Student Community" },
  { value: "Active", label: "Workshops & Seminars" },
  { value: "Growing", label: "Projects & Activities" },
  { value: "Strong", label: "Alumni Connections" },
];

export default function StatsHighlight() {
  return (
    <section className="border-b border-black/10 bg-[#f5f4ef] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-[2rem] border border-black/10 bg-white/30 p-6"
            >
              <p className="text-4xl font-semibold tracking-tight text-[#111111] md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-black/45">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
