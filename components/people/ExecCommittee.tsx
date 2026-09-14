"use client";

import { motion } from "framer-motion";

import { execCommittee } from "@/data/execCommittee";
import MemberCard from "@/components/people/MemberCard";

export default function ExecCommittee() {
  return (
    <section className="border-b border-black/10 bg-[#f5f4ef] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
            Executive committee
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            The people guiding SAIT.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {execCommittee.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <MemberCard
                name={member.name}
                role={member.role}
                year={member.year}
                photo={member.photo}
                socialUrl={member.socialUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
